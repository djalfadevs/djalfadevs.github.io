package com.djalfadevs.es.masterguilds;

import java.util.List;

public class UserInfo {
	private int ID;
	private String name;
	private int gold;
	private int gems;
	private float exp;
	private List<Hero> heros;
	private String clan;
	
	public UserInfo(int iD, String name, int gold, int gems, float exp, List<Hero> heros, String clan) {
		super();
		ID = iD;
		this.name = name;
		this.gold = gold;
		this.gems = gems;
		this.exp = exp;
		this.heros = heros;
		this.clan = clan;
	}
	
	public int getID() {
		return ID;
	}
	public void setID(int iD) {
		ID = iD;
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
	
}
