function SetUsername(username) {
	this.username = username;
}

function createUsername(username, email, password) {
	super(username);
	this.email = email;
	this.password = password;
	SetUsername.call(this, username); // we cant access username from above function so we need to
	// hold the reference with .call method and this would be first parameter.

	// but now we can use super() method instead of .call
}

const chai = new createUsername("chai", "chai@gmail.com", 1234);
console.log(chai);

// example of super...

class hello {
	constructor(username) {
		this.username = username;
	}

	logMe() {
		console.log(`username is ${this.username}`);
	}
}

class hello2 extends hello {
	constructor(username, email, password) {
		super(username);
		this.email = email;
		this.password = password;
	}
}
