class Hero extends Actor 
{
	constructor(hero){
		//Un total de 16 atributos de los cuales 10 son heredados. // Algunos se duplican para distinguir entre base y el que se usa (bufos);
		//Hereda todos sus atributos de la clase actor.
		var m = {ID: hero.ID, name: hero.name, baseAttack:hero.baseAttack, attack: hero.attack, baseDefence: hero.baseDefende,
		defence: hero.defence, baseHP: hero.baseHP,HP: hero.HP,base_crit_hit_chance: hero.base_crit_hit_chance,
		crit_hit_chance: hero.crit_hit_chance,description: hero.description,evasion: hero.evasion,baseEvasion: hero.baseEvasion,
		abilities: hero.abilities, image_url: hero.image_url , activeAbilities: hero.activeAbilities}

		//console.log(m);//Debug
		super(m);
		this.aggro = hero.aggro;
		this.faction = hero.faction;
		this.rarity = hero.rarity;
		this.level = hero.level;
		this.exp = hero.exp;
		this.role = hero.role;
		}

	//Calcula el daño total que recibe el enemigo al que ataca
	//Sin tener en cuenta aun habilidades activas , la forma normal es Aataque - (Bdefensa/2)
	//Parametros: input pasa : defence , critFactor , isCritForSure , abilities : IsignoreDefenceActivate
	attackPoints(input){
		//FALTA ADAPTAR EL MODELO PARA QUE TENGA EN CUENTA POSIBLES HABILIDADES 
		//Daño Final aplicado;
		var TDamage;

		//IGNORAR DEFENSA O NO
		if(activeAbilities.IgnoreDefence.isActive){// Si esta activo el bufo de ignorar defensa
			TDamage = attack;
		}
		else
		{
			TDamage = (attack - (Math.trunc(input.defence / 2)));
		}
		//FIN DE IGNORAR DEFENSA O NO	

		//CALCULO DE CRITICO	
			//Funcion anonima para calcular un bool de si se produce un critico o no
			var isCritHit = function (){ 
				if((Math.random()<=crit_hit_chance) || input.isCritForSure){
					return true;
				}
				else
				{
				return false;
				}
			};
			//Funcion anonima
			//El valor por el que se multiplica el ataque si es critico (lo hago asi por si se decide que alguna habilidad pasa otro)
			//Se calcula el valor del daño aplicando critico
			var CritFactor = function(){
				//Comprobamos que la variable existe , por ejemplo por si una habilidad activada aumenta el valor del critico
				if(input.critFactor){
					return input.critFactor;
				}
				return 2; // Valor base de critico
			};

		//FIN DE CALCULO DE CRITICO	
		//APLICACION DEL CRITICO
			if(isCritHit()){
				TDamage *= CritFactor();
			}
		//FIN DE APLICACION DEL CRITICO

		return TDamage;
	}

	//Funcion que realiza las actualizaciones de un turno para otro de un heroe
	nextTurn(){

	}
}

//var b = new Hero({ID:24});//Debug