// Add your code here
const lyricsGenerator = (arr) => {
    let lyrics = "";
    let consecutiveOnes = 0;
    for (let i = 0; i< arr.length; i++) {
        if (arr[i]===0) {
            lyrics += "Boom "
            consecutiveOnes = 0;
        } else if (arr[i]===1) {
            lyrics += "Drop the base ";
            consecutiveOnes++;
        if (consecutiveOnes===3) {
            lyrics += "!!!Break the base!!! ";
            consecutiveOnes = 0;}
        }
    ;
}
return lyrics;
}

//Obs:
//The "if" statement inside the "else if" let's us add the "!!!Break the base!!!" in the case where there are 3 consecutive ones

// Don't change anything bellow this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))

