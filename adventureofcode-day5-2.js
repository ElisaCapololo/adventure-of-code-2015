const input = `sszojmmrrkwuftyv
isaljhemltsdzlum
fujcyucsrxgatisb
qiqqlmcgnhzparyg
oijbmduquhfactbc
`

const boxStrings = input.split('\n')

const boxes = [...boxStrings]

//Function to know the number of double letter
const pairDoubleLetter = (str) => {
  const reg = /(\w\w).*\1/
  return reg.test(str)
}

//Function to know the number of string that have ab|cd|pq|xy
const oneLetterRepeats = (str) =>{
  const reg = /(\w)(\w)\1/
  return reg.test(str)
}

let totalNiceStrings = 0;
boxes.forEach((element) =>{
  if(pairDoubleLetter(element) && oneLetterRepeats(element)){
    totalNiceStrings++;
  }
})
console.log("The quantity of nice string is " +totalNiceStrings)




