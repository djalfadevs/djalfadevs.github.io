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
            numberOfPageText:null,
            bigcardSprite:null,
            text:{
            	click:null,
            	draw1:null,
                name: null,
                lore: null,
                loreEN:null,
                attack: null,
                defense: null,
                Hp: null,
                evasion: null,
                aggro: null,
                rarity: null,
                crit_hit_chance: null,
                abilities0: null,
                abilities0d: null,
                abilities0dEN: null,
                abilities1: null,
                abilities1d: null,
                abilities1dEN: null,
                ENGroup:null,ESGroup:null,star1:null,star3:null,star5:null
            }
        }
    }
    preload(){
    	//Fondo
        this.add.image(960,540,'backWood');
        this.add.image(530,580,'largeInfo');
        this.add.sprite(960,63,'infoBar');
    }
    create(){
    	this.extend.click=this.sound.add('click')
    	this.extend.draw1=this.sound.add('draw1');
        this.extend.click.setVolume(game.global.user.evol)
        this.extend.draw1.setVolume(game.global.user.evol)

    	var that=this;
    	var en1=this.add.text(250,10,'Collection',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#fff',fontStyle:'bold'});
		var es1=this.add.text(250,10,'Colección',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#fff',fontStyle:'bold'});
    	that.extend.numberOfPages = Math.ceil(game.global.user.heros.length/9);
    		
    	that.extend.numberOfPageText = this.add.text(1770,920,that.extend.numberOfPage+1,{fontFamily:"Museo-700" ,fontSize:'60px',color:'#000',fontStyle:'bold'});
        this.add.text(1800,940,"/",{fontFamily:"Museo-700" ,fontSize:'60px',color:'#000',fontStyle:'bold'});
    	var numberOfPagesText = this.add.text(1820,950,that.extend.numberOfPages,{fontFamily:"Museo-700" ,fontSize:'60px',color:'#000',fontStyle:'bold'});

        //Textos
        this.extend.text.name = this.add.text(695,228,"",{fontFamily:"Museo-700" ,fontSize:'30px',color:'#000',fontStyle:'bold'}).setDepth(1);
        this.extend.text.lore = this.add.text(520,325,"",{fontFamily:"Museo-700" ,fontSize:'30px',color:'#000',fontStyle:'bold',wordWrap:{width:420}}).setDepth(1);
        this.extend.text.loreEN = this.add.text(520,325,"",{fontFamily:"Museo-700" ,fontSize:'30px',color:'#000',fontStyle:'bold',wordWrap:{width:420}}).setDepth(1);
        this.extend.text.attack = this.add.text(680,548,"",{fontFamily:"Museo-700" ,fontSize:'30px',color:'#000',fontStyle:'bold'}).setDepth(1);
        this.extend.text.defense = this.add.text(690,588,"",{fontFamily:"Museo-700" ,fontSize:'30px',color:'#000',fontStyle:'bold'}).setDepth(1);
        this.extend.text.Hp = this.add.text(600,628,"",{fontFamily:"Museo-700" ,fontSize:'30px',color:'#000',fontStyle:'bold'}).setDepth(1);
        this.extend.text.evasion = this.add.text(690,668,"",{fontFamily:"Museo-700" ,fontSize:'30px',color:'#000',fontStyle:'bold'}).setDepth(1);
        this.extend.text.aggro = this.add.text(660,708,"",{fontFamily:"Museo-700" ,fontSize:'30px',color:'#000',fontStyle:'bold'}).setDepth(1);
        this.extend.text.rarity = this.add.text(200,200,"").setDepth(1);
        this.extend.text.rarity.alpha=0;
        this.extend.text.crit_hit_chance = this.add.text(800,748,"",{fontFamily:"Museo-700" ,fontSize:'30px',color:'#000',fontStyle:'bold'}).setDepth(1);
        this.extend.text.abilities0 = this.add.text(150,820,"",{fontFamily:"Museo-700" ,fontSize:'30px',color:'#000',fontStyle:'bold'}).setDepth(1);
        this.extend.text.abilities1 = this.add.text(150,860,"",{fontFamily:"Museo-700" ,fontSize:'30px',color:'#000',fontStyle:'bold'}).setDepth(1);
        
        this.extend.text.abilities0d = this.add.text(360,828,"",{fontFamily:"Museo-700" ,fontSize:'20px',color:'#000',fontStyle:'bold',wordWrap:{width:610}}).setDepth(1);
        this.extend.text.abilities1d = this.add.text(360,868,"",{fontFamily:"Museo-700" ,fontSize:'20px',color:'#000',fontStyle:'bold',wordWrap:{width:610}}).setDepth(1);
        this.extend.text.abilities0dEN = this.add.text(360,828,"",{fontFamily:"Museo-700" ,fontSize:'20px',color:'#000',fontStyle:'bold',wordWrap:{width:610}}).setDepth(1);
        this.extend.text.abilities1dEN = this.add.text(360,868,"",{fontFamily:"Museo-700" ,fontSize:'20px',color:'#000',fontStyle:'bold',wordWrap:{width:610}}).setDepth(1);
        
        that.extend.star1=this.add.sprite(320,220,'1star').setScale(1);
        that.extend.star1.alpha=0;
        that.extend.star3=this.add.sprite(320,220,'3star').setScale(1);
        that.extend.star3.alpha=0;
        that.extend.star5=this.add.sprite(320,220,'5star').setScale(1);
        that.extend.star5.alpha=0;
        
        var en2=this.add.text(520,220,"Name: ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});   
        var en3=this.add.text(520,280,"Lore: ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
        var en4=this.add.text(520,540,"Attack: ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
        var en5=this.add.text(520,580,"Defense: ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
        var en6=this.add.text(520,620,"HP: ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
        var en7=this.add.text(520,660,"Evasion: ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
        var en8=this.add.text(520,700,"Aggro: ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
        var en9=this.add.text(500,740,"Critical hit rate: ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
        var en10=this.add.text(360,780,"Abilities: ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
        
        var es2=this.add.text(520,220,"Nombre: ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});   
        var es3=this.add.text(520,280,"Historia: ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
        var es4=this.add.text(520,540,"Ataque: ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
        var es5=this.add.text(520,580,"Defensa: ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
        var es6=this.add.text(520,620,"HP: ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
        var es7=this.add.text(520,660,"Evasión: ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
        var es8=this.add.text(520,700,"Aggro: ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
        var es9=this.add.text(500,740,"Ratio crítico: ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
        var es10=this.add.text(360,780,"Habilidades: ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
        
        
        that.extend.ESGroup=this.add.container(0,0);
        that.extend.ENGroup=this.add.container(0,0);
    
        that.extend.ESGroup.add(es1);
        that.extend.ESGroup.add(es2);
        that.extend.ESGroup.add(es3);
        that.extend.ESGroup.add(es4);
        that.extend.ESGroup.add(es5);
        that.extend.ESGroup.add(es6);
        that.extend.ESGroup.add(es7);
        that.extend.ESGroup.add(es8);
        that.extend.ESGroup.add(es9);
        that.extend.ESGroup.add(es10);
        that.extend.ENGroup.add(en1);
        that.extend.ENGroup.add(en2);
        that.extend.ENGroup.add(en3);
        that.extend.ENGroup.add(en4);
        that.extend.ENGroup.add(en5);
        that.extend.ENGroup.add(en6);
        that.extend.ENGroup.add(en7);
        that.extend.ENGroup.add(en8);
        that.extend.ENGroup.add(en9);
        that.extend.ENGroup.add(en10);


        this.lenguajeupdate();
    	//BOTONES
    	//Boton volver
        var backButt=this.add.sprite(85,80,'backButt').setInteractive()  
       
        backButt.on('pointerdown',function(){this.setFrame(1); that.extend.click.play();transition("back",that)})
        backButt.on('pointerup',function(){this.setFrame(0)})

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

        this.drawCards(that.extend.numberOfPage);

        var transition=function(str,t){
        	that.extend.click.play();
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
    	
    	
    }
    update(){
		 
	}

    lenguajeupdate(){
        switch(game.global.user.lang){
        case "ES":
            
            this.extend.ENGroup.alpha=0;
            this.extend.ESGroup.alpha=1;
            this.extend.text.lore.alpha=1;
            this.extend.text.loreEN.alpha=0;
            this.extend.text.abilities0d.alpha=1;
            this.extend.text.abilities1d.alpha=1;
            this.extend.text.abilities0dEN.alpha=0;
            this.extend.text.abilities1dEN.alpha=0;
            
            
            break;
        case "EN":
            
            this.extend.ENGroup.alpha=1;
            this.extend.ESGroup.alpha=0;
            this.extend.text.lore.alpha=0;
            this.extend.text.loreEN.alpha=1;
            this.extend.text.abilities0d.alpha=0;
            this.extend.text.abilities1d.alpha=0;
            this.extend.text.abilities0dEN.alpha=1;
            this.extend.text.abilities1dEN.alpha=1;
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
