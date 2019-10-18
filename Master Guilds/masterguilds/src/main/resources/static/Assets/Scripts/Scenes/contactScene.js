'use strict'
class contact extends Phaser.Scene{
	constructor(){
		super({key:'contact'})
		this.extend={click:null,ENGroup:null,ESGroup:null}
	}
	preload(){
		this.add.sprite(960,540,'backWood');
		this.add.sprite(960,63,'infoBar');
        
        this.add.image(530,580,'largeInfo')
        var x=this.add.image(520,350,'djlogo1').setScale(0.1);
        
        x.alpha=0.7
	}
	create(){
		this.extend.click=this.sound.add('click');
		 var that=this;
		 var en1=this.add.text(250,10,'Contact',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#fff',fontStyle:'bold'});
		 var es1=this.add.text(250,10,'Contacto',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#fff',fontStyle:'bold'});
	     this.extend.ensub=this.add.text(500,50,'Talk to us!',{fontFamily:"Museo-700" ,fontSize:'40px',color:'#fff',fontStyle:'bold'})
	     this.extend.essub=this.add.text(550,50,'¡Habla con nosotros!',{fontFamily:"Museo-700" ,fontSize:'40px',color:'#fff',fontStyle:'bold'})
	     var en2=this.add.text(420,500,"Credits:",{fontFamily:"Museo-700" ,fontSize:'50px',color:'#000',fontStyle:'bold'})
	     var es2=this.add.text(420,500,"Créditos:",{fontFamily:"Museo-700" ,fontSize:'50px',color:'#000',fontStyle:'bold'})
	     this.add.text(300,600," Jesús Ayala Matarín \n " +
	        		"Álvaro García Bardón \n Denís Gudiña López \n Fernando Moreno Díaz \n Luis Miguel Moreno López " +
	        		"\n Ángel Noguero Salgado  ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'})
		 var backButt=this.add.sprite(85,80,'backButt').setInteractive();
		 backButt.on('pointerdown',function(){this.setFrame(1);});
	     backButt.on('pointerup',function(){this.setFrame(0);transition("back")});
	     backButt.on('pointerout',function(){this.setFrame(0)})
	     var TButt=this.add.sprite(1530,300,'largeTweetButt').setInteractive();
	     var FButt=this.add.sprite(1530,500,'largeFaceButt').setInteractive()
	     var IButt =this.add.sprite(1530,700,'largeInstaButt').setInteractive()
	     var YButt=this.add.sprite(1530,900,'largeYouButt').setInteractive()
	    
	     this.add.text(1420,265,'TWITTER',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#000',fontStyle:'bold'})
	     this.add.text(1400,465,'FACEBOOK',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#000',fontStyle:'bold'})
	     this.add.text(1380,665,'INSTAGRAM',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#000',fontStyle:'bold'})
	     this.add.text(1420,865,'YOUTUBE',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#000',fontStyle:'bold'})
	     
	     TButt.on('pointerdown',function(){this.setFrame(1);});
	     TButt.on('pointerup',function(){this.setFrame(0);transition("tw")});
	     TButt.on('pointerout',function(){this.setFrame(0)})
	     
	     FButt.on('pointerdown',function(){this.setFrame(1);});
	     FButt.on('pointerup',function(){this.setFrame(0);transition("face")});
	     FButt.on('pointerout',function(){this.setFrame(0)})
	     
	     IButt.on('pointerdown',function(){this.setFrame(1);});
	     IButt.on('pointerup',function(){this.setFrame(0);transition("insta")});
	     IButt.on('pointerout',function(){this.setFrame(0)})
	     
	     YButt.on('pointerdown',function(){this.setFrame(1);});
	     YButt.on('pointerup',function(){this.setFrame(0);transition("yt")});
	     YButt.on('pointerout',function(){this.setFrame(0)})
	     
	    that.extend.ESGroup=this.add.container(0,0);
        that.extend.ENGroup=this.add.container(0,0);
    
        that.extend.ESGroup.add(es1);
        that.extend.ESGroup.add(es2);
        that.extend.ENGroup.add(en1);
        that.extend.ENGroup.add(en2);

        this.extend.click.setVolume(game.global.user.evol)
		 switch(game.global.user.lang){
		case "ES":
			
			this.extend.ENGroup.alpha=0;
			this.extend.ESGroup.alpha=1;
			this.extend.ensub.alpha=0;
			this.extend.essub.alpha=0.6;
			
			
			
			break;
		case "EN":
			
			this.extend.ENGroup.alpha=1;
			this.extend.ESGroup.alpha=0;
			this.extend.ensub.alpha=0.6;
			this.extend.essub.alpha=0;
			break;
		default:
			break;
		}
	     
	     var transition=function(str){
	    	 that.extend.click.play();
	            switch(str){
	                case "tw":
	                	window.open("https://twitter.com/DJALFA_dev");
	                break;
	                case "face":
	                	window.open("https://www.facebook.com/djalfa.devs.1");
	                break
	                case "insta":
	                	window.open("https://www.instagram.com/djalfa_dev/");
	                break;
	                case "yt":
	                	window.open("https://www.youtube.com/channel/UC3AbbLPjMgXdeAemHnZdYhQ)";
	                break;
	                case "back":
	                	that.scene.transition({target:'title',duration:0});
	                break;
	                
	                
	                default:
	                break;
	            }
	            
	           
	        
		   }
	}
	update(){
		
	}
}