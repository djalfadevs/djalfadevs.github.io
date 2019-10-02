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
        
        var playButt=this.add.sprite(1450,250,'largeButt').setInteractive({useHandCursor:true})
        var collButt=this.add.sprite(1450,550,'largeButt').setInteractive({useHandCursor:true})
        var shopButt=this.add.sprite(1450,850,'largeButt').setInteractive({useHandCursor:true})
        var backButt=this.add.sprite(100,100,'xxx').setScale(0.5).setInteractive({useHandCursor:true})
        //temp function
        playButt.on('pointerdown',function(){transition("play",that)});
        collButt.on('pointerdown',function(){transition("coll",that)});
        shopButt.on('pointerdown',function(){transition("shop",that)});
        backButt.on('pointerdown',function(){transition("back",that)});
        
        //pointerOverFunctions [COPYPASTED LOGIN]
    
        //reg.on('pointerover',function(){this.setFrame(...)});
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
	update(){

	}
    }
}
