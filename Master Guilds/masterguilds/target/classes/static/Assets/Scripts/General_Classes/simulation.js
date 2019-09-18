//Esta clase guarda toda la informacion relacionada con la simulacion de una mision
//Es decir guarda desde el escenario en el que se produce
//hasta los equipos que se estan enfrentando
class Simulation {
	constructor(simulation){
		//Toda la informacion relacionada con el escenario , desde aquellas ventajas (si las hay) que proporciona hasta imagenes 
		this.escenario = simulation.escenario; 
		this.team = simulation.team; //Equipo con el que se realiza la simulacion
		this.enemys = simulation.enemys; // Equipo contra el que te enfrentas en la simulacion
		this.log = null //Log de la simulacion
		
	}
	//Realiza una iteracion en la simulación
	simulate(){
		
	} 
}