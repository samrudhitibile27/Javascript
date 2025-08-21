const mynum =[1, 2 , 3]

const total = mynum.reduce((acc,currval) =>{
    console.log(`acc: ${acc} and current :${currval}`);
    return acc + currval
},0)
console.log(total)

const payshoppingcaed =[
    {
        itemname : "js course",
        price : 999
    },
    {
        itemname : "js course",
        price : 6999
    },
    {
        itemname : "java course",
        price : 5999
    },
    {
        itemname : "python course",
        price : 4999
    },
    {
        itemname : "php course",
        price : 12999
    },
]

const alltotal = payshoppingcaed.reduce((acc, item) => acc + item.price,0)

console.log(alltotal)