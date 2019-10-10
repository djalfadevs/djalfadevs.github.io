package com.djalfadevs.es.masterguilds;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Effect {
	private String ID;
	private String name;
	private int remainActiveTurns;
	private boolean isActive;
	private float[] appliedValues;
	
	public Effect(@JsonProperty("ID")String ID,
			@JsonProperty("name") String name,
			@JsonProperty("remainActiveTurns")int remainActiveTurns,
			@JsonProperty("isActive")boolean isActive,
			@JsonProperty("appliedValues")float[] appliedValues) {
		super();
		this.ID = ID;
		this.name = name;
		this.remainActiveTurns = remainActiveTurns;
		this.isActive = isActive;
		this.appliedValues = appliedValues;
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

	public int getRemainActiveTurns() {
		return remainActiveTurns;
	}

	public void setRemainActiveTurns(int remainActiveTurns) {
		this.remainActiveTurns = remainActiveTurns;
	}

	public boolean isActive() {
		return isActive;
	}

	public void setActive(boolean isActive) {
		this.isActive = isActive;
	}

	public float[] getAppliedValues() {
		return appliedValues;
	}

	public void setAppliedValues(float[] appliedValues) {
		this.appliedValues = appliedValues;
	}
	
	
}


