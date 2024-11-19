function SetUsername(username) {
	this.username = username;
}

function createUsername(username, email, password) {
	this.email = email;
	this.password = password;
	SetUsername.call(this, username); // we cant access username from above function so we need to
	// hold the reference with .call method and this would be first parameter.
}

const chai = new createUsername("chai", "chai@gmail.com", 1234);
console.log(chai);
