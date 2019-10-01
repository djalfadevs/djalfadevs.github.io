package com.djalfadevs.es.masterguilds;

import java.util.Collection;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.web.socket.TextMessage;

public class Game {
	private Map<String, Player> Allplayers = new ConcurrentHashMap<>();
	
public void addPlayer(Player player) {
		Allplayers.put(player.getSession().getId(), player);
	}

public Collection<Player> getPlayers() {
	return Allplayers.values();
}

public void removePlayer(Player player) {
	Allplayers.remove(player.getSession().getId());
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

}
