'use strict'
//Esta escena se corresponde con aquella en la que se simula la mision 
//Es decir se trata de la escena de pelea en la que vemos que un equipo se enfrenta a otro
//Por tanto en esta escena tambien encontraremos la interaccion del usuario en la pelea que sera a traves de 
//la seleccion del objetivo de los ataques de tus heroes y (esto a lo mejor se descarta) , el lanzamiento de ultis
//Tambien habra que tener en cuenta si existe algun tipo de modo rapido o algo asi q el usuario pueda activar


class SimulationScene extends Phaser.Scene 
{
	constructor () {
		super({key: 'SimulationScene'})
		this.extend = 
			{
			pauseButton:null,
			cards:{
				allies:[],
				enemies:[],
				},
			texts:null
			
			}

	}

	preload(){
		this.load.image('background','Assets/Testing/background.jpg')
		this.load.image('pause','Assets/Testing/pause.png');


		this.load.image('buff','Assets/Testing/buff.png');
	}

	create(){
		var that = this;
		//Inicializacion de variables propias
		this.extend.cards = {allies: [], enemies: []}

		var simulation = game.global.simulation;
		//Fondo de batalla
		var background = this.add.sprite(960,280,simulation.escenario);

		//PAUSA
		this.extend.pauseButton = this.add.sprite(100,100,'pause')
		.setInteractive()
		.on('pointerdown',()=>{
			this.scene.launch('PauseScene');
			this.scene.pause();
		})


		//Crear las cartas a partir de los personajes de ambos equipos.
		for(var j = 0; j<simulation.allies.team.length; j++){
			this.extend.cards.allies[j] = new Card(this,200+j*200,900,simulation.allies.team[j],800,500)
		}

		for(var i = 0; i<simulation.enemys.team.length; i++){
			this.extend.cards.enemies[i] = new Card(this,1100+i*200,900,simulation.enemys.team[i],1100,500)
		}

		//Funcion asincrona que realiza toda la ejecucion de la escena
		var auxSimulationFunct = async function(){
					while((game.global.simulation.allies.stats.aliveActors>0)&&(game.global.simulation.enemys.stats.aliveActors>0)){
						await that.simulation();//Simulacion tanto grafica como interna(logica) de la batalla
					}
					console.log("Final Batalla")

					if(game.global.simulation.allies.stats.aliveActors>0){//VICTORIA
						console.log("VICTORIA")//debug
					}
					else//DERROTA
					{
						console.log("DERROTA")//debug
					}
		}
		
		auxSimulationFunct()
			

		//var testCard = new Card(this,200,200,testHero2);

		//this.extend.cards.allies[0].attackAnimation();//DEBUG
		//this.extend.cards.enemies[0].attackAnimation();//DEBUG
		//testCard.updateLifeBarAnimation();

		/* 		Test
		var msg = new Object();
		msg.event = "SIGNUP"
		msg.name = "name"
		msg.password = "name"
		game.global.socket.send(JSON.stringify(msg))

		msg = new Object();
		msg.event = "LOGIN"
		msg.name = "name"
		msg.password = "name"
		game.global.socket.send(JSON.stringify(msg))
		*/
	

	}

	update(){

	}

	simulation(){

		return new Promise(resolve =>{
				console.log(game.global.simulation)//DEBUG
				var simulation = game.global.simulation;//Realiza un turno de la simulacion
				simulation.simulate();
				
				//Hasta que no acabe no pinta (aqui no hay problema porque no hay nada asincrono).
				this.pintar()
				.then(()=>{simulation.nextTurn();})
				.then(()=>resolve());
				//Hasta que no termine de pintar no puede cambiar de turno
				

		})
	
	}
	
	pintar(){

		return new Promise(resolve =>{
			var simulation = game.global.simulation;
			var turnlog = simulation.log[simulation.turn];
			var allyCard;
			var enemyCard;

		//Hasta que no acabe la animacion de ataque o habilidad esto no se puede lanzar
			var returnFunctionAux = function(){
				return Promise.all([allyCard.returnMoveAnimation(),enemyCard.returnMoveAnimation()])	
			}

		//Seleccionamos las dos cartas que van a realizar la accion
			for(var i = 0 ; i<this.extend.cards.allies.length; i++){
				if(this.extend.cards.allies[i].hero===turnlog.ally){
					allyCard = this.extend.cards.allies[i];
				}
			}

			for(var j = 0 ; j<this.extend.cards.enemies.length; j++){
				if(this.extend.cards.enemies[j].hero===turnlog.enemy){
					enemyCard = this.extend.cards.enemies[j];
				}
			}

			Promise.all([allyCard.moveAnimation(),enemyCard.moveAnimation()])
			.then(()=>{
			//Hasta que no lleguen ambas cartas al sitio no puede continuar con esto
			//MODIFICAR QUIZA EL ATTACKANIMATION DE UNA CARTA DEBA LLAMAR AL UPDATELIFEBAR DEL ENEMIGO
				if(turnlog.isPhysicalHit && !(turnlog.abilityID!=null))//Golpe Fisico Exclusivamente
				{
					if(simulation.turn % 2 == 0)//Turno par
					{
					return allyCard.attackAnimation({isEnemy:false,enemy:enemyCard})
				/*
				.then(() => {console.log("Animacion de ataque aliado ")//DEBUG)
							returnFunctionAux();
				});
				*/
					}
					else //Turno impar
					{
					return enemyCard.attackAnimation({isEnemy:true,enemy:allyCard})
				/*
				.then(() => {console.log("Animacion de ataque enemigo ")//DEBUG)
							returnFunctionAux();
				});
				*/
					}
				}
				else//Habilidad CON O SIN DAÑO
				{
					if(simulation.turn % 2 == 0)//Turno par
					{
					return allyCard.useAbilityAnimation({isEnemy:false,enemy:enemyCard,turnlog:turnlog})
				/*
				.then(() => {console.log("Animacion de habilidad aliado");//DEBUG
							returnFunctionAux();
				});
				*/

					}
					else //Turno impar
					{
				//enemyCard.useAbilityAnimation();
					return enemyCard.useAbilityAnimation({isEnemy:true,enemy:allyCard,turnlog:turnlog})
				/*
				.then(() => {console.log("Animacion de habilidad enemigo");//DEBUG
							returnFunctionAux();
				});
				*/
					}
				}
			})
			.then(()=>returnFunctionAux())
			.then(()=>resolve())
		})

	}
}
