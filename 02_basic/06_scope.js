var c= 300
let a= 400

if (true){
    let a = 10
    const b =20 
    console.log("INNER",a)
}

console.log(a);


function one (){
    const username ="samrudhi"

    function two (){
        const website ="youtube"
        console.log(username)
    }
    two()
}
one()

if(true){
    const username ="samrudhi"
    if(true){
        const website ="  youtube"
        console.log(username + website)
    }
}

console.log(addone(5))
function addone(num){
    return num + 1
}



const addtwo = function(num){
    return num + 2
}
console.log(addtwo(5))