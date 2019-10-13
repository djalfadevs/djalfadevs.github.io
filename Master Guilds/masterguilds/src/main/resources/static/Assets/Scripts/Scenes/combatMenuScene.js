'use strict'

//EN ESTA PANTALLA SE NOS MUESTRAN LAS OPCIONES DE LUCHAR, ENTRAR A LA TIENDA, O VER LA COLECCION


class combatMenu extends Phaser.Scene{
	constructor(){
		super({key: 'combatMenu'})
	 }
    preload(){
        console.log("combatMenu")
    }
    create(){
    	var that = this;
    	//Fondo
        this.add.image(960,540,'backWood');
        //TEMP TEMP TEMP TEMP

        function SelectMisionAndAddDatatoSimulation(indexPos){
        	var mision = game.global.misions[indexPos];
        	var simulation = game.global.simulation;

        	//Fijamos lo relacionado con la simulacion Propiamente
        	simulation.escenario = mision.escenario;
        	//fijamos lo relacionado con el bando enemigo
        		//Reseteamos los enemigos
        		simulation.enemys.resetToBaseAttribValue();
        		//Fijamos las restricciones
        		simulation.enemys.restrictions = mision.enemys.restrictions;

        		//CREA los heroes y los añade a la lista

        		var enemyTeamAux = [];
        		for(var i = 0; i< mision.enemys.team.length;i++){
        			simulation.enemys.addMember(new Hero(mision.enemys.team[i]));
        		}

        		
        	return simulation;	
        }
        //combatMenu.scene.transition({target:'SimulationScene',duration:100})
        console.log(SelectMisionAndAddDatatoSimulation(0));
		setTimeout(function(){that.scene.transition({target:'SimulationScene',duration:0});}, 5000)
        
    }
}