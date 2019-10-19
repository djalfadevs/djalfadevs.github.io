package com.djalfadevs.es.masterguilds;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

public class Hero {
	private int cardExclusiveId;
	private int ID;
	private String name;
	private float baseAttack;
	private float attack;
	private float baseDefence;
	private float defence;
	private float baseHP;
	private float HP;
	private float base_crit_hit_chance;
	private float crit_hit_chance;
	private float baseEvasion;
	private float evasion;
	private String[] description;
	//@JsonDeserialize(as=ArrayList.class, contentAs=Abilitie.class)
	private Abilitie[] abilities;//HAY QUE CREAR LA CLASE ABILITIES O Hacer que se guarde un id de estas
	//@JsonDeserialize(as=ArrayList.class, contentAs=Effect.class)
	private Effect[] activeAbilities;
	private List<String> image_url;
	private float baseAggro;
	private float aggro;
	private String faction;
	private int rarity;
	private float exp;
	private int level;
	private String role;

	public Hero(@JsonProperty("ID") int ID, 
			@JsonProperty("name") String name,
			@JsonProperty("baseAttack") float baseAttack, 
			@JsonProperty("attack") float attack,
			@JsonProperty("baseDefence") float baseDefence,
			@JsonProperty("defence")float defence, 
			@JsonProperty("baseHP")float baseHP, 
			@JsonProperty("HP")float HP,
			@JsonProperty("base_crit_hit_chance")float base_crit_hit_chance,
			@JsonProperty("crit_hit_chance")float crit_hit_chance,
			@JsonProperty("baseEvasion")float baseEvasion,
			@JsonProperty("evasion")float evasion,
			@JsonProperty("description")String[] description,
			@JsonProperty("abilities") Abilitie[] abilities,
			@JsonProperty("activeAbilities") Effect[] activeAbilities,
			@JsonProperty("image_url")List<String> image_url,
			@JsonProperty("baseAggro")float baseAggro, 
			@JsonProperty("aggro")float aggro,
			@JsonProperty("faction")String faction,
			@JsonProperty("rarity")int rarity, 
			@JsonProperty("exp")float exp,
			@JsonProperty("level")int level,
			@JsonProperty("role")String role) {
		super();
		this.ID = ID;
		this.name = name;
		this.baseAttack = baseAttack;
		this.attack = attack;
		this.baseDefence = baseDefence;
		this.defence = defence;
		this.baseHP = baseHP;
		this.HP = HP;
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
		this.abilities = abilities;
		this.activeAbilities = activeAbilities;
		this.cardExclusiveId = 0;
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

	public float getBaseAttack() {
		return baseAttack;
	}

	public void setBaseAttack(float baseAttack) {
		this.baseAttack = baseAttack;
	}

	public float getAttack() {
		return attack;
	}

	public void setAttack(float attack) {
		this.attack = attack;
	}

	public float getBaseDefense() {
		return baseDefence;
	}

	public void setBaseDefense(float baseDefense) {
		this.baseDefence = baseDefense;
	}

	public float getDefense() {
		return defence;
	}

	public void setDefense(float defense) {
		this.defence = defense;
	}

	public float getBaseHP() {
		return baseHP;
	}

	public void setBaseHP(float baseHP) {
		this.baseHP = baseHP;
	}

	public float getHP() {
		return HP;
	}

	public void setHP(float hP) {
		HP = hP;
	}

	public float getBase_crit_hit_chance() {
		return base_crit_hit_chance;
	}

	public void setBase_crit_hit_chance(float base_crit_hit_chance) {
		this.base_crit_hit_chance = base_crit_hit_chance;
	}

	public float getCrit_hit_chance() {
		return crit_hit_chance;
	}

	public void setCrit_hit_chance(float crit_hit_chance) {
		this.crit_hit_chance = crit_hit_chance;
	}

	public float getBaseEvasion() {
		return baseEvasion;
	}

	public void setBaseEvasion(float baseEvasion) {
		this.baseEvasion = baseEvasion;
	}

	public float getEvasion() {
		return evasion;
	}

	public void setEvasion(float evasion) {
		this.evasion = evasion;
	}

	public String[] getDescription() {
		return description;
	}

	public void setDescription(String[] description) {
		this.description = description;
	}

	public Abilitie[] getAbilities() {
		return abilities;
	}

	public void setAbilities(Abilitie[] abilities) {
		this.abilities = abilities;
	}

	public Effect[] getActiveAbilities() {
		return activeAbilities;
	}

	public void setActiveAbilities(Effect[] activeAbilities) {
		this.activeAbilities = activeAbilities;
	}

	public List<String> getImage_url() {
		return image_url;
	}

	public void setImage_url(List<String> image_url) {
		this.image_url = image_url;
	}

	public float getBaseAggro() {
		return baseAggro;
	}

	public void setBaseAggro(float baseAggro) {
		this.baseAggro = baseAggro;
	}

	public float getAggro() {
		return aggro;
	}

	public void setAggro(float aggro) {
		this.aggro = aggro;
	}

	public String getFaction() {
		return faction;
	}

	public void setFaction(String faction) {
		this.faction = faction;
	}

	public int getRarity() {
		return rarity;
	}

	public void setRarity(int rarity) {
		this.rarity = rarity;
	}

	public float getExp() {
		return exp;
	}

	public void setExp(float exp) {
		this.exp = exp;
	}

	public int getLevel() {
		return level;
	}

	public void setLevel(int level) {
		this.level = level;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public int getCardExclusiveId() {
		return cardExclusiveId;
	}

	public void setCardExclusiveId(int cardExclusiveId) {
		this.cardExclusiveId = cardExclusiveId;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + cardExclusiveId;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Hero other = (Hero) obj;
		if (cardExclusiveId != other.cardExclusiveId)
			return false;
		return true;
	}

	
}
