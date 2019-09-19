
//En este js se realizaran varias pruebas de testeo con el fin de comprobar que ciertos metodos , constructores funcionan adecuadamente
$(document).ready( function () {

var testAbilitie = new Abilitie({ID: 1 , name: "PRUEBA" , baseActiveTurns: 3 , baseChargeTurns: 7 ,
 description: "Erase una vez una prueba", remainChargeTurns: 7 , isReady: false})

console.log(testAbilitie.isReady);

/*
setTimeout(function(){
    //do what you need here
    testAbilitie.nextTurn();
    console.log(testAbilitie.remainChargeTurns == 7);
}, 2000);
*/
for(var i = 0; i<8; i++){
	testAbilitie.nextTurn();
}

//testAbilitie.nextTurn();
console.log(testAbilitie.isReady)

})