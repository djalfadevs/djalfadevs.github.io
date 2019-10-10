'use strict'

//EN ESTA PANTALLA VEREMOS TODOS LOS PERSONAJES DESBLOQUEADOS

class collection extends Phaser.Scene{
    constructor(){
        super({key: 'collection'})
        this.extend =
        {
        	cards:[],
            numberOfPages:0,
            numberOfPage:0,
            numberOfPageText:null
        }
    }
    preload(){
    	//Fondo
        this.add.image(960,540,'backWood');
    }
    create(){
    	var that=this;

    	that.extend.numberOfPages = Math.ceil(game.global.user.heros.length/9);
    		
    	that.extend.numberOfPageText = this.add.text(300,300,that.extend.numberOfPage);
        var numberOfPagesText = this.add.text(320,320,that.extend.numberOfPages);


    	//BOTONES
    	//Boton volver
        var backButt=this.add.sprite(100,100,'backButt').setScale(0.5).setInteractive();
        backButt.on('pointerdown',function(){this.setFrame(1);transition("back",that)})
        backButt.on('pointerup',function(){this.setFrame(0)})

        var UpArrowButt=this.add.sprite(200,100,'UpArrow').setScale(0.5).setInteractive();
        UpArrowButt.on('pointerup',function(){
            that.extend.numberOfPage=(that.extend.numberOfPage+1)%that.extend.numberOfPages;
            that.extend.numberOfPageText.setText(that.extend.numberOfPage);
            that.drawCards(that.extend.numberOfPage)
            ;})

        var DownArrowButt=this.add.sprite(200,200,'DownArrow').setScale(0.5).setInteractive();
        DownArrowButt.on('pointerup',function(){
            that.extend.numberOfPage-=1
            if(that.extend.numberOfPage<0){
                that.extend.numberOfPage=that.extend.numberOfPages-1;
            }
            that.extend.numberOfPageText.setText(that.extend.numberOfPage);
            that.drawCards(that.extend.numberOfPage)
            ;})

        this.drawCards(that.extend.numberOfPage);

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
    	var allHeroes = game.global.user.heros;
    	

    	for(var j = 0; j<9 ; j++){
    		if(that.extend.cards[j]!=null)
    		that.extend.cards[j].destroy();
    		if(allHeroes[i*9+j]!=null)
    		that.extend.cards[j] = new CollectionCard(this,600+(j%3)*collsDistance,200+(Math.floor((j/3))%3)*rowsDistance,allHeroes[i*9+j]);
    	}
    	
    	
    }
}