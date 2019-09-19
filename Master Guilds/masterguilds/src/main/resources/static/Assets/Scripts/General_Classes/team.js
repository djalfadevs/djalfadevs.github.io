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
                case "1":
                    return 1;
                    break;
                case "2":
                    return 2;
                    break;
                case "3":
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

    //IMPORTANTE COMENTARIO!!!!!!!!
    //Calcula las ventajas del equipo a partir de los miembros que la conforman. PENSAR FORMATO DE LAS VENTAJAS DE EQUIPO
    calculateAdvantages() {
        var buff1 = 0;
        var buff2 = 0;
        var buff3 = 0;
        //recorremos el array buscando cuantos personajes de cada faccion hay en el equipo para saber que sinergia aplicar.
        //SINERGIAS DE FACCION, porque las sinergias unicas, no se si quieren que las implementemos al final.
        for (var i = 0; i < this.team.length; i++) {
            switch (this.team[i]) {
                case 1:
                    buff1 += 1;
                    break;
                case 2:
                    buff2 += 1;
                    break;
                case 3:
                    buff3 += 1;
                    break;
                default:
                    break;
            }
        }
        //updateStats: luismi, habia pensado en dos formas de mejorarlos: pasamos el heroe como parametro a updateStats, o podemos pasar la faccion a mejorar por parametro, en el caso de que tengamos que mejorar varias pues usamos otros numeros tipo la 4 es la 1 y la 2 etc.
        //solo pensados para misiones de 3 y de 5
        switch (this.restrictions.maxHeros) {
            case 1:
                //no podriamos hacer ninguna ventaja
                break;
            case 3:
                if ((buff1 == 1) && (buff2 == 1) && (buff3 == 1)) {
                    //si tenemos un heroe de cada faccion tendremos una mejora leve
                    //le pasariamos todos los tipos
                    updateStats();
                } else if ((buff1 == 2) || (buff2 == 2) || (buff3 == 2)) {
                    //si tenemos dos de una faccion obtendremos una mejora considerable
                    //le pasariamos el maximo entre los tres tipos con un .max o la funcion que haya aqui, si es que pasamos el tipo PSEUDOCODIGO
                    //var tipoMejora=(buff1,buff2,buff3).max
                    //switch tipoMejora
                    //el que mas tiene es buff1, pasamos buff 1
                    //y asi con todos
                    updateStats();
                } else if ((buff1 == 3) || (buff2 == 3) || (buff3 == 3)) {
                    //lo mismo que en la anterior luismi
                    //si tenemos tres de la misma faccion, obtendremos una gran mejora   
                    updateStats();
                }
                break;
            case 5:
                //en realidad podria hacerse con un || pero por legibilidad los he separado en else if (los tres q puse de que sean tres de la misma faccion, si quieres los juntamos)
                //si tenemos tres de una faccion, y los otros dos son de diferentes facciones, obtenemos una mejora leve de las estadisticas
                if ((buff1 == 3) && ((buff2 < 2) && (buff3 < 2))) {
                    //calculariamos el maximo(de la faccion que mas haya) y lo pasariamos como parametro
                    updateStats();
                } else if ((buff2 == 3) && ((buff1 < 2) && (buff3 < 2))) {
                    //calculariamos el maximo(de la faccion que mas haya) y lo pasariamos como parametro
                    updateStats();
                } else if ((buff3 == 3) && ((buff2 < 2) && (buff1 < 2))) {
                    //calculariamos el maximo(de la faccion que mas haya) y lo pasariamos como parametro
                    updateStats();
                } 
                //si tenemos tres de una faccion y dos iguales de otra faccion una buena mejora, como la de cuando tenemos 2 de la misma faccion y el mapa es de 3
                else if ((buff1 == 3) && ((buff2 == 2) || (buff3 == 2))) {
                    //vale, aqui podriamos calcular el minimo, y pasar los otros dos, con un switch sencillo, en plan PSEUDOCODIGO
                    //var tipoMejora=(buff1,buff2,buff3).min
                    //switch tipoMejora
                    //el que menos tiene es buff1, pasamos buff 2 y 3
                    //y asi con todos
                    updateStats();
                } else if ((buff2 == 3) && ((buff1 == 2) || (buff3 == 2))) {
                    updateStats();
                }
                else if ((buff3 == 3) && ((buff1 == 2) || (buff2 == 2))) {
                    updateStats();
                }
                //si tenemos cuatro de una misma faccion obtendremos una gran mejora, como la de si tenemos tres de una faccion en el mapa de 3
                else if((buff1==4)||(buff2==4)||(buff3==4)){
                    //calculariamos el maximo(de la faccion que mas haya) y lo pasariamos como parametro
                    updateStats();
                }
                //si ya tenemos todos de la misma faccion consigues una mejora enorme
                else if((buff1==5)||(buff2==5)||(buff3==5)){
                    //calculariamos el maximo(de la faccion que mas haya) y lo pasariamos como parametro
                    updateStats();    
                }
                break;
            default:
                break;
        }

    }


}
