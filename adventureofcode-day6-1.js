// Adventure of Code Day 6

const input = `turn on 887,9 through 959,629
turn on 454,398 through 844,448
turn off 539,243 through 559,965`

const instructions = input.split('\n');
const pattern = /(\d+,\d+) through (\d+,\d+)/;

const row = 1000;
const column = 1000;

//const matrix = Array.from({length: row}, () => Array.from({length: column}, () => 0));

const matrix = Array.from({length: row}, () => Array(column).fill(0));

for(let instruction of instructions){
    const result = instruction.match(pattern);

    if(result){
        const startCoordinates = result[1].split(',').map(Number);
        const endCoordinates = result[2].split(',').map(Number);

        const [startRow, startCol] = startCoordinates;
        const [endRow, endCol] = endCoordinates;

        if(instruction.startsWith('turn on')){
            turnOn(matrix, startRow, startCol, endRow, endCol);
        }else if(instruction.startsWith('turn off')){
            turnOff(matrix, startRow, startCol, endRow, endCol);
        }else if(instruction.startsWith('toggle')){
            toggle(matrix, startRow, startCol, endRow, endCol);
        }
    }else{
        console.log('Invalid instruction in the input', instruction);
    }
}

const numberOfLitLights = quantityOfLitLights(matrix);
console.log("Number of lit lights:", numberOfLitLights);

//grid = instructions
function turnOn(matrix, startRow, startCol, endRow, endCol){
    for(let i=startRow; i<=endRow; i++){
        for(let j=startCol; j<=endCol; j++){
            matrix[i][j] = 1;
        }
    }
}

function turnOff(matrix, startRow, startCol, endRow, endCol){
    for(let i=startRow; i<=endRow; i++){
        for(let j=startCol; j<=endCol; j++){
            matrix[i][j] = 0;
        }
    }
}

function toggle(matrix, startRow, startCol, endRow, endCol){
    for(let i=startRow; i<=endRow; i++){
        for(let j=startCol; j<=endCol; j++){
            matrix[i][j] = 1 - matrix[i][j]
        }
    }
}

function quantityOfLitLights(matrix){
    let countLitLights = 0;
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[i].length; j++){
            countLitLights += matrix[i][j];
        }
    }
    return countLitLights;
}
