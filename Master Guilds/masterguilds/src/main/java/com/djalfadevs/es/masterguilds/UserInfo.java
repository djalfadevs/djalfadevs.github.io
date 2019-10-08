package com.djalfadevs.es.masterguilds;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonValue;

public class UserInfo {
	private String name;
	private int gold;
	private int gems;
	private float exp;
	private int level;
	private List<Hero> heros;
	private String clan;
	private int arenaPoints;
	
	public UserInfo(String name) {
		this.name = name;
		this.gold = 1000;//Dinero Inicial
		this.gems = 100;//Gemas Iniciales
		this.exp = 0;
		this.level = 1;
		this.heros = new ArrayList<>();
		this.clan = "empty";//CAMBIAR ??
		this.setArenaPoints(0);
	}
	
	@JsonCreator
	public UserInfo(@JsonProperty("name")String name,@JsonProperty("gold") int gold,
			@JsonProperty("gems")int gems,@JsonProperty("exp")int exp,@JsonProperty("level")int level,
			@JsonProperty("heros")ArrayList<Hero> heros,
			@JsonProperty("clan")String clan,@JsonProperty("arenaPoints")int arenaPoints) {
		this.name = name;
		this.gold = gold;
		this.gems = gems;
		this.exp = exp;
		this.level = level;
		this.heros = heros;
		this.clan = clan;
		this.arenaPoints = arenaPoints;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getGold() {
		return gold;
	}
	public void setGold(int gold) {
		this.gold = gold;
	}
	public int getGems() {
		return gems;
	}
	public void setGems(int gems) {
		this.gems = gems;
	}
	public float getExp() {
		return exp;
	}
	public void setExp(float exp) {
		this.exp = exp;
	}
	public List<Hero> getHeros() {
		return heros;
	}
	public void setHeros(List<Hero> heros) {
		this.heros = heros;
	}
	public String getClan() {
		return clan;
	}
	public void setClan(String clan) {
		this.clan = clan;
	}

	public int getLevel() {
		return level;
	}

	public void setLevel(int level) {
		this.level = level;
	}

	public int getArenaPoints() {
		return arenaPoints;
	}

	public void setArenaPoints(int arenaPoints) {
		this.arenaPoints = arenaPoints;
	}

	@Override
	public String toString() {
		return "UserInfo [name=" + name + ", gold=" + gold + ", gems=" + gems + ", exp=" + exp + ", level=" + level
				+ ", heros=" + heros + ", clan=" + clan + ", arenaPoints=" + arenaPoints + "]";
	}
	
	

	
	
}
