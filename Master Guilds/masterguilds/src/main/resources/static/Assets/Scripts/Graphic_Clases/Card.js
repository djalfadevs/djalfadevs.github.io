var Card = new Phaser.Class({
	initialize:
	function Card(scene,x,y,hero){
		this.hero = hero;

		this.lifeRect = scene.add.rectangle(0,0,20,10,50);
		this.HeroSprite = scene.add.sprite(0,20,hero.image_url);
		this.buffSprites;

		this.cardContainer = scene.add.container(x,y,[]);

		
	}
})