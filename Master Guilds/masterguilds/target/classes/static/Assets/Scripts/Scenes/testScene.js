//La funcion de esta escena es simplemente de testeo
class TestScene extends Phaser.Scene {
	constructor () {
		super({key: 'TestScene', active:true})

	}
	preload(){
		var testSpriteImage = this.load.image('sprite','Assets/Testing/sprite.png');
	}
	create(){
		//Prueba para comprobar el responsive con graficos
		var gra = this.add.graphics();
		gra.fillStyle(0xff3300,1);
		gra.fillRect(100,200,600,300);
		//
		//Prueba para comprobar responsive con sprites
		var sprite = this.add.image(100,100,'sprite');
	}

	update(){

	}
}