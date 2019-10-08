'use strict'

//EN ESTA PANTALLA VEREMOS JUGAR, OPCIONES, CONTACTAR Y AJUSTES DE IDIOMA
class title extends Phaser.Scene{
constructor(){
    super({key:"title"})
}
preload(){
    console.log("title")
    this.add.image(960,540,'backWood');
    this.add.text(960,540,'MasterA',{font:"69px Comic Sans",fill:"#000",align:"center"})
}
create(){
    var that=this;
    var play=this.add.sprite(950,700,'largeButt').setScale(0.8).setInteractive({useHandCursor:true});
    this.add.text(880,660,'Play',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
    var settings=this.add.sprite(480,900,'largeButt').setScale(0.7).setInteractive({useHandCursor:true});
    this.add.text(335,860,'Settings',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
    var lang=this.add.sprite(1350,900,'largeButt').setScale(0.7).setInteractive({useHandCursor:true});
    this.add.text(1190,860,'Language',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
    //temp function
    play.on('pointerdown',function(){transition("play",that)});
    settings.on('pointerdown',function(){transition("settings",that)});
    lang.on('pointerdown',function(){transition("lang",that)});
    //pointerOverFunctions
    //var backButt=this.add.sprite(100,100,'backButt').setScale(0.5).setInteractive({useHandCursor:true})
    
    //backButt.on('pointerdown',function(){this.setFrame(1);transition("back",that)})
    //backButt.on('pointerup',function(){this.setFrame(0)})
    
    //[COPYPASTED LOGIN]
    //reg.on('pointerover',function(){this.setFrame(...)});
    //reg.on('pointerout',function(){this.setFrame(...)});
    //reg.on('pointerdown',function(){this.setFrame(...); transition("reg")});
    //SFX? .sound.play();
    //enter.on('pointerover',function(){this.setFrame(...)});
    //enter.on('pointerout',function(){this.setFrame(...)});
    //enter.on('pointerdown',function(){this.setFrame(...); transition("ent")});
    var transition=function(str,t){
    switch(str){
            case "play":
            t.scene.transition({target:'mainMenu',duration:100});
            break;
            case "lang":
            t.scene.transition({target:'lang',duration:100});
            break;
            case "settings":
            t.scene.transition({target:'settings',duration:100});
            break;
            //case "back":
           // console.log("back")
            //t.scene.transition({target:'login',duration:100});
           // break;
        //potential exit case
            
        default:
            break;
    }
  }
}
}