// //rest参数,代替那个arguments
// //计算3个数字之和
// function addSum(a,b,c){
//     var nums=[a,b,c];
//     return nums.reduce((sum,num)=>{
//         return sum+num;
//     },0);
// }
// console.log(addSum(1,2,3))//6
// //rest参数代替
// let addSum2=(...nums)=>{
//     return nums.reduce((sum,num)=>{
//         return sum+num;
//     },0);
// }
// console.log(addSum2(1,2,3,4))//10
// //在解构赋值里面使用rest参数 必须最后一个，不能在setter函数之中使用
// let [a,b,c,...nums]=[3,4,5,3.4,5,{s:2,c:3}]
// console.log(nums)//[ 3.4, 5, { s: 2, c: 3 } ]
//模板字符串 ``进行标识 可以多行 用${}进行加入变量和函数进行识别
// let sum=(i,j)=>{
//     return i+j;
// }
// console.log(`这个函数的结果是${sum(1,3)}`)//这个函数的结果是4
// let str=`hello world`
// console.log(`看看这个结果${str}`)// 看看这个结果hello world
//拓展运算符，和rest参数类似,rest参数像是用...a来表示一个数组,并在后续算法里面使用这个数组,拓展运算
//表示对这个数组用...a来参与运算。
//也很容易实现字符串拼接
let arr=[33,44,55]
console.log(...arr)




