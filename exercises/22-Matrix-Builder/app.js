// Code goes here
const matrixBuilder = (number) => {
    
    const matrix = [];
    for (let i=0; i<number; i++) {
        const row = [] 
        for (let j=0; j<number; j++){
            row.push(Math.round(Math.random()))
           
        }
       matrix.push(row) 
    }
    return matrix
}

//Obs:
//The outer loop iterates "number" times to create "number" rows, and the inner loop also iterates "number" times to create "number" cells within each row.
//After populating a row, the function pushes the row onto the matrix array.
//Finally, the function returns the completed matrix array.

// do not change anything from this line down
console.log(matrixBuilder(5))