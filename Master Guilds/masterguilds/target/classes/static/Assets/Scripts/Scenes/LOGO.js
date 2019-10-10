'use strict'

class LOGO extends Phaser.Scene{
	constructor(){
		super({key:'LOGO'})
	}
	preload(){
		
	}
	create(){
		var that=this;
		var bg=this.add.image(960,540,'backWood').setInteractive()
		bg.inputEnabled=false;
		bg.alpha=0;
		var logo=this.add.image(950,500,'djlogo1').setScale(0.15);
		var text=this.add.text(755,680,'PRESENTS',{fontFamily:"Museo-700" ,fontSize:'80px',color:'#fff',fontStyle:'bold'})
		setTimeout(function(){
			that.add.tween({targets:[logo,text],alpha:0,duration:1500,ease:'Sine.easeInOut',onComplete:function(){
				that.add.tween({targets:bg,alpha:1,duration:500,ease:'Sine.easeInOut',onComplete:function(){
					bg.inputEnabled=true}})
			}})
		},'500')
		
		bg.on('pointerdown',function(){
			that.scene.transition({target:'login',duration:100})
		})
	}
}