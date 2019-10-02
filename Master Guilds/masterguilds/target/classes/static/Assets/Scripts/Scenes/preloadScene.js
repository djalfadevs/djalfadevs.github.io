'use strict'
//CLASS TO LOAD VISUAL FILES
class preload extends Phaser.Scene{

    constructor(){
        super({key:'preload'})
    }

	preload(){
        console.log("preload")
        this.load.image('loading','Assets/Sprites/animacion carga/pausa 1.png',{frameWidth:122,frameHeight:51});
        
        this.add.image(1000,1000,'loading');
        //frame de carga 1
        
        this.load.image('setnsBar','Assets/Sprites/ajustes_barra.png',{frameWidth:477,frameHeight:98});
        this.load.image('infoBar','Assets/Sprites/barra_info_arriba.png',{frameWidth:1920,frameHeight:126});
        this.load.image('largeButt','Assets/Sprites/boton_largo.png',{frameWidth:777,frameHeight:195});
        this.load.image('smallButt','Assets/Sprites/boton_pequeNo.png',{frameWidth:221,frameHeight:195});
        this.load.image('removeButt','Assets/Sprites/boton_restar.png',{frameWidth:221,frameHeight:195});
        this.load.image('addButt','Assets/Sprites/boton_sumar.png',{frameWidth:221,frameHeight:195});
        this.load.image('backWood','Assets/Sprites/fondo_madera.png',{frameWidth:1920,frameHeight:1080});
        
        //cambiar frame de carga a mitad de la carga 
        
        this.load.image('espanol','Assets/Sprites/idioma_espanol.png',{frameWidth:665,frameHeight:518});
        this.load.image('ingles','Assets/Sprites/idioma_ingles.png',{frameWidth:665,frameHeight:518});
        this.load.image('largeInfo','Assets/Sprites/papel_info_grande.png',{frameWidth:1022,frameHeight:999});
        this.load.image('mediumInfo','Assets/Sprites/papel_info_mediano.png',{frameWidth:665,frameHeight:518});
        this.load.image('smallInfo','Assets/Sprites/papel_info_pequeno.png',{frameWidth:920,frameHeight:386});
        
        //frame final
	}

	create(){
		//tween to fade and change scene
        //after tween swap
        //for now? just swap after timeout
        //TO CHANGE
        setTimeout(function(){
        var t=preload.scene.transition({target:'login',duration:'10'})
        },500)
	}

	update(){
        //not needed for now...
	}
}
