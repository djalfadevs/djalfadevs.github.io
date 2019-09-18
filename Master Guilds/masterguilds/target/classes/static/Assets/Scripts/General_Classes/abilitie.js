'use strict'
class abilitie {
	constructor(abilitie){
		this.ID = abilitie.ID;
		this.name = abilitie.name;
		this.baseActiveTurns = abilitie.baseActiveTurns;
		this.baseChargeTurns = abilitie.baseChargeTurns;//Valor de los turnos que tarda en cargar //No confundir con los que le quedan en la simulacion
		this.description = abilitie.description;

		//VALORES SOLO USADOS EN LA SIMULACION
		//this.RemainActiveTurns = abilitie.RemainActiveTurns; //Necesaria realmente ?? o es cada personaje quien se lo gestiona (creo q personaje)
		this.RemainChargeTurns = abilitie.RemainChargeTurns;
		this.isReady = abilitie.isReady;
	}

	//Lista de IDs : 1-> BuffStats 2-> Health 3->BuffAttack 4->IgnoreDefence 5-> LifeStealing
	//Activa los Activeabilities de un actor
	//Quiza en el futuro el metodo sea para un conjunto de actores que se pasen
	//Quiza la habilidad debe tener un atributo propio tarjet y que en funcion de ese el efecto se aplique de una u otra forma.
	applyEffect(actor){
		var that = this; //NO SE si es necesario aqui
		var newEffect = new efecto({ID:that.ID,name:that.name,remainActiveTurns: that.baseActiveTurns , isActive: true})//Crear el efecto
		actor.activeabilities.push(newEffect);//Añadimos el nuevo efecto al personaje
	}

	//Funcion que realiza las actualizaciones de un turno para otro de una abilidad
	nextTurn(input){
		this.RemainChargeTurns--;
		if(this.RemainChargeTurns <= 0){
			this.isReady = true;
			this.RemainChargeTurns = this.baseChargeTurns;
		}
	}
}