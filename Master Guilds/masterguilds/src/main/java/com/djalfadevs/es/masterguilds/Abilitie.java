package com.djalfadevs.es.masterguilds;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Abilitie {
private String ID;
private String name;
private int baseActiveTurns;
private int baseChargeTurns;
private String[] description;
private int remainChargeTurns;
private boolean isReady;


public Abilitie(@JsonProperty("ID")String ID, 
		@JsonProperty("name")String name, 
		@JsonProperty("baseActiveTurns")int baseActiveTurns,
		@JsonProperty("baseChargeTurns") int baseChargeTurns,
		@JsonProperty("description") String[] description,
		@JsonProperty("remainChargeTurns")int remainChargeTurns,
		@JsonProperty("isReady")boolean isReady) {
	super();
	this.ID = ID;
	this.name = name;
	this.baseActiveTurns = baseActiveTurns;
	this.baseChargeTurns = baseChargeTurns;
	this.description = description;
	this.remainChargeTurns = remainChargeTurns;
	this.isReady = isReady;
}
public String getID() {
	return ID;
}
public void setID(String iD) {
	ID = iD;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public int getBaseActiveTurns() {
	return baseActiveTurns;
}
public void setBaseActiveTurns(int baseActiveTurns) {
	this.baseActiveTurns = baseActiveTurns;
}
public int getBaseChargeTurns() {
	return baseChargeTurns;
}
public void setBaseChargeTurns(int baseChargeTurns) {
	this.baseChargeTurns = baseChargeTurns;
}
public String[] getDescription() {
	return description;
}
public void setDescription(String[] description) {
	this.description = description;
}
public int getRemainChargeTurns() {
	return remainChargeTurns;
}
public void setRemainChargeTurns(int remainChargeTurns) {
	this.remainChargeTurns = remainChargeTurns;
}
public boolean isReady() {
	return isReady;
}
public void setReady(boolean isReady) {
	this.isReady = isReady;
}


}


