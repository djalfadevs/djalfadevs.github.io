package com.djalfadevs.es.masterguilds;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Comparator;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
import java.io.BufferedReader;
import java.io.DataInput;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.lang.reflect.Type;
import com.google.gson.reflect.TypeToken;
import org.bson.Document;
import org.springframework.web.socket.TextMessage;
import static com.mongodb.client.model.Projections.*;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.module.SimpleModule;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.fasterxml.jackson.databind.ser.std.MapSerializer;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.util.JSON;

public class Game {
	public final static Game INSTANCE = new Game();

	ObjectMapper mapper = new ObjectMapper();

	private Map<String, Player> Allplayers = new ConcurrentHashMap<>();
	private ConcurrentHashMap<NamePassword, UserInfo> infoUsers = new ConcurrentHashMap<>();
	private List<NamePassword> infoUsersUsing = new ArrayList<>();
	private Lock lock = new ReentrantLock();

	


	MongoClientURI uri = new MongoClientURI(
    "mongodb+srv://djalfaMongoUser:webosdjalfa69@mastera-mcxiz.mongodb.net/Mastera?retryWrites=true&w=majority");

	MongoClient mongoClient = new MongoClient(uri);
	MongoDatabase database = mongoClient.getDatabase("Mastera");

	public void loadInfoUsers() {
		MongoCollection<Document> coll = database.getCollection("Users");
		if (coll.count() != 0) {// No esta vacia
			FindIterable<Document> auxIterable = coll.find().projection(exclude("_id"));
			for (Document d : auxIterable) {
				JsonNode auxnode = null;
				try {
					auxnode = mapper.readTree(d.toJson());
					System.out.println(mapper.writeValueAsString(auxnode.get("UserInfo").get("heros")));
					NamePassword auxNP = new NamePassword(auxnode.get("NamePassword").get("name").asText(),
							auxnode.get("NamePassword").get("password").asText());
					UserInfo auxUI = new UserInfo(auxnode.get("UserInfo").get("name").asText(),
							auxnode.get("UserInfo").get("gold").asInt(), auxnode.get("UserInfo").get("gems").asInt(),
							auxnode.get("UserInfo").get("exp").asInt(), auxnode.get("UserInfo").get("level").asInt(),
							mapper.convertValue(auxnode.get("UserInfo").get("heros"), ArrayList.class),
							auxnode.get("UserInfo").get("clan").asText(),
							auxnode.get("UserInfo").get("arenaPoints").asInt(), auxnode.get("UserInfo").get("lang").asText(),
							auxnode.get("UserInfo").get("mvol").asInt(),auxnode.get("UserInfo").get("evol").asInt(),
							auxnode.get("UserInfo").get("numberofmision").asInt(),
							auxnode.get("UserInfo").get("numeroexclusivodecarta").asInt());
					infoUsers.put(auxNP, auxUI);

				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}

			}

		}
	}

	public void addPlayer(Player player) {
		Allplayers.put(player.getSession().getId(), player);
	}

	public Collection<Player> getPlayers() {
		return Allplayers.values();
	}

	public void removePlayer(Player player) {
		lock.lock();
		infoUsersUsing.remove(player.getNamePassword());
		lock.unlock();
		Allplayers.remove(player.getSession().getId());

	}

	private Game() {

	}

	public void broadcast(String message) {
		for (Player player : getPlayers()) {
			try {
				player.getSession().sendMessage(new TextMessage(message.toString()));
			} catch (Throwable ex) {
				System.err.println("Execption sending message to player " + player.getSession().getId());
				ex.printStackTrace(System.err);
				this.removePlayer(player);
			}
		}
	}

	public UserInfo login(NamePassword namePassword) {
		lock.lock();// No pueden loguear mas de uno a la vez
		System.out.println("Pasamos el lock login");
		try {
			if (infoUsers.containsKey(namePassword)) { // Si el par usuario contraseña esta registrado
				if (!infoUsersUsing.contains(namePassword)) {// Si no esta en uso ese par usuario contraseña
					infoUsersUsing.add(namePassword);
					lock.unlock();
					return infoUsers.get(namePassword);
				}
			}
		} catch (Throwable ex) {
			ex.printStackTrace(System.err);
			lock.unlock();
		}
		lock.unlock();
		return null;

	}

