//Este archivo guarda funciones que afectan a las stats de un heroe que se le pase
//De esta forma podemos tener infinitud de habilidades distintas

var effectFuntionList1 = function(input){
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
}