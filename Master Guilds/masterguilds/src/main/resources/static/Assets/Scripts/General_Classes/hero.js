"use strict";
class Hero extends Actor 
{
	constructor(hero){
		//Un total de 16 atributos de los cuales 10 son heredados. // Algunos se duplican para distinguir entre base y el que se usa (bufos);
		//Hereda todos sus atributos de la clase actor.
		var m = {ID: hero.ID, name: hero.name, baseAttack:hero.baseAttack, attack: hero.attack, baseDefence: hero.baseDefence,
		defence: hero.defence, baseHP: hero.baseHP,HP: hero.HP,base_crit_hit_chance: hero.base_crit_hit_chance,
		crit_hit_chance: hero.crit_hit_chance,description: hero.description,evasion: hero.evasion,baseEvasion: hero.baseEvasion,
		abilities: hero.abilities, image_url: hero.image_url , activeAbilities: hero.activeAbilities ,
		baseAggro: hero.baseAggro , aggro: hero.aggro}

		//console.log(m);//Debug
		super(m);
		this.faction = hero.faction;
		this.rarity = hero.rarity;
		this.level = hero.level;
		this.exp = hero.exp;
		this.role = hero.role;

		//MODIFICAR PARA QUE CUANDO SE LE PASE LAS HABILIDADES LAS CREE USANDO EL CONSTRUCTOR DE HABILIDAD

		}

	//Esta funcion se llama a modo callback desde la clase Effect CALLBACK
	fixAttribute(input){
		console.log("It is fixing all the attributes related: " + input.apply + " the effect " + input.effect.ID )//DEBUG
		
		var that = this;
			//Es el propio efecto el que gestiona con una funcion propia como actua sobre las stats del heroe.
        input.effect.effectFunction({apply:input.apply,actor:this,effect:input.effect});
		
	}
	//Calcula el daño total que recibe el enemigo al que ataca
	//Sin tener en cuenta aun habilidades activas , la forma normal es Aataque - (Bdefensa/2)
	//Parametros: input pasa : defence , critFactor , isCritForSure , abilities : IsignoreDefenceActivate
	attackPoints(input){
		//Daño Final aplicado;
		var TDamage;
		var that = this;

        if(Math.random<=input.evasion/9999){
           TDamage=0;
           }
        else{
           //IGNORAR DEFENSA Y ROBO DE VIDA
        
        var IgnorarDefensa=false;
        
        var RoboDeVida=false;
        
        //COMPRUEBA SI ESTA ACTIVA IGNORAR DEFENSA Y ROBO DE VIDA
        for(var i=0;i<that.activeAbilities.length;i++){//IGNORAR DEFENSA
            if(that.activeAbilites[i].ID==4){
               IgnorarDefensa=true
            }
            if(that.activeAbilities[i].ID==5){//ROBO DE VIDA
               RoboDeVida=true
            }
        }
        
        if((IgnorarDefensa)&&(!RoboDeVida)){ //IgnorarDefensa
           TDamage=that.attack;
           }
        else if(RoboDeVida){ //Robo de vida
            TDamage=that.baseHP*0.2;  
            that.HP+=that.baseHP*0.2;
        }
        else{
            TDamage=(that.attack - (Math.trunc(input.defence / 2)));//Ataque si no hay estos efectos activos
        }
        

		//CALCULO DE CRITICO	
			//Funcion anonima para calcular un bool de si se produce un critico o no
			var isCritHit = function (){ 
				if((Math.random()<=that.crit_hit_chance) || input.isCritForSure){
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
           }
		
		//FIN DE APLICACION DEL CRITICO

		return TDamage;
	}

	//Esta funcion es llamada por un callback desde effect CALLBACK 2 
	clearEffect(input){
		console.log("Effect " + this.activeAbilities[input.pos].name + " has gone")//DEBUG
		this.activeAbilities.splice(input.pos,1);
		
	}
	//CALLBACK 1
	//Funcion que realiza las actualizaciones de un turno para otro de un heroe


	

	//Realiza las actualizaciones necesarias entre turno y turno.
	nextTurn(input){
		console.log("Another turn for Hero " + this.name);//DEBUG
		//Actualizar lo relacionado con las Habilidades (cooldown y si esta lista o no)
		var that = this;
		for(var i = 0; i < that.abilities.length ; i++){
			that.abilities[i].nextTurn();
		}
		////

		//Actualizar Efectos Activos
		//Actualiza atributos del jugador cuando llega a 0;
		//Elimina los efectos que no siguen activos mas 
		//CALLBACK DE LOS EFECTOS PARA ARREGLAR ATRIBUTOS 
		var i = 0;
		while(i < that.activeAbilities.length ){
			that.activeAbilities[i].nextTurn({that: that ,pos: i,callback: that.fixAttribute,callback2:that.clearEffect});
			i++;
		}

 	}

 	//Resetea todos los atributos a su valor base.
	resetToBaseAttribValue(){
        this.attack=this.baseAttack;
        this.defence=this.baseDefence;
        this.evasion=this.baseEvasion;
        this.HP=this.baseHP;
        this.crit_hit_chance=this.base_crit_hit_chance;
	} 	

}

//var b = new Hero({ID:24});//Debug