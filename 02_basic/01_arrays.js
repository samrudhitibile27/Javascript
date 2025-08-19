 // array

 const myarray =[1,2,3,4,5]
 console.log(myarray)
 const myarray1 = new Array(1,2,3,4,5)
 console.log(myarray1)

myarray.push(6)
console.log(myarray)
myarray.pop()
console.log(myarray)
 

myarray.unshift(9)
console.log(myarray)
myarray.shift()
console.log(myarray)


console.log(myarray.includes(4))
console.log(myarray.indexOf(4))


const newarray = myarray.join()
console.log(myarray)
console.log(newarray)

const myArr = [0, 1, 2, 3, 4, 5];

const myn1 = myArr.slice(1, 3);
console.log(myn1);        // [1, 2]
console.log("B ", myArr); // [0, 1, 2, 3, 4, 5] (original array remains unchanged)

const myn2 = myArr.splice(1, 3);
console.log(myn2);        // [1, 2, 3]
console.log("C ", myArr); // [0, 4, 5] (original array is modified)
