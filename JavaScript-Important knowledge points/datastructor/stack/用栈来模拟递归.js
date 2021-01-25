//用栈来模拟递归
const MyStack = require('./MyStack')
let fact = n => {
    let s = new MyStack()
    while(n>1) {
        s.push(n--);
    }
    let res =1;
    while(s.size()>0){
        res *= s.pop();
    }
    return res;
}
console.log(fact(6)) //6*5*4*3*2*1 = 720