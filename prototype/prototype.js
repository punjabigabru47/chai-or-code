let myHeros = ["thor", "Spiderman"];

let heroPower = {
	thor: "stormbreaker",
	spiderman: "sling",

	getSpiderPower: function () {
		console.log(`spidy power is ${this.spiderman}`);
	},
};

// if we inject property in object, then its available for array, string but if we inject
// method direct in prototype of array then its not available for object.

Object.prototype.sunny = function () {
	console.log(`sunny is always present in all objects`);
};

myHeros.sunny();
