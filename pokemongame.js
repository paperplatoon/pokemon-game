var pokemonInGame = [Bulbasaur, Charmander, Squirtle, Caterpie, Weedle, Pidgey, Ekans, Sandshrew, Oddish, Psyduck, Poliwag, Abra, Machop];

var Bulbasaur = {
	name: "Bulbasaur",
	id: 001,
	type: "grass",
	evolvesTo: Bulbasaur,
	moveList: [],
	baseLevel: 3,
	baseHP: 30,
	HPperLevel: 3
};

var Charmander = {
	name: "Charmander",
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
	name: "Squirtle",
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
	name: "Caterpie",
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
	name: "Weedle",
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
	name: "Pidgey",
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
	name: "Ekans",
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
	name: "Sandshrew",
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
	name: "Oddish",
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
	name: "Psyduck",
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
	name: "Poliwag",
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
	name: "Abra",
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
	name: "Machop",
	id: 066,
	type: "fighting",
	evolvesTo: Machop,
	moveList:[],
	baseLevel: 3,
	baseHP: 30,
	HPperLevel: 3,
	XPperLevel: 15
};

function createPokemon(pokemonName) {
		if (pokemonName) {
			var newPokemonIf = makeChosenPokemon(pokemonName);
			return newPokemonIf;
		} else {
			var pokemonArray = [Bulbasaur, Charmander, Squirtle, Caterpie, Weedle, Pidgey, Ekans, Sandshrew, Oddish, Psyduck, Poliwag, Abra, Machop];
			var a =  Math.floor(Math.random() * pokemonArray.length);
			var newPokemonElse = makeChosenPokemon(pokemonArray[a]);
			return newPokemonElse;		
	} 
}

function makeChosenPokemon(pokemonName) {
	var ranNum =  Math.floor(Math.random() * 5);
	var newPokemon = {
		name: pokemonName.name,
		id: pokemonName.id,
		type: pokemonName.type,
		evolvesTo: pokemonName.evolvesTo,
		level: pokemonName.baseLevel + ranNum,
		HP: pokemonName.baseHP + (ranNum * pokemonName.HPperLevel) + (Math.floor(Math.random() * 5))
	}
	return newPokemon;
};

var myPokemon = createPokemon();
for (i in myPokemon) {
	console.log(i, myPokemon[i])
};
