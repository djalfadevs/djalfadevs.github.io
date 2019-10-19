package com.djalfadevs.es.masterguilds;

import java.util.Arrays;

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

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((ID == null) ? 0 : ID.hashCode());
		result = prime * result + Arrays.hashCode(appliedValues);
		result = prime * result + (isActive ? 1231 : 1237);
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + remainActiveTurns;
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
		Effect other = (Effect) obj;
		if (ID == null) {
			if (other.ID != null)
				return false;
		} else if (!ID.equals(other.ID))
			return false;
		if (!Arrays.equals(appliedValues, other.appliedValues))
			return false;
		if (isActive != other.isActive)
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (remainActiveTurns != other.remainActiveTurns)
			return false;
		return true;
	}
	
	
	
}


