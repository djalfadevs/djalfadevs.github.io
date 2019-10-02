package com.djalfadevs.es.masterguilds;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

import org.springframework.web.socket.TextMessage;

import com.fasterxml.jackson.databind.ObjectMapper;

public class Game {
	public final static Game INSTANCE = new Game();
	
	ObjectMapper mapper = new ObjectMapper();
	private Map<String, Player> Allplayers = new ConcurrentHashMap<>();
	private Map<NamePassword,UserInfo> infoUsers = new ConcurrentHashMap<>();
	private List<NamePassword> infoUsersUsing = new ArrayList<>();
	
	private Lock lock = new ReentrantLock();

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
	lock.lock();
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
	try {
		if(infoUsers.containsKey(namePassword)) { //Si el par usuario contraseña esta registrado
			if(!infoUsersUsing.contains(namePassword)) {//Si no esta en uso ese par usuario contraseña
				infoUsersUsing.add(namePassword);
				return infoUsers.get(namePassword);
			}
		}
	}catch(Throwable ex){
		ex.printStackTrace(System.err);
	}
	lock.unlock();
	return null;
	
}

public boolean signup(NamePassword namePassword) {
	lock.lock();//No pueden registrar mas de uno a la vez
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
				return true;//Se ha registrado correctamente
		}
		
	}catch(Throwable ex){
		ex.printStackTrace(System.err);
	}
	lock.unlock();
	return false; //Fallo al registrarse
	
}


}
