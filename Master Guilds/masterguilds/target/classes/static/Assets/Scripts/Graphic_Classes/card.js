var Card = new Phaser.Class({
	initialize:
	function Card(scene,x,y,hero,XG,YG){
		this.scene = scene;
		this.hero = hero;//Duplicado ? si en el constructor no en el resto de funciones
		this.x = x;
		this.y = y;
		this.XG=XG;
		this.YG=YG;
		//Imagen de la carta de personaje
		this.HeroSprite = scene.add.sprite(0,0,this.hero.image_url[0]).setScale(1,1);

		//Rectangulo con la barra de vida se dibujo antes que el marco de la vida

		this.lifeRect = scene.add.rectangle(0,0-100,100,20,6422272);
		
		//Marco de la vida
		//this.lifeBarSprite = scene.add.sprite(x,y-100,'pause');

		//Lista con referencia a los sprite que representan los bufos
		this.buffSprites = [];

		//USAR CONTAINER SI TENEMOS QUE TENER UN ORDEN DE RENDERIZADO 
		this.cardContainer = scene.add.container(0,0,[this.HeroSprite,this.lifeRect]);
		this.cardContainer.setPosition(x,y)

		
	},
	//MODIFICAR habra que fijar una posicion donde todas las cartas se vayan a posicionar
	//Y lo que se hace esq se muevan hacia esa posicion todos en un tiempo fijado (puede depender de la distancia ?)
	//Devuelve la carta a su posicion original
	returnMoveAnimation(input){
		var that = this;
		return new Promise(resolve=>{
			that.scene.tweens.add({
			targets: that.cardContainer,
			x: that.x,
			y: that.y,
			scale: that.cardContainer.scale*2/3,
			duration:1000,
			onComplete: function(){
					resolve();
				}
			})
		})
	},
	//Parametros 
	//			 input-> Mejor si se le pasa la posicion de donde ataca ?
	moveAnimation(input){

		var that = this;

		return new Promise(resolve=>{
				//Desplazamos el container que tiene la carta y la barra de vida
			that.scene.tweens.add({
				targets: that.cardContainer,
				x: that.XG,
				y: that.YG,
				scale: that.cardContainer.scale*1.5,
				duration:1000,
				onComplete: function(){
					resolve();
				}
			})
		})
	

	},

	//input-> Se debe pasar para decir si la carta ataca como aliado o enemigo
	//Debe recibir el daño que se ha hecho 
	//La parte de vida la gestiona cada carta propiamente aparte
	//FALTA HACER QUE REALMENTE SE REALICEN UNA TRAS OTRA (ASINCRONO)
	//MODIFICACION : QUIZA ATTACK ANIMATION DEBERIA LLAMAR AL UPDATELIFEBAR DEL ENEMIGO EN CIERTO PUNTO
	attackAnimation(input){
		var that = this;
		var DamageText;

		var DamageTextTween = function(resolve){
			that.scene.tweens.add({
			targets: DamageText,
			y: DamageText.y-30,
			alpha:0,
			duration: 1000,
			onComplete: function(){
				DamageText.destroy(); 
				//console.log("Now text DAMAGE is destroy ")//DEBUG

				//Vuelve a la posicion inicial de rotacion
				that.scene.tweens.add({
				targets: that.HeroSprite,
				angle: that.HeroSprite.angle-20,
				duration: 1000,
				onComplete: function(){resolve();}
				})
			}
		})
		}

		return new Promise(resolve=>{
				//Primero realiza el giro del sprite y al terminar lanza el texto con el daño , despues vuelve a la rotacion base.
			that.scene.tweens.add({
				targets: that.HeroSprite,
				angle: that.HeroSprite.angle+20,
				duration: 1000,
				onComplete: function(){
				//Puede que PROBLEMA porque no se haya creado aun el texto en escena ????
				DamageText = that.scene.add.text(that.cardContainer.x+20,that.cardContainer.y+50,'Damage test')
				DamageTextTween(resolve);
				}
			})
		})

		
		//var DamageText = await this.scene.add.text(that.cardContainer.x+200,that.cardContainer.y+50,'Damage test')
		
	},
	//Realiza la animacion de la habilidad
	//Parametros input-> Se pasa que habilidad se usa ? (Misma animacion para todas ?)
	//Se crea un sprite que realiza una animacion
	useAbilityAnimation(input){
		var that = this;

		return new Promise(resolve=>{
			resolve();
		})
	},

	//Parametros input-> Se le debe pasar algun tipo de info para que sepa que buff debe poner
	addEffectIconSprite(input){
		var that = this;
		var buffSpriteAux = this.scene.add.sprite(that.x,that.y-150,'buff').setScale(0.1,0.1);
		this.buffSprites.push(buffSpriteAux);
		this.cardContainer.add(buffSpriteAux);

	},

	//Updatea la barra de vida (rectangulo)
	//El tamaño maximo de la barra de vida representa el valor de baseHP
	//Por tanto aplicando regla de tres podemos saber el valor final del ancho de la barra de forma proporcional  
	//a la vida q tiene el heroe en ese momento
	updateLifeBarAnimation(input){
		var that = this;
		return new Promise(resolve=>{
			that.scene.tweens.add({
			targets: that.lifeRect,
			width: (that.lifeRect.width*that.hero.HP)/that.hero.baseHP,
			duration: 500,
			onComplete: function(){resolve();}
			})
		})	
	}


})