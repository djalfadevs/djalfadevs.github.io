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
    this.add.text(220,320,'Username',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
    this.add.sprite(380,650,'smallInfo').setScale(0.6)
    this.add.text(220,620,'Password',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
    var reg=this.add.sprite(480,900,'largeButt').setScale(0.8).setInteractive();

    var enter=this.add.sprite(1350,900,'largeButt').setScale(0.8).setInteractive(); 
    
    var nameform = this.add.dom(1310, 360).createFromCache('nameform');
    var passwordform = this.add.dom(1290, 660).createFromCache('passwordform');
    this.add.text(355,860,'Register',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'});
    this.add.text(1260,860,'Enter',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'});

    var nameformButt=this.add.sprite(1275,360,'textBox');
    var passformButt=this.add.sprite(1275,660,'textBox');
    //Cuando pulsemos el boton registrar se mandara un socket con dicha informacion 
    //y habra que esperar a su respuesta para poder continuar con lo siguiente
    //Si miramos el concept de diseño la idea es usar una escena por encima que lance un mensaje emergente
    //reg.on('pointerdown',function(){
        
        //Habra que hacer que hasta que no confirme lo que devuelve el socket no actue nada de lo siguiente
        //transition("reg",that)
    //});

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
    reg.on('pointerout',function(){this.setFrame(0)});
    reg.on('pointerdown',function(){this.setFrame(1);var msg = new Object();
        msg.event = "SIGNUP"
        msg.name = nameform.getChildByName("nameField").value;
        msg.password = passwordform.getChildByName("passwordField").value;
        game.global.socket.send(JSON.stringify(msg))});
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