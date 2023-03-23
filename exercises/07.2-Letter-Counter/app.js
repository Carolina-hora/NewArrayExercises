let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here
let parWithoutSpaces = par.replace(/\s/g, '');
let arraysOfLetters = parWithoutSpaces.split("")

for (let i=0; i< arraysOfLetters.length; i++){
    const letter = arraysOfLetters[i].toLowerCase();
    if (counts[letter] === undefined) counts[letter] = 1;
    else counts[letter] += 1
}
console.log(counts);