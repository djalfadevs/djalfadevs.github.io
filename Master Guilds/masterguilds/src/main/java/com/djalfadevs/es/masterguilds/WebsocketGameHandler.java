package com.djalfadevs.es.masterguilds;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility;
import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class WebsocketGameHandler extends TextWebSocketHandler {
	
	private Game game = Game.INSTANCE;
	private AtomicInteger playerId = new AtomicInteger(0);
	
	private ObjectMapper mapper = new ObjectMapper();
	private ObjectMapper json = new ObjectMapper().setVisibility(PropertyAccessor.FIELD, Visibility.ANY);
	
	static class ChatMessage {
		String name;
		String message;
	}
	
	private Lock lockSession = new ReentrantLock();
	
	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		lockSession.lock();
		Player player = new Player(session, playerId.incrementAndGet());
		session.getAttributes().put("PLAYER", player);
		lockSession.unlock();
		game.addPlayer(player);
		
	}
	
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		try {
			JsonNode node = mapper.readTree(message.getPayload());
			ObjectNode msg = mapper.createObjectNode();
			Player player = (Player) session.getAttributes().get("PLAYER");
			switch (node.get("event").asText()) {
				case "LOGIN":
					System.out.println("Se esta procesando la peticion LOGIN");
					NamePassword namePassword = new NamePassword(node.get("name").asText(),node.get("password").asText());
					UserInfo userinfo = game.login(namePassword);
					if(userinfo!=null) {
						player.setNamePassword(namePassword);
						//player.setUserinfo(userinfo);//ESTO ES POR SI QUEREMOS ASOCIAR A LA SESION LA USER INFO 
						//aunque veo mejor que se asocie exclusivamente la dupla namePassword y con ella se consiga la 
						//userinfo del servidor.
						game.getInfoUsers().put(namePassword, userinfo);//Quiza redeundante porq ya deberia estar guardado
						game.updateUserInfoMongo();//Actualizamos base de datos mongo
						msg.put("event", "SUCCESSLOGIN");
						msg.set("userinfo", mapper.convertValue(userinfo,JsonNode.class));
					}
					else
					{
						msg.put("event", "FAILLOGIN");		
					}
					player.getSession().sendMessage(new TextMessage(msg.toString()));
					break;
				case "SIGNUP":
					NamePassword namePassword2 = new NamePassword(node.get("name").asText(),node.get("password").asText());
					System.out.println("Se esta procesando la peticion SIGNUP");
					boolean isSignUp = game.signup(namePassword2);
					System.out.println(isSignUp);
					msg.put("event", "SIGNUP");
					msg.put("isSignUp",isSignUp);
					player.getSession().sendMessage(new TextMessage(msg.toString()));
					break;
				case "GETRANKING":
					msg.put("event", "GETRANKING");
					msg.set("ranking", game.getRanking());
					player.getSession().sendMessage(new TextMessage(msg.toString()));
					break;
				case "UPDATECONFIGUSER":
					JsonNode aux = node.get("userAux");
					UserInfo u = mapper.convertValue(aux, UserInfo.class);
					System.out.println(u.toString() + "tarararararara");
					NamePassword p = player.getNamePassword();
					game.updateConfigUser(p, u);
					break;
				case "UPDATEHEROINFO":
					JsonNode aux2 = node.get("userHero");
					Hero h = mapper.convertValue(aux2, Hero.class);
					NamePassword p2 = player.getNamePassword();
					game.updateHeroInfo(p2, h);
					break;
				case "UPDATEMONGO":
					game.updateUserInfoMongo2(player.getNamePassword());
					break;
				case "GETMISIONS":
					msg.put("event", "GETMISIONS");
					msg.set("misions",game.GetMisions());
					player.getSession().sendMessage(new TextMessage(msg.toString()));
					break;
				case "GETNEWHERO":
					NamePassword p3 = player.getNamePassword();
					
					msg.put("event", "GETNEWHERO");
					msg.set("hero",game.getNewChapter(p3));
					player.getSession().sendMessage(new TextMessage(msg.toString()));
					game.updateUserInfoMongo2(player.getNamePassword());
					break;
				case "GETARENARIVAL":
					msg.put("event", "GETARENARIVAL");
					msg.set("rival",game.getArenaRival());
					player.getSession().sendMessage(new TextMessage(msg.toString()));
					break;
			default:
				break;
			}

		} catch (Exception e) {
			System.err.println("Exception processing message " + message.getPayload());
			e.printStackTrace(System.err);
		}
	}
	
	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		Player player = (Player) session.getAttributes().get("PLAYER");
		game.removePlayer(player);
		
		
		/*
		ObjectNode msg = mapper.createObjectNode();
		msg.put("event", "REMOVE PLAYER");
		msg.put("id", player.getPlayerId());
		game.broadcast(msg.toString());
		*/
	}
	
}
