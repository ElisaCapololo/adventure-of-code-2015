const input = `(((())))()((((`

let calculateFloor = [...input]
let floor = 0;
calculateFloor.map((element, index) => {
    if (element === '(') {
        floor++;
    } else if (element === ')') {
        floor--;
    }
    console.log(`Character at position ${index}: ${element}, Current floor: ${floor}`);
    if (floor === -1) {
        console.log("Result for: Floor" + floor);
    }
})
