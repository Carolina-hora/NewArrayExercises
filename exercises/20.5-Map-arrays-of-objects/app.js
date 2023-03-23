let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];

let simplifier = function(person){
	const currentDate = new Date(); // get the current date
	
	person.diffInMs = currentDate - person.birthDate; // calculate the difference between the two dates, in milliseconds
	person.age = Math.floor(person.diffInMs / (1000 * 60 * 60 * 24 * 365.25)); // converts the difference to years
	
	// If the age of each person was in a single array, not tied in an object, we need to declare the variables with a "const" or a "let" instead:
	// const diffInMs = currentDate - birthDate;
	// const age = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365.25));

	//person.age = person.birthDate.getDate() It doesn't compare the current month with the birthday month
	return `Hello, my name is ${person.name} and I am ${person.age} years old` ;
};

console.log(people.map(simplifier));