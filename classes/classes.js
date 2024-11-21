class User {
	constructor(username, email, password) {
		this.username = username;
		this.email = email;
		this.password = password;
	}

	encryptPass() {
		return `${this.password}abc`;
	}

	changeName() {
		return `${this.username.toUpperCase()}`;
	}
}

const hello = new User("sunny", "sunny@gmail.com", 12345);

//console.log(chai);
console.log(hello.encryptPass());
console.log(hello.changeName());

// behind the scene.....

function User1(username, email, password) {
	this.username = username;
	this.email = email;
	this.password = password;
}

Object.prototype.changeName = function () {
	return `${this.username.toUpperCase()}`;
};

Object.prototype.encryptPass = function () {
	return `${this.password}abcde`;
};

const tea = new User1("Rink", "rinku@gmail.com", 2345);
console.log(tea.changeName());
console.log(tea.encryptPass());
