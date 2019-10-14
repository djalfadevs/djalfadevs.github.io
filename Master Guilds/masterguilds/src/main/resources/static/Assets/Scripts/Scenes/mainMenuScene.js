//Esta escena se corresponde con aquella que aparecera despues de la posible cinematica que haya al empezar y 
//despues de una pantalla de inicio "pulsa la pantalla para continuar" 
//Lo anterior esta sujeto a lo que decidan los diseñadores
//Desde esta escena se podra acceder tanto a los posibles ajustes si hay , misiones , inventario y tienda.
class mainMenu extends Phaser.Scene{
    constructor(){
        super({key:'mainMenu'})
    }

	preload(){
        this.add.image(960,540,'backWood');
        //this.add.image(500,550,'largeInfo').setScale(0.9);
	}

	create(){
		var that=this;
        //var botCombate=this.add.sprite('').setInteractive({useHandCursor:true});
        //var bot Galeria=this.add.sprite().setInteractive({useHandCursor});
        console.log("mainMenu")
        
        //TEMP BUTTON PLACEMENTS
        
        var historyplayButt=this.add.sprite(450,500,'largePlayHistoryButt').setInteractive()
        var questsplayButt=this.add.sprite(450,720,'largePlayMisionsButt').setInteractive()
        var arenaplayButt=this.add.sprite(450,950,'largePlayArenaButt').setInteractive()    
        var collButt=this.add.sprite(1450,720,'largeButt').setInteractive()
        var shopButt=this.add.sprite(1450,950,'largeAdministrationButt').setInteractive()
        
        var infoBar=this.add.sprite(960,63,'infoBar')
        this.add.text(250,10,'Main menu',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#fff',fontStyle:'bold'});
        this.add.text(600,50,'Battle, check your cards or acquire new ones',{fontFamily:"Museo-700" ,fontSize:'40px',color:'#fff',fontStyle:'bold'}).alpha=0.6
        var backButt=this.add.sprite(85,80,'backButt').setInteractive()    
        var news=this.add.sprite(1450,360,'newsPaper').setInteractive()

        news.on('pointerup',function(){
        	that.scene.launch('newsPop')
        	that.scene.pause();
        })
        
        backButt.on('pointerdown',function(){this.setFrame(1);})
        backButt.on('pointerup',function(){this.setFrame(0);transition("back",that)})
        //temp function
        
      

        historyplayButt.on('pointerdown',function(){this.setFrame(1)});
        questsplayButt.on('pointerdown',function(){this.setFrame(1)});
        arenaplayButt.on('pointerdown',function(){this.setFrame(1)});
        collButt.on('pointerdown',function(){this.setFrame(1)});
        shopButt.on('pointerdown',function(){this.setFrame(1)});
        
        historyplayButt.on('pointerup',function(){this.setFrame(0);transition("playHistory")});
        questsplayButt.on('pointerup',function(){this.setFrame(0);transition("playQuests")});
        arenaplayButt.on('pointerup',function(){this.setFrame(0);transition("playArena")});
        collButt.on('pointerup',function(){this.setFrame(0);transition("coll")});
        shopButt.on('pointerup',function(){this.setFrame(0);transition("shop")});
        
        historyplayButt.on('pointerout',function(){this.setFrame(0)});
        questsplayButt.on('pointerout',function(){this.setFrame(0)});
        arenaplayButt.on('pointerout',function(){this.setFrame(0)});
        collButt.on('pointerout',function(){this.setFrame(0)});
        shopButt.on('pointerout',function(){this.setFrame(0)});
        backButt.on('pointerout',function(){this.setFrame(0)});

        
        this.add.text(350,455,'Story',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
        this.add.text(315,675,'Quests',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
        this.add.text(350,905,'Arena',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
        this.add.text(1250,675,'Collection',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
        this.add.text(1350,905,'Shop',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})

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
		this.add.sprite(960,540,'BLACK');
		this.add.sprite(960,440,'mediumInfo');
		this.add.text(800,300,"Coming\n Soon!!",{fontFamily:"Museo-700" ,fontSize:'80px',color:'#000',fontStyle:'bold'});
		var okButt=this.add.sprite(960,850,'largeButt').setInteractive()
		this.add.text(900,820,"OK",{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
		okButt.on('pointerout',function(){this.setFrame(0)})
		okButt.on('pointerdown',function(){this.setFrame(1)})
		
		okButt.on('pointerup',function(){
			this.setFrame(0);
			that.scene.resume('mainMenu');
			that.scene.stop();
		});
	}
}

class newsPop extends Phaser.Scene{
	constructor(){
		super({key:'newsPop'})
	}
	create(){
		var that=this
		this.add.sprite(960,540,'BLACK');
		this.add.sprite(960,500,'largeInfo');
		this.add.text(800,300,"Coming\n Soon!!",{fontFamily:"Museo-700" ,fontSize:'80px',color:'#000',fontStyle:'bold'});
		var okButt=this.add.sprite(960,950,'largeButt').setInteractive()
		this.add.text(900,910,"OK",{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
		okButt.on('pointerout',function(){this.setFrame(0)})
		okButt.on('pointerdown',function(){this.setFrame(1)})
		
		okButt.on('pointerup',function(){
			this.setFrame(0);
			that.scene.resume('mainMenu');
			that.scene.stop();
		});
	}
	}


