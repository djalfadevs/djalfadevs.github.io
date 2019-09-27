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
			cards:null
			texts:null
			
			}

	}

	preload(){
		this.load.image('pause','Assets/Testing/pause.png');
	}

	create(){
		extend.pauseButton = this.add.sprite(100,100,'pause')
		.setInteractive()
		.on('pointerdown',()=>{console.log("Has pulsado el boton de PAUSA")})

		var camera = this.cameras.main;
		camera.zoomTo(2,5000);
		camera.pan(50,50,5000);

		var cameraBattleFunction = function(){

		}
	}

	update(){

	}
}

var pintarCarta