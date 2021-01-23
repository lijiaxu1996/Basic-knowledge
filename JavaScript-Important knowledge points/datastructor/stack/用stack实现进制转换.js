const MyStack = require('./MyStack')

let transBase = (number,base) => {
    //实例化这个类
    let s = new MyStack();

    while(number > 0){
        s.push(number % base);
        number = Math.floor(number /= base);
    }
    let res = '';
    while(s.size() > 0){
        res += s.pop();
    }

    return res;
}

//test
let number=8,base=2;
let ans = transBase(number ,base);
console.log(ans);//1000