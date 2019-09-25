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
    -referencia al orden de heroes que debe atacar -> .attackOrder (AUNQUE SEA COMO UNA ESPECIE DE VARIABLE TEAM NOS INTERESA TENERLA SEPARADA EXCLUSIVAMENTE PARA HALLAR QUIEN ATACA)
    -numero de integrantes vivos -> .aliveActors
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
                    return -1;
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

        //Tanto en restrictions como en stats el array sigue el mismo orden de faccion
        //Se contempla tambien el caso de que sea un mounstro que no tiene faccion
        if (this.restrictions.maxHerosFaction[i] < this.stats.herosFaction[i] + 1 || i==-1) { 
            canBeAdded = false
        }


        return {canBeAdded:canBeAdded,nFaction:i};
    }

    //Funcion auxiliar para actualizar el orden de atacantes que se guarda en la variable (array) this.stats.attackOrder
    //Parametros input.newRound -> Diferencia entre true para si se trata de una nueva ronda de ataques
    //                  y false para si se trata de la muerte de algun miembro del equipo
    //           input.turn -> le pasas el turno de ataque (en )
    updateAttackOrder(input){

        //HABRIA QUE COMPROBAR SI ESTA MISMA OPERACION SE PUEDE REALIZAR EN this.team SIN QUE SUPONGA ALGUN TIPO DE 
        //MAL FUNCIONAMIENTO PARA OTRAS FUNCIONES 
        //DE MOMENTO SE CLONA EL ARRAY Y SE COLOCA EN OTRO ATRIBUTO
        //AUN ASI SUPONGO QUE AMBOS APUNTAN A LOS MISMOS HEROES PORQUE 
        //DEBERIA SER DOS ARRAYS CON REFERENCIAS A LOS MISMOS HEROES ORDENADOS DE DISTINTA FORMA
        //COMPROBAR

        //this.stats.attackOrder = [...this.team] //ECS6 CLONE WAY (NO ES UNA REFERENCIA ES UNA COPIA DEL ARRAY); 


       if(input.newRound){//EN ESTE CASO SE PRODUCE UNA NUEVA RONDA DE ATAQUES

        this.stats.attackOrder = this.team.slice();
       //DESCARTAMOS AQUELLOS CUYA VIDA ES 0  O MENOS YA QUE SOLO ATACARAN AQUELLOS VIVOS
       //COMPROBAR si ahora que hemos dividido el comportamiento de la funcion el while es necesario
            var j = 0;
            while(j<this.stats.attackOrder.length)
            {
                if(this.stats.attackOrder[j].HP <=0){//Muerto
                 this.stats.attackOrder.splice(j,1);
                }
                else{
                    j++;
                }

            }

       //Funcion de comparacion.
        var OrderFunction = function(a,b){
            if(a.evasion < b.evasion){
                    return 1;
                }
                if(a.evasion > b.evasion){
                    return -1;
                }
                    return 0;
            }

            this.stats.attackOrder.sort(OrderFunction);
        }
        else{ //EN ESTE CASO HA MUERTO UN MIEMBRO DEL EQUIPO

            //BORRA LOS MUERTOS
            var j = 0;
            while(j<this.stats.attackOrder.length)
            {
                if(this.stats.attackOrder[j].HP <=0 && (j < input.turn)){//Muerto y si ese personaje no habia atacado aun
                 this.stats.attackOrder.splice(j,1);
                }
                else{
                    j++;
                }

            }

        }
    }
    //Funcion auxiliar encargada de actualizar la stat que guarda una referencia al actor con mayor aggro del equipo
    //Podria recibir una referencia al actor que ha sido afectado de alguna forma  (sease porque se ha borrado del equipo, se ha añadido al equipo o su vida ha llegado a 0) 
    //Parametros: input.actor-> Es el Actor nuevo (porque se ha añadido // Deja la puerta abierta a que el aggro pueda ser tocado por efectos //vida==0 // se ha eliminado del equipo)
    //            input.isAdded -> Determina si estamos eliminando (borrado o vida es 0) o añadiendo el actor.
    updateMaxAggroActor(input){

        var that = this;

        //Se le pasa el actor del input.actor
        //Esta funcion recorre el array de heroes/monsters del equipo y 
        //GUARDA en una variable aux el actor del equipo con mayor aggro/ despues lo pone en la variable de stats correspondiente
        var MaxAggroActorAux = function(){
            var AggroValueAux = {aggro: -1 , HP: 100}; //Falsificamos el primer aggro para que sea menor siempre que el resto de posibles

            for(var actorAux = 0; actorAux < that.team.length ; actorAux ++){//For  
                if((that.team[actorAux].aggro > AggroValueAux.aggro) && (that.team[actorAux].HP > 0)){ //Si el actor tiene vida aun y su aggro es mayor que el actual se guarda este
                    AggroValueAux = that.team[actorAux];
                }
            }

            that.stats.maxAggroActor = AggroValueAux; //Se asigna el heroe guardado en la variable auxiliar para guardarlo en stats
        }

        if(input.isAdded){//Se trata de una incorporacion al equipo
            if(this.team.length>1){//Si no es la primera incorporacion , este valor ya tendra alguien asignado
                if(input.actor.aggro > this.stats.maxAggroActor.aggro){//Si el nuevo actor tiene mayor aggro
                    this.stats.maxAggroActor = input.actor //Se referencia al nuevo actor
                }
            }
            else //Si el equipo estaba vacio y por ende este valor tambien
            {
                this.stats.maxAggroActor = input.actor;
            }
        }
        else //Si se trata de una eliminacion de personaje o de una bajada de vida a 0
        {
            //Si el actor implicado es el mismo que el asignado debe realizarse un update
            //de forma que debera recorrerse el array del equipo para poder
            //asegurar que tenemos en stats una referencia al nuevo sujeto con mayor aggro
            if(input.actor === this.stats.maxAggroActor){
                MaxAggroActorAux();
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
            this.stats.aliveActors++;
            //Se pone el caso del if para tener en cuenta a los monster que no tienen faccion alguna
            if(result.nFaction!=-1){
                 this.stats.herosFaction[result.nFaction]+=1;
            }
            this.updateMaxAggroActor({actor:input,isAdded:true })
            this.updateAttackOrder({newRound:true})
            console.log("Hero added sucesfully")//DEBUG
        }
        else
        {
            console.log("Team is full")//DEBUG
        }
    }

    //Parametros : input.pos -> Posicion del heroe en el array 
    //             input.actor -> Heroe
    //MODIFICAR PARA QUE SEA MAS ACCESIBLE DE USAR (MENOS PARAMETROS DE ENTRADA / O SE PASA POS O ACTOR PERO NO AMBOS)
    removeMember(input){
        var nFac = this.getNumberOfFaction(input.actor.faction)//Devuelve el numero de la faccion a la que pertenece
        
        this.team.splice(input.pos,1);//Borra el actor del equipo.

        //Updatea stats//
        this.stats.aliveActors--;
        //El if es para distinguir de aquellos monster que no tengan faccion
        if(nFac!=-1){
            this.stats.herosFaction[nFac]-=1;
        }
        this.updateMaxAggroActor({actor:input.actor ,isAdded:false })
        this.updateAttackOrder({newRound:true})
        console.log("Hero removed sucesfully")//DEBUG
        
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
    
    resetToBaseAttribValue(){
    	for(var j=0;this.team.length;j++){
    		this.team[j].resetToBaseAttribValue();
    	}

        this.team = []; //Limpia el equipo

        //Limpia las stats
        this.stats.herosFaction = [0,0,0];//Limpia las stats de heroes por faccion
        this.stats.aliveActors = 0;
        this.stats.maxAggroActor = null;
        this.stats.attackOrder = null;

        //Limpia las restricciones
        this.restrictions = {maxHeros:0,maxHerosFaction:[0,0,0]};

        //Limpia las sinergias
        this.synergies = [];
    }
    
    nextTurn(input){
        //Actualiza los actores de cada equipo.
        for(var j=0; j<this.team.length;j++){
            this.team[j].nextTurn();
        }


        //Despues de actualizar todas los actores (stats) . Si se da el caso de que se vaya a iniciar una nueva ronda de ataques , entonces se recalcula el orden en el que deben atacar los actores de un equipo
        if(input==0){
            this.updateAttackOrder({newRound:true});
            console.log("Se ha instaurado un nuevo orden de ataque en base a la evasion de los actores")//DEBUG
        }
    }


}
