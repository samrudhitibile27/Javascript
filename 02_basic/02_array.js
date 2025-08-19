 const flower =["rose","lili","jui"]
 const city =["kolhapur","pune","mumbai"]

/* flower.push(city)       // array inside array
 console.log(flower)

flower.concat(city)       //array inside array
console.log(flower)*/

const newarray1 = flower.concat(city);  // merging arrays
console.log(newarray1);

const newarray2 = [...flower,...city]
console.log(newarray2)


const newaaray3 = [1,2,3,[4,5],6,7,[5,9,[3,4,5]]]
const real_array = newaaray3.flat(Infinity)
console.log(real_array)

console.log(Array.from("samrudhi"))

let a = 200
let b = 300
let c = 400

console.log(Array.of(a,b,c))