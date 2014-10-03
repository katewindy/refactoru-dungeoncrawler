$(document).on('ready', function() {
  
  $(document).on('click', '.title', function(){
  	$('.title').hide();
  	$('.bedroom').show();
  	var temptext = $('<p>').text('Madotsuko is going to bed.');
  	$('.gametext').append(temptext);
  });
});

var World = function (player, rooms, items, monsters){
	this.name = 'Ooo';
	this.player = player;
	this.rooms = rooms;
	this.items = items;
	this.monsters = monsters;

};

// Player Constructor
var Player = function(name, age, gender){
	this.name = 'Madotsuko';
	this.health = 100;
	// this.armor = 10;
	this.strength = 10;
	// this.psi = 10;

};
//Room constructor
var Room = function (name) {
	this.name = name;
	console.log(this.name);
	// this.contents = type;
	// console.log(this.contents);
	// this.entrydoor = entrydoor;
	// this.exits = [];	
};

// Empty room Constructor
var ItemRoom = function (name, entrydoor, exits) {
	Room.call(this, name);
	this.contents = 'Empty';
	this.entrydoor = entrydoor;
	this.exits = exits;

	EmptyRoom.prototype = new Room();
	EmptyRoom.prototype.constructor = EmptyRoom;
};

// Item room Constructor
var ItemRoom = function (name, entrydoor, exits) {
	Room.call(this, name);
	this.contents = 'Item';
	this.entrydoor = entrydoor;
	this.exits = exits;

	ItemRoom.prototype = new Room();
	ItemRoom.prototype.constructor = ItemRoom;
};

// Monster room Constructor
var MonsterRoom = function (name, entrydoor, exits) {
	Room.call(this, name);
	this.contents = 'Monster';
	this.entrydoor = entrydoor;
	this.exits = exits;

	MonsterRoom.prototype = new Room();
	MonsterRoom.prototype.constructor = MonsterRoom;
};

//Main Monster Class
var Monster = function (name){
	this.name = name;
};

//




// Main Item Class
var Item = function (name) {
	this.name = name;

	Item.prototype.printName = function() {
		console.log('You got a ' + this.name + '.');
	};

};

// Weapon class (subclass of item)
var Weapon = function(name, damage, description) {
	Item.call(this, name);
	this.damage = damage;
	this.description = description;

	Weapon.prototype = new Item();
	Weapon.prototype.constructor = Weapon;
};

//create a crowbar
var crowbar = function () {

};

// Consumable class (subclass of item)
var Consumable = function(name, type) {
	Item.call(this, name);
	this.itemtype = 'Consumable';

	Consumable.prototype = new Item();
	Consumable.prototype.constructor = Consumable;
};

// Potion Class Constructor 
var Potion = function (name, type, healtheffect, description){
	Consumable.call(this, name, type);
	this.healtheffect = healtheffect;
	this.description = description;

	Potion.prototype = new Consumable();
	Potion.prototype.constructor = Potion;
};

//random generators for generating various things what need to be random
var getRandom = function () {
	return Math.random();
};

var getRandomInt = function(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

// Room.prototype.exitGenerator = function (entrydoor){
// 	var entry = entrydoor;
// 	var exits = {};
// 	var directions = ['North', 'West', 'South', 'East'];
// 	for (var i = 0; i < directions.length; i++){
// 		var tempkey = directions[i];
// 		var temprandom = getRandom();
// 		var tempval = true;
// 		if (temprandom < 0.5  && tempkey !== entry){
// 			tempval = false;
// 		};
// 		exits[tempkey] = tempval;
// 	};
// 	this[exits] = exits;
// 	console.log(this.exits);
// 	return this.exits;
// };