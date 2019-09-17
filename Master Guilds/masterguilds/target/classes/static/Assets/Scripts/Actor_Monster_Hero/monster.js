class Monster extends Actor 
{
	constructor(monster){
		//Hereda todos sus atributos de la clase actor.
		var m = {ID: monster.ID, name: monster.name, attack: monster.attack,defence: monster.defence,
		HP: monster.HP,crit_hit_chance: monster.crit_hit_chance,description: monster.description,evasion: monster.evasion,
		abilities: monster.abilities, image_url: monster.image_url}

		console.log(m);//Debug
		super(m);
	}
}

var a = new Monster({ID:24});//Debug