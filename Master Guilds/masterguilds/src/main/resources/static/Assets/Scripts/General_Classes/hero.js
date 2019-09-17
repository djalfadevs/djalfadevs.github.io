class Hero extends Actor 
{
	constructor(hero){
		//Un total de 16 atributos de los cuales 10 son heredados.
		//Hereda todos sus atributos de la clase actor.
		var m = {ID: hero.ID, name: hero.name, attack: hero.attack,defence: hero.defence,
		HP: hero.HP,crit_hit_chance: hero.crit_hit_chance,description: hero.description,evasion: hero.evasion,
		abilities: hero.abilities, image_url: hero.image_url}

		//console.log(m);//Debug
		super(m);
		this.aggro = hero.aggro;
		this.faction = hero.faction;
		this.rarity = hero.rarity;
		this.level = hero.level;
		this.exp = hero.exp;
		this.role = hero.role;
		}

}

//var b = new Hero({ID:24});//Debug