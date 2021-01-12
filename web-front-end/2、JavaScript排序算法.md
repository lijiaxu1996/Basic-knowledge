
## JavaScript基础排序算法

```javascript
//冒泡排序
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

//选择排序
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

//插入排序
//插入排序JavaScript实现
let insertSortArray = [];
let insertSortNum;
function show(insertSortArray, insertSortNum) {
    let str="";
    for (let i = 0; i < insertSortNum; i++) {
        if (i > 0) console.log(' ');
        str+=insertSortArray[i]+' ';
        console.log(str);
    }
    console.log('\n')
}
function insertSort(insertSortArray, insertSortNum) {
    let i, j, v;
    for (i = 1; i < insertSortNum; i++) {
        v = insertSortArray[i];//先用临时变量v保存数组未排序的第一个元素
        j = i - 1;
        while (j >= 0 && insertSortArray[j] > v) {
            //判断已经排序的元素和v的大小，如果比v大，将比v大的元素向后移动一个位置
            insertSortArray[j + 1] = insertSortArray[j];
            j--;
        }
        insertSortArray[j + 1] = v;//把v放到空位上
        show(insertSortArray, insertSortNum);
    }
}
const sc = require('scanf') //这里采用node里面的scanf模块，需要npm i scanf -D 独立安装
let num = sc("%s");//获取一个字符
let ans = sc("%S").split(' ');//获取一行并且进行切割
for (let i = 0; i < num; i++) {
    ans[i] = parseInt(ans[i]);
    show(ans, num);
    insertSort(ans, num);
}




//希尔排序
//希尔排序JavaScript实现
/**
 * 说明：1、希尔排序本质就是一种插入排序 2、希尔排序是对直接插入排序进行优化，对于
 * 一些不太友好的数据，先大体上按照g的分组，（注意直接插入排序是按照1的分组进行插入排序的）
 * 而希尔排序是按照g进行分组排序的，3、g是一个变化的量，g的取值有很多，往往认为g的取值为3*i+1
 * 也就是G=[1,4,13,40...]等数据的时候就会使时间复杂度降到O(N^1.25)就会比较好了
 */
let A=[];
let n,g;//其中g是希尔排序的分组大小
//希尔排序本质是一种以间隔为g的插入排序
function insertSort(A,n,g){
    for(let i=g;i<n;i++){
        let v=A[i];
        let j=i-g;
        while(j>=0&&A[j]>v){
            A[j+g]=A[j];
            j-=g;
            // cnt++ 
        }
        A[j+g]=v;
    }
}
//希尔排序开始
let G=[];//这个是增量数列
function shellSort(A,n){
    //对增量数列g进行生成
    for(let i=1;;){
        if(i>n) break;
        G.push(i);
        i=i*3+1;//g取这些值时，算法维持在O(N^1.25),另外一些时候直接取n/2,这里写成3i+1的形式
    }
    for(let i=G.length-1;i>=0;i--){
        insertSort(A,n,G[i]);
    }
}
const sc=require('scanf');
let num = sc("%s");
let ans = sc("%S").split(' ');
for (let i = 0; i < num; i++) {
    ans[i] = parseInt(ans[i]);
   
}
shellSort(ans,num);
console.log(G.length);
let strg='';
for(let i=G.length-1;i>=0;i--){
    strg+=G[i]+' ';
}
console.log(strg);
for (let i = 0; i < num; i++) {
    console.log(ans[i]);
}

```

