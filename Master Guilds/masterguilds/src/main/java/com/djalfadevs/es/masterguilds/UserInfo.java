package com.djalfadevs.es.masterguilds;

import java.util.ArrayList;
import java.util.List;

public class UserInfo {
	private String name;
	private int gold;
	private int gems;
	private float exp;
	private int level;
	private List<Hero> heros;
	private String clan;
	
	public UserInfo(String name) {
		this.name = name;
		this.gold = 1000;//Dinero Inicial
		this.gems = 100;//Gemas Iniciales
		this.exp = 0;
		this.heros = new ArrayList<>();
		this.clan = null;//CAMBIAR ??
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
}
