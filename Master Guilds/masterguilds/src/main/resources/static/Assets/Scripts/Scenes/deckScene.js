'use strict'

//EN ESTA PANTALLA ELEGIMOS LOS INTEGRANTES DEL EQUIPO ANTES DE ENTRAR A LA PELEA 

class deck extends Phaser.Scene{
    constructor(){
        super({key: 'deck'})
        this.extend =
        {
        	cards:[],
            numberOfPages:0,
            numberOfPage:0,
            numberOfPageText:null,
            bigcardSprite:null,
            text:{
                name: null,
                lore: null,
                attack: null,
                defense: null,
                Hp: null,
                evasion: null,
                aggro: null,
                rarity: null,
                crit_hit_chance: null,
                abilities: null,
            },
            positionOfSmallAlliesCards:[[400,400],
            [500,400],
            [600,600],
            [700,600]],
            alliesCards:[],

        }
    }
    preload(){
        
    }
    create(){
        var that=this;

    	that.extend.numberOfPages = Math.ceil(game.global.user.heros.length/9);
    		
    	that.extend.numberOfPageText = this.add.text(300,300,that.extend.numberOfPage);
        var numberOfPagesText = this.add.text(320,320,that.extend.numberOfPages);

        //Textos
        this.extend.text.name = this.add.text(200,200,"").setDepth(1);
        this.extend.text.lore = this.add.text(200,200,"",{wordWrap:{width:200}}).setDepth(1);
        this.extend.text.attack = this.add.text(200,200,"").setDepth(1);
        this.extend.text.defense = this.add.text(200,200,"").setDepth(1);
        this.extend.text.Hp = this.add.text(200,200,"").setDepth(1);
        this.extend.text.evasion = this.add.text(200,200,"").setDepth(1);
        this.extend.text.aggro = this.add.text(200,200,"").setDepth(1);
        this.extend.text.rarity = this.add.text(200,200,"").setDepth(1);
        this.extend.text.crit_hit_chance = this.add.text(200,200,"").setDepth(1);
        this.extend.text.abilities = this.add.text(200,200,"").setDepth(1);

        //BOTONES
    	//Boton volver
        var backButt=this.add.sprite(100,100,'backButt').setScale(1).setInteractive();
        backButt.on('pointerdown',function(){this.setFrame(1);})
        backButt.on('pointerup',function(){this.setFrame(0);transition("back",that);})

        var UpArrowButt=this.add.sprite(1350,100,'UpArrow').setScale(1).setInteractive();
        UpArrowButt.on('pointerup',function(){
            that.extend.numberOfPage=(that.extend.numberOfPage+1)%that.extend.numberOfPages;
            that.extend.numberOfPageText.setText(that.extend.numberOfPage);
            that.drawCards(that.extend.numberOfPage)
         
            ;})

        var DownArrowButt=this.add.sprite(1350,1000,'DownArrow').setScale(1).setInteractive();
        DownArrowButt.on('pointerup',function(){
            that.extend.numberOfPage-=1
            if(that.extend.numberOfPage<0){
                that.extend.numberOfPage=that.extend.numberOfPages-1;
            }
            that.extend.numberOfPageText.setText(that.extend.numberOfPage);
            that.drawCards(that.extend.numberOfPage)

            ;})

        var EnterSimulationButt = this.add.sprite(300,1000,'largeButt').setScale(1).setInteractive();
        EnterSimulationButt.on('pointerup',function(){
            setTimeout(function(){that.scene.transition({target:'SimulationScene',duration:0});}, 1000);
        })

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
    	var rowsDistance = 250
    	var allHeroes = game.global.user.heros;
    	

    	for(var j = 0; j<9 ; j++){
    		if(that.extend.cards[j]!=null)
    		that.extend.cards[j].destroy();
    		if(allHeroes[i*9+j]!=null)
    		that.extend.cards[j] = new CollectionCard(this,1100+(j%3)*collsDistance,300+(Math.floor((j/3))%3)*rowsDistance,allHeroes[i*9+j],400,400);
    	}
    	
        for(var s = 0; s<that.extend.cards.length; s++){
            for(var i= 0; i<that.extend.alliesCards.length; i++){
                 if(that.extend.cards[s].hero.cardExclusiveId==that.extend.alliesCards[i].numberOfCard){
                            that.extend.cards[s].HeroSprite.setTint(7434609);
                        }
            }
           
        }
    	
    }
}