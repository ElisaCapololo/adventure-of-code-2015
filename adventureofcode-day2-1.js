/**The split method is a built-in method in JavaScript that is used 
 * to split a string into an array of substrings based on a 
 * specified delimiter. In this case, the delimiter is 'x'. */

// How can I split the input into an array of strings?
// How can I split the array of strings into an array of numbers?
// How can I calculate the area of each side of the box?
// How can I calculate the area of the smallest side of the box?
// How can I calculate the total area of wrapping paper needed?
// How can I calculate the total amount of ribbon needed?
//Using the current code that I have, I am able to split the input into an array of strings.
//I am also able to split the array of strings into an array of numbers.
//I am also able to calculate the area of each side of the box.
//I am also able to calculate the area of the smallest side of the box.
//I am also able to calculate the total area of wrapping paper needed.
//I am also able to calculate the total amount of ribbon needed.
//Now I need to calculate for all the input that I received.


const input = `4x23x21
22x29x19
11x4x11
8x10x5`;

const boxes = input.split('\n')

function calculateWrappingPaper(boxes){
    let totalPaperNeeded = 0;

    for(let i = 0; i < boxes.length; i++){
        const arrayInput = boxes[i].split('x').map(Number);
        let l = arrayInput[0];
        let w = arrayInput[1];
        let h = arrayInput[2];
        let area = 2*l*w + 2*w*h + 2*h*l;
        let slack = Math.min(l*w, w*h, h*l);

        let result = area + slack;

        totalPaperNeeded += result;
        
    }
    
    return totalPaperNeeded;
}

console.log(calculateWrappingPaper(boxes))


