//Este archivo guarda funciones que afectan a las stats de un heroe que se le pase
//De esta forma podemos tener infinitud de habilidades distintas

var effectFunctionList1 = function(input){
	if(input.apply){
                        var appliedValue=0.15;
                        //SE APLICA
						//ATAQUE
						var riseValue = input.actor.attack * appliedValue; //Valor exacto en el que aumenta el ataque
						input.effect.appliedValues.push(riseValue);//Guardamos este valor para poder deshacerlo mas facilmente despues
						input.actor.attack+=riseValue;//Se aplica la subida del ataque
						console.log("ATTACK improve "+ riseValue);//DEBUG
						//FIN DE ATAQUE

						//DEFENSA
						riseValue = input.actor.defence * appliedValue; //Valor exacto en el que aumenta el defensa
						input.effect.appliedValues.push(riseValue);//Guardamos este valor para poder deshacerlo mas facilmente despues
						input.actor.defence+=riseValue;//Se aplica la subida del defensa
						console.log("DEFENCE improve "+ riseValue);//DEBUG
						//FIN DE DEFENSA

						//CRITICO
						riseValue = input.actor.crit_hit_chance * appliedValue; //Valor exacto en el que aumenta el critico
						input.effect.appliedValues.push(riseValue);//Guardamos este valor para poder deshacerlo mas facilmente despues
						input.actor.crit_hit_chance+=riseValue;//Se aplica la subida del critico
						console.log("CRIT_HIT_CHANCE improve "+ riseValue);//DEBUG
						//FIN DE CRITICO

						//EVASION
						riseValue = input.actor.evasion * appliedValue; //Valor exacto en el que aumenta el evasion
						input.effect.appliedValues.push(riseValue);//Guardamos este valor para poder deshacerlo mas facilmente despues
						input.actor.evasion+=riseValue;//Se aplica la subida del evasion
						console.log("EVASION improve "+ riseValue);//DEBUG
						//FIN DE EVASION
					}
					else //SE DESCARTA
					{
						input.actor.attack-=input.effect.appliedValues[0];
						input.actor.defence-=input.effect.appliedValues[1];
						input.actor.crit_hit_chance-=input.effect.appliedValues[2];
						input.actor.evasion-=input.effect.appliedValues[3];
						console.log("Se han revertido los puntos sumados por el efecto 1")//DEBUG
					}
}

var effectFunctionList2 = function(input){
    if(input.apply){//SE APLICA
						if(input.actor.HP + 0.15 * input.actor.baseHP <= input.actor.baseHP)//Si no se supera la vida maxima
						{
							input.actor.HP += 0.15 * input.actor.baseHP;
							console.log("HP improve " + 0.15 * input.actor.baseHP);//DEBUG
						}
						else //Si se fuera a superar se cura hasta el maximo de vida
						{
							console.log("HP improve " + input.actor.baseHP - input.actor.HP);//DEBUG
							input.actor.HP = input.actor.baseHP;
						}
					}
}
var effectFunctionList3 = function(input){
    if(input.apply)
					{
						var riseValue = input.actor.attack * 0.25; //Valor exacto en el que aumenta el ataque
						input.effect.appliedValues.push(riseValue);//Guardamos este valor para poder deshacerlo mas facilmente despues

						input.actor.attack+=riseValue;//Se aplica la subida del ataque
						console.log("Attack improve " + riseValue);
					}
					else
					{
						input.actor.attack-=input.effect.appliedValues[0];
						console.log("Se han revertido los puntos sumados por el efecto 3")//DEBUG
					}
}