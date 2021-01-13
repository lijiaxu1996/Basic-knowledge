let bubbleSortArray=[];
let bubbleSortNum;
function bubbleSort(bubbleSortArray,bubbleSortNum){
    let sw=0;//表示冒泡排序交换的次数
    let flag=true;//flag表示的是稳定性，保证交换前后次序不变
    for(let i=0;flag;i++){
        //注意这里面i表示未排序部分开头元素指针，j表示未排序部分结尾元素指针。从后向前看看相邻元素能不能交换
        flag=false;
        for(let j=bubbleSortNum-1;j>=i+1;j--){
            if(bubbleSortArray[j]<bubbleSortArray[j-1]){
                //swap(bubbleSortArray[j],bubbleSortArray[j-1]);
                let tmp=bubbleSortArray[j-1];
                bubbleSortArray[j-1]=bubbleSortArray[j];
                bubbleSortArray[j]=tmp;
                flag=true;
                sw++;
            }
        }
    }
    return sw;
}
const sc = require('scanf') //这里采用node里面的scanf模块，需要npm i scanf -D 独立安装
let num = sc("%s");
let ans = sc("%S").split(' ');
for (let i = 0; i < num; i++) {
    ans[i] = parseInt(ans[i]);
}
// console.log(ans,num);
let sw=bubbleSort(ans,num);
let str='';
for (let i = 0; i < num; i++) {
    str+=ans[i]+' ';
}
console.log(str);
console.log(sw);

