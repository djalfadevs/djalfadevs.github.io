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
	private String lang;
	private int MVol;
	private int EVol;
	
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
		this.lang="EN";
		this.setMVol(3);
		this.setEVol(3);
		//Heroes Al registrarse
		try {
			InputStream i = getClass().getResourceAsStream("heroes.json");
			BufferedReader br = new BufferedReader(new InputStreamReader(i, "UTF-8"));
			ObjectMapper o = new ObjectMapper();
			ArrayNode auxArrayNode = o.readValue(br,ArrayNode.class );
			br.close();
			System.out.println(o.writeValueAsString(auxArrayNode.get(0)));
			System.out.println("llalalsdmlsdsldsdl");
			
			//PRUEBA DE METER HEROE (AL registrar un jugador se le dan unos heroes elegidos por el gamedesigner)
			//Estos tienen que ver con la historia del juego
			this.heros.add(o.convertValue(auxArrayNode.get(0),Hero.class));
			this.heros.add(o.convertValue(auxArrayNode.get(2),Hero.class));
			this.heros.add(o.convertValue(auxArrayNode.get(0),Hero.class));
			this.heros.add(o.convertValue(auxArrayNode.get(2),Hero.class));
			this.heros.add(o.convertValue(auxArrayNode.get(2),Hero.class));
			this.heros.add(o.convertValue(auxArrayNode.get(0),Hero.class));
			this.heros.add(o.convertValue(auxArrayNode.get(0),Hero.class));
			this.heros.add(o.convertValue(auxArrayNode.get(0),Hero.class));
			this.heros.add(o.convertValue(auxArrayNode.get(2),Hero.class));
			this.heros.add(o.convertValue(auxArrayNode.get(0),Hero.class));
			
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
			@JsonProperty("clan")String clan,@JsonProperty("arenaPoints")int arenaPoints,@JsonProperty("lang")String lang,@JsonProperty("MVol")int MVol,
			@JsonProperty("EVol")int EVol) {
		this.name = name;
		this.gold = gold;
		this.gems = gems;
		this.exp = exp;
		this.level = level;
		this.heros = list;
		this.clan = clan;
		this.arenaPoints = arenaPoints;
		this.lang=lang;
		this.setMVol(MVol);
		this.setEVol(EVol);
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
				+ ", heros=" + heros + ", clan=" + clan + ", arenaPoints=" + arenaPoints + ", lang=" + lang + ", MVol="
				+ MVol + ", EVol=" + EVol + "]";
	}

	public String getLang() {
		return lang;
	}

	public void setLang(String language) {
		this.lang = language;
	}

	public int getMVol() {
		return MVol;
	}

	public void setMVol(int mVol) {
		MVol = mVol;
	}

	public int getEVol() {
		return EVol;
	}

	public void setEVol(int eVol) {
		EVol = eVol;
	}
	
	

	
	
}
