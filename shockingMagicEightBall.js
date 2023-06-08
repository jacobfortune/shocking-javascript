// Replace INSERT USERNAME HERE with preffered name, replace INSERT QUESRION here with your question to the 'wise one' 
//Run it somewhere like https://www.typescriptlang.org/play?#code/MYewdgzgLgBArhApgJwHIEMC2iYF4YDkAkqgMoCiASgCowCqFlqAggLLkwASV5BAUAEsAZjAAUCFBmwBKGAG8+MGKEggANogB0akAHNRAA06I1OmABI5EtFkQBfAIQHpfOzBNJ5i5eAjqtOvoExqYgDgQudnwq0PBIyACKcIjQAuB4hCSMtAl05KTURADyqFw8BDAA1IQA-ASaUCAAMiAA7igAwuhIotIA3NG+-tp6hgCaIHAw3QDWiAAmFlbxSSlQaWB2ADRL1lL2zoOQsMjoYPMgmKhwmABGKBms6FAAFppCOiDIok+vmqfnS69GAAKhgAA5+kdYogBLoXlAAELoUwZAgATn4EFaAigwBeYgBFyuN3uyFkCmA3RwAEYAFwwaHDQKiYiwAQQZQoKDoARgcIuW7IRDoGYDKmeABMdKZGhGQSI7M580QwAEKvmagAnjA-AK+EKRWLotSYABmGUxZmjAhdMBgECwAAOwvmAmAsAdrU0EQNwtF4tNABZLUM5SyCAAREAwB2wUBwMCwdK4n2C-3GiU4ACsodU4ZtRTgUE+M1jjt1Md0IBA831hoDJs8ADY834C0FSHDIDAnSA+bBGjAtSk036jYHPAB2NvWoLUF44WHwpEotQwFWITCc3GV+sZyc4cGzjusgDiAgAbjhd+gYFBkFqxw3jSqhOg4GooAzZQEbZRECdbUYBedAAC8dQfHV0F0XkwGfA9XD4IA 
const userName = 'INSERT USERNAME HERE'
if (userName) {
  console.log(`Hello ${userName}!`)
} else {
  console.log('Hello!')
}
const userQuestion = 'INSERT QUESTION HERE'.toLowerCase() + '?'.toLowerCase();
console.log(`You asked ${userQuestion}, ${userName}`)
const randomNumber = Math.floor(Math.random() * 8);
const eightBall = '9'
switch (randomNumber) {
case 1: 
console.log('It is certain!')
break;
case 2:
console.log('It is decidedly so!')
break;
case 3:
console.log('Cannot predict now.')
break;
case 4:
console.log('Do not count on it.')
break;
case 5:
console.log('Outlook not so good!')
break;
case 6:
console.log('Signs point to yes.')
break;
case 7:
console.log('The eightBall deems it so!')
break;
case 8:
console.log('Give it a try.')
break;
default: 
console.log('Reply hazy try again.')
break;
}
