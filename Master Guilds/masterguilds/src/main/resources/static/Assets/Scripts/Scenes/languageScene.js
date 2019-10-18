'use strict'

//EN ESTA PANTALLA TENEMOS LOS AJUSTES DE IDIOMA

class lang extends Phaser.Scene{
    constructor(){
        super({key:'lang'})
        this.extend={click:null,ESGroup:null,ENGroup:null}
    }
preload(){
    console.log("LANGUAGE")
     this.add.image(960,540,'backWood');
}
create(){
    var that = this;
    this.extend.click=this.sound.add('click');
	this.extend.click.setVolume(game.global.user.evol)
    console.log(game.global.user.lang)
    //might go bw 
   var LATINOButt=this.add.sprite(500,800,'largeButt').setInteractive()
   var en1=this.add.text(300,740,'Spanish',{fontFamily:"Museo-700" ,fontSize:'100px',color:'#000',fontStyle:'bold'});
   
   var es1=this.add.text(300,740,'Español',{fontFamily:"Museo-700" ,fontSize:'100px',color:'#000',fontStyle:'bold'});
   
   
   this.add.sprite(500,440,'espanol');
   var ENGLISHButt=this.add.sprite(1450,800,'largeButt').setInteractive()
   var en2=this.add.text(1270,740,'English',{fontFamily:"Museo-700" ,fontSize:'100px',color:'#000',fontStyle:'bold'});
   
   var es2=this.add.text(1300,740,'Inglés',{fontFamily:"Museo-700" ,fontSize:'100px',color:'#000',fontStyle:'bold'});
   
   this.add.sprite(1470,440,'ingles');
   var infoBar=this.add.sprite(960,63,'infoBar')
   var backButt=this.add.sprite(85,80,'backButt').setInteractive()    
  
   var en3=this.add.text(250,	10,'Language',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#fff',fontStyle:'bold'});
   
   var es3=this.add.text(250,	10,'Lenguaje',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#fff',fontStyle:'bold'});
   
   that.extend.ESGroup=this.add.container(0,0);
   that.extend.ENGroup=this.add.container(0,0);
   
   that.extend.ESGroup.add(es1);
   that.extend.ESGroup.add(es3);
   that.extend.ESGroup.add(es2);
   
   that.extend.ENGroup.add(en1);
   that.extend.ENGroup.add(en3);
   that.extend.ENGroup.add(en2);
    //temp function
    LATINOButt.on('pointerdown',function(){this.setFrame(1);});
    ENGLISHButt.on('pointerdown',function(){this.setFrame(1);});
    backButt.on('pointerdown',function(){this.setFrame(1);});
    
    LATINOButt.on('pointerup',function(){this.setFrame(0);transition("LATINO")});
    ENGLISHButt.on('pointerup',function(){this.setFrame(0);transition("ENGLISH")});
    backButt.on('pointerup',function(){this.setFrame(0);
        var msg = new Object();
        msg.event = "UPDATEUSERINFO"
        msg.userAux = new User(game.global.user);
        game.global.socket.send(JSON.stringify(msg))
      transition("back")
    });
    
    LATINOButt.on('pointerout',function(){this.setFrame(0)});
    ENGLISHButt.on('pointerout',function(){this.setFrame(0)});
    backButt.on('pointerout',function(){this.setFrame(0)});
        //pointerOverFunctions [COPYPASTED LOGIN]
    
        //reg.on('pointerover',function(){this.setFrame(...)});
        //reg.on('pointerout',function(){this.setFrame(...)});
        //reg.on('pointerdown',function(){this.setFrame(...); transition("reg")});
        //SFX? .sound.play();
        //enter.on('pointerover',function(){this.setFrame(...)});
        //enter.on('pointerout',function(){this.setFrame(...)});
        //enter.on('pointerdown',function(){this.setFrame(...); transition("ent")});
        
           var transition=function(str){
  	    	 that.extend.click.play();

            switch(str){
            case "LATINO":
            //console.log(game.global.user.lang)
            
            game.global.user.lang="ES"
            console.log(game.global.socket.readyState)
            //console.log(game.global.user.lang)
            /*
            var msgL1 = new Object();
            msgL1.event = "UPDATEUSERINFO"
            	msgL1.user=game.global.user
        		game.global.socket.send(JSON.stringify(msgL1))
            */
            break;
            case "ENGLISH":
            console.log("english");
            
            game.global.user.lang="EN"
              
              /*  
              var msgL2 = new Object();
              msgL2.event = "UPDATEUSERINFO"
            	msgL2.user=game.global.user
            	game.global.socket.send(JSON.stringify(msgL2))
              */
            break; 
            case "back":
            that.scene.transition({target:'title',duration:100});
            break;
            
            
            default:
            break;
        } 
    }
}

update(){

	switch(game.global.user.lang){
	case "ES":
		
		this.extend.ENGroup.alpha=0;
		this.extend.ESGroup.alpha=1;
		
		break;
	case "EN":
		
		this.extend.ENGroup.alpha=1;
		this.extend.ESGroup.alpha=0;
		
		break;
	default:
		break;
	}
}

}