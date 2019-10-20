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
				
		var okButt=this.add.sprite(960,850,'largeButt').setInteractive()
		
		var es1=this.add.text(820,810,'Continuar',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#000',fontStyle:'bold'});
		var en1=this.add.text(820,810,'Continue',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#000',fontStyle:'bold'});
		
		var en2=this.add.text(700,300,'Congratulations!',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#000',fontStyle:'bold'})

		var es2=this.add.text(700,300,'¡Enhorabuena!',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#000',fontStyle:'bold'})
		
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
		
		
		if(game.global.user.numberofmision<game.global.simulation.idmision){
			game.global.user.gems+=5;
			game.global.user.numberofmision=game.global.simulation.idmision;
			if(game.global.user.lang="EN"){
				that.add.text(750,500,"YOU GOT!",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
			}
			else{
				that.add.text(700,500,"CONSEGUISTE",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
			}
			that.add.sprite(1200,525,'5gems');
			var msg = new Object();
    		msg.event = "UPDATECONFIGUSER"
    		msg.userAux = new User(game.global.user);
			msg.userAux.heros = [];
    		game.global.socket.send(JSON.stringify(msg))
		}
		
		
		
		switch(game.global.user.lang){
		case "EN":
		en1.alpha=1;
		es1.alpha=0;
		en2.alpha=1;
		es2.alpha=0;
			break;
		case "ES":
		en1.alpha=0;
		es1.alpha=1;
		en2.alpha=0;
		es2.alpha=1;
			break;
		default:
			break;
		}
	}
}





class lose extends Phaser.Scene{
	constructor () {
		super({key: 'lose'})
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
				
		var okButt=this.add.sprite(960,850,'largeButt').setInteractive()
		
		var es1=this.add.text(820,810,'Continuar',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#000',fontStyle:'bold'});
		var en1=this.add.text(820,810,'Continue',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#000',fontStyle:'bold'});
		
		var en2=this.add.text(750,300,'Game Over',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#000',fontStyle:'bold'})

		var es2=this.add.text(750,300,'Game Over',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#000',fontStyle:'bold'})
		
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
		en1.alpha=1;
		es1.alpha=0;
		en2.alpha=1;
		es2.alpha=0;
			break;
		case "ES":
		en1.alpha=0;
		es1.alpha=1;
		en2.alpha=0;
		es2.alpha=1;
			break;
		default:
			break;
		}
	}
}