const input = `sszojmmrrkwuftyv
isaljhemltsdzlum
fujcyucsrxgatisb
aaa`

const boxStrings = input.split('\n')

const boxes = [...boxStrings]

//Function to count the number of vowels in a given string
const countVoewls = (str) => {
  return (str.match(/[aeiou]/ig)||[]).length;
}

//Function to count the number of double letter
const doubleLetter = (str) => {
  const reg = /(\w)\1/
  return reg.test(str)
}

//Function to count the number of string that have ab|cd|pq|xy
const disallowedString = (str) =>{
  const reg = /(ab|cd|pq|xy)/
  return reg.test(str)
}


let totalNiceStrings = 0;
boxes.forEach((element) =>{
  if(countVoewls(element) >= 3 && doubleLetter(element) && !disallowedString(element)){
    totalNiceStrings++;
  }
})
console.log("The quantity of nice string is " +totalNiceStrings)




