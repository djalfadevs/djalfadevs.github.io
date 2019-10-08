'use strict'
//CLASS TO LOAD VISUAL FILES
class preload extends Phaser.Scene{

    constructor(){
        super({key:'preload'})
    }

	preload(){
        console.log("preload")
        this.load.image('loading','Assets/Sprites/UI-UX/animacion_carga/pausa_1.png',{frameWidth:122,frameHeight:51});
        
        //frame de carga 1
        
        this.load.image('setnsBar','Assets/Sprites/UI-UX/ajustes_barra.png',{frameWidth:477,frameHeight:98});
        this.load.image('infoBar','Assets/Sprites/UI-UX/barra_info_arriba.png',{frameWidth:1920,frameHeight:126});
        this.load.image('largeButt','Assets/Sprites/UI-UX/boton_largo.png',{frameWidth:777,frameHeight:195});
        this.load.image('largeSetButt','Assets/Sprites/UI-UX/boton_largo_ajustes.png',{frameWidth:614,frameHeight:195});
        this.load.image('largeConButt','Assets/Sprites/UI-UX/boton_largo_contactar.png',{frameWidth:614,frameHeight:195});
        this.load.image('largeLangButt','Assets/Sprites/UI-UX/boton_largo_idioma.png',{frameWidth:614,frameHeight:195});
        this.load.image('largeFaceButt','Assets/Sprites/UI-UX/boton_largo_facebook.png',{frameWidth:777,frameHeight:195});
        this.load.image('largeInstaButt','Assets/Sprites/UI-UX/boton_largo_instagram.png',{frameWidth:777,frameHeight:195});
        this.load.image('largeTweetButt','Assets/Sprites/UI-UX/boton_largo_twitter.png',{frameWidth:777,frameHeight:195});
        this.load.image('largeYouButt','Assets/Sprites/UI-UX/boton_largo_youtube.png',{frameWidth:777,frameHeight:195});
        this.load.image('textBox','Assets/Sprites/UI-UX/caja_texto.png',{frameWidth:956,frameHeight:186});
        this.load.image('backWood','Assets/Sprites/UI-UX/fondo_madera.png',{frameWidth:1920,frameHeight:1080});
        this.load.image('setSel','Assets/Sprites/UI-UX/ajustes_seleccionado.png',{frameWidth:75,frameHeight:88});
        this.load.image('lifeBar','Assets/Sprites/UI-UX/barra_vida_salud.png',{frameWidth:399,frameHeight:29});
        this.load.image('lifeBarBg','Assets/Sprites/UI-UX/barra_vida.png',{frameWidth:443,frameHeight:54});
        this.load.spritesheet('backButt','Assets/Sprites/UI-UX/boton_atras.png',{frameWidth:155.5,frameHeight:137});
        this.load.spritesheet('helpButt','Assets/Sprites/UI-UX/boton_ayuda.png',{frameWidth:110.5,frameHeight:97});
        this.load.spritesheet('NoButt','Assets/Sprites/UI-UX/boton_no.png',{frameWidth:221.5,frameHeight:195});
        this.load.spritesheet('YesButt','Assets/Sprites/UI-UX/boton_yes.png',{frameWidth:221.5,frameHeight:195});
        this.load.spritesheet('PauseButt','Assets/Sprites/UI-UX/boton_pausa.png',{frameWidth:155.5,frameHeight:137});
        this.load.spritesheet('ExitPauseButt','Assets/Sprites/UI-UX/boton_pausa_salir.png',{frameWidth:221.5,frameHeight:195});
        this.load.spritesheet('StayPauseButt','Assets/Sprites/UI-UX/boton_pausa_seguir.png',{frameWidth:221,frameHeight:195});
        this.load.spritesheet('helpButt','Assets/Sprites/UI-UX/boton_ayuda.png',{frameWidth:110.5,frameHeight:97});
        this.load.spritesheet('smallButt','Assets/Sprites/UI-UX/boton_pequeNo.png',{frameWidth:221.5,frameHeight:195});
        this.load.spritesheet('removeButt','Assets/Sprites/UI-UX/boton_restar.png',{frameWidth:221.5,frameHeight:195});
        this.load.spritesheet('addButt','Assets/Sprites/UI-UX/boton_sumar.png',{frameWidth:221.5,frameHeight:195});
        this.load.spritesheet('DownArrow','Assets/Sprites/UI-UX/flecha_abajo_pequena.png',{frameWidth: 102.5,frameHeight:101});
        this.load.spritesheet('UpArrow','Assets/Sprites/UI-UX/flecha_arriba_pequena.png',{frameWidth: 107.5,frameHeight:101});
        this.load.image('blackBg','Assets/Sprites/UI-UX/flecha_arriba_pequena.png',{frameWidth:1920 ,frameHeight:1080});
        this.load.image('espanol','Assets/Sprites/UI-UX/idioma_espanol.png',{frameWidth:665,frameHeight:518});
        this.load.image('ingles','Assets/Sprites/UI-UX/idioma_ingles.png',{frameWidth:665,frameHeight:518});
        this.load.image('largeInfo','Assets/Sprites/UI-UX/papel_info_grande.png',{frameWidth:1022,frameHeight:999});
        this.load.image('mediumInfo','Assets/Sprites/UI-UX/papel_info_mediano.png',{frameWidth:665,frameHeight:518});
        this.load.image('smallInfo','Assets/Sprites/UI-UX/papel_info_pequeno.png',{frameWidth:920,frameHeight:386});
        
        //frame final
	}

	create(){
          game.input.setDefaultCursor('url(Assets/Sprites/UI-UX/raton1.cur), pointer');//Determina el puntero
          this.add.image(1000,1000,'loading');
		//tween to fade and change scene
        //after tween swap
        //for now? just swap after timeout
        //TO CHANGE
        var that = this;
        setTimeout(function(){
        var t=that.scene.transition({target:'login',duration:'10'})
        },500)
	}

	update(){
        //not needed for now...
	}
}
