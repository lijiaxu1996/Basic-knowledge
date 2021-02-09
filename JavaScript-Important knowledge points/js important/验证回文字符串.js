/**
 * @param {string} s
 * @return {boolean}
 */
let isAlphanum=c =>{
    let re = /^[0-9a-zA-Z]*$/g
    return re.test(c)?true:false;
}
var isPalindrome = function(s) {
    /**
     * 1.首先把一个字符串转化为小写
     * 2.设置两个首位指针对字符前后进行扫描判断
     * 3.如果出现不一致返回flase,如果相同，且同时扫描到了
     * 字符串中间同一个字母，则返回true.
     */
    let newstr = s.toLocaleLowerCase();
    let l=0;
    let r=newstr.length-1;
    if(newstr.length==0) return true; //空字符串也是回文
    while(l<r){
        while(l<r && !isAlphanum(newstr[l])){
            l++;
        }
        while(l<r && !isAlphanum(newstr[r])){
            r--;
        }
        if(newstr[l]!=newstr[r]) return false;
        l++;
        r--;
    }
    return true;
    
};