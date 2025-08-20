/*for (let i = 0; i < 10; i++) {
    const element = i;
    if (element== 5){
        console.log(" 5 is best")
    }
    console.log(element)
    
}

for (let i = 0; i < 10; i++) {
    console.log(`outer loop value ${i}`)
    for (let j = 0; j <3; j++) {
        console.log(`inner loop ${j} and outer loop ${j}`)
    
    }
}


for (let i = 1; i <= 10; i++) {
    console.log(`outer loop value ${i}`)
    for (let j = 1; j <= 10; j++) {
        console.log(i + ` * ` + j + ` = ` + i * j);
    
    }
}*/


for (let i = 0; i < 20 ; i++) {
    if(i == 5){
        console.log(`detect 5`)
        break
    }
    console.log(`value of i is ${i}`)
}
for (let i = 0; i < 20 ; i++) {
    if(i == 5){
        console.log(`detect 5`)
        continue
    }
    console.log(`value of i is ${i}`)
}