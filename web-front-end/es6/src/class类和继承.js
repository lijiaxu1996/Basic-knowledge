 //es5里面
 //父类
  function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.say1=function(){
    console.log(this.name);
    console.log(this.age);
}
//子类
function Student(name,age,stu_id){
    this.stu_id=stu_id;
    Person.call(this,name,age);
}
//Student原型指向对方的原型
Student.prototype=new Person();
//同时得保证自己也是一个构造函数的原型
Student.prototype.constructor=Student;
Student.prototype.say2=function(){
   console.log(this.stu_id);
}
var stu=new Student('xuhacker',18,36);
stu.say1();
stu.say2();
es6里面
es6里面的面向对象
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    say(){
        console.log(this.name);
        console.log(this.age);
    }
}
let p=new Person('xuhacker',18);
p.say();
//es6 面向对象继承
class Student extends Person{
    constructor(name,age,stu_id){
        super(name,age);
        this.stu_id=stu_id;
    }
    say2(){
        console.log(this.stu_id)
    }
}
let stu=new Student('xuhacker',18,11);
stu.say()
stu.say2()


