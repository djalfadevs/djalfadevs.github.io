package com.djalfadevs.es.masterguilds;

public class Hero {
	
private int ID;
private String name;
private float baseAttack;
private float attack;
private float baseDefense;
private float defense;
private float baseHP;
private float HP;
private float base_crit_hit_chance;
private float crit_hit_chance;
private float baseEvasion;
private float evasion;
private String[] description;
//private String abilities;//HAY QUE CREAR LA CLASE ABILITIES O Hacer que se guarde un id de estas
//private String activeAbilities
private String image_url;
private float baseAggro;
private float aggro;
private String faction;
private int rarity;
private float exp;
private int level;
private String role;

public Hero(int iD, String name, float baseAttack, float attack, float baseDefense, float defense, float baseHP,
		float hP, float base_crit_hit_chance, float crit_hit_chance, float baseEvasion, float evasion,
		String[] description, String image_url, float baseAggro, float aggro, String faction, int rarity, float exp,
		int level, String role) {
	super();
	this.ID = iD;
	this.name = name;
	this.baseAttack = baseAttack;
	this.attack = attack;
	this.baseDefense = baseDefense;
	this.defense = defense;
	this.baseHP = baseHP;
	this.HP = hP;
	this.base_crit_hit_chance = base_crit_hit_chance;
	this.crit_hit_chance = crit_hit_chance;
	this.baseEvasion = baseEvasion;
	this.evasion = evasion;
	this.description = description;
	this.image_url = image_url;
	this.baseAggro = baseAggro;
	this.aggro = aggro;
	this.faction = faction;
	this.rarity = rarity;
	this.exp = exp;
	this.level = level;
	this.role = role;
}


}
