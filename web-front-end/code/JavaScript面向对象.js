//我们只需要关注对象的行为，而不需要去关注对象本身
let dog = {
    dogSaying: () => {
        console.log('汪汪汪')
    }
};
let cat = {
    dogSaying: () => {
        console.log('汪汪汪')
    }
}
let family = [];

let joinFamily = animal => {
    if(animal && typeof animal.dogSaying === 'function'){
        family.push(animal);
        console.log('欢迎加入汪星人家庭')
        console.log(`汪星人家庭已经有 ${family.length}成员`)
    }
}
joinFamily(dog);
joinFamily(cat);