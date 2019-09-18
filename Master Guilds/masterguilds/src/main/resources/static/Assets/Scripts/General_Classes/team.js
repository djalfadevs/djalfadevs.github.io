//Aun no se si esta clase es totalmente necesaria
//La duda reside en si en la clase mision y en la clase simulation basta conque los team y enemys sean un array de heroes/monsters o 
//Es necesario guardar mas datos que den lugar a la creacion de una clase team
class Team {
	constructor(team){
		this.team = team.team; //Array de monsters/heroes
		this.restrictions = team.restrictions; //restricciones al formar el equipo
		this.advanges = team.advanges; //Ventajas obtenidas de como se constituye el equipo
	}
}