'use strict'
//Configuracion del juego para Phaser
//La parte de scale se ha definido para que el canvas funcione de forma responsive

window.onload = function(){ //Para que haya cargado la ventana

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

	//VARIABLES GLOBALES (MODELO INSPIRADO EN EL SPACEWAR)
	//user: Datos del usuario , es decir una instancia de la clase user
	//simulation: Guarda los datos de la simulacion que se este realizando en por el jugador , se necesita poder acceder de manera global ya que
	//tendremos que acceder en distintas funciones (create, update ...) en la escena simulationScene
	//misions: debemos guardar un listado de todas las misiones que hay disponibles (Se leera desde un json al iniciar el juego) 
	//store: debemos tener acceso a todos los datos relacionados con la tienda 
	//(Se creara una clase tienda con toda esta informacion y se tendra una instancia)// Tambien (seguramente) puede recibir informacion del servidor.
	game.global = {
		user: null,  
		simulation : null,  
		misions: null,
		store: null,
	}
}


