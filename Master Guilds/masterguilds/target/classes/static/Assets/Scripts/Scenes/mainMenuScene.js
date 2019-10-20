//Esta escena se corresponde con aquella que aparecera despues de la posible cinematica que haya al empezar y 
//despues de una pantalla de inicio "pulsa la pantalla para continuar" 
//Lo anterior esta sujeto a lo que decidan los diseñadores
//Desde esta escena se podra acceder tanto a los posibles ajustes si hay , misiones , inventario y tienda.
class mainMenu extends Phaser.Scene{
    constructor(){
        super({key:'mainMenu'})
        this.extend={click:null,ENGroup:null,ESGroup:null,ensub:null,essub:null}
    }

	preload(){
        this.add.image(960,540,'backWood');
        //this.add.image(500,550,'largeInfo').setScale(0.9);
	}

	create(){
		var that=this;
		
		this.extend.click=this.sound.add('click');
        //var botCombate=this.add.sprite('').setInteractive({useHandCursor:true});
        //var bot Galeria=this.add.sprite().setInteractive({useHandCursor});
        console.log("mainMenu")
        
        //TEMP BUTTON PLACEMENTS
        
        var historyplayButt=this.add.sprite(450,270,'largePlayHistoryButt').setInteractive()
        //var questsplayButt=this.add.sprite(450,720,'largePlayMisionsButt').setInteractive()
        var arenaplayButt=this.add.sprite(450,500,'largePlayArenaButt').setInteractive()    
        var collButt=this.add.sprite(450,720,'largeButt').setInteractive()
        var shopButt=this.add.sprite(450,950,'largeShopButt').setInteractive()
        
        
        //var historyplayButt=this.add.sprite(450,500,'largePlayHistoryButt').setInteractive()
        //var questsplayButt=this.add.sprite(450,720,'largePlayMisionsButt').setInteractive()
        //var arenaplayButt=this.add.sprite(450,950,'largePlayArenaButt').setInteractive()    
        //var collButt=this.add.sprite(1450,720,'largeButt').setInteractive()
        //var shopButt=this.add.sprite(1450,950,'largeAdministrationButt').setInteractive()
        
        
        var infoBar=this.add.sprite(960,63,'infoBar')
        var en6=this.add.text(250,10,'Main menu',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#fff',fontStyle:'bold'});
        that.extend.ensub=this.add.text(600,50,'Battle, check your cards or acquire new ones',{fontFamily:"Museo-700" ,fontSize:'40px',color:'#fff',fontStyle:'bold'})
        
        var es6=this.add.text(230,10,'Menú principal',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#fff',fontStyle:'bold'});
        that.extend.essub=this.add.text(680,50,'Pelea, mira tus cartas o consigue otras nuevas',{fontFamily:"Museo-700" ,fontSize:'40px',color:'#fff',fontStyle:'bold'})
        
        var backButt=this.add.sprite(85,80,'backButt').setInteractive()    
        //var news=this.add.sprite(1450,360,'newsPaper').setInteractive()
        var news=this.add.sprite(1450,650,'newsPaper').setInteractive()
        
        var enX=this.add.text(1250,600,'NEWS',{fontFamily:"Museo-700" ,fontSize:'80px',color:'#000',fontStyle:'bold'});
        
        var esX=this.add.text(1220,600,'NOTICIAS',{fontFamily:"Museo-700" ,fontSize:'80px',color:'#000',fontStyle:'bold'});
        
        news.on('pointerup',function(){
        	that.scene.launch('newsPop')
        	that.scene.pause();
        })
        
        backButt.on('pointerdown',function(){this.setFrame(1);})
        backButt.on('pointerup',function(){this.setFrame(0);transition("back",that)})
        //temp function
        
      

        historyplayButt.on('pointerdown',function(){this.setFrame(1)});
        //questsplayButt.on('pointerdown',function(){this.setFrame(1)});
        arenaplayButt.on('pointerdown',function(){this.setFrame(1)});
        collButt.on('pointerdown',function(){this.setFrame(1)});
        shopButt.on('pointerdown',function(){this.setFrame(1)});
        
        historyplayButt.on('pointerup',function(){this.setFrame(0);transition("playHistory")});
        //questsplayButt.on('pointerup',function(){this.setFrame(0);transition("playQuests")});
        arenaplayButt.on('pointerup',function(){this.setFrame(0);transition("playArena")});
        collButt.on('pointerup',function(){this.setFrame(0);transition("coll")});
        shopButt.on('pointerup',function(){this.setFrame(0);transition("shop")});
        
        historyplayButt.on('pointerout',function(){this.setFrame(0)});
        //questsplayButt.on('pointerout',function(){this.setFrame(0)});
        arenaplayButt.on('pointerout',function(){this.setFrame(0)});
        collButt.on('pointerout',function(){this.setFrame(0)});
        shopButt.on('pointerout',function(){this.setFrame(0)});
        backButt.on('pointerout',function(){this.setFrame(0)});

        
        var en1=this.add.text(350,225,'Story',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
        //var en1=this.add.text(350,455,'Story',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
        //var en2=this.add.text(315,675,'Quests',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
        var en2=this.add.text(350,455,'Arena',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
        //var en3=this.add.text(350,905,'Arena',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
        //var en4=this.add.text(1250,675,'Collection',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
        var en4=this.add.text(300,675,'Collection',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
        //var en5=this.add.text(1350,905,'Shop',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
        var en5=this.add.text(350,905,'Shop',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
        
        //var es1=this.add.text(330,455,'Historia',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
        //var es2=this.add.text(300,675,'Misiones',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
        //var es2=this.add.text(350,905,'Arena',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
        //var es4=this.add.text(1270,675,'Colección',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
        //var es5=this.add.text(1340,905,'Tienda',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
        
        var es1=this.add.text(330,225,'Historia',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
        //var es2=this.add.text(300,675,'Misiones',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
        var es2=this.add.text(350,455,'Arena',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
        var es4=this.add.text(290,675,'Colección',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
        var es5=this.add.text(350,905,'Tienda',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
        
        that.extend.ESGroup=this.add.container(0,0);
        that.extend.ENGroup=this.add.container(0,0);
    
        that.extend.ESGroup.add(es1);
        
        that.extend.ESGroup.add(es2);
        that.extend.ESGroup.add(es4);
        that.extend.ESGroup.add(es5);
        that.extend.ESGroup.add(es6);
        that.extend.ESGroup.add(esX);
        //that.extend.ESGroup.add(es7);
    
        that.extend.ENGroup.add(en1);
       
        that.extend.ENGroup.add(en2);
        that.extend.ENGroup.add(en4);
        that.extend.ENGroup.add(en5);
        that.extend.ENGroup.add(en6);
        that.extend.ENGroup.add(enX);
        
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
        
        //that.extend.ENGroup.add(en7);
        //pointerOverFunctions [COPYPASTED LOGIN]
   
        //reg.on('pointerout',function(){this.setFrame(...)});
        //reg.on('pointerdown',function(){this.setFrame(...); transition("reg")});
        //SFX? .sound.play();
        //enter.on('pointerover',function(){this.setFrame(...)});
        //enter.on('pointerout',function(){this.setFrame(...)});
        //enter.on('pointerdown',function(){this.setFrame(...); transition("ent")});
        
        //CARGAMOS LAS MISIONES PARA LA PROXIMA ESCENA
        var msg = new Object();
        msg.event = "GETMISIONS"
        game.global.socket.send(JSON.stringify(msg))
        ///////////////////////////////////////////////

        function transition(str){
        	that.extend.click.play();
            switch(str){
                case "playHistory":
                    that.scene.transition({target:'chapter',duration:100});
                break;
                case "playQuests":
                	that.scene.launch('comingSoonQ')
                	that.scene.pause();
                break
                case "coll":
                //console.log("not done yet")
                	that.scene.transition({target:'collection',duration:100});
                break;
                case "shop":
                        //console.log("not done yet")
                	that.scene.transition({target:'shop',duration:100});
                break;
                case "back":
                	that.scene.transition({target:'title',duration:100});
                break;
                case "playArena":
                    that.scene.transition({target:'arena',duration:100});
                
                default:
                break;
            }
        
	   }
    }
	update(){
		
	}

}

class comingSoonQ extends Phaser.Scene{
	constructor(){
		super({key:'comingSoonQ'})
	}
	create(){
		var that=this
	   	var click=this.sound.add('click');
		click.setVolume(game.global.user.evol);
		this.add.sprite(960,540,'BLACK');
		this.add.sprite(960,440,'mediumInfo');
		this.add.text(800,300,"Coming\n Soon!!",{fontFamily:"Museo-700" ,fontSize:'80px',color:'#000',fontStyle:'bold'});
		var okButt=this.add.sprite(960,850,'largeButt').setInteractive()
		this.add.text(900,820,"OK",{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
		okButt.on('pointerout',function(){this.setFrame(0)})
		okButt.on('pointerdown',function(){this.setFrame(1)})
		
		okButt.on('pointerup',function(){
			click.play();
			
			this.setFrame(0);
			that.scene.resume('mainMenu');
			that.scene.stop();
		});
	}
}

class newsPop extends Phaser.Scene{
	constructor(){
		super({key:'newsPop'})
		this.extend={click:null,page:0}
	}
	create(){
		var that=this
		this.extend.click=this.sound.add('click');
		this.extend.click.setVolume(game.global.user.evol);
		this.add.sprite(960,540,'BLACK');
		this.add.sprite(960,500,'largeInfo');
		var okButt=this.add.sprite(960,950,'largeButt').setInteractive()
		this.add.text(900,910,"OK",{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
		okButt.on('pointerout',function(){this.setFrame(0)})
		okButt.on('pointerdown',function(){this.setFrame(1)})
		
		okButt.on('pointerup',function(){
			that.extend.click.play();
			this.setFrame(0);
			that.scene.resume('mainMenu');
			that.scene.stop();
		});
		
		var goButt=this.add.sprite(960,550,'largeButt').setInteractive();
		var goText=this.add.text(900,510,"GO",{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
		goButt.on('pointerout',function(){this.setFrame(0)})
		goButt.on('pointerdown',function(){this.setFrame(1)})
		
		goButt.on('pointerup',function(){
			that.extend.click.play();
			this.setFrame(0);
			window.open("https://raw.githubusercontent.com/djalfadevs/djalfadevs.github.io/master/Concept/RoadMap.png");
			
		});
		
		var en1=this.add.text(650,200,"ROADMAP NOW AVAILABLE",{fontFamily:"Museo-700" ,fontSize:'50px',color:'#000',fontStyle:'bold'});
		var en2=this.add.text(600,200,"FIRST EVENT COMING\nIN NOVEMBER!\nNew Heroes & campaign maps\nincoming!\nStay tuned for the rewards",{fontFamily:"Museo-700" ,fontSize:'50px',color:'#000',fontStyle:'bold'});
		
		var es1=this.add.text(650,200,"ROADMAP DISPONIBLE",{fontFamily:"Museo-700" ,fontSize:'50px',color:'#000',fontStyle:'bold'});
		var es2=this.add.text(600,200,"¡EL PRIMER EVENTO LLEGARÁ\nEN NOVIEMBRE! Nuevos heroes\n y mapas de campaña!\nMantente atento para\nconseguir recompensas",{fontFamily:"Museo-700" ,fontSize:'50px',color:'#000',fontStyle:'bold'});
		
		en1.alpha=0
		en2.alpha=0
		es1.alpha=0
		es2.alpha=0
		
		switch(game.global.user.lang){
		case "EN":
			en1.alpha=1
			break
		case "ES":
			es1.alpha=1
			break
		default:
			break
		}
		
		var left=that.add.sprite(400,540,'UpArrow').setInteractive();
	    left.angle=270;
	    var right=that.add.sprite(1500,540,'DownArrow').setInteractive();
	    right.angle=270;
	    
		 left.on('pointerup',function(){
		    	this.setFrame(0); 
		    	that.extend.click.play();
		    	that.extend.page+=1; 
		    	switch(that.extend.page){
		    		case 1:
		    			en1.alpha=0
		    			en2.alpha=0
		    			es1.alpha=0
		    			es2.alpha=0
		    			goButt.removeInteractive()
		    			goButt.alpha=0;
		    			goText.alpha=0;
		    			switch(game.global.user.lang){
		    			case "EN":
		    				en2.alpha=1;
		    			break;
		    			case "ES":
		    				es2.alpha=1;
		    			break;
		    			}
		    			break;
		    		default:
		    			that.extend.page=0
		    			en2.alpha=0;
		    			es2.alpha=0;
		    			en1.alpha=0;
		    			es1.alpha=0;
		    			goButt.setInteractive()
		    			goButt.alpha=1;
		    			goText.alpha=1;
		    			switch(game.global.user.lang){
		    			case "EN":
		    				en1.alpha=1;
		    			break;
		    			case "ES":
		    				es1.alpha=1;
		    			break;
		    			}
		    			break;
		    	}
		    })
		    left.on('pointerdown',function(){
		    	this.setFrame(1)
		    })
		    left.on('pointerout',function(){
		    	this.setFrame(0)
		    })
		    
		    right.on('pointerup',function(){
		    	this.setFrame(0); 
		    	that.extend.click.play();
		    	that.extend.page-=1; 
		    	switch(that.extend.page){
		    		case 0:
		    			en1.alpha=0
		    			en2.alpha=0
		    			es1.alpha=0
		    			es2.alpha=0
		    			
		    			goButt.setInteractive()
		    			goButt.alpha=1;
		    			goText.alpha=1;
		    			switch(game.global.user.lang){
		    			case "EN":
		    				en1.alpha=1;
		    			break;
		    			case "ES":
		    				es1.alpha=1;
		    			break;
		    			}
		    			break;
		    		default:
		    			that.extend.page=1
		    			en1.alpha=0
		    			en2.alpha=0
		    			es1.alpha=0
		    			es2.alpha=0
		    			goButt.removeInteractive()
		    			goButt.alpha=0;
		    			goText.alpha=0;
		    			switch(game.global.user.lang){
		    			case "EN":
		    				en2.alpha=1;
		    			break;
		    			case "ES":
		    				es2.alpha=1;
		    			break;
		    			}
		    			break;
		    	}
		    })
		    right.on('pointerdown',function(){
		    	this.setFrame(1)
		    })
		    right.on('pointerout',function(){
		    	this.setFrame(0)
		    })
		
		
	}
	update(){
	}
	}


