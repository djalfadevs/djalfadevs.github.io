'use strict' 
class login extends Phaser.Scene{

constructor(){
    super('login');
    this.extend={nameform:null,passwordform:null}
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
     
    var infoBar=this.add.sprite(960,63,'infoBar')
    this.add.text(250,	10,'SIGN IN',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#fff',fontStyle:'bold'});
    this.add.sprite(380,350,'smallInfo').setScale(0.6)
    this.add.text(220,320,'Username',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
    this.add.sprite(380,650,'smallInfo').setScale(0.6)
    this.add.text(220,620,'Password',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
    var reg=this.add.sprite(480,900,'largeButt').setScale(0.8).setInteractive();

    var enter=this.add.sprite(1350,900,'largeButt').setScale(0.8).setInteractive(); 
    
    this.extend.nameform = this.add.dom(1310, 360).createFromCache('nameform');
    this.extend.passwordform = this.add.dom(1230, 660).createFromCache('passwordform');
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

    enter.on('pointerout',function(){this.setFrame(0)});
    enter.on('pointerdown',function(){this.setFrame(1)});
    enter.on('pointerup',function(){
        this.setFrame(0)
        
        var x = that.extend.nameform.getChildByName("nameField").value;
        
        if ( x == null || x == "" || x.includes("/") ) {
        	that.extend.nameform.getChildByName("nameField").hidden=true
        	that.extend.passwordform.getChildByName("passwordField").hidden=true
        	that.scene.launch('FailLogin')
        	that.scene.pause();

        }
        else{
        	var msg = new Object();
        	msg.event = "LOGIN"
        	msg.name = that.extend.nameform.getChildByName("nameField").value;
        	msg.password = that.extend.passwordform.getChildByName("passwordField").value;
        	game.global.socket.send(JSON.stringify(msg))
        //Habra que hacer que hasta que no confirme lo que devuelve el socket no actue nada de lo siguiente
        //transition("ent",that)
        }
        
    });
    //pointerOverFunctions
    
    //reg.on('pointerover',function(){this.setFrame(...)});
    reg.on('pointerout',function(){this.setFrame(0)});
    reg.on('pointerdown',function(){this.setFrame(1)});
    reg.on('pointerup',function(){this.setFrame(0);
    
    	var x = that.extend.nameform.getChildByName("nameField").value;
    	
    	if ( x == null || x == "" || x.includes("/") ) {
        	that.extend.nameform.getChildByName("nameField").hidden=true
        	that.extend.passwordform.getChildByName("passwordField").hidden=true
        	that.scene.launch('FailRegister')
        	that.scene.pause();

        }
        else{
        	var msg = new Object();
        	msg.event = "SIGNUP"
        		msg.name = that.extend.nameform.getChildByName("nameField").value;
        	msg.password = that.extend.passwordform.getChildByName("passwordField").value;
        	game.global.socket.send(JSON.stringify(msg))
        	}});
    
    //SFX? .sound.play();
    //enter.on('pointerover',function(){this.setFrame(...)});
    //enter.on('pointerout',function(){this.setFrame(...)});
    //enter.on('pointerdown',function(){this.setFrame(...); transition("ent")});

}
   

	resume(){
		this.extend.nameform.getChildByName("nameField").hidden=false
		this.extend.passwordform.getChildByName("passwordField").hidden=false
	}
}

class FailRegister extends Phaser.Scene{
	constructor(){
		super({key:'FailRegister'})
	}
	create(){
		var that=this
		
		this.add.sprite(960,540,'BLACK');
		this.add.sprite(960,440,'mediumInfo');
		this.add.text(700,300,"FAILED SIGN UP ATTEMPT \n Either your name contains \n unsupported characters," +
				"\n is empty or is already \n associated with another\n account ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
		var okButt=this.add.sprite(960,850,'largeButt').setInteractive()
		this.add.text(900,820,"OK",{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
		okButt.on('pointerout',function(){this.setFrame(0)})
		okButt.on('pointerdown',function(){this.setFrame(1)})
		
		okButt.on('pointerup',function(){
			this.setFrame(0);
			that.scene.resume('login');
			game.scene.scenes[3].resume();
			that.scene.stop();
		});
	}
}

class FailLogin extends Phaser.Scene{
	constructor(){
		super({key:'FailLogin'})
	}
	create(){
		var that=this
		
		this.add.sprite(960,540,'BLACK');
		this.add.sprite(960,440,'mediumInfo');
		this.add.text(700,300,"FAILED LOGIN ATTEMPT \n Either your name contains \n unsupported characters," +
				"\n is empty or is not \n associated with any\n account ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
		var okButt=this.add.sprite(960,850,'largeButt').setInteractive()
		this.add.text(900,820,"OK",{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
		okButt.on('pointerout',function(){this.setFrame(0)})
		okButt.on('pointerdown',function(){this.setFrame(1)})
		
		okButt.on('pointerup',function(){
			this.setFrame(0);
			that.scene.resume('login');
			game.scene.scenes[3].resume();
			that.scene.stop();
		});
	}
}