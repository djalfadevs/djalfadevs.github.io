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
			texts:null,
			click:null,
			hit:null,
			crit:null,
			heal:null,
			buff:null,
			buffD:null
			
			}

	}

	preload(){
		this.load.image('background','Assets/Testing/background.jpg')
		this.load.image('pause','Assets/Testing/pause.png');


		this.load.image('buff','Assets/Testing/buff.png');
	}

	create(){

		var that = this;
		that.extend.click=that.sound.add('click');
		that.extend.hit=that.sound.add('hit');
		that.extend.crit=that.sound.add('crit');
		that.extend.heal=that.sound.add('heal');
		that.extend.buff=that.sound.add('buff');
		that.extend.buffD=that.sound.add('buffD');
		that.extend.click.setVolume(game.global.user.evol)
		that.extend.hit.setVolume(game.global.user.evol)
		that.extend.crit.setVolume(game.global.user.evol)
		that.extend.buff.setVolume(game.global.user.evol)
		that.extend.buffD.setVolume(game.global.user.evol)
		//Animaciones de escenarios
		this.anims.create({
        key: 'Escenario_japones',
        frames: [
            { key: 'Escenario_japones1' },
            { key: 'Escenario_japones2' },
        ],
        frameRate: 1,
        repeat: -1
    	});

		this.anims.create({
        key: 'Escenario_elfico',
        frames: [
            { key: 'Escenario_elfico1' },
            { key: 'Escenario_elfico2' },
        ],
        frameRate: 1,
        repeat: -1
    	});

    	this.anims.create({
        key: 'Escenario_ferten',
        frames: [
            { key: 'Escenario_steampunk1' },
            { key: 'Escenario_steampunk2' },
        ],
        frameRate: 1,
        repeat: -1
    	});

    	this.anims.create({
        key: 'Escenario_final',
        frames: [
            { key: 'Escenario_final1' },
            { key: 'Escenario_final2' },
            { key: 'Escenario_final3' },
            { key: 'Escenario_final4' },
            { key: 'Escenario_final5' },
            { key: 'Escenario_final6' },
            { key: 'Escenario_final7' },
            { key: 'Escenario_final8' },
            { key: 'Escenario_final9' },
            { key: 'Escenario_final10' },
            { key: 'Escenario_final11' },
        ],
        frameRate: 1,
        repeat: -1
    	});

    	this.anims.create({
        key: 'Escenario_arena',
        frames: [
            { key: 'Escenario_arena1' },
            { key: 'Escenario_arena2' },
            { key: 'Escenario_arena3' },
            { key: 'Escenario_arena4' },
            { key: 'Escenario_arena5' },
            { key: 'Escenario_arena6' },
            { key: 'Escenario_arena7' },
            { key: 'Escenario_arena8' },
            { key: 'Escenario_arena9' },
            { key: 'Escenario_arena10' },
            { key: 'Escenario_arena11' },
            { key: 'Escenario_arena12' },
        ],
        duration: 5600,
        repeat: -1
    	});
		//Inicializacion de variables propias
		this.extend.cards = {allies: [], enemies: []}

		var simulation = game.global.simulation;
		//Fondo de batalla
		var background = this.add.sprite(960,280,'Escenario_arena1');//Inicializa en esta escena , luego ya ejecuta otra animacion
		background.play(simulation.escenario);
		//PAUSA
		this.extend.pauseButton = this.add.sprite(100,100,'PauseButt')
		.setInteractive()
		
		this.extend.pauseButton.on('pointerup',function(){
			that.extend.click.play();
			this.setFrame(0);
			that.scene.launch('PauseScene');
			that.scene.pause();
		})

		this.extend.pauseButton.on('pointerdown',function(){			
			this.setFrame(1);
		})
		
		this.extend.pauseButton.on('pointerout',function(){			
			this.setFrame(0);
		})
		//Crear las cartas a partir de los personajes de ambos equipos.
		for(var j = 0; j<simulation.allies.team.length; j++){
			this.extend.cards.allies[j] = new Card(this,200+j*200,900,simulation.allies.team[j],800,500)
		}

		for(var i = 0; i<simulation.enemys.team.length; i++){
			this.extend.cards.enemies[i] = new Card(this,1100+i*200,900,simulation.enemys.team[i],1100,500)
		}

		var fadeinfunction = function(){
			return new Promise(resolve=>{
			//Efecto de fadeIn (la escena aparece poco a poco)
			//that.scene.setVisible(false);
  			//this.add.text(160,120,'FADE IN CAMERA EFFECT').setOrigin(0.5);
    		//that.scene.setVisible(true);
    		//that.cameras.main.setAlpha(0)
    		that.cameras.main.fadeIn(500);
    		setTimeout(()=>resolve(),500);
			})
		}
		//Funcion asincrona que realiza toda la ejecucion de la escena
		var auxSimulationFunct = async function(){
					await fadeinfunction();
					while((game.global.simulation.allies.stats.aliveActors>0)&&(game.global.simulation.enemys.stats.aliveActors>0)){
						await that.simulation();//Simulacion tanto grafica como interna(logica) de la batalla
					}
					console.log("Final Batalla")

					if(game.global.simulation.allies.stats.aliveActors>0){//VICTORIA
						console.log("VICTORIA")//debug
						that.extend.winOrDefeat = that.add.sprite(960,200,'TextWinEN');
						
						if(game.global.lastScene=="arena"){
							game.global.user.arenaPoints+=15;
							var msg = new Object();
				    		msg.event = "UPDATECONFIGUSER"
				    		msg.userAux = new User(game.global.user);
                			msg.userAux.heros = [];
				    		game.global.socket.send(JSON.stringify(msg))
				        	}
				        //Si supera una mision por primera vez se dan gemas
						//
						that.scene.pause();
						setTimeout(function(){ 
							that.scene.launch('rewardScene');
						 }, 3000);
						

						//LLAMAR SUBIDA DE NIVEL Y O RECOMPENSAS//
						/////////////////////////////////////////

						//RESETEAR SIMULACION Y VOLVER AL MENU O OTRA ESCENA
						//////////////////////////////////////////////////
						
					}
					else//DERROTA
					{
						console.log("DERROTA")//debug
						that.extend.winOrDefeat = that.add.sprite(960,200,'TextDefeatEN');
						
						if(game.global.lastScene=="arena"){
							game.global.user.arenaPoints-=20;
							var msg = new Object();
							msg.event = "UPDATECONFIGUSER"
							msg.userAux = new User(game.global.user);
							msg.userAux.heros = [];
							game.global.socket.send(JSON.stringify(msg))
				        	}
						
						that.scene.pause();
						setTimeout(function(){ 
							that.scene.launch('loseScene');
						 }, 3000);
						
						//RESETEAR SIMULACION Y VOLVER AL MENU O OTRA ESCENA
						//////////////////////////////////////////////////

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
		var that = this;
		return new Promise(resolve =>{
				console.log(game.global.simulation)//DEBUG
				var simulation = game.global.simulation;//Realiza un turno de la simulacion
				simulation.simulate();
				
				//Hasta que no acabe no pinta (aqui no hay problema porque no hay nada asincrono).
				this.pintar()
				.then(()=>{simulation.nextTurn();})
				.then(()=>{that.resetBuffDraw();})
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
			var tarjet;
		//Hasta que no acabe la animacion de ataque o habilidad esto no se puede lanzar
			var returnFunctionAux = function(){
				return Promise.all([allyCard.returnMoveAnimation(),enemyCard.returnMoveAnimation()])	
			}

		//Seleccionamos las dos cartas que van a realizar la accion
			for(var i = 0 ; i<this.extend.cards.allies.length; i++){
				if(this.extend.cards.allies[i].hero===turnlog.ally){
					allyCard = this.extend.cards.allies[i];
				}
				if(turnlog.abilitieTarjets!=null){
					if(this.extend.cards.allies[i].hero===turnlog.abilitieTarjets[0]){
						tarjet = this.extend.cards.allies[i];
					}
				}
			}

			for(var j = 0 ; j<this.extend.cards.enemies.length; j++){
				if(this.extend.cards.enemies[j].hero===turnlog.enemy){
					enemyCard = this.extend.cards.enemies[j];
				}
				if(turnlog.abilitieTarjets!=null){
					if(this.extend.cards.enemies[j].hero===turnlog.abilitieTarjets[0]){
						tarjet = this.extend.cards.enemies[j];
					}
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
					return allyCard.attackAnimation({isEnemy:false,enemy:enemyCard,turnlog:turnlog})
				/*
				.then(() => {console.log("Animacion de ataque aliado ")//DEBUG)
							returnFunctionAux();
				});
				*/
					}
					else //Turno impar
					{
					return enemyCard.attackAnimation({isEnemy:true,enemy:allyCard,turnlog:turnlog})
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
					return allyCard.useAbilityAnimation({isEnemy:false,enemy:enemyCard,turnlog:turnlog,tarjet:tarjet})
				/*
				.then(() => {console.log("Animacion de habilidad aliado");//DEBUG
							returnFunctionAux();
				});
				*/

					}
					else //Turno impar
					{
				//enemyCard.useAbilityAnimation();
					return enemyCard.useAbilityAnimation({isEnemy:true,enemy:allyCard,turnlog:turnlog,tarjet:tarjet})
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

	resetBuffDraw(){
		return new Promise(resolve=>{
			for(var j = 0 ; j<this.extend.cards.enemies.length; j++){
				this.extend.cards.enemies[j].resetDrawBuffs();
			}

			for(var j = 0 ; j<this.extend.cards.allies.length; j++){
				this.extend.cards.allies[j].resetDrawBuffs();
			}
			resolve();
		})		
	}
}
