"use strict";
class Hero extends Actor 
{
	constructor(hero){
		//Un total de 16 atributos de los cuales 10 son heredados. // Algunos se duplican para distinguir entre base y el que se usa (bufos);
		//Hereda todos sus atributos de la clase actor.
		var m = {ID: hero.ID, name: hero.name, baseAttack:hero.baseAttack, attack: hero.attack, baseDefence: hero.baseDefence,
		defence: hero.defence, baseHP: hero.baseHP,HP: hero.HP,base_crit_hit_chance: hero.base_crit_hit_chance,
		crit_hit_chance: hero.crit_hit_chance,description: hero.description,evasion: hero.evasion,baseEvasion: hero.baseEvasion,
		abilities: hero.abilities, image_url: hero.image_url , activeAbilities: hero.activeAbilities}

		//console.log(m);//Debug
		super(m);
		this.aggro = hero.aggro; //Cambiar al actor // elevar al padre ya que ahora monster tambien lo tiene
		this.faction = hero.faction;
		this.rarity = hero.rarity;
		this.level = hero.level;
		this.exp = hero.exp;
		this.role = hero.role;

		}

	//Calcula el daño total que recibe el enemigo al que ataca
	//Sin tener en cuenta aun habilidades activas , la forma normal es Aataque - (Bdefensa/2)
	//Parametros: input pasa : defence , critFactor , isCritForSure , abilities : IsignoreDefenceActivate
	attackPoints(input){
		//FALTA ADAPTAR EL MODELO PARA QUE TENGA EN CUENTA POSIBLES HABILIDADES 
		//FALTA TENER EN CUENTA LAS FACCIONES
		//ARREGLAR EL TEMA DE COMPROBAR EFECTOS PARA CALCULAR EL DAÑO
		//Daño Final aplicado;
		var TDamage;
		var that = this;
		//IGNORAR DEFENSA O NO 
		//-----------------AHORA MISMO ESTA MAL , NO SE ACCEDE ASI AL IGNOREDEFENCE ------------------//
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

	//Esta funcion es llamada por un callback desde effect CALLBACK 2 
	clearEffect(input){
		console.log("Effect " + this.activeAbilities[input.pos].name + " has gone")//DEBUG
		this.activeAbilities.splice(input.pos,1);
		
	}
	//CALLBACK 1
	//Funcion que realiza las actualizaciones de un turno para otro de un heroe
	//ESTA FUNCION PODRA SER UTILIZADA LO MAS SEGURO DE MANERA QUE ALGUNAS COSAS PUEDAN REALIZARSE MEDIANTE WORKERS O CALLBACKS
	//ASI QUE LO MAS SEGURO ESQ TOQUE AJUSTARLA O BORRARLAÇ
	/*fixAttribute(input){
		console.log("It is fixing all the attributes related: " + input.apply + " the effect " + input.ID )//DEBUG
		//console.log(this);//DEBUG
		
 	}
	*/

	nextTurn(input){
		console.log("Another turn for Hero " + this.name);//DEBUG
		//Actualizar lo relacionado con las Habilidades (cooldown y si esta lista o no)
		var that = this;
		for(var i = 0; i < that.abilities.length ; i++){
			that.abilities[i].nextTurn();
		}
		////

		//Actualizar Efectos Activos
		//Actualiza atributos del jugador cuando llega a 0;
		//Elimina los efectos que no siguen activos mas 
		//CALLBACK DE LOS EFECTOS PARA ARREGLAR ATRIBUTOS ???
		var i = 0;
		while(i < that.activeAbilities.length ){
			that.activeAbilities[i].nextTurn({that: that ,pos: i, callback2:that.clearEffect});
			i++;
		}

 	}

 	//"Arregla" el atributo que es afectado por el efecto
 	
}

//var b = new Hero({ID:24});//Debug