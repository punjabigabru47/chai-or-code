function multiFive(num) {
	return num * 5;
}

multiFive.power = 2;

console.log(multiFive(5));
console.log(multiFive.power);
console.log(multiFive.prototype);

class createUser {
	constructor(username, score) {
		this.username = username;
		this.score = score;
	}
	increment() {
		this.score++;
	}
	printMe() {
		console.log(`score is ${this.score}`);
	}
}

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

chai.printMe();
