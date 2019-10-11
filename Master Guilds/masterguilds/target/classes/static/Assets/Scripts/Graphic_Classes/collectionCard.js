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

		this.HeroSprite.on('pointerdown',function(){
			scene.extend.text.name.setText(that.hero.name);
            scene.extend.text.lore.setText(that.hero.description[0]);
            scene.extend.text.attack.setText(that.hero.baseAttack)
            scene.extend.text.defense.setText(that.hero.baseDefence)
            scene.extend.text.Hp.setText(that.hero.baseHP);
            scene.extend.text.evasion.setText(that.hero.baseEvasion)
            scene.extend.text.rarity.setText(that.hero.rarity)
            scene.extend.text.crit_hit_chance.setText(that.hero.base_crit_hit_chance)
            scene.extend.text.abilities.setText(that.hero.abilities[0].name)

            scene.extend.bigcardSprite = scene.add.sprite(that.xG,that.yG,'azon_big_card_front');
			if(scene.extend.bigcardSprite !=null)
			scene.extend.bigcardSprite.destroy();
			scene.extend.bigcardSprite = scene.add.sprite(that.xG,that.yG,'azon_big_card_front');
		})
	},
	destroy(){
		this.HeroSprite.destroy();
		this.cardContainer.destroy();
	}
})