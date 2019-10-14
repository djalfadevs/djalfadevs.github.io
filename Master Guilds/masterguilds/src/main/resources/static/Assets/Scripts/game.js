'use strict'
//Configuracion del juego para Phaser
//La parte de scale se ha definido para que el canvas funcione de forma responsive

//window.onload = function(){ //Para que haya cargado la ventana

	var config = {
	type: Phaser.AUTO,
	width: 1920,
	height: 1080,
	parent:'Mastera',
	dom: {
		createContainer:true
	},
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH
	},
	autoRound: false,

	//De momento solo hay una escena de prueba
	//scene: [SimulationScene,PauseScene]
    scene:[preload,LOGO,contact,login,register,title,shop,settings,ranking,
    mainMenu,lang,deck,combatMenu,collection,chapter,
    SimulationScene,PauseScene,FailLogin,FailRegister,FailPass]
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
		/*
		Simulation: Al principio se crea una unica simulacion , esta unica simulacion se inicializara 
		con valores base como turn:0 ; ademas tambien se crearan dos equipos con una inicializacion base
		que se guardaran en variables de simulacion
		De esta forma obtenemos una simulacion con referencia a dos equipos y todos con valores inicializados
		de forma base (me refiero a valores neutros iniciales como 0 en la mayoria de casos , arrays vacios etc)
		RESUMEN: Se crea un objeto simulacion y dos equipos todo ello inicializado a valores base que 
		habra que modificar en funcion de ciertas necesidades (restricciones de mision principalmente)
		*/
		simulation : new Simulation({
			turn:0,
			allies:new Team({ //Se llama al constructor de Team
				//El constructor de Team utiliza solo los valores que se le pasan como input
				//Por tanto tendra los valores inicializados como se describe a continuacion
				//Estos valores podrian ponerse directamente en el constructor
				//ya que solo existen dos objetos Team en todo el juego que son estos y reciben el mismo parametro
				team:[],
				stats:{herosFaction:[0,0,0],aliveActors:0},
					//Por otro lado 
					//tendriamos la variable .attackOrder Y .maxAggroActor que ahora mismo serian undefined
				restrictions:{maxHeros:0,maxHerosFaction:[0,0,0]},
				synergies:[]}),
			enemys:new Team({ //Se llama al constructor de Team
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
			//No pasamos .escenario por tanto sera undefined su valor
			//Por otro lado .enemyAttacking y .allieAttacking se ponen a 0 en el constructor
			//.log y .lastmovement se ponen a null en el constructor 
		}),  
		misions: null,
		ranking: null,
		store: null,
		socket:null,
	}

	game.global.socket = new WebSocket("ws://"+location.host+"/mastera");

	game.global.socket.onopen = () => {
		console.log("Se ha abierto el WebSocket");
	}
	game.global.socket.onclose = () => {
		console.log("Websocket close")
	}

	game.global.socket.onmessage = (message) => {
		var msg = JSON.parse(message.data)
		console.log(msg);
		switch (msg.event) {
			case "SUCCESSLOGIN":
				game.global.user = msg.userinfo;
				game.scene.scenes[3].scene.transition({target:'title',duration:0})
				//ESTO LO HACE EL PROPIO LOGIN SI ES CORRECTO
				/* 
				var aux = new Object();
        		aux.event = "UPDATEUSERINFO"
        		aux.user = game.global.user;
        		*/
        		/*
        		const auxWebsocket = new WebSocket("ws://"+location.host+"/mastera");
        		auxWebsocket.onopen = () => {
        			auxWebsocket.send(JSON.stringify(aux))
        			game.scene.scenes[3].scene.transition({target:'title',duration:100})
        			;}
        		*/
			break;
			case "FAILLOGIN":
			break;
			case "GETMISIONS":
				game.global.misions = msg.misions;
				console.log(game.global.misions)//DEBUG
			break;
			default:
		}

	}

	
//}


