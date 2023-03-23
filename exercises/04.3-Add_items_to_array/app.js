let arr = [4,5,734,43,45];

// Your code here, use the push function and the random function.


arr.splice(1,0, Math.floor(Math.random()*100), Math.floor(Math.random()*10))
console.log(arr);