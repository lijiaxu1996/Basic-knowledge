//console属性相关
console.log(1);
console.info(1);
console.warn('warn');
console.error('err');
console.assert(10===10,'true');//正确不报错
//global
// console.log(global);

function show(){
    console.log(1)
    process.nextTick(function(){
        console.log(2);
    })
    setImmediate(function(){
    console.log(0);
    })
}
show() //1,2 0 setImmediate方法表示事件队列最后执行
