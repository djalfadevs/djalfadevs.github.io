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
		this.HeroSprite = scene.add.sprite(0,0,"azon_small_card_front").setScale(1,1).setInteractive();

		//Container
		this.cardContainer = scene.add.container(0,0,[this.HeroSprite]);
		this.cardContainer.setPosition(x,y)

		//En el caso del inventario de cartas
		if(that.scene.scene.key=="collection"){
			that.HeroSprite.on('pointerdown',function(){
			that.scene.extend.text.name.setText(that.hero.name);
            that.scene.extend.text.lore.setText(that.hero.description[0]);
            that.scene.extend.text.attack.setText(that.hero.baseAttack)
            that.scene.extend.text.defense.setText(that.hero.baseDefence)
            that.scene.extend.text.Hp.setText(that.hero.baseHP);
            that.scene.extend.text.evasion.setText(that.hero.baseEvasion)
            that.scene.extend.text.rarity.setText(that.hero.rarity)
            that.scene.extend.text.crit_hit_chance.setText(that.hero.base_crit_hit_chance)
            that.scene.extend.text.abilities.setText(that.hero.abilities[0].name)

            that.scene.extend.bigcardSprite = scene.add.sprite(that.xG,that.yG,'azon_big_card_front');
			if(that.scene.extend.bigcardSprite !=null){
					that.scene.extend.bigcardSprite.destroy();
					that.scene.extend.bigcardSprite = scene.add.sprite(that.xG,that.yG,'azon_big_card_front');
			}

		})
		}
		//En el caso del deck despues de seleccionar mision
		else if(that.scene.scene.key=="deck"){
			that.HeroSprite.on('pointerdown',function(){
			that.scene.extend.text.name.setText(that.hero.name);
            that.scene.extend.text.lore.setText(that.hero.description[0]);
            that.scene.extend.text.attack.setText(that.hero.baseAttack)
            that.scene.extend.text.defense.setText(that.hero.baseDefence)
            that.scene.extend.text.Hp.setText(that.hero.baseHP);
            that.scene.extend.text.evasion.setText(that.hero.baseEvasion)
            that.scene.extend.text.rarity.setText(that.hero.rarity)
            that.scene.extend.text.crit_hit_chance.setText(that.hero.base_crit_hit_chance)
            that.scene.extend.text.abilities.setText(that.hero.abilities[0].name)

            that.scene.extend.bigcardSprite = scene.add.sprite(that.xG,that.yG,'azon_big_card_front');
			if(that.scene.extend.bigcardSprite !=null){
				that.scene.extend.bigcardSprite.destroy();
				that.scene.extend.bigcardSprite = scene.add.sprite(that.xG,that.yG,'azon_big_card_front');
			}
			

			//NUEVO DE ESTA ESCENA
			if(game.global.simulation.allies.canAddMember({actor:that.simulationHero}).canBeAdded){
				var tAux = that.scene.extend.alliesCards.length;

				game.global.simulation.allies.addMember(that.simulationHero);

				var spriteAux = that.scene.add.sprite(that.scene.extend.positionOfSmallAlliesCards[tAux][0],
				that.scene.extend.positionOfSmallAlliesCards[tAux][1],'azon_small_card_front').setInteractive().setDepth(2);

				that.scene.extend.alliesCards.push(spriteAux);

				spriteAux.on('pointerdown',function(){

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