 //object Literals

 const jsUser={
    "name": "samrudhi",
    age : 21,
    Location : "kohapur",
    email : "samrudhi@gmail.com",
    isloggedIn : false,
    lastloginDays : ["monday","sunday"]
 }

 console.log(jsUser.email)
 console.log(jsUser["email"])
 console.log(jsUser["name"])

 jsUser.age =23
 console.log(jsUser.age)

 jsUser.greeting=function(){
    console.log("hello js user")
 }

 console.log(jsUser.greeting())

  jsUser.greetingOne = function(){
    console.log(`hello js user ${this.email}`)
 }

 console.log(jsUser.greetingOne())