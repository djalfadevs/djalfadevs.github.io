'use strict'
//Esta clase guarda toda la informacion relacionada con la simulacion de una mision
//Es decir guarda desde el escenario en el que se produce
//hasta los equipos que se estan enfrentando
class Simulation {
	constructor(simulation){
		//Toda la informacion relacionada con el escenario , desde aquellas ventajas (si las hay) que proporciona hasta imagenes 
		this.escenario = simulation.escenario;

		this.team = simulation.team; //Equipo con el que se realiza la simulacion (Array de Heros ??)// Mejor crear clase team que albergue ademas de un array de heroes mas datos del posible equipo
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
			attackedEnemy = getAttackedEnemy(input);//Se determina a que enemigo atacar (PODRAN SER VARIOS ????)


		}
		else // El turno es impar
		{
			attackedAllie = getAttackedAllie(input); // Se determina que aliado es atacado , QUIZA MEJOR DETERMINAR CUANDO MUERA UN ALIADO Y SE PASA BIEN AL CONSTRUCTOR
		}
	} 

	//Determina el enemigo que se debe atacar
	getAttackedEnemy(input){
		return input.attackedEnemy; //AUN NO ESTA DETERMINADO pero sera a traves del input como consigamos esta informacion
	}

	//Determina el aliado que es atacado
	getAttackedAllie(input){
		//De primeras la simulacion ya tiene asignado el personaje de mayor aggro en este parametro (FALTA HACERLO)
		var that = this; //Necesario ??
		var Attallie = {aggro: -1 , HP: 100}; // Falsificamos el supuesto personaje inicial para que no haya valores null
		for (var i = 0; i < that.team.length ; i++){ //Recorre la lista de aliados
			if(that.team[i].HD > 0) // Sigue vivo ese aliado (heroe)
				if(that.Attallie.aggro < that.team[i].aggro){ // Si tiene menos aggro
					Attallie = that.team[i];
				}
		}

		return Attallie;
	}
}