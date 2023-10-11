const input = 'ckczppom';
let md5 = require('md5');
let count = 1

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