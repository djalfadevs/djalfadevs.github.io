package com.djalfadevs.es.masterguilds;

import java.util.List;

import org.springframework.web.socket.WebSocketSession;

public class Player {
	private final WebSocketSession session;
	private int playerId;
	
	private NamePassword namePassword;
	//USER INFO
	private UserInfo userinfo;
	
	public Player(WebSocketSession session, int playerId) {
		super();
		this.session = session;
		this.playerId = playerId;
	}

	public int getPlayerId() {
		return playerId;
	}



	public void setPlayerId(int playerId) {
		this.playerId = playerId;
	}


	public WebSocketSession getSession() {
		return session;
	}

	public UserInfo getUserinfo() {
		return userinfo;
	}

	public void setUserinfo(UserInfo userinfo) {
		this.userinfo = userinfo;
	}

	public NamePassword getNamePassword() {
		return namePassword;
	}

	public void setNamePassword(NamePassword namePassword) {
		this.namePassword = namePassword;
	}
	
	
}
