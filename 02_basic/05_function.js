 function myname (){
    console.log("S")
    console.log("A")
    console.log("M")
    console.log("R")
    console.log("U")
    console.log("D")
    console.log("H")
    console.log("I")
 }

 myname()

/* function addtwoNo (number1,number2){
    console.log(number1+number2)
 }

 addtwoNo(2,4)

*/

  function addtwoNo (number1,number2){
    //let result = number1 + number2
    return number1 + number2
 }

const result = addtwoNo(2,4)
console.log(result)

function lginUserMessage(username){
   if(username === undefined){
      console.log("Please enter a username")
      return
   }
   return `${username} just logged in`
}
console.log(lginUserMessage("samrudhi"))