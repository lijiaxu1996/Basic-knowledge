/*
输入
[2,4,3]

[5,6,4]
输出
[ 7, 0, 8 ]

342+465=807
逆序 708
*/
let transNum = num => {
    let str= num+"";
    let res= [];
    // console.log(typeof str);
    for(let i=0;i<str.length;i++)
    res.push(parseInt(str[i]));
    return res.reverse();
}
var addTwoNumbers = function(l1, l2) {
    //转化链表为两个数字
    let r1=l1.map(String).join('');
    let r2=l2.map(String).join('');
    let maxl = Math.max(r1.length, r2.length);
    r1=r1.padStart(maxl,0);
    r2=r2.padStart(maxl,0);
    // console.log(typeof r2)
    let n1=[],n2=[];
    for (let i=0; i<r1.length; i++) n1[r1.length-1-i]=r1[i]-'0';
    for (let j=0; j<r2.length; j++) n2[r2.length-1-j]=r2[j]-'0';
    // console.log(n1,n2)
    let pre=0,sum=[];
    let len1=n1.length;
    let len2=n2.length;
    let len=len1>len2?len1:len2;
    // console.log(len)

    for(let i=0;i<len;i++){
        sum[i]=n1[i]+n2[i]+pre/10;
        // console.log('sum is:'+sum[i])
        pre=sum[i];
    }
    while(pre>9){
        sum[len]=pre/10%10;
        len++;
        pre/=10;
    }

    for(let j=len-1;j>=0;j--){
      return  transNum((sum[j]%10)*Math.pow(10,len-1));
    }
     
};