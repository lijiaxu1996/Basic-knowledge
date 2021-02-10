    /**
     * @param {string} s
     * @return {string[][]}
     */

    let partition = function(s) {
    //首先验证是不是回文
    let res = [];
    let tmp = [];
    function isPalindrome(s,begin,end){
        while (begin < end) {
            if (s.charAt(begin++) !== s.charAt(end--))
                return false;
        }
        return true;
    }
    //类似c++ vector实现需要利用JavaScript深拷贝
    //利用json实现
    let deepClone = arr => {
        let tmp = JSON.stringify(arr);
        let res = JSON.parse(tmp);
        return res;
    };
    //利用dfs开始对回文字符串进行遍历
    let dfs = (s,pos) => {
        //如果s本身就是一个回文串，从末尾进行分割，把整个字符串加入res
        if(pos === s.length){
            res.push(deepClone(tmp));
            return;
        }
        //如果s 从某个位置开始是回文串，需要进行遍历
        for(let i=pos;i<s.length;i++){
            if(isPalindrome(s,pos,i)){
                let newstr = s.substr(pos,i-pos+1);
                tmp.push(newstr);
                dfs(s,i+1);
                tmp.pop();
            }
        }
        if(s==="") return res;
    }
        dfs(s,0);
        return res;
    };