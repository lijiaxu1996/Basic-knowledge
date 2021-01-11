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
