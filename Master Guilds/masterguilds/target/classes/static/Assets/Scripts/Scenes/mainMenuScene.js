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
        this.add.image(500,550,'largeInfo').setScale(0.9);
	}

	create(){
		var that=this;
        //var botCombate=this.add.sprite('').setInteractive({useHandCursor:true});
        //var bot Galeria=this.add.sprite().setInteractive({useHandCursor});
        console.log("mainMenu")
        
        //TEMP BUTTON PLACEMENTS
        
        var playButt=this.add.sprite(1450,250,'largeButt').setInteractive()
        
        var collButt=this.add.sprite(1450,550,'largeButt').setInteractive()
        var shopButt=this.add.sprite(1450,850,'largeButt').setInteractive()
        var backButt=this.add.sprite(100,100,'backButt').setScale(0.5).setInteractive()
        backButt.on('pointerdown',function(){this.setFrame(1);transition("back",that)})
        backButt.on('pointerup',function(){this.setFrame(0)})
        //temp function
        var infoBar=this.add.sprite(960,10,'infoBar')
        infoBar.alpha=0;
        var infoText=this.add.text(1600,10,'INFOBAR',{fontFamily:"Museo-700" ,fontSize:'40px',color:'#fff',fontStyle:'bold'});
        infoText.alpha=0;
        playButt.on('pointerdown',function(){transition("play",that)});
        collButt.on('pointerdown',function(){transition("coll",that)});
        shopButt.on('pointerdown',function(){transition("shop",that)});
        this.add.text(1300,215,'Combat',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
        //pointerOverFunctions [COPYPASTED LOGIN]
    
        playButt.on('pointerover',function(){infoBar.alpha=1;infoText.alpha=1;});
        playButt.on('pointerout',function(){infoBar.alpha=0;infoText.alpha=0;});
        //reg.on('pointerout',function(){this.setFrame(...)});
        //reg.on('pointerdown',function(){this.setFrame(...); transition("reg")});
        //SFX? .sound.play();
        //enter.on('pointerover',function(){this.setFrame(...)});
        //enter.on('pointerout',function(){this.setFrame(...)});
        //enter.on('pointerdown',function(){this.setFrame(...); transition("ent")});
        
        var transition=function(str,t){
            switch(str){
                case "play":
                t.scene.transition({target:'combatMenu',duration:100});
                break;
                case "coll":
                console.log("not done yet")
                        //t.scene.transition({target:'collection',duration:100});
                break;
                case "shop":
                console.log("not done yet")
                        //t.scene.transition({target:'shop',duration:100});
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

