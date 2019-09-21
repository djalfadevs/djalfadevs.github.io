
//En este js se realizaran varias pruebas de testeo con el fin de comprobar que ciertos metodos , constructores funcionan adecuadamente
$(document).ready( function () {

var testAbilitie = new Abilitie({ID: 1 , name: "BUFFSTATS III" , baseActiveTurns: 3 , baseChargeTurns: 7 ,
 description: "Erase una vez una prueba", remainChargeTurns: 7 , isReady: false,effectFunction:effectFunctionList1})

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
	testAbilitie.nextTurn();
}

//testAbilitie.nextTurn();
//console.log(testAbilitie.isReady.toString())


//PRUEBA 2 CREAR HERO
var testHero = new Hero({ID: 1 , name: "PRUEBA" , baseAttack: 100, attack: 100, baseDefence: 100,
		defence: 100, baseHP: 100,HP: 100,base_crit_hit_chance: 0.20,
		crit_hit_chance: 0.20 ,description: "Erase una vez en Test",evasion: 50,baseEvasion: 50,
		abilities: [testAbilitie], image_url: "url" , activeAbilities: [] , aggro: 100 , faction: "1",
		rarity: 3, level: 20 , exp: 1000 , role: "useless only info provide by attack and defence"})

//console.log(testHero.toString());

testHero.abilities[0].useAbilitie(testHero);//Aplicar efecto

testHero.nextTurn();//Actualizacion de heroe
process.stdout.write(JSON.stringify(testHero) + '\n');
testHero.nextTurn();//Actualizacion de heroe 
console.dir(testHero);
testHero.nextTurn();//Actualizacion de heroe
console.dir(testHero);
testHero.nextTurn();//Actualizacion de heroe
console.dir(testHero);

//console.log(testHero);


})