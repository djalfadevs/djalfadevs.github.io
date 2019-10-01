package com.djalfadevs.es.masterguilds;

import org.springframework.web.socket.WebSocketSession;

public class Player {
	private final WebSocketSession session;
	private UserInfo userInfo;
	
	public Player (WebSocketSession e, UserInfo u) {
		this.session = e;
		this.setUserInfo(u);
	}

	public UserInfo getUserInfo() {
		return userInfo;
	}

	public void setUserInfo(UserInfo userInfo) {
		this.userInfo = userInfo;
	}

	public WebSocketSession getSession() {
		return session;
	}
	
	
}
