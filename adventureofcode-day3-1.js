
const input = `^>v<`

houseReceiveAtLeastOnepresent = [...input]
console.log(houseReceiveAtLeastOnepresent)
let house = 0;
houseReceiveAtLeastOnepresent.map((element) =>{
    if(element === '^'){
        house += 1;
    }
    else if(element === '>'){
        house += 1;
    }
    else if(element === 'v'){
        house += 1;
    }
    else if(element === '<'){
        house += 1;
    }
}
)
console.log(house);

/*for(let i = 0; i < input.length; i++){
    for(let j = 0; j < input.length; j++){
        let arrayInput = input.split('');
        if(arrayInput[i] === '^'){
            startLocation += 1;
        }
        else if(arrayInput[i] === '>'){
            startLocation += 1;
        }
        else if(arrayInput[i] === 'v'){
            startLocation += 1;
        }
        else if(arrayInput[i] === '<'){
            startLocation += 1;
        }
    }
}

console.log(startLocation);

*/
    


