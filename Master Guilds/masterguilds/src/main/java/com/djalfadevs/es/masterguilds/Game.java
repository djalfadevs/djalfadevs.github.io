package com.djalfadevs.es.masterguilds;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

import org.bson.Document;
import org.springframework.web.socket.TextMessage;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

public class Game {
	public final static Game INSTANCE = new Game();
	
	ObjectMapper mapper = new ObjectMapper();
	private Map<String, Player> Allplayers = new ConcurrentHashMap<>();
	private Map<NamePassword,UserInfo> infoUsers = new ConcurrentHashMap<>();
	private List<NamePassword> infoUsersUsing = new ArrayList<>();
	
	private Lock lock = new ReentrantLock();
	
	MongoClient mongoClient = new MongoClient();
	MongoDatabase database = mongoClient.getDatabase("Mastera");

public void loadInfoUsers () {
	
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
	lock.lock();//No pueden loguear mas de uno a la vez
	System.out.println("Pasamos el lock login");
	try {
		if(infoUsers.containsKey(namePassword)) { //Si el par usuario contraseña esta registrado
			if(!infoUsersUsing.contains(namePassword)) {//Si no esta en uso ese par usuario contraseña
				infoUsersUsing.add(namePassword);
				lock.unlock();
				return infoUsers.get(namePassword);
			}
		}
	}catch(Throwable ex){
		ex.printStackTrace(System.err);
		lock.unlock();
	}
	lock.unlock();
	return null;
	
	
}

public boolean signup(NamePassword namePassword) {
	lock.lock();//No pueden registrar mas de uno a la vez
	System.out.println("Pasamos el lock");
	try {
		NamePassword [] namePasswordArray = infoUsers.keySet().toArray(new NamePassword[infoUsers.size()]);
		int i = 0;
		boolean encontrado = false;
		while(i<namePasswordArray.length && !encontrado) {
			if(namePasswordArray[i].getName().equals(namePassword.getName())) {
				encontrado = true;//Nombre ya en uso
			}
			i++;
		}
		
		if(!encontrado) {//Si no existe alguien registrado con ese nombre
				infoUsers.put(namePassword,new UserInfo(namePassword.name));//Creamos un nuevo usuario
				lock.unlock();
				return true;//Se ha registrado correctamente
		}
		System.out.println("El Signup ha fallado");
	}catch(Throwable ex){
		ex.printStackTrace(System.err);
	}
	lock.unlock();
	return false; //Fallo al registrarse
	
}

public List<UserInfo> getRanking(){
	List<UserInfo> auxl = (List<UserInfo>) infoUsers.values();
	
	Comparator<UserInfo> ArenaPointsComparator = new Comparator<UserInfo>() {

		@Override
		public int compare(UserInfo o1, UserInfo o2) {
			if(o1.getArenaPoints() < o2.getArenaPoints()) {
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
	while(i<10 || i<auxl.size()) {
		l.add(auxl.get(i));//solo guardamos los diez primeros como maximo
		i++;
	}
	
	return l;
	
}

public void updateUserInfo(NamePassword n, UserInfo u) {
	infoUsers.put(n, u);
	MongoCollection<Document> coll = database.getCollection("Users");
	
	//Actualizamos tambien la base de datos
	
	//Delete all
	BasicDBObject document = new BasicDBObject();
	coll.deleteMany(document);
	
	ArrayList<Document> listadeDocumentosUser = new ArrayList<>();
	coll.insertMany(listadeDocumentosUser);
	
	
}
}
