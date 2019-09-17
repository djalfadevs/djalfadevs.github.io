'use strict'
//Configuracion del juego para Phaser
//La parte de scale se ha definido para que el canvas funcione de forma responsive
var config = {
	type: Phaser.AUTO,
	width: 1024,
	height: 768,
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH
	},
	autoRound: false,
	//De momento solo hay una escena de prueba
	scene: [TestScene]
};

var game = new Phaser.Game(config);

