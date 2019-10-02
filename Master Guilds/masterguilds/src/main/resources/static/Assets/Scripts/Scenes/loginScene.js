'use strict' 
class login extends Phaser.Scene{

constructor(){
    super('login');
}    
    
//var music

preload(){
     console.log("login")
     this.add.image(960,540,'backWood');
     
    
    this.add.sprite(380,350,'smallInfo').setScale(0.6)
    
    this.add.sprite(380,650,'smallInfo').setScale(0.6)
    
    //music play here 
    
    //music=login.sound.add(...)
    //this.add.sprite(500,540,'smallInfo').setScale(0.5).setInteractive({useHandCursor:true});
    
}
create(){
    var that=this;
     var reg=this.add.sprite(480,900,'largeButt').setScale(0.8).setInteractive({useHandCursor:true});
    
    var enter=this.add.sprite(1350,900,'largeButt').setScale(0.8).setInteractive({useHandCursor:true}); 
    
    //temp function
    reg.on('pointerdown',function(){transition("reg",that)});
    enter.on('pointerdown',function(){transition("ent",that)});
    //pointerOverFunctions
    
    //reg.on('pointerover',function(){this.setFrame(...)});
    //reg.on('pointerout',function(){this.setFrame(...)});
    //reg.on('pointerdown',function(){this.setFrame(...); transition("reg")});
    //SFX? .sound.play();
    //enter.on('pointerover',function(){this.setFrame(...)});
    //enter.on('pointerout',function(){this.setFrame(...)});
    //enter.on('pointerdown',function(){this.setFrame(...); transition("ent")});
    var transition=function(str,t){
    switch(str){
            case "reg":
            t.scene.transition({target:'register',duration:100});
            break;
            case "ent":
            t.scene.transition({target:'title',duration:100});
            break;
            
        //potential exit case
            
        default:
            break;
    }
}
}

}