	public boolean signup(NamePassword namePassword) {
		lock.lock();// No pueden registrar mas de uno a la vez
		System.out.println("Pasamos el lock");
		try {
			NamePassword[] namePasswordArray = infoUsers.keySet().toArray(new NamePassword[infoUsers.size()]);
			int i = 0;
			boolean encontrado = false;
			while (i < namePasswordArray.length && !encontrado) {
				if (namePasswordArray[i].getName().equals(namePassword.getName())) {
					encontrado = true;// Nombre ya en uso
				}
				i++;
			}

			if (!encontrado) {// Si no existe alguien registrado con ese nombre
				infoUsers.put(namePassword, new UserInfo(namePassword.name));// Creamos un nuevo usuario
				lock.unlock();
				return true;// Se ha registrado correctamente
			}
			System.out.println("El Signup ha fallado");
		} catch (Throwable ex) {
			ex.printStackTrace(System.err);
		}
		lock.unlock();
		return false; // Fallo al registrarse

	}

	public List<UserInfo> getRanking() {
		List<UserInfo> auxl = (List<UserInfo>) infoUsers.values();

		Comparator<UserInfo> ArenaPointsComparator = new Comparator<UserInfo>() {

			@Override
			public int compare(UserInfo o1, UserInfo o2) {
				if (o1.getArenaPoints() < o2.getArenaPoints()) {
					return -1;
				} else if (o1.getArenaPoints() > o2.getArenaPoints()) {
					return 1;
				} else {
					return 0;
				}
			}
		};
		auxl.sort(ArenaPointsComparator);

		List<UserInfo> l = new ArrayList<>();
		int i = 0;
		while (i < 10 || i < auxl.size()) {
			l.add(auxl.get(i));// solo guardamos los diez primeros como maximo
			i++;
		}

		return l;

	}
	public void updateConfigUser(NamePassword n,UserInfo u) {
		UserInfo auxUserinfo = infoUsers.get(n);
		auxUserinfo.setName(u.getName());
		auxUserinfo.setNumberofmision(u.getNumberofmision());
		auxUserinfo.setArenaPoints(u.getArenaPoints());
		auxUserinfo.setClan(u.getClan());
		auxUserinfo.setevol(u.getevol());
		auxUserinfo.setmvol(u.getmvol());
		auxUserinfo.setExp(u.getExp());
		auxUserinfo.setLevel(u.getLevel());
		auxUserinfo.setLang(u.getLang());
		auxUserinfo.setGems(u.getGems());
		auxUserinfo.setGold(u.getGold());
		auxUserinfo.setNumeroExclusivoDeCarta(u.getNumeroExclusivoDeCarta());
		infoUsers.put(n, auxUserinfo);
		
		//updateUserInfoMongo();
	}
	
