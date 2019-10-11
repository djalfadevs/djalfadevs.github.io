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
    var contact=this.add.sprite(320,900,'largeConButt').setInteractive();
    this.add.text(160,860,'Contact us',{fontFamily:"Museo-700",fontSize:'69px',color:'#000',fontStyle:'bold'});
    
    var play=this.add.sprite(950,700,'largeButt').setInteractive();
    this.add.text(880,660,'Play',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
    var settings=this.add.sprite(950,900,'largeSetButt').setInteractive();
    this.add.text(840,860,'Settings',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#000',fontStyle:'bold'})
    var lang=this.add.sprite(1590,900,'largeLangButt').setInteractive();
    this.add.text(1480,860,'Language',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#000',fontStyle:'bold'})
    //temp function
    play.on('pointerdown',function(){this.setFrame(1);});
    settings.on('pointerdown',function(){this.setFrame(1);});
    lang.on('pointerdown',function(){this.setFrame(1);});
    play.on('pointerup',function(){this.setFrame(0);transition("play",that)})
    settings.on('pointerup',function(){this.setFrame(0);transition("settings",that)})
    lang.on('pointerup',function(){this.setFrame(0);transition("lang",that)})
    play.on('pointerout',function(){this.setFrame(0)});
    settings.on('pointerout',function(){this.setFrame(0)});
    lang.on('pointerout',function(){this.setFrame(0)});
    
    contact.on('pointerdown',function(){this.setFrame(1)});
    contact.on('pointerup',function(){this.setFrame(0);transition("contact",that)});
    
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
            case "contact":
            //t.scene.transition({target:'contact',duration:100});
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