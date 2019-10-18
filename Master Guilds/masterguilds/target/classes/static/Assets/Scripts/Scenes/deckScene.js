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
            	click:null,
            	draw1:null,
                name: null,
                attack: null,
                defense: null,
                Hp: null,
                evasion: null,
                aggro: null,
                rarity: null,
                crit_hit_chance: null,
                abilities0: null,abilities1: null,
                ENGroup:null,ESGroup:null,star1:null,star3:null,star5:null
            },
            positionOfSmallAlliesCards:[[550,750],
            [650,750],
            [750,750],
            [850,750]],
            alliesCards:[],

        }
    }
    preload(){
        this.add.image(960,540,'backWood')
        this.add.image(530,580,'largeInfo');
        this.add.sprite(960,63,'infoBar');
    }
    create(){
    	var that=this;
    	this.extend.click=this.sound.add('click');
        this.extend.draw1=this.sound.add('draw1');
        this.extend.draw1.setVolume(game.global.user.evol)
        this.extend.click.setVolume(game.global.user.evol)

        that.extend.alliesCards = [];
    	var en1=this.add.text(250,10,'Team selection',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#fff',fontStyle:'bold'});
		var es1=this.add.text(250,10,'Selección de equipo',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#fff',fontStyle:'bold'});

    	that.extend.numberOfPages = Math.ceil(game.global.user.heros.length/9);
    		
    	that.extend.numberOfPageText = this.add.text(1770,920,that.extend.numberOfPage+1,{fontFamily:"Museo-700" ,fontSize:'60px',color:'#000',fontStyle:'bold'});
        this.add.text(1800,940,"/",{fontFamily:"Museo-700" ,fontSize:'60px',color:'#000',fontStyle:'bold'});
    	var numberOfPagesText = this.add.text(1820,950,that.extend.numberOfPages,{fontFamily:"Museo-700" ,fontSize:'60px',color:'#000',fontStyle:'bold'});

        //Textos
    	this.extend.text.name = this.add.text(695,228,"",{fontFamily:"Museo-700" ,fontSize:'30px',color:'#000',fontStyle:'bold'}).setDepth(1);
    	this.extend.text.attack = this.add.text(680,268,"",{fontFamily:"Museo-700" ,fontSize:'30px',color:'#000',fontStyle:'bold'}).setDepth(1);
    	this.extend.text.defense = this.add.text(690,308,"",{fontFamily:"Museo-700" ,fontSize:'30px',color:'#000',fontStyle:'bold'}).setDepth(1);
    	this.extend.text.Hp = this.add.text(600,348,"",{fontFamily:"Museo-700" ,fontSize:'30px',color:'#000',fontStyle:'bold'}).setDepth(1);
    	this.extend.text.evasion = this.add.text(690,388,"",{fontFamily:"Museo-700" ,fontSize:'30px',color:'#000',fontStyle:'bold'}).setDepth(1);
        this.extend.text.aggro = this.add.text(660,428,"",{fontFamily:"Museo-700" ,fontSize:'30px',color:'#000',fontStyle:'bold'}).setDepth(1);
        this.extend.text.rarity = this.add.text(200,200,"").setDepth(1);
        this.extend.text.rarity.alpha=0
        this.extend.text.crit_hit_chance = this.add.text(820,468,"",{fontFamily:"Museo-700" ,fontSize:'30px',color:'#000',fontStyle:'bold'}).setDepth(1);
        this.extend.text.abilities0 = this.add.text(520,548,"",{fontFamily:"Museo-700" ,fontSize:'30px',color:'#000',fontStyle:'bold'}).setDepth(1);
        this.extend.text.abilities1 = this.add.text(520,588,"",{fontFamily:"Museo-700" ,fontSize:'30px',color:'#000',fontStyle:'bold'}).setDepth(1);
        
        that.extend.star1=this.add.sprite(320,220,'1star').setScale(0.05);
        that.extend.star1.alpha=0;
        that.extend.star3=this.add.sprite(320,220,'3star').setScale(0.05);
        that.extend.star3.alpha=0;
        that.extend.star5=this.add.sprite(320,220,'5star').setScale(0.05);
        that.extend.star5.alpha=0;
        
        var en2=this.add.text(520,220,"Name: ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});   
        var en4=this.add.text(520,260,"Attack: ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
        var en5=this.add.text(520,300,"Defense: ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
        var en6=this.add.text(520,340,"HP: ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
        var en7=this.add.text(520,380,"Evasion: ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
        var en8=this.add.text(520,420,"Aggro: ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
        var en9=this.add.text(520,460,"Critical hit rate: ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
        var en10=this.add.text(520,500,"Abilities: ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
        
        var es2=this.add.text(520,220,"Nombre: ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});   
        var es4=this.add.text(520,260,"Ataque: ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
        var es5=this.add.text(520,300,"Defensa: ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
        var es6=this.add.text(520,340,"HP: ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
        var es7=this.add.text(520,380,"Evasión: ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
        var es8=this.add.text(520,420,"Aggro: ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
        var es9=this.add.text(520,460,"Ratio crítico: ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
        var es10=this.add.text(520,500,"Habilidades: ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
        
        
        that.extend.ESGroup=this.add.container(0,0).setDepth(3);
        that.extend.ENGroup=this.add.container(0,0).setDepth(3);
    
        that.extend.ESGroup.add(es1);
        that.extend.ESGroup.add(es2);
        that.extend.ESGroup.add(es4);
        that.extend.ESGroup.add(es5);
        that.extend.ESGroup.add(es6);
        that.extend.ESGroup.add(es7);
        that.extend.ESGroup.add(es8);
        that.extend.ESGroup.add(es9);
        that.extend.ESGroup.add(es10);
        that.extend.ENGroup.add(en1);
        that.extend.ENGroup.add(en2);
        that.extend.ENGroup.add(en4);
        that.extend.ENGroup.add(en5);
        that.extend.ENGroup.add(en6);
        that.extend.ENGroup.add(en7);
        that.extend.ENGroup.add(en8);
        that.extend.ENGroup.add(en9);
        that.extend.ENGroup.add(en10);
        
        //BOTONES
    	//Boton volver
        var backButt=this.add.sprite(85,80,'backButt').setInteractive()          
        backButt.on('pointerdown',function(){this.setFrame(1)})
        backButt.on('pointerup',function(){this.setFrame(0);
        	that.extend.click.play();
            game.global.simulation.SetSimulationtoStartState();
            that.scene.transition({target:'chapter',duration:0})
        })

        var UpArrowButt=this.add.sprite(1350,100,'UpArrow').setScale(1).setInteractive();
        UpArrowButt.on('pointerup',function(){
        	that.extend.click.play();
            that.extend.numberOfPage=(that.extend.numberOfPage+1)%that.extend.numberOfPages;
            that.extend.numberOfPageText.setText(that.extend.numberOfPage+1);
            that.drawCards(that.extend.numberOfPage)
         
            ;})

        var DownArrowButt=this.add.sprite(1350,1000,'DownArrow').setScale(1).setInteractive();
        DownArrowButt.on('pointerup',function(){
        	that.extend.click.play();
            that.extend.numberOfPage-=1
            if(that.extend.numberOfPage<0){
                that.extend.numberOfPage=that.extend.numberOfPages-1;
            }
            that.extend.numberOfPageText.setText(that.extend.numberOfPage+1);
            that.drawCards(that.extend.numberOfPage)

            ;})

        var EnterSimulationButt = this.add.sprite(520,850,'largeButt').setScale(1).setDepth(4).setInteractive()
        EnterSimulationButt.on('pointerup',function(){
        	that.extend.click.play();
            setTimeout(function(){that.scene.transition({target:'SimulationScene',duration:0});}, 1000);
        })
        //EnterSimulationButt.setDepth(2);

        var en11=this.add.text(440,800,"Start",{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'}).setDepth(5)
        var es11=this.add.text(370,800,"Empezar",{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'}).setDepth(5)
        that.extend.textStart = en11;
        that.extend.textoEmpezar = es11;
        
        this.drawCards(that.extend.numberOfPage);

        this.lenguajeupdate();//Muestra el español o el ingles

        var transition=function(str,t){
        	t.extend.click.play();
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
    		that.extend.cards[j] = new CollectionCard(this,1100+(j%3)*collsDistance,300+(Math.floor((j/3))%3)*rowsDistance,allHeroes[i*9+j],320,500);
    	}
    	
        for(var s = 0; s<that.extend.cards.length; s++){
            for(var i= 0; i<that.extend.alliesCards.length; i++){
                 if(that.extend.cards[s].hero.cardExclusiveId==that.extend.alliesCards[i].numberOfCard){
                            that.extend.cards[s].HeroSprite.setTint(7434609);
                        }
            }
           
        }
    	
    }
    
    update(){
		 
	}

    lenguajeupdate(){
        switch(game.global.user.lang){
        case "ES":
            
            this.extend.ENGroup.alpha=0;
            this.extend.ESGroup.alpha=1;
            this.extend.textStart.alpha=0;
            this.extend.textoEmpezar.alpha=1;
            
            break;
        case "EN":
            
            this.extend.ENGroup.alpha=1;
            this.extend.ESGroup.alpha=0;
            this.extend.textStart.alpha=1;
            this.extend.textoEmpezar.alpha=0;
            break;
        default:
            break;
        }
    }

    startsupdate(){
        switch(this.extend.text.rarity.text){
         case "1":
             this.extend.star1.alpha=1;
             this.extend.star3.alpha=0;
             this.extend.star5.alpha=0;
             break;
         case "3":
             this.extend.star1.alpha=0;
             this.extend.star3.alpha=1;
             this.extend.star5.alpha=0;
             break;
         case "5":
             this.extend.star1.alpha=0;
             this.extend.star3.alpha=0;
             this.extend.star5.alpha=1;
             break;
        default:
            console.log(this.extend.text)
            break;
         }
    }
}