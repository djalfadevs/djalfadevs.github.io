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

		this.lifeRect = scene.add.rectangle(0,135,145,10,373026);
		this.lifeRect.maxWidthposible = 145;
		//Marco de la vida Abajo
		this.lifeBarSprite = scene.add.sprite(0,135,'lifeBarBg').setScale(1/3);
		

		//Marco de la vida Arriba
		this.lifeBarSpriteSup = scene.add.sprite(0,135,'lifeBarBg2').setScale(1/3);

		//Lista con referencia a los sprite que representan los bufos
		this.buffSprites = [];

		//USAR CONTAINER SI TENEMOS QUE TENER UN ORDEN DE RENDERIZADO 
		this.cardContainer = scene.add.container(0,0,[this.HeroSprite,this.lifeBarSprite,this.lifeRect,this.lifeBarSpriteSup]);
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
			duration:400,
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
				duration:500,
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

		var DamageTextTween = function(angleAux){
			return new Promise(resolve=>{
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
				angle: that.HeroSprite.angle-angleAux,
				duration: 200,
				onComplete: function(){resolve();}
				})
				}
				})
			})
			}
	

		return new Promise(resolve=>{
				//Primero realiza el giro del sprite y al terminar lanza el texto con el daño , despues vuelve a la rotacion base.
				var angleAux;
				if(input.isEnemy){
					angleAux=-20;
				}
				else{
					angleAux=20;
				}
				
			that.scene.tweens.add({
				targets: that.HeroSprite,
				angle: that.HeroSprite.angle+angleAux,
				duration: 400,
				onComplete: function(){
				//Puede que PROBLEMA porque no se haya creado aun el texto en escena ????
				DamageText = that.scene.add.text(that.cardContainer.x+20,that.cardContainer.y+50,Math.ceil(input.turnlog.TDamage));
				Promise.all([DamageTextTween(angleAux),that.updateLifeBarAnimation(input)]).then(function(){console.log("Esto se ejecuta despues de la vida y el texto")
					resolve()});
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
			switch(input.turnlog.abilityID){
				case "1":
					var that = this;
					var AuxParticle = that.scene.add.sprite(0,0,'blue_buff_spritesheet').setScale(1/3);
					that.cardContainer.add(AuxParticle);
					
					 var animConfig = {
       				 key: 'blue_buff_anim',
        			 frames: that.scene.anims.generateFrameNumbers('blue_buff_spritesheet'),
        			 frameRate:20,
        			 repeat: 0
    				 };

    				that.scene.anims.create(animConfig);

    				var resolveFunct = function(){
    					var auxSprite = that.scene.add.sprite(25,-150,'AllBuff').setDepth(5);
    					auxSprite.IDAbility = "1";//Esto me sirve para luego borrar el sprite cuando se vaya el efecto
    					input.tarjet.cardContainer.add(auxSprite);
    					input.tarjet.buffSprites.push(auxSprite);
    					AuxParticle.destroy();
    					resolve()
    				}

    				AuxParticle.on('animationcomplete', resolveFunct, this);

					AuxParticle.play('blue_buff_anim');
				break;
				case "2":
					//var resolveFunct = function(){resolve()}
					var that = this;
					var AuxParticle = that.scene.add.sprite(0,0,'curacion_spritesheet').setScale(1/3);
					input.tarjet.cardContainer.add(AuxParticle);

					var updateLifeBarAnimationAuxFunct = function(){
						AuxParticle.destroy();
						var auxHealthCard;
						for(var j = 0 ; j<that.scene.extend.cards.enemies.length; j++){
							if(that.scene.extend.cards.enemies[j].hero===input.turnlog.abilitieTarjets[0]){
								auxHealthCard = that.scene.extend.cards.enemies[j];
							}
						}
							for(var i = 0 ; i<that.scene.extend.cards.allies.length; i++){
								if(that.scene.extend.cards.allies[i].hero===input.turnlog.abilitieTarjets[0]){
								auxHealthCard = that.scene.extend.cards.allies[i];
							}
						}

						that.updateLifeBarAnimation({enemy:auxHealthCard}).then(()=>{resolve()});
					}	

					var animConfig = {
       				key: 'curacion_spritesheet_anim',
        			frames: that.scene.anims.generateFrameNumbers('curacion_spritesheet'),
        			frameRate:9,
        			repeat: 0
    				};

    				that.scene.anims.create(animConfig);

    		
    				AuxParticle.on('animationcomplete', updateLifeBarAnimationAuxFunct,this);

					AuxParticle.play('curacion_spritesheet_anim');
				break;
				case"3":
					var that = this;
					var AuxParticle = that.scene.add.sprite(0,0,'red_buff_spritesheet').setScale(1/3);
					that.cardContainer.add(AuxParticle);

					 var animConfig = {
       				 key: 'red_buff_anim',
        			 frames: that.scene.anims.generateFrameNumbers('red_buff_spritesheet'),
        			 frameRate:20,
        			 repeat: 0
    				 };

    				that.scene.anims.create(animConfig);

    				var resolveFunct = function(){
    					var auxSprite = that.scene.add.sprite(-25,-150,'AttackBuff').setDepth(5);
    					auxSprite.IDAbility = "3";//Esto me sirve para luego borrar el sprite cuando se vaya el efecto
    					input.tarjet.cardContainer.add(auxSprite);
    					input.tarjet.buffSprites.push(auxSprite);
    					AuxParticle.destroy();
    					resolve()
    				}

    				AuxParticle.on('animationcomplete', resolveFunct, this);

					AuxParticle.play('red_buff_anim');
				break;
				case"4":
				var that = this;
				var DamageText;
				var AuxParticle = that.scene.add.sprite(0,0,'ataque_spritesheet').setScale(1/3);
					input.enemy.cardContainer.add(AuxParticle);

				var DamageTextTween = function(){
					return new Promise(resolve=>{
						that.scene.tweens.add({
						targets: DamageText,
						y: DamageText.y-30,
						alpha:0,
						duration: 1000,
						onComplete: function(){
						DamageText.destroy();
						resolve(); 
							}
						})
					})
				}
					var updateLifeBarAnimationAuxFunct = function(){
						AuxParticle.destroy();
						DamageText = that.scene.add.text(that.cardContainer.x+20,that.cardContainer.y+50,Math.ceil(input.turnlog.TDamage));
						DamageTextTween()
						.then(()=>that.updateLifeBarAnimation({enemy:input.enemy}))
						.then(()=>{resolve()});
					}

					 var animConfig = {
       				 key: 'ataque_spritesheet_anim',
        			 frames: that.scene.anims.generateFrameNumbers('ataque_spritesheet'),
        			 frameRate:20,
        			 repeat: 0
    				 };

    				that.scene.anims.create(animConfig);

    		
    				AuxParticle.on('animationcomplete', updateLifeBarAnimationAuxFunct,this);

					AuxParticle.play('ataque_spritesheet_anim');
				break;
				case"5":
				var that = this;
				var DamageText;

				var DamageTextTween = function(){
					return new Promise(resolve=>{
						that.scene.tweens.add({
						targets: DamageText,
						y: DamageText.y-30,
						alpha:0,
						duration: 1000,
						onComplete: function(){
						DamageText.destroy();
						resolve(); 
							}
						})
					})
				}
					var updateLifeBarAnimationAuxFunct = function(){
						AuxParticle.destroy()
						DamageText = that.scene.add.text(that.cardContainer.x+20,that.cardContainer.y+50,Math.ceil(input.turnlog.TDamage));
						DamageTextTween()
						.then(()=>that.updateLifeBarAnimation({enemy:input.enemy}))
						.then(()=>that.updateLifeBarAnimation({enemy:that}))
						.then(()=>{resolve()})
					}

					var AuxParticle = that.scene.add.sprite(0,0,'chupa_spritesheet').setScale(1/3);
					input.enemy.cardContainer.add(AuxParticle);

					 var animConfig = {
       				 key: 'chupa_spritesheet_anim',
        			 frames: that.scene.anims.generateFrameNumbers('chupa_spritesheet'),
        			 frameRate:20,
        			 repeat: 0
    				 };

    				that.scene.anims.create(animConfig);

    		
    				AuxParticle.on('animationcomplete', updateLifeBarAnimationAuxFunct,this);

					AuxParticle.play('chupa_spritesheet_anim');
				break;
				default:
				resolve();
			}
			//resolve();
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
			targets: input.enemy.lifeRect,
			width: (that.lifeRect.maxWidthposible*input.enemy.hero.HP)/input.enemy.hero.baseHP,
			duration: 2000,
			onComplete: function(){
				if(input.enemy.hero.HP==0){
					input.enemy.HeroSprite.setTint(7434609);
				}
				resolve();
			}
			})
		})	
	},

	resetDrawBuffs(){
		var that = this;
		var borrar = true;
		for(var jaux2 = 0;jaux2 < that.buffSprites.length ;jaux2++){
			for(var jaux = 0;jaux < that.hero.activeAbilities.length; jaux++){
				if(that.hero.activeAbilities[jaux].ID == that.buffSprites[jaux2].IDAbility){
					borrar = false;
					}
				}
				if(borrar){
					that.buffSprites[jaux2].destroy();
				}
		}
	}

})