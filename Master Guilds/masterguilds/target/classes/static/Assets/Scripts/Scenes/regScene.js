'use strict' 
class register extends Phaser.Scene{

constructor(){
    super('register');
}    
    
//var music

preload(){
     console.log("register")
     this.add.image(960,540,'backWood');
     
    
    this.add.sprite(380,350,'smallInfo').setScale(0.6)
    
    this.add.sprite(380,650,'smallInfo').setScale(0.6)
    
    //music play here 
    
    //music=login.sound.add(...)
    //this.add.sprite(500,540,'smallInfo').setScale(0.5).setInteractive({useHandCursor:true});
    
}
create(){
    var that=this;
    
    var enter=this.add.sprite(950,900,'largeButt').setScale(0.8).setInteractive({useHandCursor:true}); 
    
    //falta el boton de volver.....
    var back=this.add.sprite(100,100,'xxx').setScale(0.5).setInteractive({useHandCursor:true})
    
    //temp function
    enter.on('pointerdown',function(){transition("ent",that)});
    back.on('pointerdown',function(){transition("back",that)})
    //pointerOverFunctions
    
    //reg.on('pointerover',function(){this.setFrame(...)});
    //reg.on('pointerout',function(){this.setFrame(...)});
    //reg.on('pointerdown',function(){this.setFrame(...); transition("reg")});
    //SFX? .sound.play();
    //back.on('pointerover',function(){this.setFrame(...)});
    //back.on('pointerout',function(){this.setFrame(...)});
    //back.on('pointerdown',function(){this.setFrame(...); transition("back")});
    var transition=function(str,t){
    switch(str){
            case "ent":
            t.scene.transition({target:'title',duration:100});
            //sign up
            case "back":
            //return login menu
            t.scene.transition({target:'login',duration:100});
            break;
            
        default:
            break;
    }
}
}

}