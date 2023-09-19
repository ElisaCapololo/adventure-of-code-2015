const input = `2x3x4`

const boxes = input.split('\n')

function calculateRibbon(boxes){
    let totalRibbonNeeded = 0;

    for(let i = 0; i < boxes.length; i++){
        const arrayInput = boxes[i].split('x').map(Number);
        let l = arrayInput[0];
        let w = arrayInput[1];
        let h = arrayInput[2];
        let bow = l*w*h;
        let shortestDistance = 2*l + 2*w + 2*h - 2*Math.max(l, w, h);
        let result = bow + shortestDistance;

        totalRibbonNeeded += result;
        
    }
    
    return totalRibbonNeeded;
}

console.log(calculateRibbon(boxes))
