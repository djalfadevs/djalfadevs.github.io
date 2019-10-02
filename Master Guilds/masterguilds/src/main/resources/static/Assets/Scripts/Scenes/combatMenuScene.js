'use strict'

//EN ESTA PANTALLA SE NOS MUESTRAN LAS OPCIONES DE LUCHAR, ENTRAR A LA TIENDA, O VER LA COLECCION

var combatMenu=new Phaser.Scene("combatMenu")
combatMenu.preload=function(){
    console.log("combatMenu")
}
combatMenu.create=function(){
    //TEMP TEMP TEMP TEMP
    combatMenu.scene.transition({target:'SimulationScene',duration:100})
}