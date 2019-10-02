'use strict'

//PANTALLA DE AJUSTES

class settings extends Phaser.Scene{
    constructor(){
        super({key:"settings"})
    }
    preload(){
        console.log("settings")
        this.add.image(960,540,'backWood');
    }
    create(){
        var that=this;
        //[WIP]
        this.add.text(960,540,'WIP',{font:"69px Comic Sans",fill:"#000",align:"center"})
        var backButt=this.add.sprite(100,100,'xxx').setScale(0.5).setInteractive({useHandCursor:true})
        
        backButt.on('pointerdown',function(){transition("back",that)})
        var transition=function(str,t){
            switch(str){
                case "back":
                    t.scene.transition({target:'title',duration:100});
                    break;

                //potential exit case
                
                    default:
                    break;
            }
        }
    }
}