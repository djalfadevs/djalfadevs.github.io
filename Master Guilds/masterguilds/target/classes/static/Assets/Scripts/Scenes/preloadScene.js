//CLASS TO LOAD VISUAL FILES
class preload extends Phaser.Scene{

    constructor(){
        super({key:'preload',active:true})
    }

	preload(){
        console.log("preload")
        this.load.image('loading','Assets/Sprites/UI-UX/animacion_carga/spritesheet.png',{frameWidth:424,frameHeight:151});
        
        //frame de carga 1
        this.load.image('djlogo1','Assets/Sprites/UI-UX/logo_djalfa_naranja_texto.png',{frameWidth:4324,frameHeight:2160})
        this.load.image('setnsBar','Assets/Sprites/UI-UX/ajustes_barra.png',{frameWidth:477,frameHeight:98});
        this.load.image('infoBar','Assets/Sprites/UI-UX/barra_info_arriba.png',{frameWidth:1920,frameHeight:126});
        this.load.spritesheet('largeButt','Assets/Sprites/UI-UX/boton_largo.png',{frameWidth:777,frameHeight:195});
        this.load.spritesheet('largeSetButt','Assets/Sprites/UI-UX/boton_largo_ajustes.png',{frameWidth:614,frameHeight:195});
        this.load.spritesheet('largeConButt','Assets/Sprites/UI-UX/boton_largo_contactar.png',{frameWidth:614,frameHeight:195});
        //var loadIMG=this.add.sprite(960,540,'loading')
       //console.log(loadIMG.src)
        this.load.spritesheet('largeLangButt','Assets/Sprites/UI-UX/boton_largo_idioma.png',{frameWidth:614,frameHeight:195});
        this.load.spritesheet('largeFaceButt','Assets/Sprites/UI-UX/boton_largo_facebook.png',{frameWidth:777,frameHeight:195});
        this.load.spritesheet('largeInstaButt','Assets/Sprites/UI-UX/boton_largo_instagram.png',{frameWidth:777,frameHeight:195});
        this.load.spritesheet('largeTweetButt','Assets/Sprites/UI-UX/boton_largo_twitter.png',{frameWidth:777,frameHeight:195});
        this.load.spritesheet('largeYouButt','Assets/Sprites/UI-UX/boton_largo_youtube.png',{frameWidth:777,frameHeight:195});
        this.load.image('textBox','Assets/Sprites/UI-UX/caja_texto.png',{frameWidth:956,frameHeight:186});
        //load.setFrame(1);
        this.load.image('backWood','Assets/Sprites/UI-UX/fondo_madera.png',{frameWidth:1920,frameHeight:1080});
        this.load.image('setSel','Assets/Sprites/UI-UX/ajustes_seleccionado.png',{frameWidth:75,frameHeight:88});
        this.load.image('setNotSel','Assets/Sprites/UI-UX/ajustes_no_seleccionado.png',{frameWidth:75,frameHeight:88});
        this.load.image('lifeBar','Assets/Sprites/UI-UX/barra_vida_salud.png',{frameWidth:399,frameHeight:29});
        this.load.image('lifeBarBg','Assets/Sprites/UI-UX/barra_vida.png',{frameWidth:443,frameHeight:54});
        this.load.spritesheet('backButt','Assets/Sprites/UI-UX/boton_atras.png',{frameWidth:155,frameHeight:137});
        //load.setFrame(2);
        this.load.spritesheet('helpButt','Assets/Sprites/UI-UX/boton_ayuda.png',{frameWidth:110,frameHeight:97});
        this.load.spritesheet('NoButt','Assets/Sprites/UI-UX/boton_no.png',{frameWidth:221.5,frameHeight:195});
        this.load.spritesheet('YesButt','Assets/Sprites/UI-UX/boton_yes.png',{frameWidth:221.5,frameHeight:195});
        this.load.spritesheet('PauseButt','Assets/Sprites/UI-UX/boton_pausa.png',{frameWidth:155,frameHeight:137});
        this.load.spritesheet('ExitPauseButt','Assets/Sprites/UI-UX/boton_pausa_salir.png',{frameWidth:221,frameHeight:195});
        this.load.spritesheet('StayPauseButt','Assets/Sprites/UI-UX/boton_pausa_seguir.png',{frameWidth:221,frameHeight:195});
        this.load.spritesheet('helpButt','Assets/Sprites/UI-UX/boton_ayuda.png',{frameWidth:110.5,frameHeight:97});
        //load.setFrame(0);
        this.load.spritesheet('smallButt','Assets/Sprites/UI-UX/boton_pequeNo.png',{frameWidth:221,frameHeight:195});
        this.load.spritesheet('removeButt','Assets/Sprites/UI-UX/boton_restar.png',{frameWidth:221,frameHeight:195});
        this.load.spritesheet('addButt','Assets/Sprites/UI-UX/boton_sumar.png',{frameWidth:221.5,frameHeight:195});
        this.load.spritesheet('DownArrow','Assets/Sprites/UI-UX/flecha_abajo_pequena.png',{frameWidth: 102,frameHeight:101});
        this.load.spritesheet('UpArrow','Assets/Sprites/UI-UX/flecha_arriba_pequena.png',{frameWidth: 107,frameHeight:101});
        //load.setFrame(1);
        this.load.image('blackBg','Assets/Sprites/UI-UX/flecha_arriba_pequena.png',{frameWidth:1920 ,frameHeight:1080});
        this.load.image('espanol','Assets/Sprites/UI-UX/idioma_espanol.png',{frameWidth:665,frameHeight:518});
        this.load.image('ingles','Assets/Sprites/UI-UX/idioma_ingles.png',{frameWidth:665,frameHeight:518});
        this.load.image('largeInfo','Assets/Sprites/UI-UX/papel_info_grande.png',{frameWidth:1022,frameHeight:999});
        this.load.image('mediumInfo','Assets/Sprites/UI-UX/papel_info_mediano.png',{frameWidth:665,frameHeight:518});
        this.load.image('smallInfo','Assets/Sprites/UI-UX/papel_info_pequeno.png',{frameWidth:920,frameHeight:386});
        this.load.spritesheet('AzonButt','Assets/Sprites/UI-UX/boton_largo_azon.png',{frameWidth:777,frameHeight:195});
        this.load.spritesheet('KwinButt','Assets/Sprites/UI-UX/boton_largo_kwin.png',{frameWidth:777,frameHeight:195});
        this.load.spritesheet('FertenButt','Assets/Sprites/UI-UX/boton_largo_ferten.png',{frameWidth:777,frameHeight:195});
        this.load.image('lockButt','Assets/Sprites/UI-UX/boton_largo_bloqueado.png',{frameWidth:777,frameHeight:195});
        //frame final
        //load.setFrame(2);
        //CARTAS
        this.load.image('small_card','Assets/Sprites/UI-UX/carta_pequena.png',{frameWidth:163,frameHeight:239});
        this.load.image('azon_small_card_back','Assets/Sprites/UI-UX/cartas/azon_back_carta_pequena.png',{frameWidth:163,frameHeight:239});
        this.load.image('azon_small_card_front','Assets/Sprites/UI-UX/cartas/azon_front_carta_pequena.png',{frameWidth:163,frameHeight:239});
        this.load.image('azon_big_card_back','Assets/Sprites/UI-UX/cartas/azon_back_carta_grande.png',{frameWidth:346,frameHeight:507});
        this.load.image('azon_big_card_front','Assets/Sprites/UI-UX/cartas/azon_front_carta_grande.png',{frameWidth:346,frameHeight:507});

        this.load.image('ferten_small_card_back','Assets/Sprites/UI-UX/cartas/ferten_back_carta_pequena.png',{frameWidth:163,frameHeight:239});
        this.load.image('ferten_small_card_front','Assets/Sprites/UI-UX/cartas/ferten_front_carta_pequena.png',{frameWidth:163,frameHeight:239});
        this.load.image('ferten_big_card_back','Assets/Sprites/UI-UX/cartas/ferten_back_carta_grande.png',{frameWidth:346,frameHeight:507});
        this.load.image('ferten_big_card_front','Assets/Sprites/UI-UX/cartas/ferten_front_carta_grande.png',{frameWidth:346,frameHeight:507});
        
        this.load.image('kwin_small_card_back','Assets/Sprites/UI-UX/cartas/kwin_back_carta_pequena.png',{frameWidth:163,frameHeight:239});
        this.load.image('kwin_small_card_front','Assets/Sprites/UI-UX/cartas/kwin_front_carta_pequena.png',{frameWidth:163,frameHeight:239});
        this.load.image('kwin_big_card_back','Assets/Sprites/UI-UX/cartas/kwin_back_carta_grande.png',{frameWidth:346,frameHeight:507});
        this.load.image('kwin_big_card_front','Assets/Sprites/UI-UX/cartas/kwin_front_carta_grande.png',{frameWidth:346,frameHeight:507});
        
        this.load.spritesheet('largePlayArenaButt','Assets/Sprites/UI-UX/boton_largo_jugar_arena.png',{frameWidth:777,frameHeight:195});
        this.load.spritesheet('largePlayMisionsButt','Assets/Sprites/UI-UX/boton_largo_jugar_misiones.png',{frameWidth:777,frameHeight:195});
        this.load.spritesheet('largePlayHistoryButt','Assets/Sprites/UI-UX/boton_largo_jugar_historia.png',{frameWidth:777,frameHeight:195});
        this.load.spritesheet('largeAdministrationButt','Assets/Sprites/UI-UX/boton_largo_jugar_administracion.png',{frameWidth:777,frameHeight:195});
        this.load.spritesheet('deffButt','Assets/Sprites/UI-UX/boton_defensa.png',{frameWidth:221,frameHeight:195});
        this.load.spritesheet('5gems','Assets/Sprites/UI-UX/boton_gema_5.png',{frameWidth:221,frameHeight:195});
        this.load.spritesheet('20gems','Assets/Sprites/UI-UX/boton_gema_20.png',{frameWidth:221,frameHeight:195});
        this.load.spritesheet('50gems','Assets/Sprites/UI-UX/boton_gema_50.png',{frameWidth:221,frameHeight:195});
        this.load.spritesheet('profButt','Assets/Sprites/UI-UX/boton_perfil.png',{frameWidth:221,frameHeight:195});
        this.load.image('newsPaper','Assets/Sprites/UI-UX/papel_info_novedades.png',{frameWidth:665,frameHeight:518});
        this.load.image('summonPaper','Assets/Sprites/UI-UX/papel_info_summon_gema.png',{frameWidth:594,frameHeight:474});
        this.load.image('masterATitle','Assets/Logo/LogoFinalMastera.png',{frameWidth:1049,frameHeight:393});
        this.load.image('BLACK','Assets/Sprites/UI-UX/cortinilla_negra.png',{frameWidth:1920,frameHeight:1080});

        //CARTAS PERSONAJES
        this.load.image('azon_kubo_carta_pequena','Assets/Sprites/UI-UX/cartas/azon_kubo_carta_pequena.png',{frameWidth:163,frameHeight:239});
        this.load.image('azon_kubo_carta_grande','Assets/Sprites/UI-UX/cartas/azon_kubo_carta_grande.png',{frameWidth:346,frameHeight:507});
        this.load.image('azon_Xin_carta_pequena','Assets/Sprites/UI-UX/cartas/azon_Xin_carta_pequena.png',{frameWidth:163,frameHeight:239});
        this.load.image('azon_Xin_carta_grande','Assets/Sprites/UI-UX/cartas/azon_Xin_carta_grande.png',{frameWidth:346,frameHeight:507});
        this.load.image('azon_lancer_cp','Assets/Sprites/UI-UX/cartas/azon_lancer_carta_pequena.png',{frameWidth:163,frameHeight:239});
        this.load.image('azon_lancer_cg','Assets/Sprites/UI-UX/cartas/azon_lancer_carta_grande.png',{frameWidth:346,frameHeight:507});
        this.load.image('azon_shield_cp','Assets/Sprites/UI-UX/cartas/azon_shield_carta_pequena.png',{frameWidth:163,frameHeight:239});
        this.load.image('azon_shield_cg','Assets/Sprites/UI-UX/cartas/azon_shield_carta_grande.png',{frameWidth:346,frameHeight:507});
        this.load.image('azon_medic_cp','Assets/Sprites/UI-UX/cartas/azon_medic_carta_pequena.png',{frameWidth:163,frameHeight:239});
        this.load.image('azon_medic_cg','Assets/Sprites/UI-UX/cartas/azon_medic_carta_grande.png',{frameWidth:346,frameHeight:507});

        //FONDOS
        this.load.image('Escenario_japones','Assets/Sprites/Fondos_combate/Escenario_japones.jpg',{frameWidth:1920,frameHeight:1640});
        this.load.image('Escenario_elfico','Assets/Sprites/Fondos_combate/Escenario_elfico.jpg',{frameWidth:1920,frameHeight:1640});
	}

	create(){
          game.input.setDefaultCursor('url(Assets/Sprites/UI-UX/raton1.cur), pointer');//Determina el puntero
		//tween to fade and change scene
        //after tween swap
        //for now? just swap after timeout
        //TO CHANGE
        var that = this;
        setTimeout(function(){
        var t=that.scene.transition({target:'LOGO',duration:'200'})
        },500)
	}

	update(){
        //not needed for now...
	}
}
