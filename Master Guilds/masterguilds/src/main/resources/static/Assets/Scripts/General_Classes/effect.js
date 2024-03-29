"use strict";
class Effect {
	constructor(effect){
		this.ID = effect.ID; //Mismo que la habilidad q lo produce
		this.name = effect.name; //Mismo que la habilidad q lo produce
		this.remainActiveTurns = effect.remainActiveTurns; //Turnos que le quedan al efecto
		this.isActive = effect.isActive; //No se si es necesario , por si acaso lo pongo // Es mas rapido que comprobar si los turnos restantes son 0 o menos asi que lo tomamos
		
		//Basicamente gracias a este atributo podemos volver al valor original de ataque, defensa ... (valor base + valor afinidad + valor dado por otros efectos SIN INCLUIR este)
		//Se debe inicializar como array vacio;
		this.appliedValues = effect.appliedValues; //Array que contiene los valores totales aplicados a aquellas stats que modifican 

		//EXPERIMENTAL
		this.effectFunction = effect.effectFunction;
	}

	nextTurn(input){
		var that = this;
		console.log("Another turn for Effect " + that.name);//DEBUG
		that.remainActiveTurns--;
		if(that.remainActiveTurns<=0){
			that.isActive = false;
			//Se podria hacer algo para que cuando ocurra esto , avise automaticamente al actor para que lo elimine de la lista ??
			//O tiene el actor que checkear la lista para eliminarlo.
			//CALLBACK ??

			//EL bind se utiliza para arreglar el this de la funcion , que se refiera al heroe
			//Se crean dos nuevas funciones pero con un nuevo target en el this que es el heroe.
			var Rcallback = input.callback.bind(input.that); //LLamada al callback para que restaure los valores adecuados del heroe.
			var Rcallback2 = input.callback2.bind(input.that); //LLamada al callback para que limpie el efecto del heroe.

			//input.callback2({pos: input.pos}).bind(input.that);//Limpia el efecto del heroe.

			//LLamada de los callback
			Rcallback({apply: false , effect: that});//Desaplica el efecto (referido principalmente a las stats);
			Rcallback2({pos: input.pos});//Borra el efecto de la lista de efectos del heroe
		}
	}
}