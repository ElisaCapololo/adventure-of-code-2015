const input = "(()(()()("

let calculateFloor = [...input]
let floor = 0;

calculateFloor.map((element) =>{
   if (element === '(') {
      floor++;
    } else if (element === ')') {
      floor--;
    }
})
console.log("Result for: Floor"+ floor);
