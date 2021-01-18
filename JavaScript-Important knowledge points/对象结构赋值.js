const person = {
    name:'jesse',
    age:25
}

for(const [x,y] of Object.entries(person)){
    console.log(x,y)
}