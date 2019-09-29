'use strict'
//Esta escena se corresponde con aquella en la que se simula la mision 
//Es decir se trata de la escena de pelea en la que vemos que un equipo se enfrenta a otro
//Por tanto en esta escena tambien encontraremos la interaccion del usuario en la pelea que sera a traves de 
//la seleccion del objetivo de los ataques de tus heroes y (esto a lo mejor se descarta) , el lanzamiento de ultis
//Tambien habra que tener en cuenta si existe algun tipo de modo rapido o algo asi q el usuario pueda activar


class SimulationScene extends Phaser.Scene 
{
	constructor () {
		super({key: 'SimulationScene', active:true})
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

		this.load.image('gabriela','Assets/Testing/gabriela.png');
		this.load.image('diana','Assets/Testing/diana.png');
		this.load.image('ezna','Assets/Testing/ezna.png');
		this.load.image('elaina','Assets/Testing/elaina.png');

		this.load.image('buff','Assets/Testing/buff.png');
	}

	create(){
		//Inicializacion de variables propias
		this.extend.cards = {allies: [], enemies: []}

		var simulation = game.global.simulation;
		//Fondo de batalla
		var background = this.add.sprite(512,384,'background');

		//this.extend.pauseButton = this.add.sprite(100,100,'pause')
		//.setInteractive()
		//.on('pointerdown',()=>{console.log("Has pulsado el boton de PAUSA")})

		//var camera = this.cameras.main;
		//camera.zoomTo(2,5000);
		//camera.pan(50,50,5000);

		//Crear las cartas a partir de los personajes de ambos equipos.
		for(var j = 0; j<simulation.allies.team.length; j++){
			this.extend.cards.allies[j] = new Card(this,600+j*200,200,simulation.allies.team[j])
		}

		for(var i = 0; i<simulation.enemys.team.length; i++){
			this.extend.cards.enemies[i] = new Card(this,200+i*200,200,simulation.enemys.team[i])
		}

	


		//var testCard = new Card(this,200,200,testHero2);

		this.extend.cards.allies[0].attackAnimation();
		this.extend.cards.enemies[0].attackAnimation();
		//testCard.updateLifeBarAnimation();

	}

	update(){

	}
	
}

var pintarCarta