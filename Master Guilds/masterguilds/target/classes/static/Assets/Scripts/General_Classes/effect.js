class Effect {
	constructor(effect){
		this.ID = effect.ID; //Mismo que la habilidad q lo produce
		this.name = effect.name; //Mismo que la habilidad q lo produce
		this.remainActiveTurns = effect.remainActiveTurns; //Turnos que le quedan al efecto
		this.isActive = effect.isActive; //No se si es necesario , por si acaso lo pongo // Es mas rapido que comprobar si los turnos restantes son 0 o menos asi que lo tomamos
		
	}

	nextTurn(input){
		var that = this;
		that.remainActiveTurns--;
		if(that.remainActiveTurns<=0){
			that.isActive = false;
			//Se podria hacer algo para que cuando ocurra esto , avise automaticamente al actor para que lo elimine de la lista ??
			//O tiene el actor que checkear la lista para eliminarlo.
			//CALLBACK ??
			input.callback(); //LLamada al callback para que restaure los valores adecuados del heroe.
		}
	}
}