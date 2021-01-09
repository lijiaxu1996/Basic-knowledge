// //访问一个对象,es5访问值
// let json={a:1,b:2,c:3}
// // let a=json.a;
// // let b=json.b;
// // let c=json.c;
// // console.log(a,b,c);
// //es6 对象
// let {a,b,c}=json;
// console.log(a,b,c);
// //数组
// let arr=[1,3,5]
// let [q,w,e]=arr;
// console.log(q,w,e)
// //嵌套解构
// let stu = {
//     id:00,
//     addr:'sx',
//     other:{
//         people:400,
//         pos:{
//             x:1
//         }
//     }
// }
// let {other:{pos}}=stu;
// console.log(pos.x)
//默认值
let animal={
    type:'dog',
    nums:444,
}
let {type,nums,flag=true}=animal
console.log(type,nums,flag)//指定flag为默认true

