"use strict";
class Abilitie {
	constructor(abilitie){
		this.ID = abilitie.id;//Numero ID
		this.name = abilitie.name; //Nombre string
		this.baseActiveTurns = abilitie.baseActiveTurns;//Valor numero de turnos que dura
		this.baseChargeTurns = abilitie.baseChargeTurns;//Valor de los turnos que tarda en cargar //No confundir con los que le quedan en la simulacion
		this.description = abilitie.description;//String

		//VALORES SOLO USADOS EN LA SIMULACION
		//this.RemainActiveTurns = abilitie.RemainActiveTurns; //Necesaria realmente ?? o es cada personaje quien se lo gestiona (creo q personaje)
		
		this.remainChargeTurns = abilitie.remainChargeTurns; //Turnos que le quedan para poder ser lanzada de nuevo (Al crear debe ser igual que el baseChargeTurns)
		this.isReady = abilitie.ready; //Se puede lanzar o no (Inicialmente al crear estara en false GENERALMENTE)

		//EXPERIMENTAL
		//QUIZA SE PODRIA HACER QUE RECIBA UNA FUNCION QUE DEFINA QUE TIENE QUE HACER CUANDO RECIBA EL PERSONAJE
		//Y ASI EN VEZ DE LEER EL ID Y HACER ALGO EN FUNCION DE EL , DIRECTAMENTE CUANDO SE ACTIVE EL EFECTO SE LLAMARIA A LA 
		//FUNCION QUE CONTIENE.
		//FALTA HACER QUE SE PONGA LA FUNCION CORRECTA DE COMO ACTUA UNA HABILIDAD
		//this.effectFunction = abilitie.effectFunction; 

		//EFFECTFUNTION DEBE IR EN FUNCION DEL ID
		switch(this.ID){
			case "1":
			this.effectFunction = effectFunctionList1; 
			break;
			case "2":
			this.effectFunction = effectFunctionList2;
			case "3":
			this.effectFunction = effectFunctionList3;
			default:
			this.effectFunction = null;
		}

	}


	//Funcion Auxiliar
	//Lista de IDs : 1-> BuffStats 2-> Health 3->BuffAttack 4->IgnoreDefence 5-> LifeStealing
	//Activa los Activeabilities de un actor
	//Quiza en el futuro el metodo sea para un conjunto de actores que se pasen
	//Quiza la habilidad debe tener un atributo propio tarjet y que en funcion de ese el efecto se aplique de una u otra forma.
	applyEffect(actor){
		var that = this; //NO SE si es necesario aqui
		
		var newEffect = new Effect({ID:that.ID,name:that.name,remainActiveTurns: that.baseActiveTurns , 
		isActive: true , appliedValues:[],effectFunction:that.effectFunction})//Crear el efecto

		actor.activeAbilities.push(newEffect);//Añadimos el nuevo efecto al personaje
		actor.fixAttribute({apply: true , effect: newEffect});//Se debe aplicar el efecto a los atributos del heroe afectado.
	}

	//USAR LA HABILIDAD
	useAbilitie(actor){
		if(this.isReady){
			this.applyEffect(actor);
			this.isReady = false;
		}
	} 

	//Funcion que realiza las actualizaciones de un turno para otro de una Habilidad
	nextTurn(input){
		console.log("Another turn for Abilitie " + this.name);//DEBUG
		if(!this.isReady){ //Si la habilidad ha sido lanzada
			this.remainChargeTurns--;
			if(this.remainChargeTurns <= 0){
				this.isReady = true;//Puede ser lanzada de nuevo
				this.remainChargeTurns = this.baseChargeTurns;
				console.log("Abilitie "+ this.name + "is ready")//DEBUG
			}
		}
		
	}
}