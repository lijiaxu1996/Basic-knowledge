//判断给定的字符串是不是回文
const MyStack = require('./MyStack')
let isPaLindrome = wd => {
    const s = new MyStack();
    for (let i=0 ;i<wd.length; i++) {
        s.push(wd[i]);
    } 
    let right_wd = "";
    while(s.size()>0)
    right_wd+=s.pop();
    return (wd === right_wd)?true:false;
}
let res= 'aqtwewqa'
console.log(isPaLindrome(res))