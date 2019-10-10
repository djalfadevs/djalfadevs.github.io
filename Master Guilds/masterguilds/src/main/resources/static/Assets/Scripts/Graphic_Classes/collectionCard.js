var CollectionCard = new Phaser.Class({
	initialize:
	function CollectionCard(scene,x,y,hero){
		this.scene = scene;
		this.hero = hero;
		this.x = x;
		this.y = y;
		
		//Imagen de la carta de personaje
		this.HeroSprite = scene.add.sprite(0,0,"azon_small_card_front").setScale(1,1);

		//Container
		this.cardContainer = scene.add.container(0,0,[this.HeroSprite]);
		this.cardContainer.setPosition(x,y)
	},
	destroy(){
		this.HeroSprite.destroy();
		this.cardContainer.destroy();
	}
})