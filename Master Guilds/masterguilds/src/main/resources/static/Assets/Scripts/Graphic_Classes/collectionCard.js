var CollectionCard = new Phaser.Class({
	initialize:
	function CollectionCard(scene,x,y,hero,xG,yG){
		this.scene = scene;
		this.hero = hero;
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
			if(that.scene.extend.bigcardSprite !=null)
			that.scene.extend.bigcardSprite.destroy();
			that.scene.extend.bigcardSprite = scene.add.sprite(that.xG,that.yG,'azon_big_card_front');
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
			if(that.scene.extend.bigcardSprite !=null)
			that.scene.extend.bigcardSprite.destroy();
			that.scene.extend.bigcardSprite = scene.add.sprite(that.xG,that.yG,'azon_big_card_front');
		})
		}
	
	},
	destroy(){
		this.HeroSprite.destroy();
		this.cardContainer.destroy();
	}
})