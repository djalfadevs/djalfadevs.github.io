//Aun no se si esta clase es totalmente necesaria
//La duda reside en si en la clase mision y en la clase simulation basta conque los team y enemys sean un array de heroes/monsters o 
//Es necesario guardar mas datos que den lugar a la creacion de una clase team

/*
Explicacion Formato restricctions:
objeto{
	-total number of heros -> .maxHeros
	-array maximo numero de heroes por faccion [primera f, segunda f, tercera f] -> .maxHerosFaction
}

Explicacion Formato stats:
objeto{
	-array numero de heroes por faccion [primera f, segunda f, tercera f] -> .herosFaction
}
//ANGEL, DEFINE AQUI EL FORMATO QUE TIENEN LOS OBJETOS ADVANTAGE
Explicacion Formato advantage:
objeto{
    
}
*/


class Team {
    constructor(team) {
        this.team = team.team; //Array de monsters/heroes
        this.stats = team.stats; //Guarda valores como el numero de integrantes que hay por cada faccion
        //QUIZA EN VEZ DE GUARDAR LAS RESTRICCIONES EN EL TEAM SEA MEJOR PASARLAS COMO PARAMETRO 
        this.restrictions = team.restrictions; //restricciones al formar el equipo PENSAR FORMATO DE RESTRICCIONES (como si fuera un json)
        this.advantages = team.advantages; //Ventajas obtenidas de como se constituye el equipo
    }

    //Comprueba si se puede añadir un nuevo actor al equipo  , este debe cumplir con las restricciones
    //Parametros : input.actor -> heroe o mounstro que se pretende añadir
    canAddMember(input) {
        var actor = input.actor
        var canBeAdded = true;

        //Si el equipo no supera el maximo numero de heroes permitidos por la restriccion
        if (this.restrictions.maxHeros < this.team.length + 1) { //+1 DUDA ??
            canBeAdded = false;
        }

        //Funcion anonima para conseguir pasar el valor del "hero.faction (a lo mejor no se llama asi)" a un numero
        var getNumberOfFaction = function (inputTwo) {
            switch (inputTwo.actor.faction) { //CHANGE "1" by real faction value
                case "Azon":
                    return 1;
                    break;
                case "Ferten":
                    return 2;
                    break;
                case "Kwin":
                    return 3;
                    break;
                default:
            }
        }
        //Comprueba si el numero de heroes de determinada faccion no ha superado el de las restricciones
        var i = getNumberOfFaction(input); //i debe ser hallado a partir del input.actor es decir del heroe q se introduce MODIFICAR

        if (this.restrictions.maxHerosFaction[i] > this.stats.herosFaction[i] + 1) { //Tanto en restrictions como en stats el array sigue el mismo orden de faccion
            canBeAdded = false
        }


        return canBeAdded;
    }
    //Updatea las stats 
    updateStats() {

    }

    //Parametros : input.actor -> heroe o mounstro que se pretende añadir
    //Añade el heroe u mounstro al equipo si cumple con las restricciones
    addMember(input) {
        if (canAddMember(input)) {
            this.team.push(input.actor);
            updateStats();
        }
    }

    //Vacia el equipo // (realmente no es necesario este metodo , se puede hacer directamente)
    clearTeam() {
        this.team = [];
    }

    //Calcula las ventajas del equipo a partir de los miembros que la conforman.
    calculateAdvantages() {
        
        //VENTAJAS POSIBLES
        //Al menos uno de cada equipo, la mejora sera de velocidad
        //Cuatro tiers de mejoras por faccion:
        //Tier C -> Al menos dos heroes de una faccion
        //Tier B -> Al menos cuatro de una faccion
        //Tier A -> Al menos seis de una faccion
        //Tier S -> Todos de la misma faccion
        //Tipos de mejoras segun la faccion:
        //Mejora Azon: ataque
        //Mejora Ferten: critico
        //Mejora Kwin> defensa
        
        if((this.stats.herosFaction[0]==1)&&(this.stats.herosFaction[1]==1)&&(this.stats.herosFaction[2]==1)){
           updateStats();
        }
        
        if(this.stats.herosFaction[0]>=2){
           if(this.stats.herosFaction[0]>=4){
              if(this.stats.herosFaction[0]>=4){
                 if(this.stats.herosFaction[0]==8){
                        updateStats();
                    }
                  else{
                        updateStats();
                  }
                }
              else{
                    updateStats();
                }
              }
            else{
                updateStats();
            }
        }
        
        if(this.stats.herosFaction[1]>=2){
           if(this.stats.herosFaction[1]>=4){
              if(this.stats.herosFaction[1]>=4){
                 if(this.stats.herosFaction[1]==8){
                        updateStats();
                    }
                  else{
                        updateStats();
                  }
                }
              else{
                    updateStats();
                }
              }
            else{
                updateStats();
            }
        }
        
        if(this.stats.herosFaction[2]>=2){
           if(this.stats.herosFaction[2]>=4){
              if(this.stats.herosFaction[2]>=4){
                 if(this.stats.herosFaction[2]==8){
                        updateStats();
                    }
                  else{
                        updateStats();
                  }
                }
              else{
                    updateStats();
                }
              }
            else{
                updateStats();
            }
        }
    }


}
