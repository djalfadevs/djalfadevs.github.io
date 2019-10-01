
//En este js se realizaran varias pruebas de testeo con el fin de comprobar que ciertos metodos , constructores funcionan adecuadamente
var testHero2;//DEBUG
$(document).ready( function () {

/*

var testAbilitie = new Abilitie({ID: 1 , name: "BUFFSTATS III" , baseActiveTurns: 3 , baseChargeTurns: 7 ,
 description: "Erase una vez una prueba", remainChargeTurns: 7 , isReady: true,effectFunction:effectFunctionList1})
*/
//console.log(testAbilitie.isReady);

/*
setTimeout(function(){
    //do what you need here
    testAbilitie.nextTurn();
    console.log(testAbilitie.remainChargeTurns == 7);
}, 2000);
*/

//Pone la habilidad lista
//for(var i = 0; i<8; i++){
	//testAbilitie.nextTurn();
//}

//testAbilitie.nextTurn();
//console.log(testAbilitie.isReady.toString())


//PRUEBA 2 CREAR HERO
/*
var testHero = new Hero({ID: 1 , name: "PRUEBA" , baseAttack: 100, attack: 100, baseDefence: 100,
		defence: 100, baseHP: 100,HP: 100,base_crit_hit_chance: 0.20,
		crit_hit_chance: 0.20 ,description: "Erase una vez en Test",evasion: 50,baseEvasion: 50,
		abilities: [testAbilitie], image_url: "url" , activeAbilities: [] , baseAggro:100, aggro: 100 , faction: "Azon",
		rarity: 3, level: 20 , exp: 1000 , role: "useless only info provide by attack and defence"})

//console.log(testHero.toString());

//testHero.abilities[0].useAbilitie(testHero);//Aplicar efecto

//console.log(testHero);
//testHero.nextTurn();//Actualizacion de heroe
//console.log(testHero);
//testHero.nextTurn();//Actualizacion de heroe 
//console.dir(testHero);
//testHero.nextTurn();//Actualizacion de heroe
//console.dir(testHero);
//testHero.nextTurn();//Actualizacion de heroe
//console.dir(testHero);

//console.log(testHero);

//PRUEBA 3 CREAR EQUIPO Y APLICAR SINERGIAS

//Segundo Heroe de prueba
var testHero2 = new Hero({ID: 2 , name: "ARINAMI" , baseAttack: 450, attack: 450, baseDefence: 300,
		defence: 300, baseHP: 1020,HP: 1020,base_crit_hit_chance: 0.20,
		crit_hit_chance: 0.20 ,description: "ARINAMI DE LAS PRUEBAS",evasion: 504,baseEvasion: 504,
		abilities: [testAbilitie], image_url: "url2" , activeAbilities: [] ,baseAggro:670, aggro: 670 , faction: "Ferten",
		rarity: 5, level: 34 , exp: 1120 , role: "Asassin"})

//Tercer =====
var testHero3 = new Hero({ID: 3 , name: "IRINA" , baseAttack: 700, attack: 700, baseDefence: 200,
		defence: 200, baseHP: 800,HP: 800,base_crit_hit_chance: 0.25,
		crit_hit_chance: 0.25 ,description: "ARINAMI DE LAS PRUEBAS",evasion: 650,baseEvasion: 650,
		abilities: [testAbilitie], image_url: "url3" , activeAbilities: [] ,baseAggro:400, aggro: 400 , faction: "Kwin",
		rarity: 5, level: 40 , exp: 1120 , role: "Asassin"})
//Cuarto =====
var testHero4 = new Hero({ID: 4 , name: "IRINA DE AZON" , baseAttack: 700, attack: 700, baseDefence: 200,
		defence: 200, baseHP: 800,HP: 800,base_crit_hit_chance: 0.25,
		crit_hit_chance: 0.25 ,description: "ARINAMI DE LAS PRUEBAS",evasion: 650,baseEvasion: 650,
		abilities: [testAbilitie], image_url: "url3" , activeAbilities: [] ,baseAggro:400, aggro: 400 , faction: "Azon",
		rarity: 5, level: 40 , exp: 1120 , role: "Support"})

//Creamos el equipo y añadimos los heroes
var testTeam = new Team({team:[],stats:{herosFaction:[0,0,0],aliveActors:0},restrictions:{maxHeros:4,maxHerosFaction:[2,1,1]},synergies:[]});
//console.log(testTeam);
testTeam.addMember(testHero);
//console.log(testTeam);
testTeam.addMember(testHero2);


//Calculo de sinergias
testTeam.calculateSynergies();

//EXTRA añadimos tambien un efecto para ver si se aplica sobre las sinergias y si al acabar volvemos al valor base + sinergia
//testTeam.team[0].abilities[0].useAbilitie(testTeam.team[1]);
//Limpiamos el efecto
//testTeam.team[1].nextTurn();
//testTeam.team[1].nextTurn();
//testTeam.team[1].nextTurn();
//testTeam.team[1].nextTurn();

//PRUEBA 4 COMPROBAMOS SI SIMULATION ES CAPAZ DE HALLAR QUE PERSONAJE DEBE ATACAR Y DEFENDERSE EN CADA MOMENTO

//4.1 COMPROBAR SI ES CAPAZ DE HALLAR EL PERSONAJE DE MAYOR AGGRO DE UN TEAM AL AÑADIR 

//Creamos un segundo equipo
var testTeam2 = new Team({team:[],stats:{herosFaction:[0,0,0],aliveActors:0},restrictions:{maxHeros:4,maxHerosFaction:[2,1,1]},synergies:[]});

//Añadimos Heroes
//console.log(testTeam2);
testTeam2.addMember(testHero3);
//console.log(testTeam2);
testTeam2.addMember(testHero4);

testTeam2.calculateSynergies();

//Creamos la simulacion
var testSimulation = new Simulation({allies:testTeam,enemys:testTeam2,turn:0,enemyAttacking:0,allieAttacking:0})

//Intentamos ver todo lo relacionado con la simulacion
console.log(testSimulation);

//4.2 COMPROBAR LO MISMO AL BORRAR
//testTeam2.removeMember({pos:0,actor:testHero3});

//4.3 Comprobar si se ordenan correctamente los heroes segun evasion
testTeam.updateAttackOrder({newRound:true});
testTeam2.updateAttackOrder({newRound:true});

testSimulation.simulate({newRound:true});
*/


//-----------------------------------------------------------------------------------------------//
//A PARTIR DE ESTE PUNTO LAS PRUEBAS ESTAN REALIZADAS USANDO SIMULACION / TEAM Y ALGUNOS ACTORES 
//DE FORMA CORRECTA COMO PARTE DEL JUEGO (GAME)
//-----------------------------------------------------------------------------------------------//

//PRUEBA 5 REALIZACION DE DIVERSAS PRUEBAS CON SIMULATION

//5.1 COMPROBAMOS QUE LA SIMULACION ESTA INICIALIZADA CORRECTAMENTE
console.log(game.global.simulation)

//5.2 AÑADIMOS JUGADORES 
var testAbilitie = new Abilitie({ID: 1 , name: "BUFFSTATS III" , baseActiveTurns: 3 , baseChargeTurns: 7 ,
 description: "Erase una vez una prueba", remainChargeTurns: 7 , isReady: false,effectFunction:effectFunctionList1})

var testHero = new Hero({ID: 1 , name: "PRUEBA" , baseAttack: 100, attack: 100, baseDefence: 100,
		defence: 100, baseHP: 100,HP: 100,base_crit_hit_chance: 0.20,
		crit_hit_chance: 0.20 ,description: "Erase una vez en Test",evasion: 50,baseEvasion: 50,
		abilities: [testAbilitie], image_url: "diana" , activeAbilities: [] , baseAggro:100, aggro: 100 , faction: "Azon",
		rarity: 3, level: 20 , exp: 1000 , role: "useless only info provide by attack and defence"})

var testHero2 = new Hero({ID: 2 , name: "ARINAMI" , baseAttack: 450, attack: 450, baseDefence: 300,
		defence: 300, baseHP: 1020,HP: 1020,base_crit_hit_chance: 0.20,
		crit_hit_chance: 0.20 ,description: "ARINAMI DE LAS PRUEBAS",evasion: 504,baseEvasion: 504,
		abilities: [testAbilitie], image_url: "gabriela" , activeAbilities: [] ,baseAggro:670, aggro: 670 , faction: "Ferten",
		rarity: 5, level: 34 , exp: 1120 , role: "Asassin"})

var testHero3 = new Hero({ID: 3 , name: "IRINA" , baseAttack: 700, attack: 700, baseDefence: 200,
		defence: 200, baseHP: 800,HP: 800,base_crit_hit_chance: 0.25,
		crit_hit_chance: 0.25 ,description: "ARINAMI DE LAS PRUEBAS",evasion: 650,baseEvasion: 650,
		abilities: [testAbilitie], image_url: "elaina" , activeAbilities: [] ,baseAggro:400, aggro: 400 , faction: "Kwin",
		rarity: 5, level: 40 , exp: 1120 , role: "Asassin"})

var testHero4 = new Hero({ID: 4 , name: "IRINA DE AZON" , baseAttack: 700, attack: 700, baseDefence: 200,
		defence: 200, baseHP: 800,HP: 800,base_crit_hit_chance: 0.25,
		crit_hit_chance: 0.25 ,description: "ARINAMI DE LAS PRUEBAS",evasion: 650,baseEvasion: 650,
		abilities: [testAbilitie], image_url: "ezna" , activeAbilities: [] ,baseAggro:4000, aggro: 4000 , faction: "Azon",
		rarity: 5, level: 40 , exp: 1120 , role: "Support"})

var testHero5 = new Hero({ID: 5 , name: "IRINA DE AZON" , baseAttack: 700, attack: 700, baseDefence: 200,
		defence: 200, baseHP: 800,HP: 800,base_crit_hit_chance: 0.25,
		crit_hit_chance: 0.25 ,description: "ARINAMI DE LAS PRUEBAS",evasion: 650,baseEvasion: 650,
		abilities: [testAbilitie], image_url: "ezna" , activeAbilities: [] ,baseAggro:4000, aggro: 4000 , faction: "Azon",
		rarity: 5, level: 40 , exp: 1120 , role: "Support"})

//Ponemos nuevas restricciones al equipo
game.global.simulation.allies.setRestrictions({maxHeros:4,maxHerosFaction:[3,3,3]});
game.global.simulation.enemys.setRestrictions({maxHeros:4,maxHerosFaction:[3,3,3]});


/*
//FALTA PROBAR PARA UN ACTOR TIPO MONSTER
    5.2.1 Se prueba a añadir en un equipo mas del numero de jugadores restringidos  -> resultado: FAVORABLE
    5.2.2 Se prueba a añadir en un equipo mas del numero de jugadores por faccion restringidos  -> resultado: FAVORABLE
    5.2.3 Se prueba a quitar un miembro del equipo y lo que conlleva (update de stats de team)  -> resultado: FAVORABLE
	5.2.4 Aplicar Sinergias a un equipo -> resultado: FAVORABLE
	5.2.5 Usar Habilidad y Aplicar Efecto -> resultado: FAVORABLE
	5.2.6 Comprobar que el efecto se ha desvanecido y los atributos han vuelto 
		  a la normalidad // Habilidad disponible de nuevo -> resultado: FAVORABLE
	5.2.7 Comprobar cambio de ordenacion por cambio en valores de evasion en el equipo -> resultado: FAVORABLE
	5.2.8 Comprobar cambio de MaxAggroActor al añadir / borrar heroe. -> resultado: FAVORABLE
	5.2.9 Comprobar cambio de MaxAggroActor si ha muerto el personaje de mas aggro. -> resultado: TEORICAMENTE FAVORABLE (EXPLICADO EN SIMULATION)
	5.2.10 Probamos el metodo simulate que deberia realizar un turno (ataque de un alido/enemigo determinado por el orden
	dado por evasion al enemigo con mas aggro / otra opcion esq realice una habilidad en ese turno)->resultado: 
	
	)
*/

game.global.simulation.allies.addMember(testHero);
game.global.simulation.allies.addMember(testHero4);
game.global.simulation.enemys.addMember(testHero3);
game.global.simulation.enemys.addMember(testHero2);
//game.global.simulation.enemys.addMember(testHero2);
game.global.simulation.allies.addMember(testHero5);
//game.global.simulation.allies.removeMember(testHero4);
game.global.simulation.allies.calculateSynergies();

//game.global.simulation.simulate();
/*
game.global.simulation.nextTurn();
game.global.simulation.nextTurn();
game.global.simulation.nextTurn();
game.global.simulation.allies.team[0].abilities[0].useAbilitie(testHero3);
game.global.simulation.nextTurn();
*/

})

