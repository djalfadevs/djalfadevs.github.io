'use strict'

//EN ESTA PANTALLA VEREMOS TODOS LOS PERSONAJES DESBLOQUEADOS

class collection extends Phaser.Scene{
    constructor(){
        super({key: 'collection'})
        this.extend =
        {
        	cards:[]
        }
    }
    preload(){
    	//Fondo
        this.add.image(960,540,'backWood');
    }
    create(){
    	var that=this;

    	
    		
    	


    	//BOTONES
    	//Boton volver
        var backButt=this.add.sprite(100,100,'backButt').setScale(0.5).setInteractive();
        backButt.on('pointerdown',function(){this.setFrame(1);transition("back",that)})
        backButt.on('pointerup',function(){this.setFrame(0)})

        var UpArrowButt=this.add.sprite(200,100,'UpArrow').setScale(0.5).setInteractive();
        var DownArrowButt=this.add.sprite(200,200,'DownArrow').setScale(0.5).setInteractive();

        this.drawCards(0);

        var transition=function(str,t){
            switch(str){
                case "back":
                t.scene.transition({target:'mainMenu',duration:100});
                break;
                
                
                default:
                break;
            }
        
	   }
    }
    drawCards(i){
    	var that=this;

    	//Se crean las cartas
    	var collsDistance = 250
    	var rowsDistance = 300
    	var paintingRow = 0;
    	var allHeroes = game.global.user.heros;
    	

    	for(var j = 0; j<9 ; j++){
    		if(that.extend.cards[j]!=null)
    		that.extend.cards[j].destroy();
    		if(allHeroes[i+j]!=null)
    		that.extend.cards[j] = new CollectionCard(this,600+(j%3)*collsDistance,200+(Math.floor((j/3))%3)*rowsDistance,allHeroes[i]);
    	}
    	
    	
    }
}