//选择排序JavaScript实现
let selectionSortArray=[];
let selectionSortNum;
function selectionSort(selectionSortArray,selectionSortNum){
    let sw=0;//统计交换的次数
    let minn;//表示最小值所在的指针
    //开始遍历
    for(let i=0;i<selectionSortNum-1;i++){
        //i表示数组未排序部分开头元素，开始向后面进行扫描，也就是最多可以到达n-2的位置
        minn=i;//首先假定当前元素是一个最小值
        for(j=i;j<selectionSortNum;j++){
            //j的作用就是从i到末尾查找minn
            if(selectionSortArray[j]<selectionSortArray[minn]){
                minn=j;
            }
        }
        //找到最小值minn之后和i交换，这时候i这个位置上就是变成已排序的部分了
        let tmp=selectionSortArray[i];
        selectionSortArray[i]=selectionSortArray[minn];
        selectionSortArray[minn]=tmp;
        //只要i和minn不同，就能交换就行了，现在想想选择排序和冒泡排序来比，选择排序是从整体上选最小值，而冒泡排序是局部选择最小值。
        if(i!=minn)
            sw++;
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
let sw=selectionSort(ans,num);
let str='';
for (let i = 0; i < num; i++) {
    str+=ans[i]+' ';
}
console.log(str);
console.log(sw);

