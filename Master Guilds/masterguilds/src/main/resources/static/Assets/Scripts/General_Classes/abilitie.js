class abilitie {
	constructor(abilitie){
		this.ID = abilitie.ID;
		this.name = abilitie.name;
		this.activeTurns = abilitie.activeTurns;
		this.chargeTurns = abilitie.chargeTurns;
		this.description = abilitie.description;

	}

	//Lista de IDs : 1-> BuffStats 2-> Health 3->BuffAttack 4->IgnoreDefence 5-> LifeStealing
	//Activa los Activeabilities de un actor
	//Quiza en el futuro el metodo sea para un conjunto de actores que se pasen
	applyEffect(actor){
		var that = this; //NO SE si es necesario aqui
		switch(that.ID){ 
			case 1:
				actor.Activeabilities.BuffStats.isActive = true;
			case 2:
				actor.Activeabilities.Health.isActive = true;
			case 3:
				actor.Activeabilities.BuffAttack.isActive = true;
			case 4:
				actor.Activeabilities.IgnoreDefence.isActive = true;
			case 5: 
				actor.Activeabilities.LifeStealing.isActive = true;
			}
	}

	//Funcion que realiza las actualizaciones de un turno para otro de una abilidad
	nextTurn(){

	}
}