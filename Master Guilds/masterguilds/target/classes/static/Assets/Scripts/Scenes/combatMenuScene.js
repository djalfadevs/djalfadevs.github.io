'use strict'

//EN ESTA PANTALLA SE NOS MUESTRAN LAS OPCIONES DE LUCHAR, ENTRAR A LA TIENDA, O VER LA COLECCION


class combatMenu extends Phaser.Scene{
    preload(){
        console.log("combatMenu")
    }
    create(){
        //TEMP TEMP TEMP TEMP
        combatMenu.scene.transition({target:'SimulationScene',duration:100})
    }
}