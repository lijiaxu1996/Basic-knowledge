//map容器
console.log([1,2,3].map(i=>i*2));//[ 2, 4, 6 ]
//set容器
console.log(new Set([1,2,3,4,5,4,4])); //Set(5) { 1, 2, 3, 4, 5 }

let arr= new Set([1,2,33,4,4,3]);
for(let i of arr){
    console.log(i)
}
let b=[1,2,3].map(i=>i*2);
for (const i of b) {
    console.log(i)
}
let c=[2.3,4,5].map(i=>i*2);
c.forEach((v,i,arr)=>{
    console.log(v,i,arr)
})
/**
 * for of 循环不仅支持数组、大多数伪数组对象，也支持字符串遍历，此外还支持 Map 和 Set 对象遍历。
for in循环可以遍历字符串、对象、数组，不能遍历Set/Map
forEach 循环不能遍历字符串、对象,可以遍历Set/Map
参考:https://github.com/ljianshu/Blog/issues/10
 */