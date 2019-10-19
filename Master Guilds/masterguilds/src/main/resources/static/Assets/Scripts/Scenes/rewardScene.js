class rewardScene extends Phaser.Scene{
	constructor () {
		super({key: 'rewardScene'})
		this.extend = 
			{
			
			}

	}
	preload(){

	}
	create(){
		var that=this
		this.add.sprite(960,540,'BLACK');
		this.add.sprite(960,540,'largeInfo');
		this.extend.click=this.sound.add('click');
		var en1=this.add.text(850,800,'Continuar',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#000',fontStyle:'bold'});
		var es1=this.add.text(850,800,'Continue',{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
		
		var okButt=this.add.sprite(960,800,'largeButt').setInteractive()
		okButt.on('pointerdown',function(){
			this.setFrame(1)
		});
		okButt.on('pointerout',function(){
			this.setFrame(0)
		})

		okButt.on('pointerup',function(){
			that.extend.click.play();
			this.setFrame(0);
			game.scene.scenes[15].scene.stop();
			game.global.simulation.resetSimulation();
			game.global.simulation.SetSimulationtoStartState();
			
    		that.scene.transition({target:game.global.lastScene,duration:0});
		})

		that.extend.ESGroup=this.add.container(0,0);
        that.extend.ENGroup=this.add.container(0,0);
    
        that.extend.ESGroup.add(es1);
        that.extend.ENGroup.add(en1);
     

		this.extend.click.setVolume(game.global.user.evol)
		switch(game.global.user.lang){
		case "EN":
		this.extend.ENGroup.alpha=1;
		this.extend.ESGroup.alpha=0;
			break;
		case "ES":
		this.extend.ENGroup.alpha=0;
		this.extend.ESGroup.alpha=1;
			break;
		default:
			break;
		}
	}
}