//学习来自 https://github.com/ljianshu/Blog/issues/4
/**
 *  JavaScript主要分为引用类型和数值类型
 * 引用类型： object function array
 * 数值类型:Undefined、Null、Boolean、Number、String、Symbol(独一无二的值)
 * */ 
//1.基本数据存在不变性
// var name = 'Jesse';
// name.toUpperCase();
// console.log(name) //name不会发生改变
//2.简单数据类型直接放在栈内存当中,对于这些频繁使用的数据要放到栈内存当中
//3.关于== 和 ===区别和联系
//3.1 == 仅仅是对数值进行比较
// var num = 0;
// var flag = false;
// console.log(num ==flag); //返回true
//3.2 ===也包含数值类型比较
// console.log(num === flag) //返回false
//4 引用数值类型的值是可变的
// var obj = {age:23};
// console.log(obj.age);
// obj.age=24;
// console.log(obj.age);
//5.引用数据类型 对象本身保存在堆内存当中，但是指向对象的指针保存在栈内存当中
//引用类型的比较
//引用类型的值如果赋值给另外一个变量，实际上就是两个变量的指针都同时指向了堆内存
//如果一个变量的值发生改变，那么另外一个变量的值也会发生改变
// var obj = {age:23};
// var b =obj;
// console.log(obj.age);
// console.log(b.age);
// b.age=25;
// console.log(obj.age);
// console.log(b.age);
//如果obj并不是保存对象本身的引用，那么obj改变之后b并不会受到影响

// var obj = {age:23};
// var b =obj;
// console.log(obj.age);
// console.log(b.age);
// obj = {}
// b.age=25;
// console.log(obj);
// console.log(b.age);

//6.数据类型的检测
// console.log(typeof Symbol(1));
// console.log(typeof '');
// console.log(typeof 23);
// console.log(typeof true)
// console.log(typeof undefined);//undefined
// console.log(typeof new Function());
// console.log(typeof []); //object
// console.log(typeof {}); //object
// console.log(typeof null);//object
// console.log(typeof new Date()); //object
// console.log(typeof NAN);//undefined

// console.log([] instanceof Array);
// console.log({} instanceof Object);
// console.log(new Date() instanceof Date);

//数组判定可以使用es6里面的isArray()
// console.log(Array.isArray([])); //true
//instanceof 不好的地方:
//实例创造出来的才可以使用
console.log(1 instanceof Number)//false
console.log(new Number(1) instanceof Number)//true
//只有在当前实例创造出来的类上面才存在true,类的继承出来的未必正确
var arr = [1, 2, 3];
console.log(arr instanceof Array) // true
console.log(arr instanceof Object);  // true
function fn(){}
console.log(fn instanceof Function)// true
console.log(fn instanceof Object)// true
// 不能检测null 和 undefined
//7.constructor
// 但constructor检测 Object与instanceof不一样，还可以处理基本数据类型的检测
// null 和 undefined 是无效的对象，因此是不会有 constructor 存在的，这两种类型的数据需要通过其他方式来判断
// 函数的 constructor 是不稳定的，这个主要体现在把类的原型进行重写，在重写的过程中很有可能出现把之前的constructor给覆盖了，这样检测出来的结果就是不准确的
//8Object.prototype.toString.call() 最准确最常用的方式。首先获取Object原型上的toString方法，让方法执行，让toString方法中的this指向第一个参数的值。
/**
 * 本意是转换为字符串，但是某些toString方法不仅仅是转换为字符串
对于Number、String，Boolean，Array，RegExp、Date、Function原型上的toString方法都是把当前的数据类型转换为字符串的类型（它们的作用仅仅是用来转换为字符串的）
Object上的toString并不是用来转换为字符串的。
 */
Object.prototype.toString.call('') ;   // [object String]
Object.prototype.toString.call(1) ;    // [object Number]
Object.prototype.toString.call(true) ; // [object Boolean]
Object.prototype.toString.call(undefined) ; // [object Undefined]
Object.prototype.toString.call(null) ; // [object Null]
Object.prototype.toString.call(new Function()) ; // [object Function]
Object.prototype.toString.call(new Date()) ; // [object Date]
Object.prototype.toString.call([]) ; // [object Array]
Object.prototype.toString.call(new RegExp()) ; // [object RegExp]
Object.prototype.toString.call(new Error()) ; // [object Error]
Object.prototype.toString.call(document) ; // [object HTMLDocument]
Object.prototype.toString.call(window) ; //[object global] window是全局对象global的引用



