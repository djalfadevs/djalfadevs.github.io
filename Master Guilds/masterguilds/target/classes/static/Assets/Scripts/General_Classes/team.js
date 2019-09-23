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
    -referencia al heroe con mayor aggro del equipo -> . maxAggroActor
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
        this.synergies = team.synergies; //Ventajas obtenidas de como se constituye el equipo
    }

    //Parametros: input.actor.faction
    //Devuelve la posicion del array de stats y restrintions
    getNumberOfFaction(faction) {
            switch (faction) { //CHANGE "1" by real faction value
                case "Azon":
                    return 0;
                    break;
                case "Ferten":
                    return 1;
                    break;
                case "Kwin":
                    return 2;
                    break;
                default:
            }
        }
    
    //Comprueba si se puede añadir un nuevo actor al equipo  , este debe cumplir con las restricciones
    //Parametros : input -> heroe o mounstro que se pretende añadir
    canAddMember(input) {
        var actor = input.actor
        var canBeAdded = true;

        //Si el equipo no supera el maximo numero de heroes permitidos por la restriccion
        if (this.restrictions.maxHeros < this.team.length + 1) { 
            canBeAdded = false;
        }

     
        //Comprueba si el numero de heroes de determinada faccion no ha superado el de las restricciones
        var i = this.getNumberOfFaction(input.faction); //i debe ser hallado a partir del input.actor es decir del heroe q se introduce MODIFICAR

        if (this.restrictions.maxHerosFaction[i] < this.stats.herosFaction[i] + 1) { //Tanto en restrictions como en stats el array sigue el mismo orden de faccion
            canBeAdded = false
        }


        return {canBeAdded:canBeAdded,nFaction:i};
    }

    //Funcion auxiliar encargada de actualizar la stat que guarda
    //Podria recibir una referencia al actor que ha recibido una actualizacion en el aggro (sease porque es nuevo ) 
    //Parametros: input.actor-> Es el Actor nuevo (porque se ha añadido // Deja la puerta abierta a que el aggro pueda ser tocado por efectos)
    //            input.isAdded -> Determina si estamos eliminando o añadiendo el actor.
    updateMaxAggroActor(input){

        var that = this;

        //Se le pasa el actor del input.actor
        var MaxAggroActorAux = function(input2){
            for(var actorAux in that.team){//For in 
                if(actorAux.aggro > input2.aggro){
                    that.stats.maxAggroActo = actorAux;
                }
            }
        }

        if(input.isAdded){//Se trata de una incorporacion al equipo
            if(input.actor.aggro > this.stats.maxAggroActor.aggro){//Si el nuevo actor tiene mayor aggro
                this.stats.maxAggroActo = input.actor //Se referencia al nuevo actor
            }
        }
        else //Si se trata de una eliminacion de personaje
        {
            //Si el actor implicado es el mismo que el asignado debe realizarse un update
            //de forma que debera recorrerse el array del equipo para poder
            //asegurar que tenemos en stats una referencia al nuevo sujeto con mayor aggro
            if(input.actor === this.stats.maxAggroActor){
                MaxAggroActorAux(input.actor);
            }
        }
    }

    //Parametros : input -> heroe o mounstro que se pretende añadir
    //Añade el heroe u mounstro al equipo si cumple con las restricciones
    addMember(input) {
        var result = this.canAddMember(input)
        if (result.canBeAdded) {
            this.team.push(input);
            //Updatea stats
            this.stats.herosFaction[result.nFaction]+=1;
            updateMaxAggroActor({actor:input,input.isAdded:true })

            console.log("Hero added sucesfully")//DEBUG
        }
        else
        {
            console.log("Team is full")//DEBUG
        }
    }

    //Vacia el equipo // 
    clearTeam() {
        this.team = []; //Limpia el equipo
        this.stats.herosFaction = [0,0,0];//Limpia las stats de heroes por faccion
    }

    //Parametros : input.pos -> Posicion del heroe en el array // input.actor -> Heroe
    removeMember(input){
        var nFac = this.getNumberOfFaction(input.actor.faction)//Devuelve el numero de la faccion a la que pertenece
        
        //Updatea stats
        this.stats.herosFaction[nFac]-=1;
        updateMaxAggroActor({actor:input.actor ,input.isAdded:false })
        
        this.team.splice(input.pos,1);//Borra el actor del equipo.

    }
    //funcion auxiliar para aplicar las sinergia
    synergiesAux(synergies){
        switch(synergies){
            case 0:
                synergyFunction0({team:this.team,synergies:this.synergies})
                break;
            case 1:
                synergyFunction1({team:this.team,herosFaction:this.stats.herosFaction,synergies:this.synergies})
                break;
            case 2:
                synergyFunction2({team:this.team,herosFaction:this.stats.herosFaction,synergies:this.synergies})
                break;
            case 3:
                synergyFunction3({team:this.team,herosFaction:this.stats.herosFaction,synergies:this.synergies})
                break;
            default:
                break;
        }
    }
    
    
    //Calcula y aplica las ventajas del equipo a partir de los miembros que la conforman.
    calculateSynergies() {
        
        //VENTAJAS POSIBLES
        //Al menos uno de cada equipo, la mejora sera de velocidad
        //Cuatro tiers de mejoras por faccion:
        //Tier C -> Al menos dos heroes de una faccion
        //Tier B -> Al menos cuatro de una faccion
        //Tier A -> Al menos seis de una faccion
        //Tier S -> Todos de la misma faccion (8)
        //Tipos de mejoras segun la faccion:
        //Mejora 1 de cada: 
        //Mejora Azon: ataque
        //Mejora Ferten: critico
        //Mejora Kwin> defensa
        
        if((this.stats.herosFaction[0]>=1)&&(this.stats.herosFaction[1]>=1)&&(this.stats.herosFaction[2]>=1)){
           this.synergiesAux(0);
           console.log("Type 0 synergy is going to be applied")//DEBUG
        }
        
        if(this.stats.herosFaction[0]>=2){
            this.synergiesAux(1);
            console.log("Type 1 synergy is going to be applied")//DEBUG
        }
        
        if(this.stats.herosFaction[1]>=2){
           this.synergiesAux(2);
           console.log("Type 2 synergy is going to be applied")//DEBUG
        }
        
        if(this.stats.herosFaction[2]>=2){
            this.synergiesAux(3);
            console.log("Type 3 synergy is going to be applied")//DEBUG
        }
    }


}
