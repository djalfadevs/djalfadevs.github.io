'use strict'

//EN ESTA PANTALLA TENEMOS LOS AJUSTES DE IDIOMA

class lang extends Phaser.Scene{
    constructor(){
        super({key:'lang'})
    }
preload(){
    console.log("LANGUAGE")
     this.add.image(960,540,'backWood');
}
create(){
    var that = this;
    //might go bw 
   var LATINOButt=this.add.sprite(500,800,'largeButt').setInteractive()
   this.add.text(300,740,'Spanish',{fontFamily:"Museo-700" ,fontSize:'100px',color:'#000',fontStyle:'bold'});
   this.add.sprite(500,440,'espanol');
   var ENGLISHButt=this.add.sprite(1450,800,'largeButt').setInteractive()
   this.add.text(1270,740,'English',{fontFamily:"Museo-700" ,fontSize:'100px',color:'#000',fontStyle:'bold'});
   this.add.sprite(1470,440,'ingles');
   var backButt=this.add.sprite(85,80,'backButt').setInteractive()    
   var infoBar=this.add.sprite(960,63,'infoBar')
   this.add.text(250,	10,'Settings',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#fff',fontStyle:'bold'});
    //temp function
    LATINOButt.on('pointerdown',function(){this.setFrame(1);transition("LATINO",that)});
    ENGLISHButt.on('pointerdown',function(){this.setFrame(1);transition("ENGLISH",that)});
    backButt.on('pointerdown',function(){this.setFrame(1);transition("back",that)});
    
    LATINOButt.on('pointerup',function(){this.setFrame(0)});
    ENGLISHButt.on('pointerup',function(){this.setFrame(0)});
    backButt.on('pointerup',function(){this.setFrame(0);});
    
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
        
           var transition=function(str,t){
            switch(str){
            case "LATINO":
            console.log("latino")

            break;
            case "ENGLISH":
            console.log("english");

            break;
            case "back":
            t.scene.transition({target:'title',duration:100});
            break;
            
            
            default:
            break;
        } 
    }
}
}