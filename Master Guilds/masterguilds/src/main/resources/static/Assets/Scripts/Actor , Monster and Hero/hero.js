class Hero extends Actor 
{
	constructor(hero){
		//Un total de 16 atributos de los cuales 10 son heredados.
		super({hero.ID,hero.name,hero.attack,hero.defence,
		hero.HP,hero.crit_hit_chance,hero.description,hero.evasion,hero.abilities,
		hero.image_url})
		this.aggro = hero.aggro;
		this.faction = hero.faction;
		this.rarity = hero.rarity;
		this.level = hero.level;
		this.exp = hero.exp;
		this.role = hero.role;
		}

}