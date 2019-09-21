class Mision {
	constructor(mision)
	{
		//Un total de 10 atributos comunes a mounstros y heroes
		this.ID = mision.ID;
		this.name = mision.name;
		this.team = mision.team; //Al principio vacio aunque puede que tenga que usarse, se rellena para hacer la mision.
		this.enemys = mision.enemys; 
		this.teamSize = mision.teamSize;
		this.enemyTeamSize = mision.enemyTeamSize;
		this.image_url = mision.image_url;
		this.reward = mision.reward;
        this.blocked=mision.blocked;
		this.restrictions = mision.restrictions; //Lista de restricciones de la mision , si las hay .
	}
}