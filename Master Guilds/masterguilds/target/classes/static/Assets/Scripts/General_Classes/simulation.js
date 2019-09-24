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
		this.enemyAttacking = 0;
		//Determina el aliado de tu equipo al que le toca atacar // Es un numero que da la posicion de un array 
		this.allieAttacking = 0;
		
		this.log = null //Log de la simulacion
		this.lastMovement = null // Ultimo movimiento de la simulacion

	}
    
    //funcion auxiliar para aplicar las habilidades
    //Parametros: input.charToCheck -> Heroe a comprobar
    //				input.team -> Equipo 

    HabilidadAux(input){
        var newAb=false
        for(var i=0;i<input.charToCheck.abilites;i++){
            if(input.charToCheck.abilities[i].isReady){  
               switch(input.charToCheck.abilities[i].ID){
                       //CASO 1 Y 3, BUSCAMOS UN OBJETIVO ALEATORIO PARA MEJORAR SUS ESTADISTICAS, DESPUES DE ESTO, NO VA A ATACAR, POR LO QUE PONEMOS NEWAB A TRUE
                      case 1:
                      case 3:
                       var target=Math.floor(Math.random() * input.team.teamLength) + 1
                       input.charToCheck.abilities[i].useAbilitie(input.team[target])
                       newAb=true
                       break;
                       //ESTE CASO ES LA CURA, BUSCAMOS EL OBJETIVO CON MENOR VIDA (QUE ESTE VIVO) DE NUESTRO EQUIPO PARA CURARLO, TAMPOCO SE PUEDE ATACAR TRAS ESTO
                      case 2:
                       var target=-1
                       var flag=Math.POSITIVE_INFINITY
                       for(var j=0;j<input.team.teamLength;j++){
                           if((Math.min(flag,input.team[j].HP)!=flag)&&(input.team[j].HP>0)){
                               flag=Math.min(flag,input.team[j].HP)
                               target=j
                           }
                       }
                       input.charToCheck.abilites[i].useAbilitie(input.team[target])
                       newAb=true
                       break;
                       //ESTOS CASOS SON EFECTOS QUE SE VAN A APLICAR EN EL SIGUIENTE ATAQUE, POR LO QUE NECESITAMOS QUE NEWAB SEA FALSE
                      case 4:
                      case 5:
                      input.charToCheck.abilities[i].useAbilitie(input.charToCheck)
                      break;
                      default:
                      break;
                }
            }
        }
        return newAb
    }
    
    
	//Realiza una iteracion en la simulación (Combate principalmente)
	simulate(input){
		

			


		if(this.turn % 2 == 0)//El turno es par y te toca atacar a ti
		{
			var attackedEnemy = this.enemys.stats.maxAggroActor
			var attackerAllie = this.allies.stats.attackOrder[this.allieAttacking];
            //si se ejecuta una habilidad que no permite atacar tras usarla, se devolvera true y no habra Damage
            if(!this.HabilidadAux({attacked:attackedEnemy,team:this.allies,charToCheck:attackerAllie})){
               var DDamage = attackerAllie.attackPoints({defence:attackedEnemy.defence,evasion:attackedEnemy.evasion});
               attackedEnemy.HP-=DDamage;
            }

            console.log("El aliado " + attackerAllie.name + " ha atacado a " + attackedEnemy.name)
			//console.log("Se ha efectuado un daño de " + DDamage);


		}
		else // El turno es impar y le toca atacar a tu enemigo
		{
			var attackedAllie = this.allies.stats.maxAggroActor // Se determina que aliado es atacado , QUIZA MEJOR DETERMINAR CUANDO MUERA UN ALIADO Y SE PASA BIEN AL CONSTRUCTOR
			var attackerEnemy = this.allies.stats.attackOrder[this.enemyAttacking];
            //si se ejecuta una habilidad que no permite atacar tras usarla, se devolvera true y no habra Damage
            if(!this.HabilidadAux({attacked:attackedAllie,team:this.enemys,charToCheck:attackerEnemy})){
			var DDamage = attackerEnemy.attackPoints({defence:attackedAllie.defence,evasion:attackedEnemy.evasion});
			attackedAllie.HP-=DDamage;

			console.log("El enemigo " + attackerEnemy.name + " ha atacado a " + attackedEnemy.name)
			//console.log("Se ha efectuado un daño de " + DDamage);

			//FALTA INCLUIR HABILIDADES

            }

		}
	} 

	nextTurn(input){

		this.turn ++;//Sube en uno el turno de la simulacion
		this.enemyAttacking = this.turn % this.enemys.team.stats.aliveActors;//Actualiza el numero que nos dira que heroe/monster ataca
		this.allieAttacking = this.turn % this.allies.team.stats.aliveActors;//Actualiza el numero que nos dira que heroe/monster ataca 

		//LLamada a equipos / heroes / habilidades / efectos
		this.allies.nextTurn(allieAttacking);
		this.enemys.nextTurn(enemyAttacking);

		//Calculas el actor con mayor aggro.
		this.allies.updateMaxAggroActor({isAdded:false});
		this.enemys.updateMaxAggroActor({isAdded:false});

	}
}