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
    //might go bw 
   var LATINOButt=this.add.sprite(650,250,'largeButt').setInteractive({useHandCursor:true})
   var ENGLISHButt=this.add.sprite(1450,250,'largeButt').setInteractive({useHandCursor:true})
    var backButt=this.add.sprite(100,100,'xxx').setScale(0.5).setInteractive({useHandCursor:true})
    //temp function
    LATINOButt.on('pointerdown',function(){transition("LATINO",that)});
    ENGLISHButt.on('pointerdown',function(){transition("ENGLISH",that)});
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
            console.log("ay papa")
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