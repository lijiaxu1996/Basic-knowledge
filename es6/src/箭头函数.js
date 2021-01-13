// let a=function(i){
//     return Math.pow(i,2);
// }
// console.log(a(8))//64
// //改写
// let b=i=>{return Math.pow(i,2)};
// console.log(b(7))//49
//多个参数形式,参数要有括号
// let c=(i,j)=>{
//     return Math.imul(i,j);//返回乘法结果
// }
// console.log(c(2,5));//10
// //让回调函数看起来更加简单
// let ans=[11,22,33];
// let d=ans.reduce(((i,j)=>i+j),0);
// console.log(d);//66
//改变this指向,一个常见的例子
let book={
    tags:['a','b'],
    name:'summer',
    whichTags:function(){
        return this.tags.map(function(item){
            return `${item}属于${this.name}的标签`;
        })
    }

}
console.log(book.whichTags());//[ 'a属于undefined的标签', 'b属于undefined的标签' ]
用变量self修改
let book={
    tags:['a','b'],
    name:'summer',
    whichTags:function(){
        let self=this;
        console.log(self)
        console.log(this)
        return this.tags.map(function(item){
           // console.log(this) [Function (anonymous)]
            return `${item}属于${self.name}的标签`;
        })
    }

}
console.log(book.whichTags());//[ 'a属于summer的标签', 'b属于summer的标签' ]
使用bind,修改指向为this
let book={
    tags:['a','b'],
    name:'summer',
    whichTags:function(){
        return this.tags.map(function(item){
           // console.log(this) [Function (anonymous)]
            return `${item}属于${this.name}的标签`;
        }.bind(this))
    }

}
console.log(book.whichTags());//[ 'a属于summer的标签', 'b属于summer的标签' ]
// 使用箭头函数
let book={
    tags:['a','b'],
    name:'summer',
    whichTags:function(){
        return this.tags.map(item=>{
           // console.log(this) [Function (anonymous)]
            return `${item}属于${this.name}的标签`;
            //箭头函数this表示定义(定义这个book)时候的this，而不是当前函数（箭头函数）使用时候的this
        })
    }

}
console.log(book.whichTags());//[ 'a属于summer的标签', 'b属于summer的标签' ]
