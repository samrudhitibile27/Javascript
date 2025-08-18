 // Primitive
 /* 7 types :
 string , Number , Boolearn , Null , Undefined , Symbol  BigInt */


 const a =12;
 const b = 10.2;
 let id = null;
 let email ;

 const username = Symbol("123");
    const anothername = Symbol("123");
 

    console.log(a)
    console.log(b)
    console.log(id)
    console.log(username==anothername)


 // Reference type (Non Primitive)
 /* Array , Objects , Function */

 const  city =["klhapur","pune","mumbai"]
 console.log(city)

 let myobj={
   Name : "sam",
   age : 21
 }
 console.log(myobj)


 const myfunction =function(){
   console.log("this is  a function ")
 }

 console.log(typeof myfunction)

 //*********************** Memory *************************************************

 //  stack (Primitive)   , heap (Non Primitive )

   let information = "samrudhi"

   let information1=information
  
   information1 = "krish"
    console.log(information)
   console.log(information1)

   let info = {
      email : "samrudhi@gmail.com",
      upi : "abs#86666bhy"
   }
   
   
   let info1=info
   info1.email="user@gmail.com"
   console.log(info)
   console.log(info1)