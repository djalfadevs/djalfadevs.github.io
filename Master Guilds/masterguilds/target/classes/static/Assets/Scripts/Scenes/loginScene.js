'use strict' 
class login extends Phaser.Scene{

constructor(){
    super('login');
}    
    
//var music

preload(){
 
    
    this.load.html('nameform', 'Assets/Scripts/HTML/name.html');
    this.load.html('passwordform', 'Assets/Scripts/HTML/password.html');
    //music play here 
    
    //music=login.sound.add(...)
    //this.add.sprite(500,540,'smallInfo').setScale(0.5).setInteractive({useHandCursor:true});
    
}
create(){
    var that=this;

    console.log("login")
    this.add.image(960,540,'backWood');
     
    
    this.add.sprite(380,350,'smallInfo').setScale(0.6)
    
    this.add.sprite(380,650,'smallInfo').setScale(0.6)

    var reg=this.add.sprite(480,900,'largeButt').setScale(0.8).setInteractive({useHandCursor:true});
    
    var enter=this.add.sprite(1350,900,'largeButt').setScale(0.8).setInteractive({useHandCursor:true}); 
    
    var nameform = this.add.dom(400, 200).createFromCache('nameform');
    var passwordform = this.add.dom(400, 400).createFromCache('passwordform');
    
    //Cuando pulsemos el boton registrar se mandara un socket con dicha informacion 
    //y habra que esperar a su respuesta para poder continuar con lo siguiente
    //Si miramos el concept de diseño la idea es usar una escena por encima que lance un mensaje emergente
    reg.on('pointerdown',function(){
        var msg = new Object();
        msg.event = "SIGNUP"
        msg.name = nameform.getChildByName("nameField").value;
        msg.password = passwordform.getChildByName("passwordField").value;
        game.global.socket.send(JSON.stringify(msg))
        //Habra que hacer que hasta que no confirme lo que devuelve el socket no actue nada de lo siguiente
        //transition("reg",that)
    });

    enter.on('pointerdown',function(){
        var msg = new Object();
        msg.event = "LOGIN"
        msg.name = nameform.getChildByName("nameField").value;
        msg.password = passwordform.getChildByName("passwordField").value;
        game.global.socket.send(JSON.stringify(msg))
        //Habra que hacer que hasta que no confirme lo que devuelve el socket no actue nada de lo siguiente
        //transition("ent",that)
    });
    //pointerOverFunctions
    
    //reg.on('pointerover',function(){this.setFrame(...)});
    //reg.on('pointerout',function(){this.setFrame(...)});
    //reg.on('pointerdown',function(){this.setFrame(...); transition("reg")});
    //SFX? .sound.play();
    //enter.on('pointerover',function(){this.setFrame(...)});
    //enter.on('pointerout',function(){this.setFrame(...)});
    //enter.on('pointerdown',function(){this.setFrame(...); transition("ent")});

    
    //temp function
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