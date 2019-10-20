'use strict'

//EN ESTA PANTALLA VEREMOS JUGAR, OPCIONES, CONTACTAR Y AJUSTES DE IDIOMA
class title extends Phaser.Scene{
constructor(){
    super({key:"title"})
    this.extend={click:null,nameform:null,passwordform:null,ENGroup:null,ESGroup:null}
}
preload(){
    console.log("title")
    this.add.image(960,540,'backWood');
    //this.add.text(960,540,'MasterA',{font:"69px Comic Sans",fill:"#000",align:"center"})
}
create(){
    var that=this;
    this.extend.click=this.sound.add('click');
    var MasterATitle = this.add.sprite(950,320,'masterATitle').setScale(1.15,1.15);
    var contact=this.add.sprite(320,900,'largeConButt').setInteractive();
    var en4=this.add.text(160,860,'Contact us',{fontFamily:"Museo-700",fontSize:'69px',color:'#000',fontStyle:'bold'});
    var es4=this.add.text(170,860,'Contacto',{fontFamily:"Museo-700",fontSize:'69px',color:'#000',fontStyle:'bold'});
    var play=this.add.sprite(950,650,'largeButt').setInteractive();
    var en1=this.add.text(880,610,'Play',{fontFamily:"Museo-700" ,fontSize:'75px',color:'#000',fontStyle:'bold'})
    var es1=this.add.text(850,610,'Jugar',{fontFamily:"Museo-700" ,fontSize:'75px',color:'#000',fontStyle:'bold'})
    var settings=this.add.sprite(950,900,'largeSetButt').setInteractive();
    var en2=this.add.text(840,860,'Settings',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#000',fontStyle:'bold'})
    var es2=this.add.text(850,860,'Ajustes',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#000',fontStyle:'bold'})
    var lang=this.add.sprite(1590,900,'largeLangButt').setInteractive();
    var en3=this.add.text(1480,860,'Language',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#000',fontStyle:'bold'})
    var es3=this.add.text(1480,860,'Lenguaje',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#000',fontStyle:'bold'})
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
    
    
    that.extend.ESGroup=this.add.container(0,0);
    that.extend.ENGroup=this.add.container(0,0);
    
    that.extend.ESGroup.add(es1);
    that.extend.ESGroup.add(es3);
    that.extend.ESGroup.add(es2);
    that.extend.ESGroup.add(es4);
    
    that.extend.ENGroup.add(en1);
    that.extend.ENGroup.add(en3);
    that.extend.ENGroup.add(en2);
    that.extend.ENGroup.add(en4);
    
	if(game.global.user.evol!=null){
		this.extend.click.setVolume(game.global.user.evol)
	}
	
	switch(game.global.user.lang){
	case "ES":
		
		this.extend.ENGroup.alpha=0;
		this.extend.ESGroup.alpha=1;
		
		break;
	case "EN":
		
		this.extend.ENGroup.alpha=1;
		this.extend.ESGroup.alpha=0;
		
		break;
	default:
		break;
	}
    
    
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
    	t.extend.click.play();
    switch(str){
            case "play":
            t.scene.transition({target:'mainMenu',duration:0});
            break;
            case "lang":
            t.scene.transition({target:'lang',duration:0});
            break;
            case "settings":
            t.scene.transition({target:'settings',duration:0});
            break;
            case "contact":
            t.scene.transition({target:'contact',duration:0});
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

    var fullscreenbutt = this.add.sprite(1600,63,'helpButt').setInteractive();
    fullscreenbutt.on('pointerup', function () {

            if (this.scale.isFullscreen)
            {
                //button.setFrame(0);

                this.scale.stopFullscreen();
            }
            else
            {
                //button.setFrame(1);

                this.scale.startFullscreen();
            }

        }, this);
}

update(){

}

}