'use strict';
//Esta clase guarda toda la informacion relacionada con la simulacion de una mision
//Es decir guarda desde el escenario en el que se produce
//hasta los equipos que se estan enfrentando
class Simulation {
	constructor(simulation){
		//Toda la informacion relacionada con el escenario , desde aquellas ventajas (si las hay) que proporciona hasta imagenes 
		this.escenario = simulation.escenario;

		this.allies = simulation.allies; //Equipo con el que se realiza la simulacion (Array de Heros ??)// Mejor crear clase team que albergue ademas de un array de heroes mas datos del posible equipo
		this.enemys = simulation.enemys; // Equipo contra el que te enfrentas en la simulacion (Array de Enemys)
		
		//Recoge toda la informacion que el jugador otorga con interaccion a la simulacion 
		//this.inputJugador = simulation.inputJugador;
		//Se podria ir actualizando el valor de ese atributo constantemente pero quizas mejor pasarlo como parametro de simulate()

		//Logs e info sobre el desarrollo de la simulacion (a partir de estos se puede hacer la parte visual)
		this.turn = simulation.turn;//Normalmente se inicializara en 0 ;
		this.enemyAttacking = simulation.enemyAttacking; //Determina el enemigo que le toca atacar
		this.alieAttacking = simulation.alieAttacking;	//Determina el aliado de tu equipo al que le toca atacar
		this.attackedAllie = simulation.attackedAllie; //Se determinan a la hora de simular
		this.attackedEnemy = simulation.attackedEnemy; //== ========== = == ==== == simular
		this.log = null //Log de la simulacion
		this.lastMovement = null // Ultimo movimiento de la simulacion

	}
	//Realiza una iteracion en la simulación (Combate principalmente)
	simulate(input){
		if(turn % 2 == 0)//El turno es par
		{
			attackedEnemy = getAttackedActor({isAlly:false});//Se determina a que enemigo atacar (PODRAN SER VARIOS ????)
			//REALMENTE LAS VARIABLES attackedAllie y attackedEnemy dejarian de tener sentido , simplemente se tomaria 
			//del team correspondiente (allies o eneys ) del apartado de stats la propiedad de MaxAggroActor
			//ANGEL valora esto y me dices
			//Comprueba tambien que los cambios que he realizado en las otras clases funcionan , gracias.


		}
		else // El turno es impar
		{
			attackedAllie = getAttackedActor({isAlly:true}); // Se determina que aliado es atacado , QUIZA MEJOR DETERMINAR CUANDO MUERA UN ALIADO Y SE PASA BIEN AL CONSTRUCTOR
		}
	} 

	//Determina el actor que se debe atacar
	//Parametro input.isAlly -> Determina si se calcula el de mayor aggro de los aliados o enemigos
	getAttackedActor(input){
		var that = this;
		var AttaActor = {aggro: -1 , HP: 100}; // Falsificamos el supuesto personaje inicial para que no haya valores null
		var chosenTeam;//

		var AuxFunc = function(input2){
			if(input2){	
				chosenTeam = that.allies;//Se va a calcular el de mayor aggro de los aliados
			}
			else
			{
				chosenTeam = that.enemys;//Se va a calcular el de mayor aggro de los enemigos
			}
		}

		AuxFunc(input.isAlly);//DETERMINA SI SE VA A CALCULAR EL ACTOR DE MAYOR AGGRO DE UN EQUIPO U OTRO

		AttaActor = chosenTeam.stats.maxAggroActor;

		//IMPORTANTE
		//PORQUE NO EN VEZ DE CALCULARLO CADA VEZ HACEMOS UNA VARIABLE EN EL APARTADO DE STATS
		//DEL EQUIPO QUE GUARDE UNA REFERENCIA AL HEROE CON MAYOR AGGRO DE TODOS LOS INTEGRANTES
		//ASI PUES SE ACTUALIZARIA UNA VEZ SE HAYAN APLICADO LAS SINERGIAS
		//Y TAMBIEN TENER EN CUENTA CUANDO SE APLICA UN EFECTO A UN HEROE MEDIANTE UN CALLBACK.

		return AttActor;
	}

}