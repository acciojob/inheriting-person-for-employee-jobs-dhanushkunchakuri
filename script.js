// complete this js code
function Person(name, age) {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	greet(){
		return `Hello, my name is ${this.name}, I am ${this.age} years old.`;
	}
}

function Employee(name, age, jobTitle) extends Person{
	constructor(name,age,jobTitle){
		super(name,age);
		this.jobTitle=jobTitle;
	}
	jobGreet(){
		return `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${jobTitle}.`
	}
}


// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
