 const user ={
    username : "samrudhi",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this) ;
    }
    
 }
   user.welcomeMessage()
 user.username ="krish"
user.welcomeMessage()

function chai(){
    console.log(this)
}
chai()


//*************************** Arrow function  ********************** */

const addtwo =(num1,num2) => {
    return num1 + num2
}
console.log(addtwo(2,3))

// return emplicity

const addtfour =(num1,num2) => num1 + num2

console.log(addtfour(2,3))

const addfour =(num1,num2) => ({username:"samrudhi"})

console.log(addfour())