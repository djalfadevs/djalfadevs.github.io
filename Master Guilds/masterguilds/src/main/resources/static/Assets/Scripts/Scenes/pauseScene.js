class PauseScene extends Phaser.Scene
{
	constructor(){
		super({key: 'PauseScene'}),
		this.extend = 
			{
			resumeButton:null,
			exitButton:null,
			texts:null,
			click:null,
			ENGroup:null,
			ESGroup:null
			}
	}

	preload(){
		this.load.image('pause','Assets/Testing/pause.png');
	}

	create(){
		var that=this
		this.add.sprite(960,540,'BLACK');
		this.add.sprite(960,540,'largeInfo');
		this.extend.click=this.sound.add('click');
		var en1=this.add.text(850,200,'Paused',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#000',fontStyle:'bold'});
		var en2=this.add.text(1110,600,'Continue',{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
		var en3=this.add.text(660,600,'Exit',{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
		var es1=this.add.text(850,200,'Pausado',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#000',fontStyle:'bold'});
		var es2=this.add.text(1110,600,'Continuar',{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
		var es3=this.add.text(660,600,'Salir',{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
		
		that.extend.ESGroup=this.add.container(0,0);
        that.extend.ENGroup=this.add.container(0,0);
    
        that.extend.ESGroup.add(es1);
        that.extend.ESGroup.add(es2);
        that.extend.ESGroup.add(es3);
        that.extend.ENGroup.add(en1);
        that.extend.ENGroup.add(en2);
        that.extend.ENGroup.add(en3);
		
		this.extend.exitButton=this.add.sprite(700,750,'ExitPauseButt').setInteractive();
		this.extend.resumeButton=this.add.sprite(1200,750,'StayPauseButt').setInteractive();
		this.extend.resumeButton.on('pointerdown',function(){
			this.setFrame(1)
		});
		this.extend.resumeButton.on('pointerout',function(){
			this.setFrame(0)
		})
		this.extend.resumeButton.on('pointerup',function(){
			that.extend.click.play();
			this.setFrame(0);
			that.scene.resume('SimulationScene');
			
    		that.scene.stop();
		})
		this.extend.exitButton.on('pointerdown',function(){
			this.setFrame(1)
		});
		this.extend.exitButton.on('pointerout',function(){
			this.setFrame(0)
		})
		this.extend.exitButton.on('pointerup',function(){
			that.extend.click.play();
			this.setFrame(0);
			if(game.global.lastScene=="arena"){
				game.global.user.arenaPoints-=20;
				var msg = new Object();
	    		msg.event = "UPDATECOFINGUSER"
	    		msg.userAux = new User(game.global.user);
	    		game.global.socket.send(JSON.stringify(msg))
	        	}
			
			that.scene.transition({target:'lose',duration:0});

		})

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
	update(){

	}
}
