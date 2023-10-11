const input = 'ckczppom';
let md5 = require('md5');
let count = 1

while(true){
  const combinedInput = input + count;
  const hash = md5(combinedInput)
  const firstPositions = hash.slice(0, 5);
  
  if(firstPositions === '00000'){
    console.log("Found a match!");
    console.log(combinedInput)
    console.log(hash)
    break;
  }
  count++
}

console.log(count)










/*const input = 'ckczppom';
//let lowestPositiveNumber = 1;
let md5 = require('md5');
//let count = 1
//hash = md5(input+1048970)
//let firstPositions = hash.slice(0, 5);
//console.log(firstPositions)
//array = [...hash]

//console.log(hash)
//console.log(array)

while(true){
  const combinedInput = input + count;
  const hash = md5(combinedInput)
  const firstPositions = hash.slice(0, 6);
  
  if(firstPositions === '000000'){
    console.log("Found a match!");
    console.log(combinedInput)
    console.log(hash)
    break;
  }
  count++
}

console.log(count)


/*if (firstPositions === '00000') {
  console.log("The first five elements are all equal to 0.");
} else {
  console.log("The first five elements are not all equal to 0.");
}*/


//var md5 = require('md5');
//console.log(md5('abcdef3'));