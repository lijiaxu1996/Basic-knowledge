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




