'use strict'

//PANTALLA DE AJUSTES

class settings extends Phaser.Scene{
    //variables para controlar porcentaje de volumen
    
    constructor(){
        super({key:"settings"})
         this.extend={click:null,ENGroup:null,ESGroup:null,MVol1:null,MVol2:null,MVol3:null,MVol4:null,MVol5:null,EVol1:null,EVol2:null,EVol3:null,EVol4:null,EVol5:null}
    }
    preload(){
        console.log("settings")
        this.add.image(960,540,'backWood');
    }
    create(){
        var that=this;
   	 	this.extend.click=this.sound.add('click');

        var MVol=5;
        var Evol=5;
        
        var infoBar=this.add.sprite(960,63,'infoBar')
        var en3=this.add.text(250,	10,'Settings',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#fff',fontStyle:'bold'});
        that.extend.ensub=this.add.text(520,50,'Personalize your experience',{fontFamily:"Museo-700" ,fontSize:'40px',color:'#fff',fontStyle:'bold'})
        var es3=this.add.text(250,	10,'Ajustes',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#fff',fontStyle:'bold'});
        that.extend.essub=this.add.text(530,50,'Personaliza tu experiencia',{fontFamily:"Museo-700" ,fontSize:'40px',color:'#fff',fontStyle:'bold'})
        
        this.add.sprite(460,340,'smallInfo').setScale(1);
        this.add.sprite(460,810,'smallInfo').setScale(1);
      
        this.add.sprite(1400,350,'setnsBar').setScale(1);
        this.add.sprite(1400,820,'setnsBar').setScale(1);
        
        this.add.sprite(1220,350,'setNotSel');
        this.add.sprite(1310,350,'setNotSel'); 	
        this.add.sprite(1400,350,'setNotSel');
        this.add.sprite(1490,350,'setNotSel'); 	
        this.add.sprite(1580,350,'setNotSel');
        this.add.sprite(1220,820,'setNotSel');
        this.add.sprite(1310,820,'setNotSel'); 	
        this.add.sprite(1400,820,'setNotSel');
        this.add.sprite(1490,820,'setNotSel'); 	
        this.add.sprite(1580,820,'setNotSel');

        this.extend.MVol1=this.add.sprite(1220,350,'setSel');
        this.extend.MVol2=this.add.sprite(1310,350,'setSel'); 	
        this.extend.MVol3=this.add.sprite(1400,350,'setSel');
        this.extend.MVol4=this.add.sprite(1490,350,'setSel'); 	
        this.extend.MVol5=this.add.sprite(1580,350,'setSel');
        this.extend.EVol1=this.add.sprite(1220,820,'setSel');
        this.extend.EVol2=this.add.sprite(1310,820,'setSel'); 	
        this.extend.EVol3=this.add.sprite(1400,820,'setSel');
        this.extend.EVol4=this.add.sprite(1490,820,'setSel'); 	
        this.extend.EVol5=this.add.sprite(1580,820,'setSel');
        var addMB=this.add.sprite(1760,350,'addButt').setScale(1).setInteractive()
        var addEB=this.add.sprite(1760,820,'addButt').setScale(1).setInteractive()
        var subMB=this.add.sprite(1040,350,'removeButt').setScale(1).setInteractive()
        var subEB=this.add.sprite(1040,820,'removeButt').setScale(1).setInteractive()
        var en1=this.add.text(360,310,'Music',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
        var en2=this.add.text(350,780,'Effects',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
        var es1=this.add.text(350,310,'Música',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
        var es2=this.add.text(350,780,'Efectos',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
        
        var backButt=this.add.sprite(85,80,'backButt').setScale(1).setInteractive()
        
        that.extend.ESGroup=this.add.container(0,0);
        that.extend.ENGroup=this.add.container(0,0);
    
        that.extend.ESGroup.add(es1);
        that.extend.ESGroup.add(es2);
        that.extend.ESGroup.add(es3);
    
        that.extend.ENGroup.add(en1);
        that.extend.ENGroup.add(en2);
        that.extend.ENGroup.add(en3);
        
        backButt.on('pointerdown',function(){this.setFrame(1)});
        backButt.on('pointerup',function(){this.setFrame(0);
        		var msg = new Object();
				msg.event = "UPDATECONFIGUSER"
				msg.userAux = new User(game.global.user);
				msg.userAux.heros=[];
				var msgS = JSON.stringify(msg)
				game.global.socket.send(msgS)
        	transition("back")
        })

        backButt.on('pointerout',function(){this.setFrame(0)});

        addMB.on('pointerdown',function(){this.setFrame(1)});
        addMB.on('pointerup',function(){this.setFrame(0);transition("addM")})
        addMB.on('pointerout',function(){this.setFrame(0)});
        
        subMB.on('pointerdown',function(){this.setFrame(1)});
        subMB.on('pointerup',function(){this.setFrame(0);transition("subM")})
        subMB.on('pointerout',function(){this.setFrame(0)});
        
        addEB.on('pointerdown',function(){this.setFrame(1)});
        addEB.on('pointerup',function(){this.setFrame(0);transition("addE")})
        addEB.on('pointerout',function(){this.setFrame(0)});
        
        subEB.on('pointerdown',function(){this.setFrame(1)});
        subEB.on('pointerup',function(){this.setFrame(0);transition("subE")})
        subEB.on('pointerout',function(){this.setFrame(0)}); 
        
        switch(game.global.user.lang){
		case "ES":
			
			this.extend.ENGroup.alpha=0;
			this.extend.ESGroup.alpha=1;
			this.extend.ensub.alpha=0;
			this.extend.essub.alpha=0.6;
			
			
			
			break;
		case "EN":
			
			this.extend.ENGroup.alpha=1;
			this.extend.ESGroup.alpha=0;
			this.extend.ensub.alpha=0.6;
			this.extend.essub.alpha=0;
			break;
		default:
			break;
		}
        
        
        var transition=function(str){
        	that.extend.click.play();

            switch(str){
                case "back":
                    that.scene.transition({target:'title',duration:100});
                    break;
                case "addM":
                	if(game.global.user.mvol<5){
                		game.global.user.mvol+=1;
                		
                	}
                break;
                case "subM":
                	if(game.global.user.mvol>0){
                		game.global.user.mvol-=1;
                	}
                break;
                case "addE":
                	if(game.global.user.evol<5){
                		game.global.user.evol+=1;
                	}
                break;
                case "subE":
                	if(game.global.user.evol>0){
                		game.global.user.evol-=1;
                	}
                break;
                	
                //potential exit case
                
                    default:
                    break;
            }
        }
    }

    update(){
    	this.extend.click.setVolume(game.global.user.evol)
		
		
		switch(game.global.user.mvol){
		case 0:
			this.extend.MVol1.alpha=0;
			this.extend.MVol2.alpha=0;
			this.extend.MVol3.alpha=0;
			this.extend.MVol4.alpha=0;
			this.extend.MVol5.alpha=0;
			break;
		case 1:
			this.extend.MVol1.alpha=1;
			this.extend.MVol2.alpha=0;
			this.extend.MVol3.alpha=0;
			this.extend.MVol4.alpha=0;
			this.extend.MVol5.alpha=0;
			break;
		case 2:
			this.extend.MVol1.alpha=1;
			this.extend.MVol2.alpha=1;
			this.extend.MVol3.alpha=0;
			this.extend.MVol4.alpha=0;
			this.extend.MVol5.alpha=0;
			break;
		case 3:
			this.extend.MVol1.alpha=1;
			this.extend.MVol2.alpha=1;
			this.extend.MVol3.alpha=1;
			this.extend.MVol4.alpha=0;
			this.extend.MVol5.alpha=0;
			break;
		case 4:
			this.extend.MVol1.alpha=1;
			this.extend.MVol2.alpha=1;
			this.extend.MVol3.alpha=1;
			this.extend.MVol4.alpha=1;
			this.extend.MVol5.alpha=0;
			break;
		case 5:
			this.extend.MVol1.alpha=1;
			this.extend.MVol2.alpha=1;
			this.extend.MVol3.alpha=1;
			this.extend.MVol4.alpha=1;
			this.extend.MVol5.alpha=1;
			break;
		default:
			break;
		}
		
		switch(game.global.user.evol){
		case 0:
			this.extend.EVol1.alpha=0;
			this.extend.EVol2.alpha=0;
			this.extend.EVol3.alpha=0;
			this.extend.EVol4.alpha=0;
			this.extend.EVol5.alpha=0;
			break;
		case 1:
			this.extend.EVol1.alpha=1;
			this.extend.EVol2.alpha=0;
			this.extend.EVol3.alpha=0;
			this.extend.EVol4.alpha=0;
			this.extend.EVol5.alpha=0;
			break;
		case 2:
			this.extend.EVol1.alpha=1;
			this.extend.EVol2.alpha=1;
			this.extend.EVol3.alpha=0;
			this.extend.EVol4.alpha=0;
			this.extend.EVol5.alpha=0;
			break;
		case 3:
			this.extend.EVol1.alpha=1;
			this.extend.EVol2.alpha=1;
			this.extend.EVol3.alpha=1;
			this.extend.EVol4.alpha=0;
			this.extend.EVol5.alpha=0;
			break;
		case 4:
			this.extend.EVol1.alpha=1;
			this.extend.EVol2.alpha=1;
			this.extend.EVol3.alpha=1;
			this.extend.EVol4.alpha=1;
			this.extend.EVol5.alpha=0;
			break;
		case 5:
			this.extend.EVol1.alpha=1;
			this.extend.EVol2.alpha=1;
			this.extend.EVol3.alpha=1;
			this.extend.EVol4.alpha=1;
			this.extend.EVol5.alpha=1;
			break;
		default:
			break;
		}
		
    
}
}