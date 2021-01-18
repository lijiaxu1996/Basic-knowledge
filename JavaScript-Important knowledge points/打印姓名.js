function Person(firstname,lastname){
    this.firstname=firstname;
    this.lastname=lastname;
}
let x=new Person('1','2');
console.log(x);
let y=Person('1','2');
console.log(y) //返回undefined