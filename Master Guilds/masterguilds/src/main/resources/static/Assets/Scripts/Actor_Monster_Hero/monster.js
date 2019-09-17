class Monster extends Actor 
{
	constructor(monster){
		//Hereda todos sus atributos de la clase actor.
		//Se puede obviar la creacion de la variable m y meter todo el objeto directamente en el super ??
		var m = {ID: monster.ID, name: monster.name, attack: monster.attack,defence: monster.defence,
		HP: monster.HP,crit_hit_chance: monster.crit_hit_chance,description: monster.description,evasion: monster.evasion,
		abilities: monster.abilities, image_url: monster.image_url}

		console.log(m);//Debug
		super(m);
	}
}

var a = new Monster({ID:24});//Debug