	public void updateHeroInfo(NamePassword n, Hero h) {
		UserInfo auxUserinfo = infoUsers.get(n);
		boolean encontrado = false;
		int i = 0;
		while(!encontrado && i<auxUserinfo.getHeros().size()) {
			if(auxUserinfo.getHeros().equals(h)) {
				auxUserinfo.getHeros().set(i, h);
				encontrado=true;
			}
			i++;
		}
		infoUsers.put(n, auxUserinfo);
		//if(!encontrado) {
		//	auxUserinfo.getHeros().add(h);
		//}	
		//updateUserInfoMongo();
	}
	public void updateUserInfoMongo() {
		//infoUsers.put(n, u);

		// Actualizamos tambien la base de datos
		MongoCollection<Document> coll = database.getCollection("Users");
		// Delete all
		BasicDBObject document = new BasicDBObject();
		coll.deleteMany(document);

		/*
		 * String jsonResult = null; try { jsonResult =
		 * mapper.writerWithDefaultPrettyPrinter() .writeValueAsString(infoUsers); }
		 * catch (JsonProcessingException e) { // TODO Auto-generated catch block
		 * e.printStackTrace(); }
		 */
		ArrayNode NamePassUserInfoMap = mapper.createArrayNode();
		Iterator<NamePassword> iterator = infoUsers.keySet().iterator();
		while (iterator.hasNext()) {
			NamePassword next = iterator.next();
			System.out.println(next.toString());
			ObjectNode NamePassUserInfo = mapper.createObjectNode();
			ObjectNode namePass = mapper.createObjectNode();
			namePass.put("name", next.name);
			namePass.put("password", next.password);
			NamePassUserInfo.set("NamePassword", namePass);

			ObjectNode userInfo = mapper.createObjectNode();
			UserInfo auxUserInfo = infoUsers.get(next);
			userInfo.put("name", auxUserInfo.getName());
			userInfo.put("gold", auxUserInfo.getGold());
			userInfo.put("gems", auxUserInfo.getGems());
			userInfo.put("exp", auxUserInfo.getExp());
			userInfo.put("level", auxUserInfo.getLevel());
			userInfo.set("heros", mapper.valueToTree(auxUserInfo.getHeros()));
			userInfo.put("clan", auxUserInfo.getClan());
			userInfo.put("arenaPoints", auxUserInfo.getArenaPoints());
			userInfo.put("lang", auxUserInfo.getLang());
			userInfo.put("mvol", auxUserInfo.getmvol());
			userInfo.put("evol", auxUserInfo.getevol());
			userInfo.put("numberofmision", auxUserInfo.getNumberofmision());
			userInfo.put("numeroexclusivodecarta",auxUserInfo.getNumeroExclusivoDeCarta().get());
			NamePassUserInfo.set("UserInfo", userInfo);

			try {
				coll.insertOne(Document.parse(mapper.writeValueAsString(NamePassUserInfo)));
			} catch (JsonProcessingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}

	}
	public ArrayNode GetMisions() {
		InputStream i = getClass().getResourceAsStream("misions.json");
		
		try {
			BufferedReader br = new BufferedReader(new InputStreamReader(i, "UTF-8"));
			ObjectMapper o = new ObjectMapper();
			ArrayNode auxArrayNode = o.readValue(br,ArrayNode.class );
			br.close();
			return auxArrayNode;
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
		
	}

	public ConcurrentHashMap<NamePassword, UserInfo> getInfoUsers() {
		return infoUsers;
	}

	public void setInfoUsers(ConcurrentHashMap<NamePassword, UserInfo> infoUsers) {
		this.infoUsers = infoUsers;
	}
	public ArrayNode getArenaRival() {
		List<UserInfo> auxl = (List<UserInfo>) infoUsers.values();
		ObjectMapper o = new ObjectMapper();

		JsonNode auxjson = o.convertValue(auxl.get((int) (Math.random()*auxl.size())),JsonNode.class);
		JsonNode auxjson2 = o.convertValue(auxl.get((int) (Math.random()*auxl.size())),JsonNode.class);
		JsonNode auxjson3 = o.convertValue(auxl.get((int) (Math.random()*auxl.size())),JsonNode.class);
		
		ArrayNode auxarraynode = o.createArrayNode();
		auxarraynode.add(auxjson);
		auxarraynode.add(auxjson2);
		auxarraynode.add(auxjson3);
		return auxarraynode ;
	}
	
	public JsonNode getNewChapter(NamePassword p3) {
		try {
			UserInfo auxUserinfo = infoUsers.get(p3);
			
			InputStream i = getClass().getResourceAsStream("heroes.json");
			ObjectMapper o = new ObjectMapper();
			BufferedReader br = new BufferedReader(new InputStreamReader(i, "UTF-8"));
			ArrayNode auxArrayNode = o.readValue(br,ArrayNode.class );
			br.close();
			
			int auxRandomnumber = (int) (Math.random()*auxArrayNode.size());
			
			Hero auxH = o.convertValue(auxArrayNode.get(auxRandomnumber),Hero.class);
			auxH.setCardExclusiveId(auxUserinfo.numeroexclusivodecarta.getAndIncrement());//Creamos el heroe
			
			auxUserinfo.getHeros().add(auxH);//Actualizamos el mapa 
			
			JsonNode herojson = o.convertValue(auxH,JsonNode.class );
			return herojson;
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
		
		
	}
	
	
}
