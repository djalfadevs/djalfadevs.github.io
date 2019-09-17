class Monster extends Actor 
{
	constructor(monster){
		//Hereda todos sus atributos de la clase actor.
		super({monster.ID,monster.name,monster.attack,monster.defence,
		monster.HP,monster.crit_hit_chance,monster.description,monster.evasion,monster.abilities,
		monster.image_url})
	}
}