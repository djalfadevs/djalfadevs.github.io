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

/*
Objetos Log -> Para poder replicar los resultados de la simulacion en la parte visual necesitamos cierta informacion
Esta informacion que se produce DURANTE la simulacion como por ejemplo si se ataca o lanza habilidad
no es recogida por nuestras clases team o hero , por tanto es responsabilidad de simulation guardarla para poder despues 
replicar un apartado visual de esta.

Log{
  -isPhysicalHit -> Si es true es un golpe normal , mientras que en cambio si se trata de una habilidad sera false; -> isPhysicalHit
  -Enemigo -> referencia al enemigo a traves de la cual podremos hallar la carta enemiga que la refleja -> enemy
  -Aliado -> referencia al aliado a traves de la cual podremos hallar la carta aliada que la refleja _> ally
}

ADEMAS GUARDAREMOS UN LOG POR TURNO DE FORMA QUE PODAMOS TENER UN REGISTRO
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
		
		this.log = [] //Log de la simulacion ,
		this.lastMovement = null // Ultimo movimiento de la simulacion

	}
    
    //funcion auxiliar para aplicar las habilidades
    //Parametros: input.charToCheck -> Heroe a comprobar
    //				input.team -> Equipo 

    HabilidadAux(input){
        var newAb=false
        var i=0
        var stop=false
        while((i<input.charToCheck.abilities.length)&&(!stop)){
              if(input.charToCheck.abilities[i].isReady){  
               this.log[this.turn].abilityID=input.charToCheck.abilities[i].ID;//Se añade al log que habilidad se va a usar
               this.log[this.turn].abilitieTarjets= [];
               switch(input.charToCheck.abilities[i].ID){
                       //CASO 1 Y 3, BUSCAMOS UN OBJETIVO ALEATORIO PARA MEJORAR SUS ESTADISTICAS, DESPUES DE ESTO, NO VA A ATACAR, POR LO QUE PONEMOS NEWAB A TRUE
                       //EL OBJETIVO ALEATORIO ESTA DENTRO DEL EQUIPO DEL QUE LO LANZA
                      case 1:
                      case "1":
                      case 3:
                      case "3":
                       var target=Math.floor(Math.random() * input.team.team.length);
                       input.charToCheck.abilities[i].useAbilitie(input.team.team[target])
                       this.log[this.turn].abilitieTarjets.push(input.team.team[target]);
                       newAb=true
                       break;
                       //ESTE CASO ES LA CURA, BUSCAMOS EL OBJETIVO CON MENOR VIDA (QUE ESTE VIVO) DE NUESTRO EQUIPO PARA CURARLO, TAMPOCO SE PUEDE ATACAR TRAS ESTO
                      case "2":
                      case 2:
                       var target=-1
                       var flag=1
                       for(var j=0;j<input.team.team.length;j++){
                           if(((input.team.team[j].HP/input.team.team[j].baseHP)<=flag)&&(input.team.team[j].HP>0)){
                               flag=(input.team.team[j].HP/input.team.team[j].baseHP)
                               target=j
                           }
                       }
                       this.log[this.turn].abilitieTarjets.push(input.team.team[target]);
                       input.charToCheck.abilities[i].useAbilitie(input.team.team[target])
                       newAb=true
                       break;
                       //ESTOS CASOS SON EFECTOS QUE SE VAN A APLICAR EN EL SIGUIENTE ATAQUE, POR LO QUE NECESITAMOS QUE NEWAB SEA FALSE
                      case 4:
                      case "4":
                      case 5:
                      case "5":
                      this.log[this.turn].abilitieTarjets.push(input.charToCheck);
                      input.charToCheck.abilities[i].useAbilitie(input.charToCheck)
                      break;
                      default:
                      break;
                }
                  stop=true
            }
            else{
                i++
            }
        }
        return newAb
    }
    
    
	//Realiza una iteracion en la simulación (Es decir un alido/enemigo ataca o lanza habilidad a un alido/enemigo)
	simulate(input){

		this.log.push({isPhysicalHit:true});//NUEVO TURNO EN EL LOG , es golpe fisico esta predeterminado

		if(this.turn % 2 == 0)//El turno es par y te toca atacar a ti
		{
			var attackedEnemy = this.enemys.stats.maxAggroActor
			var attackerAllie = this.allies.stats.attackOrder[this.allieAttacking];

      //Log info
      this.log[this.turn].ally = attackerAllie;
      this.log[this.turn].enemy = attackedEnemy;
            //si se ejecuta una habilidad que no permite atacar tras usarla, se devolvera true y no habra Damage
            if(!this.HabilidadAux({attacked:attackedEnemy,team:this.allies,charToCheck:attackerAllie})){
               var DDamage = attackerAllie.attackPoints({defence:attackedEnemy.defence,evasion:attackedEnemy.evasion});
               attackedEnemy.HP-=DDamage;
               console.log("El aliado " + attackerAllie.name + " ha atacado a " + attackedEnemy.name)
               this.log[this.turn].TDamage = DDamage;
               //CASO ESPECIAL (RECOLOCAR ORDEN DE ATAQUE SI EL HEROE MUERE)
               if(attackedEnemy.HP<=0){
                  attackedEnemy.HP=0
                  this.enemys.stats.aliveActors--;
                  this.enemys.updateMaxAggroActor({isAdded:false,actor:attackedEnemy});
                  this.enemys.updateAttackOrder({newRound:false,turn:this.enemyAttacking,hero:attackedEnemy})
               }

               //Log Info
              
            }
            else{
            	//console.log("El aliado " + attackerAllie.name + " lanzo una habilidad " )

              //Log Info
              this.log[this.turn].isPhysicalHit=false;
            }

           
			//console.log("Se ha efectuado un daño de " + DDamage);


		}
		else // El turno es impar y le toca atacar a tu enemigo
		{
			var attackedAllie = this.allies.stats.maxAggroActor // Se determina que aliado es atacado , QUIZA MEJOR DETERMINAR CUANDO MUERA UN ALIADO Y SE PASA BIEN AL CONSTRUCTOR
			var attackerEnemy = this.enemys.stats.attackOrder[this.enemyAttacking];
      this.log[this.turn].ally = attackedAllie;
      this.log[this.turn].enemy = attackerEnemy;
            //si se ejecuta una habilidad que no permite atacar tras usarla, se devolvera true y no habra Damage
        if(!this.HabilidadAux({attacked:attackedAllie,team:this.enemys,charToCheck:attackerEnemy})){
				    var DDamage = attackerEnemy.attackPoints({defence:attackedAllie.defence,evasion:attackedAllie.evasion});
				    attackedAllie.HP-=DDamage;
				    console.log("El enemigo " + attackerEnemy.name + " ha atacado a " + attackedAllie.name)
            this.log[this.turn].TDamage = DDamage;
			     //console.log("Se ha efectuado un daño de " + DDamage);

             //CASO ESPECIAL (RECOLOCAR ORDEN DE ATAQUE SI EL HEROE MUERE)
               if(attackedAllie.HP<=0){
                  attackedAllie.HP=0
                  this.allies.stats.aliveActors--;
                  this.allies.updateMaxAggroActor({isAdded:false,actor:attackedAllie});
                  this.allies.updateAttackOrder({newRound:false,turn:this.allieAttacking,hero:attackedAllie})

               }

            }
            else{
            	//console.log("El enemigo " + attackerEnemy.name + " lanzo una habilidad ")
              this.log[this.turn].isPhysicalHit=false;
            }

		}
	} 
	 
	nextTurn(input){

   return new Promise(resolve=>{
          this.turn ++;//Sube en uno el turno de la simulacion

          if(this.turn%2 == 0){
            this.allieAttacking +=1;//Actualiza el numero que nos dira que heroe/monster ataca 
            this.allieAttacking = this.allieAttacking % this.allies.stats.aliveActors
          }
          else
          {
            this.enemyAttacking +=1;
            this.enemyAttacking = this.enemyAttacking % this.enemys.stats.aliveActors;//Actualiza el numero que nos dira que heroe/monster ataca
          }

          //LLamada a equipos / heroes / habilidades / efectos
          this.allies.nextTurn(this.allieAttacking);
          this.enemys.nextTurn(this.enemyAttacking);

          //Calculas el actor con mayor aggro.
          //Al llamarlo al finalizar el turno nos ahorramos tener que llamarlo en algun tipo de callback
          //cuando la vida de un aliado o enemigo
          //Es cierto que es menos eficiente pero menos lioso 
          this.allies.updateMaxAggroActor({isAdded:false});
          this.enemys.updateMaxAggroActor({isAdded:false});
          resolve();
    })


	}

	resetSimulation(){
    	//reseteamos los valores de los equipos y de los heroes
    	this.allies.resetToBaseAttribValue();
    	this.enemys.resetToBaseAttribValue();

    	//Dejamos todos los valores de la simulacion listos para tener otros valores. Asi cuando se vaya que realizar
    	//una nueva simulacion , si estos no se han establecido se produciran errores de lectura y no de tener valores que no son
    	this.turn=0;
    	this.enemyAttacking=0;
    	this.allieAttacking=0;
		this.log = [] //Log de la simulacion
		this.lastMovement = null // Ultimo movimiento de la simulacion
		this.escenario = null 
    }

    SetSimulationtoStartState(){
        this.allies = new Team({ //Se llama al constructor de Team
        //El constructor de Team utiliza solo los valores que se le pasan como input
        //Por tanto tendra los valores inicializados como se describe a continuacion
        //Estos valores podrian ponerse directamente en el constructor
        //ya que solo existen dos objetos Team en todo el juego que son estos y reciben el mismo parametro
        team:[],
        stats:{herosFaction:[0,0,0],aliveActors:0},
          //Por otro lado 
          //tendriamos la variable .attackOrder Y .maxAggroActor que ahora mismo serian undefined
        restrictions:{maxHeros:0,maxHerosFaction:[0,0,0]},
        synergies:[]})
        this.enemys = new Team({ //Se llama al constructor de Team
        //El constructor de Team utiliza solo los valores que se le pasan como input
        //Por tanto tendra los valores inicializados como se describe a continuacion
        //Estos valores podrian ponerse directamente en el constructor
        //ya que solo existen dos objetos Team en todo el juego que son estos y reciben el mismo parametro
        team:[],
        stats:{herosFaction:[0,0,0],aliveActors:0},
          //Por otro lado 
          //tendriamos la variable .attackOrder Y .maxAggroActor que ahora mismo serian undefined
        restrictions:{maxHeros:0,maxHerosFaction:[0,0,0]},
        synergies:[]})

        this.turn=0;
        this.enemyAttacking=0;
        this.allieAttacking=0;
        this.log = [] //Log de la simulacion
        this.lastMovement = null // Ultimo movimiento de la simulacion
        this.escenario = null 
    }
}