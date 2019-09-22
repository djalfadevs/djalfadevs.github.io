
//En este js se realizaran varias pruebas de testeo con el fin de comprobar que ciertos metodos , constructores funcionan adecuadamente
$(document).ready( function () {

var testAbilitie = new Abilitie({ID: 1 , name: "BUFFSTATS III" , baseActiveTurns: 3 , baseChargeTurns: 7 ,
 description: "Erase una vez una prueba", remainChargeTurns: 7 , isReady: true,effectFunction:effectFunctionList1})

//console.log(testAbilitie.isReady);

/*
setTimeout(function(){
    //do what you need here
    testAbilitie.nextTurn();
    console.log(testAbilitie.remainChargeTurns == 7);
}, 2000);
*/

//Pone la habilidad lista
for(var i = 0; i<8; i++){
	//testAbilitie.nextTurn();
}

//testAbilitie.nextTurn();
//console.log(testAbilitie.isReady.toString())


//PRUEBA 2 CREAR HERO
var testHero = new Hero({ID: 1 , name: "PRUEBA" , baseAttack: 100, attack: 100, baseDefence: 100,
		defence: 100, baseHP: 100,HP: 100,base_crit_hit_chance: 0.20,
		crit_hit_chance: 0.20 ,description: "Erase una vez en Test",evasion: 50,baseEvasion: 50,
		abilities: [testAbilitie], image_url: "url" , activeAbilities: [] , aggro: 100 , faction: "Azon",
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
		abilities: [testAbilitie], image_url: "url2" , activeAbilities: [] , aggro: 670 , faction: "Ferten",
		rarity: 5, level: 34 , exp: 1120 , role: "Asassin"})

//Tercer =====
var testHero3 = new Hero({ID: 3 , name: "IRINA" , baseAttack: 700, attack: 700, baseDefence: 200,
		defence: 200, baseHP: 800,HP: 800,base_crit_hit_chance: 0.25,
		crit_hit_chance: 0.25 ,description: "ARINAMI DE LAS PRUEBAS",evasion: 650,baseEvasion: 650,
		abilities: [testAbilitie], image_url: "url3" , activeAbilities: [] , aggro: 400 , faction: "Kwin",
		rarity: 5, level: 40 , exp: 1120 , role: "Asassin"})
//Cuarto =====
var testHero4 = new Hero({ID: 4 , name: "IRINA DE AZON" , baseAttack: 700, attack: 700, baseDefence: 200,
		defence: 200, baseHP: 800,HP: 800,base_crit_hit_chance: 0.25,
		crit_hit_chance: 0.25 ,description: "ARINAMI DE LAS PRUEBAS",evasion: 650,baseEvasion: 650,
		abilities: [testAbilitie], image_url: "url3" , activeAbilities: [] , aggro: 400 , faction: "Azon",
		rarity: 5, level: 40 , exp: 1120 , role: "Support"})

//Creamos el equipo y añadimos los heroes
var testTeam = new Team({team:[],stats:{herosFaction:[0,0,0]},restrictions:{maxHeros:4,maxHerosFaction:[2,1,1]},synergies:[]});
console.log(testTeam);
testTeam.addMember(testHero);
console.log(testTeam);
testTeam.addMember(testHero2);
console.log(testTeam);
testTeam.addMember(testHero3);
console.log(testTeam);
testTeam.addMember(testHero4);

//Calculo de sinergias
testTeam.calculateSynergies();

//EXTRA añadimos tambien un efecto para ver si se aplica sobre las sinergias y si al acabar volvemos al valor base + sinergia
testTeam.team[0].abilities[0].useAbilitie(testTeam.team[1]);
//Limpiamos el efecto
testTeam.team[1].nextTurn();
testTeam.team[1].nextTurn();
testTeam.team[1].nextTurn();
testTeam.team[1].nextTurn();

})

