"use strict";
class Hero extends Actor 
{
	constructor(hero){
		//Un total de 16 atributos de los cuales 10 son heredados. // Algunos se duplican para distinguir entre base y el que se usa (bufos);
		//Hereda todos sus atributos de la clase actor.
		var m = {ID: hero.ID, name: hero.name, baseAttack:hero.baseAttack, attack: hero.attack, baseDefence: hero.baseDefence,
		defence: hero.defence, baseHP: hero.baseHP,HP: hero.HP,base_crit_hit_chance: hero.base_crit_hit_chance,
		crit_hit_chance: hero.crit_hit_chance,description: hero.description,evasion: hero.evasion,baseEvasion: hero.baseEvasion,
		abilities: hero.abilities, image_url: hero.image_url , activeAbilities: hero.activeAbilities}

		//console.log(m);//Debug
		super(m);
		this.aggro = hero.aggro; //Cambiar al actor // elevar al padre ya que ahora monster tambien lo tiene
		this.faction = hero.faction;
		this.rarity = hero.rarity;
		this.level = hero.level;
		this.exp = hero.exp;
		this.role = hero.role;

		}

	fixAttribute(input){
		console.log("It is fixing all the attributes related: " + input.apply + " the effect " + input.effect.ID )//DEBUG
		
		var that = this;

			//SE MIRA EL EFECTO QUE ES
			//NOTA: ahora mismo se aplica el calculo de subida sobre el valor que la variable tenga en ese momento
			//quiza sea mas recomendable usar el valor base para calcular las subidas (y asi podemos usar algo de multithread)
			switch(input.effect.ID){
				case(1)://BuffStats //SE SUBE UN 10% ATAQUE , DEFENSA , CRIT_HIT_CHANCE , EVASION
					
					if(input.apply){//SE APLICA
						//ATAQUE
						var riseValue = this.attack * 0.25; //Valor exacto en el que aumenta el ataque
						input.effect.appliedValues.push(riseValue);//Guardamos este valor para poder deshacerlo mas facilmente despues
						this.attack+=riseValue;//Se aplica la subida del ataque
						console.log("ATTACK improve "+ riseValue);//DEBUG
						//FIN DE ATAQUE

						//DEFENSA
						riseValue = this.defence * 0.25; //Valor exacto en el que aumenta el defensa
						input.effect.appliedValues.push(riseValue);//Guardamos este valor para poder deshacerlo mas facilmente despues
						this.defence+=riseValue;//Se aplica la subida del defensa
						console.log("DEFENCE improve "+ riseValue);//DEBUG
						//FIN DE DEFENSA

						//CRITICO
						riseValue = this.crit_hit_chance * 0.25; //Valor exacto en el que aumenta el critico
						input.effect.appliedValues.push(riseValue);//Guardamos este valor para poder deshacerlo mas facilmente despues
						this.crit_hit_chance+=riseValue;//Se aplica la subida del critico
						console.log("CRIT_HIT_CHANCE improve "+ riseValue);//DEBUG
						//FIN DE CRITICO

						//EVASION
						riseValue = this.evasion * 0.25; //Valor exacto en el que aumenta el evasion
						input.effect.appliedValues.push(riseValue);//Guardamos este valor para poder deshacerlo mas facilmente despues
						this.evasion+=riseValue;//Se aplica la subida del evasion
						console.log("EVASION improve "+ riseValue);//DEBUG
						//FIN DE EVASION
					}
					else //SE DESCARTA
					{
						this.attack-=input.effect.appliedValues[0];
						this.defence-=input.effect.appliedValues[1];
						this.crit_hit_chance-=input.effect.appliedValues[2];
						this.evasion-=input.effect.appliedValues[3];
					}
				break;
				case(2)://Health // SE CURA UN 15% DE SU VIDA MAXIMA // EN EL FUTURO SE LEERA DE UNA VARIABLE GLOBAL QUE GUARDE ESTOS DATOS SEGURAMENTE
					if(input.apply){//SE APLICA
						if(this.HP + 0.15 * this.baseHP <= this.baseHP)//Si no se supera la vida maxima
						{
							this.HP += 0.15 * this.baseHP;
							console.log("HP improve " + 0.15 * this.baseHP);//DEBUG
						}
						else //Si se fuera a superar se cura hasta el maximo de vida
						{
							console.log("HP improve " + this.baseHP - this.HP);//DEBUG
							this.HP = this.baseHP;
						}
					}
					//No hace falta tocar stats al descartar en Health
				break;
				case(3)://BuffAttack //SE SUBE UN 25% DEL ATAQUE
					if(input.apply)
					{
						var riseValue = this.attack * 0.25; //Valor exacto en el que aumenta el ataque
						input.effect.appliedValues.push(riseValue);//Guardamos este valor para poder deshacerlo mas facilmente despues

						this.attack+=riseValue;//Se aplica la subida del ataque
						console.log("HP improve " + this.baseHP);
					}
					else
					{
						this.attack-=input.effect.appliedValues[0];
					}
				break;
				default: //AQUI NO SE APLICA EL IGNORE DEFENCE NI EL LIFESTEAL
			}
		
	}
	//Calcula el daño total que recibe el enemigo al que ataca
	//Sin tener en cuenta aun habilidades activas , la forma normal es Aataque - (Bdefensa/2)
	//Parametros: input pasa : defence , critFactor , isCritForSure , abilities : IsignoreDefenceActivate
	attackPoints(input){
		//FALTA ADAPTAR EL MODELO PARA QUE TENGA EN CUENTA POSIBLES HABILIDADES 
		//Daño Final aplicado;
		var TDamage;
		var that = this;

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
	//ESTA FUNCION PODRA SER UTILIZADA LO MAS SEGURO DE MANERA QUE ALGUNAS COSAS PUEDAN REALIZARSE MEDIANTE WORKERS O CALLBACKS

	//ASI QUE LO MAS SEGURO ESQ TOQUE AJUSTARLA O BORRARLAÇ
	/*fixAttribute(input){
		console.log("It is fixing all the attributes related: " + input.apply + " the effect " + input.ID )//DEBUG
		//console.log(this);//DEBUG
		
 	}
	*/


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
		//CALLBACK DE LOS EFECTOS PARA ARREGLAR ATRIBUTOS ???
		var i = 0;
		while(i < that.activeAbilities.length ){
			that.activeAbilities[i].nextTurn({that: that ,pos: i,callback: that.fixAttribute,callback2:that.clearEffect});
			i++;
		}

 	}

 	//"Arregla" el atributo que es afectado por el efecto
 	
}

//var b = new Hero({ID:24});//Debug