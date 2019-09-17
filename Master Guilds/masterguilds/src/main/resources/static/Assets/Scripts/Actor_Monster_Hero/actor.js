class Actor {
	constructor(actor)
	{
		//Un total de 10 atributos comunes a mounstros y heroes
		this.ID = actor.ID;
		this.name = actor.name;
		this.attack = actor.attack;
		this.defence = actor.defence;
		this.HP = actor.HP;
		this.crit_hit_chance = actor.crit_hit_chance;
		this.description = actor.description;
		this.evasion = actor.evasion;
		this.abilities = actor.abilities;
		this.image_url = actor.image_url;
	}
}