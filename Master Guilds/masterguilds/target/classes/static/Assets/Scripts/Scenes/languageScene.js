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
   var backButt=this.add.sprite(100,100,'backButt').setScale(0.5).setInteractive()
   var infoBar=this.add.sprite(960,10,'infoBar')
   infoBar.alpha=0;
   var infoTextL=this.add.text(1300,10,'You have selected Spanish',{fontFamily:"Museo-700" ,fontSize:'40px',color:'#fff',fontStyle:'bold'});
   infoTextL.alpha=0;
   var infoTextE=this.add.text(1300,10,'You have selected English',{fontFamily:"Museo-700" ,fontSize:'40px',color:'#fff',fontStyle:'bold'});
   infoTextE.alpha=0;
    //temp function
    LATINOButt.on('pointerdown',function(){infoBar.alpha=1;infoTextL.alpha=1;transition("LATINO",that)});
    ENGLISHButt.on('pointerdown',function(){infoBar.alpha=1;infoTextE.alpha=1;transition("ENGLISH",that)});
    backButt.on('pointerdown',function(){transition("back",that)});
        
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
            t.add.tween({targets:[infoBar,infoTextL],alpha:0,duration:1500,ease:'Sine.easeInOut'})
            break;
            case "ENGLISH":
            console.log("english");
            t.add.tween({targets:[infoBar,infoTextE],alpha:0,duration:1500,ease:'Sine.easeInOut'})
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