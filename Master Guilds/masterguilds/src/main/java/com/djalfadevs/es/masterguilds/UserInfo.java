package com.djalfadevs.es.masterguilds;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonValue;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;

public class UserInfo {
	private String name;
	private int gold;
	private int gems;
	private float exp;
	private int level;
	private List<Hero> heros;
	private String clan;
	private int arenaPoints;
	
	//Constructor para nuevos usuarios
	public UserInfo(String name) {
		this.name = name;
		this.gold = 1000;//Dinero Inicial
		this.gems = 100;//Gemas Iniciales
		this.exp = 0;
		this.level = 1;
		this.heros = new ArrayList<>();
		this.clan = "empty";//CAMBIAR ??
		this.setArenaPoints(0);
		
		//Heroes Al registrarse
		try {
			InputStream i = getClass().getResourceAsStream("heroes.json");
			BufferedReader br = new BufferedReader(new InputStreamReader(i, "UTF-8"));
			ObjectMapper o = new ObjectMapper();
			ArrayNode auxArrayNode = o.readValue(br,ArrayNode.class );
			br.close();
			System.out.println(o.writeValueAsString(auxArrayNode.get(0)));
			System.out.println("llalalsdmlsdsldsdl");
			//PRUEBA DE METER HEROE (HE INTENTADO HACERLO AUTOMATICO SIN EXITO)
			
			String nameAux = auxArrayNode.get(0).get("name").asText();
			int idAux = auxArrayNode.get(0).get("ID").asInt();
			float baseAttackAux = auxArrayNode.get(0).get("baseAttack").floatValue();
			float AttackAux = auxArrayNode.get(0).get("attack").floatValue();
			float baseDefenceAux = auxArrayNode.get(0).get("baseDefence").floatValue();
			float DefenceAux = auxArrayNode.get(0).get("defence").floatValue();
			float baseHPAux = auxArrayNode.get(0).get("baseHP").floatValue();
			float HPAux = auxArrayNode.get(0).get("HP").floatValue();
			float base_crit_hit_chanceAux = auxArrayNode.get(0).get("base_crit_hit_chance").floatValue();
			float crit_hit_chanceAux = auxArrayNode.get(0).get("crit_hit_chance").floatValue();
			float base_evasionAux = auxArrayNode.get(0).get("baseEvasion").floatValue();
			float evasionAux = auxArrayNode.get(0).get("evasion").floatValue();
			String[] descriptionAux = o.convertValue(auxArrayNode.get(0).get("description"),String[].class);
			Abilitie[] abilitieAux = o.convertValue(auxArrayNode.get(0).get("abilities"),Abilitie[].class);
			Effect[] activeAbilitiesAux = o.convertValue(auxArrayNode.get(0).get("activeAbilities"),Effect[].class);
			String imageUrlAux = auxArrayNode.get(0).get("image_url").asText();
			float baseAggroAux = auxArrayNode.get(0).get("baseAggro").floatValue();
			float aggroAux = auxArrayNode.get(0).get("aggro").floatValue();
			String factionAux = auxArrayNode.get(0).get("faction").asText();
			int rarityAux= auxArrayNode.get(0).get("rarity").asInt();
			float expAux = auxArrayNode.get(0).get("exp").floatValue();
			int levelAux = auxArrayNode.get(0).get("level").asInt();
			String roleAux = auxArrayNode.get(0).get("role").asText();
			Hero auxHero = new Hero(idAux,nameAux,baseAttackAux,AttackAux,baseDefenceAux,
					DefenceAux,baseHPAux,HPAux,base_crit_hit_chanceAux,crit_hit_chanceAux,
					base_evasionAux,evasionAux,descriptionAux,abilitieAux,activeAbilitiesAux,
					imageUrlAux,baseAggroAux,aggroAux,factionAux,rarityAux,expAux,levelAux,
					roleAux);
			this.heros.add(auxHero);
			//this.heros.add(oeadValue(o.writeValueAsString(auxArrayNode.get(0)), Hero.class));
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	@JsonCreator
	public UserInfo(@JsonProperty("name")String name,@JsonProperty("gold") int gold,
			@JsonProperty("gems")int gems,@JsonProperty("exp")int exp,@JsonProperty("level")int level,
			@JsonProperty("heros")List<Hero> list,
			@JsonProperty("clan")String clan,@JsonProperty("arenaPoints")int arenaPoints) {
		this.name = name;
		this.gold = gold;
		this.gems = gems;
		this.exp = exp;
		this.level = level;
		this.heros = list;
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
