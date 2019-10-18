class arena extends Phaser.Scene{
	constructor(){
		super({key:"arena"})
		this.extend = {
			click:null
		}
	}
	create(){
		var that=this;
		var background = this.add.sprite(960,280,'backWood');
		this.extend.click=this.sound.add('click');
    	this.extend.click.setVolume(game.global.user.evol)
		var backButt=this.add.sprite(85,80,'backButt').setInteractive()          
        backButt.on('pointerdown',function(){this.setFrame(1)})
        backButt.on('pointerup',function(){this.setFrame(0);that.scene.transition({target:'mainMenu',duration:100})})
	}
}