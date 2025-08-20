 const email =""

 if(email){
    console.log("Got the  Email")
 }else{
    console.log("Don't Have User Email")
 }

 //false  value
// false , 0,-0, BigInt,On,"",Nill,Underfined , NaN

// trutly value
//"0",'false," ",[],{},function(){}

if(email.length===0){
    console.log("array found")
}

const emptyobj ={}

if(Object.keys(emptyobj).length===0){
    console.log("object is empy")
}

//nillish coalescing Opreator ?? : null, undefine

const val1 = 10 ?? 5
const val2 = null ?? 5
const val3 = undefined ?? 10

console.log(val1)
console.log(val2)
console.log(val3)

//Ternary Opreation
// condition ? true :false

const ice =100
ice <=80 ? console.log("buy"):console.log("Not buy")