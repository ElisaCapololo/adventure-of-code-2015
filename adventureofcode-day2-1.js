

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


