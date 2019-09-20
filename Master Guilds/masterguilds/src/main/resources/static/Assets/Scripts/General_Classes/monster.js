"use strict";
class Monster extends Actor 
{
	constructor(monster){
		//Hereda todos sus atributos de la clase actor.
		//Se puede obviar la creacion de la variable m y meter todo el objeto directamente en el super ??
		var m = {ID: monster.ID, name: monster.name,baseAttack:monster.baseAttack, attack: monster.attack,baseDefence: monster.baseDefende,
		defence: monster.defence,baseHP: monster.baseHP,HP: monster.HP,base_crit_hit_chance: monster.base_crit_hit_chance,
		crit_hit_chance: monster.crit_hit_chance,description: monster.description,evasion: monster.evasion,baseEvasion: monster.baseEvasion,
		abilities: monster.abilities, image_url: monster.image_url, activeAbilities: monster.activeAbilities}

		//console.log(m);//Debug
		super(m);
		this.aggro = monster.aggro;//Cambiar al actor.
	}

	//Calcula el daño total que recibe el enemigo al que ataca
	attackPoints(input){
		//BASADO EN EL DE HEROE , ALGUNOS COMENTARIOS PUEDEN NO SER DESCRIPTIVOS EN ESTE CASO
		//FALTA ADAPTAR EL MODELO PARA QUE TENGA EN CUENTA POSIBLES HABILIDADES 
		//Daño Final aplicado;
		var TDamage;
		var that = this;
		//IGNORAR DEFENSA O NO
		if(activeAbilities.IgnoreDefence.isActive){// Si esta activo el bufo de ignorar defensa
			TDamage = that.attack;
		}
		else
		{
			TDamage = (that.attack - (Math.trunc(input.defence / 2)));
		}
		//FIN DE IGNORAR DEFENSA O NO	

		//CALCULO DE CRITICO	
			//Funcion anonima para calcular un bool de si se produce un critico o no
			var isCritHit = function (){ 
				if((Math.random()<=that.crit_hit_chance) || input.isCritForSure){
					return true;
				}
				else
				{
				return false;
				}
			};
			//Funcion anonima
			//El valor por el que se multiplica el ataque si es critico (lo hago asi por si se decide que alguna habilidad pasa otro)
			//Se calcula el valor del daño aplicando critico
			var CritFactor = function(){
				//Comprobamos que la variable existe , por ejemplo por si una habilidad activada aumenta el valor del critico
				if(input.critFactor){
					return input.critFactor;
				}
				return 2; // Valor base de critico
			};

		//FIN DE CALCULO DE CRITICO	
		//APLICACION DEL CRITICO
			if(isCritHit()){
				TDamage *= CritFactor();
			}
		//FIN DE APLICACION DEL CRITICO

		return TDamage;
	}

	//Funcion que realiza las actualizaciones de un turno para otro de un mounstro
	nextTurn(){

	}
}

//var a = new Monster({ID:24});//Debug