let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here
const wikiWoko = (number) => {
    if (number ===1) return "wiki"
    else if (number === 0) return "woko"
}

console.log(theBools.map(wikiWoko))