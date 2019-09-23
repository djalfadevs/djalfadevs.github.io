'use strict';
//Esta clase guarda toda la informacion relacionada con la simulacion de una mision
//Es decir guarda desde el escenario en el que se produce
//hasta los equipos que se estan enfrentando

//¿COMO SE HALLA QUE PERSONAJE LE TOCA ATACAR?
/* Se me ha ocurrido que simulation guarde dos variables (una para equipo), 
estas variables basicamente guardan un numero entre 0 y longitud del array de actores del equipo -1 
cada turno se va sumando uno hasta llegar al maximo que volveria a 0
a partir de esto, ese numero sirve para coger una referencia que esta en team.stats.attackOrder
*/

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

		//Se inicializan a 0
		//Determina el enemigo que le toca atacar // Es un numero que da la posicion de un array 
		this.enemyAttacking = simulation.enemyAttacking;
		//Determina el aliado de tu equipo al que le toca atacar // Es un numero que da la posicion de un array 
		this.allieAttacking = simulation.allieAttacking;
		
		this.log = null //Log de la simulacion
		this.lastMovement = null // Ultimo movimiento de la simulacion

	}
	//Realiza una iteracion en la simulación (Combate principalmente)
	simulate(input){
		if(turn % 2 == 0)//El turno es par y te toca atacar a ti
		{
			var attackedEnemy = this.enemys.stats.maxAggroActor
			var attackerAllie = this.allies.stats.attackOrder[allieAttacking];


		}
		else // El turno es impar y le toca atacar a tu enemigo
		{
			var attackedAllie = this.allies.stats.maxAggroActor // Se determina que aliado es atacado , QUIZA MEJOR DETERMINAR CUANDO MUERA UN ALIADO Y SE PASA BIEN AL CONSTRUCTOR
			var attackerEnemy = this.allies.stats.attackOrder[enemyAttacking];
		}
	} 

	nextTurn(input){

		this.turn ++;//Sube en uno el turno de la simulacion
		this.enemyAttacking = this.turn % this.enemys.team.length;//Actualiza el numero que nos dira que heroe/monster ataca
		this.allieAttacking = this.turn % this.allies.team.length;//Actualiza el numero que nos dira que heroe/monster ataca 

		//FALTA llamadas a los equipos para que a su vez llamen a los heroes.

	}
}