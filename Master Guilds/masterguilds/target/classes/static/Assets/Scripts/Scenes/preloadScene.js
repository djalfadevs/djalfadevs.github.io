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
        this.load.spritesheet('largeShopButt','Assets/Sprites/UI-UX/boton_largo_tienda.png',{frameWidth:777,frameHeight:195});
        this.load.spritesheet('largeFinalButt','Assets/Sprites/UI-UX/boton_largo_nivel_final.png',{frameWidth:777,frameHeight:195});
        this.load.image('textBox','Assets/Sprites/UI-UX/caja_texto.png',{frameWidth:956,frameHeight:186});
        //load.setFrame(1);
        this.load.image('backWood','Assets/Sprites/UI-UX/fondo_madera.png',{frameWidth:1920,frameHeight:1080});
        this.load.image('setSel','Assets/Sprites/UI-UX/ajustes_seleccionado.png',{frameWidth:75,frameHeight:88});
        this.load.image('setNotSel','Assets/Sprites/UI-UX/ajustes_no_seleccionado.png',{frameWidth:75,frameHeight:88});
        this.load.image('lifeBar','Assets/Sprites/UI-UX/barra_vida_salud.png',{frameWidth:399,frameHeight:29});
        this.load.image('lifeBarBg','Assets/Sprites/UI-UX/barra_vida.png',{frameWidth:443,frameHeight:54});
        this.load.image('lifeBarBg2','Assets/Sprites/UI-UX/barra_vidaSup.png',{frameWidth:443,frameHeight:54});
        this.load.spritesheet('backButt','Assets/Sprites/UI-UX/boton_atras.png',{frameWidth:155,frameHeight:137});
        //load.setFrame(2);
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
        this.load.spritesheet('fullScreenButt','Assets/Sprites/UI-UX/boton_pequeno_fullscreen.png',{frameWidth:221,frameHeight:195});
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
        this.load.image('gems','Assets/Sprites/UI-UX/gema.png',{frameWidth:83,frameHeight:100});
        this.load.spritesheet('profButt','Assets/Sprites/UI-UX/boton_perfil.png',{frameWidth:221,frameHeight:195});
        this.load.image('newsPaper','Assets/Sprites/UI-UX/papel_info_novedades.png',{frameWidth:665,frameHeight:518});
        this.load.image('summonPaper','Assets/Sprites/UI-UX/papel_info_summon_gema.png',{frameWidth:594,frameHeight:474});
        this.load.image('masterATitle','Assets/Logo/LogoFinalMastera.png',{frameWidth:1049,frameHeight:393});
        this.load.image('BLACK','Assets/Sprites/UI-UX/cortinilla_negra.png',{frameWidth:1920,frameHeight:1080});

        //CARTAS PERSONAJES
        //Azon
        this.load.image('azon_kubo_carta_pequena','Assets/Sprites/UI-UX/cartas/azon_kubo_carta_pequena.png',{frameWidth:163,frameHeight:239});
        this.load.image('azon_kubo_carta_grande','Assets/Sprites/UI-UX/cartas/azon_kubo_carta_grande.png',{frameWidth:346,frameHeight:507});
        this.load.image('azon_Zhu_carta_pequena','Assets/Sprites/UI-UX/cartas/azon_Zhu_carta_pequena.png',{frameWidth:163,frameHeight:239});
        this.load.image('azon_Zhu_carta_grande','Assets/Sprites/UI-UX/cartas/azon_Zhu_carta_grande.png',{frameWidth:346,frameHeight:507});
        this.load.image('azon_Xin_carta_pequena','Assets/Sprites/UI-UX/cartas/azon_Xin_carta_pequena.png',{frameWidth:163,frameHeight:239});
        this.load.image('azon_Xin_carta_grande','Assets/Sprites/UI-UX/cartas/azon_Xin_carta_grande.png',{frameWidth:346,frameHeight:507});
        this.load.image('azon_lancer_cp','Assets/Sprites/UI-UX/cartas/azon_lancer_carta_pequena.png',{frameWidth:163,frameHeight:239});
        this.load.image('azon_lancer_cg','Assets/Sprites/UI-UX/cartas/azon_lancer_carta_grande.png',{frameWidth:346,frameHeight:507});
        this.load.image('azon_shield_cp','Assets/Sprites/UI-UX/cartas/azon_shield_carta_pequena.png',{frameWidth:163,frameHeight:239});
        this.load.image('azon_shield_cg','Assets/Sprites/UI-UX/cartas/azon_shield_carta_grande.png',{frameWidth:346,frameHeight:507});
        this.load.image('azon_medic_cp','Assets/Sprites/UI-UX/cartas/azon_medic_carta_pequena.png',{frameWidth:163,frameHeight:239});
        this.load.image('azon_medic_cg','Assets/Sprites/UI-UX/cartas/azon_medic_carta_grande.png',{frameWidth:346,frameHeight:507});
        //Ferten
        this.load.image('ferten_balista_cp','Assets/Sprites/UI-UX/cartas/ferten_balista_carta_pequena.png',{frameWidth:163,frameHeight:239});
        this.load.image('ferten_balista_cg','Assets/Sprites/UI-UX/cartas/ferten_balista_carta_grande.png',{frameWidth:346,frameHeight:507});

        //this.load.image('ferten_dak_cp','Assets/Sprites/UI-UX/cartas/ferten_dak_carta_pequena.png',{frameWidth:163,frameHeight:239});
        //this.load.image('ferten_dak_cg','Assets/Sprites/UI-UX/cartas/ferten_dak_carta_grande.png',{frameWidth:346,frameHeight:507});
        this.load.image('ferten_dak_cp','Assets/Sprites/UI-UX/cartas/ferten_duk_carta_pequena.png',{frameWidth:163,frameHeight:239});
        this.load.image('ferten_dak_cg','Assets/Sprites/UI-UX/cartas/ferten_duk_carta_grande.png',{frameWidth:346,frameHeight:507});


        this.load.image('ferten_armoured_cp','Assets/Sprites/UI-UX/cartas/ferten_armoured_carta_pequena.png',{frameWidth:163,frameHeight:239});
        this.load.image('ferten_armoured_cg','Assets/Sprites/UI-UX/cartas/ferten_armoured_carta_grande.png',{frameWidth:346,frameHeight:507});
        this.load.image('ferten_private_cp','Assets/Sprites/UI-UX/cartas/ferten_private_carta_pequena.png',{frameWidth:163,frameHeight:239});
        this.load.image('ferten_private_cg','Assets/Sprites/UI-UX/cartas/ferten_private_carta_grande.png',{frameWidth:346,frameHeight:507});
        this.load.image('ferten_surgeon_cp','Assets/Sprites/UI-UX/cartas/ferten_surgeon_carta_pequena.png',{frameWidth:163,frameHeight:239});
        this.load.image('ferten_surgeon_cg','Assets/Sprites/UI-UX/cartas/ferten_surgeon_carta_grande.png',{frameWidth:346,frameHeight:507});
        //Kwin
        this.load.image('kwin_lav_cp','Assets/Sprites/UI-UX/cartas/kwin_lavinna_carta_pequena.png',{frameWidth:163,frameHeight:239});
        this.load.image('kwin_lav_cg','Assets/Sprites/UI-UX/cartas/kwin_lavinna_carta_grande.png',{frameWidth:346,frameHeight:507});
        this.load.image('kwin_oz_cp','Assets/Sprites/UI-UX/cartas/kwin_ozna_carta_pequena.png',{frameWidth:163,frameHeight:239});
        this.load.image('kwin_oz_cg','Assets/Sprites/UI-UX/cartas/kwin_ozna_carta_grande.png',{frameWidth:346,frameHeight:507});

        this.load.image('kwin_destroyer_cp','Assets/Sprites/UI-UX/cartas/kwin_destroyer_carta_pequena.png',{frameWidth:163,frameHeight:239});
        this.load.image('kwin_destroyer_cg','Assets/Sprites/UI-UX/cartas/kwin_destroyer_carta_grande.png',{frameWidth:346,frameHeight:507});
        this.load.image('kwin_shielder_cp','Assets/Sprites/UI-UX/cartas/kwin_shielder_carta_pequena.png',{frameWidth:163,frameHeight:239});
        this.load.image('kwin_shielder_cg','Assets/Sprites/UI-UX/cartas/kwin_shielder_carta_grande.png',{frameWidth:346,frameHeight:507});
        this.load.image('kwin_wizard_cp','Assets/Sprites/UI-UX/cartas/kwin_wizard_carta_pequena.png',{frameWidth:163,frameHeight:239});
        this.load.image('kwin_wizard_cg','Assets/Sprites/UI-UX/cartas/kwin_wizard_carta_grande.png',{frameWidth:346,frameHeight:507});
        
        
        //luismi
        this.load.image('BIGLuismi','Assets/Sprites/UI-UX/cartas/luimi.png',{frameWidth:346,frameHeight:507});
        this.load.image('LuismiChikito','Assets/Sprites/UI-UX/cartas/luimi_peq.png',{frameWidth:163,frameHeight:239})
        
        this.load.image('1star','Assets/Sprites/UI-UX/estrella_1.png',{frameWidth:1125,frameHeight:1070});
        this.load.image('3star','Assets/Sprites/UI-UX/estrella_3.png',{frameWidth:3465,frameHeight:1070});
        this.load.image('5star','Assets/Sprites/UI-UX/estrella_5.png',{frameWidth:5805,frameHeight:1070});
        
        //BUFFOS VFX
        this.load.spritesheet('red_buff_spritesheet','Assets/Sprites/VFX_combate/buffo_rojo_spritesheet.png',{ frameWidth: 566, frameHeight:618  });
        this.load.spritesheet('blue_buff_spritesheet','Assets/Sprites/VFX_combate/buffo_azul_spritesheet.png',{ frameWidth: 566, frameHeight:618  });
        this.load.spritesheet('curacion_spritesheet','Assets/Sprites/VFX_combate/curacion_spritesheet_fix.png',{ frameWidth: 700, frameHeight:800  });
        this.load.spritesheet('ataque_spritesheet','Assets/Sprites/VFX_combate/ataque_spritesheet.png',{ frameWidth: 520, frameHeight:642  });
        this.load.spritesheet('chupa_spritesheet','Assets/Sprites/VFX_combate/chupa_spritesheet.png',{ frameWidth: 520, frameHeight:642  });
        
        //FONDOS
        //this.load.image('Escenario_japones','Assets/Sprites/Fondos_combate/Escenario_japones.png',{frameWidth:1920,frameHeight:1640});
        //this.load.image('Escenario_elfico','Assets/Sprites/Fondos_combate/Escenario_elfico.png',{frameWidth:1920,frameHeight:1640});
        //this.load.image('Escenario_steampunk','Assets/Sprites/Fondos_combate/Escenario_steampunk.png',{frameWidth:1920,frameHeight:1640});
        //this.load.image('Escenario_arena','Assets/Sprites/Fondos_combate/Escenario_arena.png',{frameWidth:1920,frameHeight:1640});

        //VICTORIA y DERROTA
        this.load.image('TextWinEN','Assets/Sprites/UI-UX/VictoriayDerrota/VictoryEnglishFinal1.png',{frameWidth:1100,frameHeight:300});
        this.load.image('TextWinES','Assets/Sprites/UI-UX/VictoriayDerrota/VictorySpanishFinal1.png',{frameWidth:1100,frameHeight:300});
        this.load.image('TextDefeatEN','Assets/Sprites/UI-UX/VictoriayDerrota/DefeatEnglishFinal.png',{frameWidth:1100,frameHeight:300});
        this.load.image('TextDefeatES','Assets/Sprites/UI-UX/VictoriayDerrota/DefeatSpanishFinal.png',{frameWidth:1100,frameHeight:300});

        //BUFFS
        this.load.image('AttackBuff','Assets/Sprites/UI-UX/Buffs/buffatacico.png',{frameWidth:50,frameHeight:50});
        this.load.image('AllBuff','Assets/Sprites/UI-UX/Buffs/buffstatico.png',{frameWidth:50,frameHeight:50});
        
        
        this.load.audio('heal','Assets/Sounds/KwinSpell.wav');
        this.load.audio('buffD','Assets/Sounds/CardDeath.wav');
        this.load.audio('buff','Assets/Sounds/Disenchant.wav');
        this.load.audio('crit','Assets/Sounds/CriticalHit.wav');
        this.load.audio('hit','Assets/Sounds/SimpleHit.wav');
        this.load.audio('click','Assets/Sounds/Click.wav');
        this.load.audio('draw1','Assets/Sounds/Deal1CardV1.wav')
        this.load.audio('unlock','Assets/Sounds/UnlockShop.wav');
        this.load.audio('buyS','Assets/Sounds/BuyingShop.wav');
        this.load.audio('buyPrompt','Assets/Sounds/SellingShop.wav');
        this.load.audio('dealCard','Assets/Sounds/Enchant.wav');
        this.load.spritesheet('rank','Assets/Sprites/UI-UX/boton_perfil.png',{frameWidth:221.5,frameHeight:195});
        //this.load.spritesheet('arenaBg','Assets/Sprites/Fondos_combate/Escenario_arena_spritesheet.png',{frameWidth:1920,frameHeight:1640})

        //FONDOS IMAGENES
        this.load.image('Escenario_japones1','Assets/Sprites/Fondos_combate/sprites_azon/1.png',{frameWidth:1920,frameHeight:1640});
        this.load.image('Escenario_japones2','Assets/Sprites/Fondos_combate/sprites_azon/2.png',{frameWidth:1920,frameHeight:1640});

        this.load.image('Escenario_elfico1','Assets/Sprites/Fondos_combate/sprites_kwin/1.png',{frameWidth:1920,frameHeight:1640});
        this.load.image('Escenario_elfico2','Assets/Sprites/Fondos_combate/sprites_kwin/2.png',{frameWidth:1920,frameHeight:1640});

        this.load.image('Escenario_steampunk1','Assets/Sprites/Fondos_combate/sprites_ferten/1.png',{frameWidth:1920,frameHeight:1640});
        this.load.image('Escenario_steampunk2','Assets/Sprites/Fondos_combate/sprites_ferten/2.png',{frameWidth:1920,frameHeight:1640});

        this.load.image('Escenario_arena1','Assets/Sprites/Fondos_combate/sprites_arena/1.png',{frameWidth:1920,frameHeight:1640});
        this.load.image('Escenario_arena2','Assets/Sprites/Fondos_combate/sprites_arena/2.png',{frameWidth:1920,frameHeight:1640});
        this.load.image('Escenario_arena3','Assets/Sprites/Fondos_combate/sprites_arena/3.png',{frameWidth:1920,frameHeight:1640});
        this.load.image('Escenario_arena4','Assets/Sprites/Fondos_combate/sprites_arena/4.png',{frameWidth:1920,frameHeight:1640});
        this.load.image('Escenario_arena5','Assets/Sprites/Fondos_combate/sprites_arena/5.png',{frameWidth:1920,frameHeight:1640});
        this.load.image('Escenario_arena6','Assets/Sprites/Fondos_combate/sprites_arena/6.png',{frameWidth:1920,frameHeight:1640});
        this.load.image('Escenario_arena7','Assets/Sprites/Fondos_combate/sprites_arena/7.png',{frameWidth:1920,frameHeight:1640});
        this.load.image('Escenario_arena8','Assets/Sprites/Fondos_combate/sprites_arena/8.png',{frameWidth:1920,frameHeight:1640});
        this.load.image('Escenario_arena9','Assets/Sprites/Fondos_combate/sprites_arena/9.png',{frameWidth:1920,frameHeight:1640});
        this.load.image('Escenario_arena10','Assets/Sprites/Fondos_combate/sprites_arena/10.png',{frameWidth:1920,frameHeight:1640});
        this.load.image('Escenario_arena11','Assets/Sprites/Fondos_combate/sprites_arena/11.png',{frameWidth:1920,frameHeight:1640});
        this.load.image('Escenario_arena12','Assets/Sprites/Fondos_combate/sprites_arena/12.png',{frameWidth:1920,frameHeight:1640});
    
        this.load.image('Escenario_final1','Assets/Sprites/Fondos_combate/sprites_final/1.png',{frameWidth:1920,frameHeight:1640});
        this.load.image('Escenario_final2','Assets/Sprites/Fondos_combate/sprites_final/2.png',{frameWidth:1920,frameHeight:1640});
        this.load.image('Escenario_final3','Assets/Sprites/Fondos_combate/sprites_final/3.png',{frameWidth:1920,frameHeight:1640});
        this.load.image('Escenario_final4','Assets/Sprites/Fondos_combate/sprites_final/4.png',{frameWidth:1920,frameHeight:1640});
        this.load.image('Escenario_final5','Assets/Sprites/Fondos_combate/sprites_final/5.png',{frameWidth:1920,frameHeight:1640});
        this.load.image('Escenario_final6','Assets/Sprites/Fondos_combate/sprites_final/6.png',{frameWidth:1920,frameHeight:1640});
        this.load.image('Escenario_final7','Assets/Sprites/Fondos_combate/sprites_final/7.png',{frameWidth:1920,frameHeight:1640});
        this.load.image('Escenario_final8','Assets/Sprites/Fondos_combate/sprites_final/8.png',{frameWidth:1920,frameHeight:1640});
        this.load.image('Escenario_final9','Assets/Sprites/Fondos_combate/sprites_final/9.png',{frameWidth:1920,frameHeight:1640});
        this.load.image('Escenario_final10','Assets/Sprites/Fondos_combate/sprites_final/10.png',{frameWidth:1920,frameHeight:1640});
        this.load.image('Escenario_final11','Assets/Sprites/Fondos_combate/sprites_final/11.png',{frameWidth:1920,frameHeight:1640});

        this.load.audio('music1','Assets/OST/BirthOfLegendsTrumpet.wav');
        this.load.audio('music2','Assets/OST/CircleOfCourage.wav');
        this.load.audio('music3','Assets/OST/DrumsOfWarFast.wav');
        this.load.image('RBACKCARD','Assets/Sprites/UI-UX/cartas/random_carta_pequena.png',{frameWidth:163,frameHeight:239});
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
