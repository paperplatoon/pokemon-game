var Bulbasaur = {
	species: "Bulbasaur",
	id: 001,
	type: "grass",
	evolvesTo: Bulbasaur,
	moveList: [],
	baseLevel: 3,
	baseHP: 30,
	HPperLevel: 3
};

var Charmander = {
	species: "Charmander",
	id: 004,
	type: "fire",
	evolvesTo: Charmander,
	moveList: [],
	baseLevel: 3,
	baseHP: 30,
	HPperLevel: 3,
	XPperLevel: 15
};

var Squirtle = {
	species: "Squirtle",
	id: 007,
	type: "water",
	evolvesTo: Squirtle,
	moveList:[],
	baseLevel: 3,
	baseHP: 30,
	HPperLevel: 3,
	XPperLevel: 15
};

var Caterpie = {
	species: "Caterpie",
	id: 010,
	type: "bug",
	evolvesTo: Caterpie,
	moveList:[],
	baseLevel: 3,
	baseHP: 25,
	HPperLevel: 2,
	XPperLevel: 12
};

var Weedle = {
	species: "Weedle",
	id: 013,
	type: "bug",
	evolvesTo: Weedle,
	moveList:[],
	baseLevel: 3,
	baseHP: 25,
	HPperLevel: 2,
	XPperLevel: 12
};

var Pidgey = {
	species: "Pidgey",
	id: 016,
	type: "flying",
	evolvesTo: Pidgey,
	moveList:[],
	baseLevel: 3,
	baseHP: 25,
	HPperLevel: 3,
	XPperLevel: 15
};

var Ekans = {
	species: "Ekans",
	id: 023,
	type: "poison",
	evolvesTo: Ekans,
	moveList:[],
	baseLevel: 3,
	baseHP: 30,
	HPperLevel: 3,
	XPperLevel: 15
};

var Sandshrew = {
	species: "Sandshrew",
	id: 027,
	type: "ground",
	evolvesTo: Sandshrew,
	moveList:[],
	baseLevel: 3,
	baseHP: 30,
	HPperLevel: 3,
	XPperLevel: 15
};

var Oddish = {
	species: "Oddish",
	id: 043,
	type: "grass",
	evolvesTo: Oddish,
	moveList:[],
	baseLevel: 3,
	baseHP: 25,
	HPperLevel: 3,
	XPperLevel: 14
};

var Psyduck = {
	species: "Psyduck",
	id: 054,
	type: "water",
	evolvesTo: Psyduck,
	moveList:[],
	baseLevel: 3,
	baseHP: 30,
	HPperLevel: 3,
	XPperLevel: 15
};

var Poliwag = {
	species: "Poliwag",
	id: 060,
	type: "water",
	evolvesTo: Poliwag,
	moveList:[],
	baseLevel: 3,
	baseHP: 25,
	HPperLevel: 3,
	XPperLevel: 14
};

var Abra = {
	species: "Abra",
	id: 063,
	type: "psychic",
	evolvesTo: Abra,
	moveList:[],
	baseLevel: 3,
	baseHP: 30,
	HPperLevel: 3,
	XPperLevel: 18
};

var Machop = {
	species: "Machop",
	id: 066,
	type: "fighting",
	evolvesTo: Machop,
	moveList:[],
	baseLevel: 3,
	baseHP: 30,
	HPperLevel: 3,
	XPperLevel: 15
};

var pokemonInGame = [Bulbasaur, Charmander, Squirtle, Caterpie, Weedle, Pidgey, Ekans, Sandshrew, Oddish, Psyduck, Poliwag, Abra, Machop];
var trainerCollection = [];

/* takes the name of a pokemon Object and returns a newly created low-level pokemon with randomized stats. 
If no pokemon object is provided, then the game returns a newly created random pokemon by picking from the 
pokemonInGame array */ 
function createPokemon(pokemonObject) {
		if (pokemonObject) {
			var newPokemonIf = makeChosenPokemon(pokemonObject);
			return newPokemonIf;
		} else {
			var a =  Math.floor(Math.random() * pokemonInGame.length);
			var newPokemonElse = makeChosenPokemon(pokemonInGame[a]);
			return newPokemonElse;		
	} 
}

//Takes a pokemon Object as input and returns a newly created low-level pokemon with randomized stats. The meat of createPokemon()
function makeChosenPokemon(pokemonObject) {
	var ranNum =  Math.floor(Math.random() * 5);
	var newPokemon = {
		species: pokemonObject.species,
		id: pokemonObject.id,
		type: pokemonObject.type,
		evolvesTo: pokemonObject.evolvesTo,
		level: pokemonObject.baseLevel + ranNum,
		HP: pokemonObject.baseHP + (ranNum * pokemonObject.HPperLevel) + (Math.floor(Math.random() * 5)),
		XPtoNextLevel: pokemonObject.XPperLevel * (ranNum + pokemonObject.baseLevel)
	}
	return newPokemon;
};

//Saves a randomly created pokemon, lets the user name it, then pushes it to trainerCollection.
//FUTURE UPDATE: Let the player see the Pokemon's name before deciding what to name it
function catchPokemon() {
	var myPokemon = createPokemon();
	var newName = prompt("Please enter a name for your new Pokemon");
/*	if (newName.length < 3) {
		var newName = input("Please enter a name that's at least 3 characters");
	} */
	myPokemon.givenName = String(newName);
	trainerCollection.push(myPokemon);
};

//Takes an array of pokemon and displays their values
function displayPokemon(pokemonObjects) {
	for (i = 0; i < pokemonObjects.length; i++) {
		var positionInArray = i + 1;
		console.log(positionInArray + "). " + pokemonObjects[i].species +"\n");
		console.log("name: " + pokemonObjects[i].givenName + "\n");
		console.log("level: " + pokemonObjects[i].level + "\n");
		console.log("XP to next level:" + pokemonObjects[i].XPtoNextLevel + "\n");

	}
}

catchPokemon();

displayPokemon(trainerCollection);

/*
//Displays the trainer's collection, and returns the pokemon of their choice
function chooseTrainerPokemon() {
	for (i = 0; i < trainerCollection.length; i++) {
		var pokemonNumber = i + 1

	}
}

//Takes an integer xpAMount and a pokemonObject - UNFINISHED
function gainXP(xpAmount, pokemonObject) {
	var tempTrainerCollection = trainerCollection.slice(0);
	for (i in tempTrainerCollection)
		if (pokemonObject === tempTrainerCollection[i].givenName) {
			chosenPokemonXPGain();
		} else {
			console.log("error: the pokemon wasn't found");
		}
}




catchPokemon();

displayPokemon(trainerCollection);


var myPokemon = createPokemon();
for (i in myPokemon) {
	console.log(i, myPokemon[i])
};

*/


