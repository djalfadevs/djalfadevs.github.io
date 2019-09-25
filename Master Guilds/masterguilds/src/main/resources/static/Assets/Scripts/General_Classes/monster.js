"use strict";
class Monster extends Actor 
{
	constructor(monster){
		//Hereda todos sus atributos de la clase actor.
		//Se puede obviar la creacion de la variable m y meter todo el objeto directamente en el super ??
		var m = {ID: monster.ID, name: monster.name,baseAttack:monster.baseAttack, attack: monster.attack,baseDefence: monster.baseDefende,
		defence: monster.defence,baseHP: monster.baseHP,HP: monster.HP,base_crit_hit_chance: monster.base_crit_hit_chance,
		crit_hit_chance: monster.crit_hit_chance,description: monster.description,evasion: monster.evasion,baseEvasion: monster.baseEvasion,
		abilities: monster.abilities, image_url: monster.image_url, activeAbilities: monster.activeAbilities , 
		baseAggro: monster.baseAggro , aggro: monster.aggro}

		//console.log(m);//Debug
		super(m);
	}

	//Calcula el daño total que recibe el enemigo al que ataca
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

    resetToBaseAttribValue(){
    	for(var j=0;this.team.length;j++){
    		this.team[j].resetToBaseAttribValue();
    	}
    }
	//Funcion que realiza las actualizaciones de un turno para otro de un mounstro
	nextTurn(){
		console.log("Another turn for Monster " + this.name);//DEBUG
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
}

//var a = new Monster({ID:24});//Debug