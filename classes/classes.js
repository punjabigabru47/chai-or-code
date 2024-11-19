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
