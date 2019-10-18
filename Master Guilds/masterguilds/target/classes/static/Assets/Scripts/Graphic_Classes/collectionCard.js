var CollectionCard = new Phaser.Class({
	initialize:
	function CollectionCard(scene,x,y,hero,xG,yG){
		this.scene = scene;
		this.hero = hero;
		this.simulationHero = new Hero(this.hero);;
		this.x = x;
		this.y = y;
		this.xG = xG
		this.yG = yG;
		
		var that= this;
		
		//Imagen de la carta de personaje
		this.HeroSprite = scene.add.sprite(0,0,that.hero.image_url[0]).setScale(1,1).setInteractive();

		//Container
		this.cardContainer = scene.add.container(0,0,[this.HeroSprite]);
		this.cardContainer.setPosition(x,y)

		//En el caso del inventario de cartas
		if(that.scene.scene.key=="collection"){
			that.HeroSprite.on('pointerdown',function(){
				that.scene.extend.draw1.play();
			that.scene.extend.text.name.setText(that.hero.name);
            that.scene.extend.text.lore.setText(that.hero.description[0]);
            that.scene.extend.text.loreEN.setText(that.hero.description[1]);
            that.scene.extend.text.attack.setText(that.hero.baseAttack)
            that.scene.extend.text.defense.setText(that.hero.baseDefense)
            that.scene.extend.text.Hp.setText(that.hero.baseHP);
            that.scene.extend.text.aggro.setText(that.hero.baseAggro);
            that.scene.extend.text.evasion.setText(that.hero.baseEvasion)
            that.scene.extend.text.rarity.setText(that.hero.rarity)
            that.scene.extend.text.crit_hit_chance.setText(that.hero.base_crit_hit_chance)
            if(that.hero.abilities[0]!=null){
            	that.scene.extend.text.abilities0.setText(that.hero.abilities[0].name)
            	that.scene.extend.text.abilities0d.setText(that.hero.abilities[0].description[0])
            	that.scene.extend.text.abilities0dEN.setText(that.hero.abilities[0].description[1])
            }
            if(that.hero.abilities[1]!=null){
            	that.scene.extend.text.abilities1.setText(that.hero.abilities[1].name)
            	that.scene.extend.text.abilities1d.setText(that.hero.abilities[1].description[0])
                 that.scene.extend.text.abilities1dEN.setText(that.hero.abilities[1].description[1])
            }
           
            
            that.scene.extend.bigcardSprite = scene.add.sprite(that.xG,that.yG,that.hero.image_url[1]);
			if(that.scene.extend.bigcardSprite !=null){
					that.scene.extend.bigcardSprite.destroy();
					that.scene.extend.bigcardSprite = scene.add.sprite(that.xG,that.yG,that.hero.image_url[1]);
			}

			that.scene.startsupdate();//Cambia las estrellas que se muestran en la escena
		})
		}
		//En el caso del deck despues de seleccionar mision
		else if(that.scene.scene.key=="deck"){
			that.HeroSprite.on('pointerdown',function(){
				that.scene.extend.draw1.play();
			that.scene.extend.text.name.setText(that.hero.name);
            that.scene.extend.text.attack.setText(that.hero.baseAttack)
            that.scene.extend.text.defense.setText(that.hero.baseDefence)
            that.scene.extend.text.Hp.setText(that.hero.baseHP);
            that.scene.extend.text.aggro.setText(that.hero.baseAggro);
            that.scene.extend.text.evasion.setText(that.hero.baseEvasion)
            that.scene.extend.text.rarity.setText(that.hero.rarity)
            that.scene.extend.text.crit_hit_chance.setText(that.hero.base_crit_hit_chance)
            if(that.hero.abilities[0]!=null){
            	that.scene.extend.text.abilities0.setText(that.hero.abilities[0].name)
            }
            
            if(that.hero.abilities[1]!=null){
            	that.scene.extend.text.abilities1.setText(that.hero.abilities[1].name)
            }
            
            that.scene.extend.bigcardSprite = scene.add.sprite(that.xG,that.yG,that.hero.image_url[1]);
			if(that.scene.extend.bigcardSprite !=null){
				that.scene.extend.bigcardSprite.destroy();
				that.scene.extend.bigcardSprite = scene.add.sprite(that.xG,that.yG,that.hero.image_url[1]);
			}
			
			that.scene.startsupdate();//Cambia las estrellas que se muestran en la escena
			//NUEVO DE ESTA ESCENA
			if(game.global.simulation.allies.canAddMember({actor:that.simulationHero}).canBeAdded){

				//VolverCartaGris//
				that.HeroSprite.setTint(7434609);
				/////////////////

				var tAux = that.scene.extend.alliesCards.length;

				game.global.simulation.allies.addMember(that.simulationHero);

				var spriteAux = that.scene.add.sprite(that.scene.extend.positionOfSmallAlliesCards[tAux][0],
				that.scene.extend.positionOfSmallAlliesCards[tAux][1],that.hero.image_url[0]).setInteractive().setDepth(2);

				that.scene.extend.alliesCards.push(spriteAux);

				spriteAux.numberOfCard = that.hero.cardExclusiveId;

				spriteAux.on('pointerdown',function(){

					//Vuelve las cartas al color original
					that.HeroSprite.clearTint();
					///////////////////////////

					for(var s = 0; s<that.scene.extend.cards.length; s++){
                 		if(that.scene.extend.cards[s].hero.cardExclusiveId==spriteAux.numberOfCard ){
                            that.scene.extend.cards[s].HeroSprite.clearTint();
            			}
        			}

					spriteAux.destroy();

					for(var o = 0; o<that.scene.extend.alliesCards.length;o++){
						if(spriteAux===that.scene.extend.alliesCards[o]){
							that.scene.extend.alliesCards.splice(o,1);
						}
					}

					for(var o = 0; o<that.scene.extend.alliesCards.length;o++){
							that.scene.extend.alliesCards[o].setPosition(that.scene.extend.positionOfSmallAlliesCards[o][0],
								that.scene.extend.positionOfSmallAlliesCards[o][1]);
					}

					game.global.simulation.allies.removeMember(that.simulationHero);
				})
			}		
		})
		}
	
	},
	destroy(){
		this.HeroSprite.destroy();
		this.cardContainer.destroy();
	}
})