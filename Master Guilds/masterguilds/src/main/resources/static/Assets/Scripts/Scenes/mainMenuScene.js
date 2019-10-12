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
        var misionsplayButt=this.add.sprite(450,720,'largePlayMisionsButt').setInteractive()
        var arenaplayButt=this.add.sprite(450,950,'largePlayArenaButt').setInteractive()    
        var collButt=this.add.sprite(1450,720,'largeButt').setInteractive()
        var shopButt=this.add.sprite(1450,950,'largeAdministrationButt').setInteractive()
        
        var infoBar=this.add.sprite(960,63,'infoBar')
        this.add.text(250,10,'Main menu',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#fff',fontStyle:'bold'});
        this.add.text(600,50,'Battle, check your cards or acquire new ones',{fontFamily:"Museo-700" ,fontSize:'40px',color:'#fff',fontStyle:'bold'}).alpha=0.6
        var backButt=this.add.sprite(85,80,'backButt').setInteractive()    
        var news=this.add.sprite(1450,360,'mediumInfo').setInteractive()

        
        backButt.on('pointerdown',function(){this.setFrame(1);transition("back",that)})
        backButt.on('pointerup',function(){this.setFrame(0)})
        //temp function
        
      

        historyplayButt.on('pointerdown',function(){this.setFrame(1)});
        misionsplayButt.on('pointerdown',function(){this.setFrame(1)});
        arenaplayButt.on('pointerdown',function(){this.setFrame(1)});
        collButt.on('pointerdown',function(){this.setFrame(1)});
        shopButt.on('pointerdown',function(){this.setFrame(1)});
        
        historyplayButt.on('pointerup',function(){this.setFrame(0);transition("playHistory",that)});
        misionsplayButt.on('pointerup',function(){this.setFrame(0);transition("playMisions",that)});
        arenaplayButt.on('pointerup',function(){this.setFrame(0);transition("playArena",that)});
        collButt.on('pointerup',function(){this.setFrame(0);transition("coll",that)});
        shopButt.on('pointerup',function(){this.setFrame(0);transition("shop",that)});
        
        historyplayButt.on('pointerout',function(){this.setFrame(0)});
        misionsplayButt.on('pointerout',function(){this.setFrame(0)});
        arenaplayButt.on('pointerout',function(){this.setFrame(0)});
        collButt.on('pointerout',function(){this.setFrame(0)});
        shopButt.on('pointerout',function(){this.setFrame(0)});
        backButt.on('pointerout',function(){this.setFrame(0)});

        
        this.add.text(350,455,'Story',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
        this.add.text(315,675,'Missions',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
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

        var transition=function(str,t){
            switch(str){
                case "playHistory":
                    t.scene.transition({target:'combatMenu',duration:100});
                break;
                case "coll":
                //console.log("not done yet")
                        t.scene.transition({target:'collection',duration:100});
                break;
                case "shop":
                        //console.log("not done yet")
                        t.scene.transition({target:'shop',duration:100});
                break;
                case "back":
                t.scene.transition({target:'title',duration:100});
                break;
                
                
                default:
                break;
            }
        
	   }
    }
	update(){

	}
}

