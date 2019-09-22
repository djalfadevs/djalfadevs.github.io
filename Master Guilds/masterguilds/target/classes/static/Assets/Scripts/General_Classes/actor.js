"use strict";
class Actor {
	constructor(actor)
	{
		//Un total de 10 atributos comunes a mounstros y heroes // Algunos se han duplicado para guardar el valor con buffo y un valor base
		//Se duplico baseAttack, baseDefence, baseHP , base_crit_hit_chance , baseEvasion, activeAbilities
		this.ID = actor.ID;
		this.name = actor.name;
		this.baseAttack = actor.baseAttack;
		this.attack = actor.attack;
		this.baseDefence = actor.baseDefence;
		this.defence = actor.defence;
		this.baseHP = actor.baseHP;
		this.HP = actor.HP;
		this.base_crit_hit_chance = actor.base_crit_hit_chance;
		this.crit_hit_chance = actor.crit_hit_chance;
		this.baseEvasion = actor.baseEvasion;
		this.evasion = actor.evasion;
		this.description = actor.description;
		this.abilities = actor.abilities;
		this.activeAbilities = actor.activeAbilities;//Indica que habilidades Propias o de Equipo le estan afectando (Seria como los bufos activos por el mismo u otro jugador sobre el)
		this.image_url = actor.image_url;

		this.baseAggro = actor.baseAggro;
		this.aggro = actor.aggro;
	}

	//Calcula el daño total que recibe el enemigo al que ataca
	//Sin tener en cuenta aun habilidades activas , la forma normal es Aataque - (Bdefensa/2)
	//Parametros: input pasa : defence , critFactor , isCritForSure , abilities : IsignoreDefenceActivate
	attackPoints(input){
	
	}

	//Funcion que realiza las actualizaciones de un turno para otro de un actor
	nextTurn(){

	}
}