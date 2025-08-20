/* const arr = [1,2,3,4,5]
 
 for (const i of arr) {
    console.log(i)
    
 }

 const greeting = "welcome"
 for (const greet of greeting) {
    console.log(`EACH CHARACTER IN - " ${greet} " `)
    
 }


 //Map
 const map = new Map()
 map.set('1',"a")
 map.set('2',"c")
 map.set('3',"d")
 map.set('4',"s")

 for (const [key,value] of map) {
    console.log(key,`:`,value);
    
 }
//console.log(map)


//oject*/
const myobject = {
    cpp: "c++",
    py: "python",
    rb: "ruby"
};

for (const key in myobject) {
    console.log(`${key} :- ${myobject[key]}`);
}


//for each

const coding = ["java", "c++", "python", "ML", "AI"];

coding.forEach(function (val) {
    console.log(val);
});

coding.forEach( (item,index,arr)=>{
    console.log(item,index,arr)
})


const  mycoding =[
    {
        name : "samrudhi",
        Age :"21"
    },
    {
        name : "chitali",
        age:22
    },
    {
        name : "purva",
        age:23
    }
]

mycoding.forEach((item)=>{
    console.log(item.name)
})