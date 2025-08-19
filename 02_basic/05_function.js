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



function calculateCardPrice(...num1){
   return num1
}

console.log(calculateCardPrice(200,300,400,4900))

const user ={
   username:"samrudhi",
   price:200
}

function handleObjct(anyObject){
   console.log(`UserName is ${anyObject.username} and price ${anyObject.price}`)
}

handleObjct(user)

const myNewArray =[200,300,400,500]

function returnObject (getArray){
   return getArray[2]
}

console.log(returnObject(myNewArray))