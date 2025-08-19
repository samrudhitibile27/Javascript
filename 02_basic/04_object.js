const tinerUser ={}

tinerUser.id = "123abc"
tinerUser.name = "sam"
tinerUser.isloggedIn = false

console.log(tinerUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "samrudhi",
      lastname: "Tibie"
    }
  }
};

// Accessing nested values:
console.log(regularUser.email);                        // some@gmail.com
console.log(regularUser.fullname.userfullname);        // { firstname: 'hitesh', lastname: 'choudhary' }
console.log(regularUser.fullname.userfullname.firstname); // hitesh
console.log(regularUser.fullname.userfullname.lastname);  // choudhary

const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"a", 4:"b"}

// const obj3 = {obj1,obj2}
//const obj3 = Object.assign(obj1, obj2)

const obj3={...obj1,...obj2}
console.log(obj3)

console.log(Object.keys(tinerUser))
console.log(Object.values(tinerUser))
console.log(Object.entries(tinerUser))

console.log(tinerUser.hasOwnProperty('isloggedIn'))