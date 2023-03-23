let allNames = ["Romario","Boby","Roosevelt","Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

//your code here
const resultingNames = allNames.filter(function(names){
    return names.toUpperCase().indexOf('R') === 0;
})


console.log(resultingNames);