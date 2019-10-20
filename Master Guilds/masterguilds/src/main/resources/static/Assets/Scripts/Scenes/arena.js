class arena extends Phaser.Scene{
	constructor(){
		super({key:"arena"})
		this.extend = {
			click:null,
			ensub:null,
			essub:null,
			rival1:null,
			rival2:null,
			rival3:null,
			Xrival:null,
			accept:null,
			r1T:null,
			r2T:null,
			r3T:null,
			card1:null,
			card2:null,
			card3:null,
			card4:null,
			positionOfSmallAlliesCards:[[350,550],
	            [550,550],
	            [750,550],
	            [950,550]]
		}
	}
	preload(){
		this.add.sprite(960,540,'backWood');
		this.add.image(530,580,'largeInfo');
		this.add.sprite(960,63,'infoBar');
		this.add.text(250,10,'Arena',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#fff',fontStyle:'bold'});
	}
	create(){
		var that=this;
		game.global.lastScene="arena"
		
		that.extend.ensub=this.add.text(500,50,'For glory, victory and honor!',{fontFamily:"Museo-700" ,fontSize:'40px',color:'#fff',fontStyle:'bold'})
		that.extend.essub=this.add.text(500,50,'¡Por la gloria, la victoria y el honor!',{fontFamily:"Museo-700" ,fontSize:'40px',color:'#fff',fontStyle:'bold'})
		this.extend.click=this.sound.add('click');
    	this.extend.click.setVolume(game.global.user.evol)
    	
    	
    	var text1=this.add.text(250,250,' ',{fontFamily:"Museo-700" ,fontSize:'100px',color:'#000',fontStyle:'bold'});
    	var text2=this.add.text(300,400,' ',{fontFamily:"Museo-700" ,fontSize:'50px',color:'#000',fontStyle:'bold'});
    	
    	var r1=this.add.sprite(1530,300,'largeButt').setInteractive();
    	
    	r1.on('pointerup',function(){this.setFrame(0);chooseRival(that.extend.rival1)})
    	
    	r1.on('pointerdown',function(){this.setFrame(1);})
    	
    	r1.on('pointerout',function(){this.setFrame(0)})
    	
    	var r2=this.add.sprite(1530,600,'largeButt').setInteractive();
    	
    	r2.on('pointerup',function(){this.setFrame(0);chooseRival(that.extend.rival2)})
    	
    	r2.on('pointerdown',function(){this.setFrame(1)})
    	
    	r2.on('pointerout',function(){this.setFrame(0)})
    	
    	var r3=this.add.sprite(1530,900,'largeButt').setInteractive();
    	
    	r3.on('pointerup',function(){this.setFrame(0);chooseRival(that.extend.rival3)})

    	r3.on('pointerdown',function(){this.setFrame(1)})
    	
    	r3.on('pointerout',function(){this.setFrame(0)})
    	
    	this.extend.r1T=this.add.text(1350,250," ",{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'});
    	
    	this.extend.r2T=this.add.text(1350,550," ",{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'});
   
    	this.extend.r3T=this.add.text(1350,850," ",{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'});
    	
    	var rank=this.add.sprite(520,880,'rank').setInteractive().setDepth(2);
    	
    	var def=this.add.sprite(280,880,'deffButt').setInteractive().setDepth(2);
    	
    	def.on('pointerup',function(){this.setFrame(0); 
    	game.global.lastScene="deff"
    		game.global.simulation.allies.restrictions = {"maxHeros":4,"maxHerosFaction":[4,4,4]}
    	that.scene.transition({target:'deck',duration:0})});
    	def.on('pointerdown',function(){this.setFrame(1)});
    	def.on('pointerout',function(){this.setFrame(0)});
    	
    	
    	rank.on('pointerdown',function(){this.setFrame(1)});
    	rank.on('pointerout',function(){this.setFrame(0)})
    	rank.on('pointerup',function(){this.setFrame(0);
    		that.extend.click.play();
    		that.scene.launch('rann');
    		that.scene.pause();
    	})
    	
    	that.extend.accept=this.add.sprite(750,880,'YesButt').setInteractive().setDepth(2);
    	
    	that.extend.accept.on('pointerdown',function(){this.setFrame(1)})
    	that.extend.accept.on('pointerout',function(){this.setFrame(0)})
    	that.extend.accept.on('pointerup',function(){this.setFrame(0); beginFight()});
    	
    	var backButt=this.add.sprite(85,80,'backButt').setInteractive()          
        backButt.on('pointerdown',function(){this.setFrame(1)})
        backButt.on('pointerup',function(){this.setFrame(0);that.scene.transition({target:'mainMenu',duration:0})})
	
        switch(game.global.user.lang){
        case "EN":
        	that.extend.ensub.alpha=0.6;
        	that.extend.essub.alpha=0;
        	break;
        case "ES":
        	that.extend.essub.alpha=0.6;
        	that.extend.ensub.alpha=0;
        	break
        default:
        	break	
        }
    	
    	function getRandomRivals(){
        	var msg = new Object();
    		msg.event = "GETARENARIVAL"
    		game.global.socket.send(JSON.stringify(msg))
        	}
    	
    	function chooseRival(input){
    		that.extend.Xrival=input;
    		text1.setText(that.extend.Xrival.name);
    		switch(game.global.user.lang){
    		case "ES":
    			text2.setText("Puntos de arena: "+that.extend.Xrival.arenaPoints);
    			break;
    		case "EN":
    			text2.setText("Arena points: "+that.extend.Xrival.arenaPoints);
    			break;
    		}
    		
    		
    		if(that.extend.Xrival.defensa[0]!=-1){
    			that.extend.card1=that.add.sprite(that.extend.positionOfSmallAlliesCards[0][0],that.extend.positionOfSmallAlliesCards[0][1], that.extend.Xrival.heros[that.extend.Xrival.defensa[0]].image_url[0]).setDepth(1);
    		}
    		else{
    			if(that.extend.card1!=null){
    				that.extend.card1.destroy();
    			}
    			that.extend.card1=null;
    		}
    		if(that.extend.Xrival.defensa[1]!=-1){
    			that.extend.card2=that.add.sprite(that.extend.positionOfSmallAlliesCards[1][0],that.extend.positionOfSmallAlliesCards[1][1], that.extend.Xrival.heros[that.extend.Xrival.defensa[1]].image_url[0]).setDepth(1);
    		}
    		else{
    			if(that.extend.card2!=null){
    				that.extend.card2.destroy();
    			}
    			that.extend.card2=null;
    		}
    		if(that.extend.Xrival.defensa[2]!=-1){
    			that.extend.card3=that.add.sprite(that.extend.positionOfSmallAlliesCards[2][0],that.extend.positionOfSmallAlliesCards[2][1], that.extend.Xrival.heros[that.extend.Xrival.defensa[2]].image_url[0]).setDepth(1);
    		}
    		else{
    			if(that.extend.card3!=null){
    				that.extend.card3.destroy();
    			}
    			that.extend.card3=null;
    		}
    		if(that.extend.Xrival.defensa[3]!=-1){
    			that.extend.card4=that.add.sprite(that.extend.positionOfSmallAlliesCards[3][0],that.extend.positionOfSmallAlliesCards[3][1], that.extend.Xrival.heros[that.extend.Xrival.defensa[3]].image_url[0]).setDepth(1);
    		}
    		else{
    			if(that.extend.card4!=null){
        			that.extend.card4.destroy();
    			}
    			that.extend.card4=null;
    		}
    	}
    	function beginFight(){
    		if(that.extend.Xrival!=null){
    			that.extend.accept.removeInteractive();
    			var simulation = game.global.simulation;
    			simulation.idmision =game.global.user.numberofmision;
    			simulation.escenario = "arenaBg";
                simulation.enemys.resetToBaseAttribValue();
                simulation.enemys.restrictions ={"maxHeros":4,"maxHerosFaction":[4,4,4]}
                var enemyTeamAux = [];
                //TEMP
                
             var k=0;
                while((that.extend.Xrival.defensa[k]!=-1)&&(k<4)){
                	simulation.enemys.addMember(new Hero(that.extend.Xrival.heros[that.extend.Xrival.defensa[k]]))
                	k+=1;
                }
                if(k==0){
                	for(var l=0;l<4;l++){
                		if(that.extend.Xrival.heros[l]!=null){
                			simulation.enemys.addMember(new Hero(that.extend.Xrival.heros[l]))
                		} 
                	}
                }
                
                simulation.allies.restrictions = {"maxHeros":4,"maxHerosFaction":[4,4,4]}
                setTimeout(function(){that.scene.transition({target:'deck',duration:0});}, 2000)
    		}
    	}
    	
    	getRandomRivals();
	}
	
	
	setArenaRivals(){
		this.extend.rival1=game.global.rivals[0];
		this.extend.r1T.setText(game.global.rivals[0].name)
		this.extend.rival2=game.global.rivals[1];
		this.extend.r2T.setText(game.global.rivals[1].name)
		this.extend.rival3=game.global.rivals[2];
		this.extend.r3T.setText(game.global.rivals[2].name)
	}
	
}


class rann extends Phaser.Scene{
	constructor(){
		super({key: 'rann'})
		this.extend={click:null,theRank:null}
	}
	create(){
		
    	var msg = new Object();
		msg.event = "GETRANKING"
		game.global.socket.send(JSON.stringify(msg))
		
		this.add.sprite(960,540,'BLACK');
		this.add.sprite(970,450,'largeInfo');
		this.add.text(720,50,'Ranking',{fontFamily:"Museo-700" ,fontSize:'120px',color:'#000',fontStyle:'bold'});
		var that=this;
		this.extend.click=this.sound.add('click')
		this.extend.click.setVolume(game.global.user.evol)
		var okButt=this.add.sprite(960,850,'largeButt').setInteractive()

		this.add.text(900,810,"OK",{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
		okButt.on('pointerout',function(){this.setFrame(0)})
		okButt.on('pointerdown',function(){this.setFrame(1)})
		okButt.on('pointerup',function(){
			that.extend.click.play();
			this.setFrame(0);
			that.scene.resume('arena');
			that.scene.stop();
		});

	}
	
	setRanking(input){
		this.extend.theRank=input;
		if(this.extend.theRank!=null){
			for(var k=0;k<this.extend.theRank.length;k++){
				switch(game.global.user.lang){
				case "EN":
					this.add.text(720,250+k*50,this.extend.theRank[k].name+" Arena Points: "+this.extend.theRank[k].arenaPoints,{fontFamily:"Museo-700" ,fontSize:'50px',color:'#000',fontStyle:'bold'});
					break;
				case "ES":
					this.add.text(720,250+k*50,this.extend.theRank[k].name+" Puntos de arena: "+this.extend.theRank[k].arenaPoints,{fontFamily:"Museo-700" ,fontSize:'50px',color:'#000',fontStyle:'bold'});
					break;			
				}
				
			}
		}
		
	}
}