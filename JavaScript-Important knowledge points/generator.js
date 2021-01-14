//定义一个生成器函数
function *gen(a){
    console.log('a');
    let b= yield a; //第一个阶段不需要输入，只需要输出a
    console.log('b');
    let c= yield b;//第二个阶段需要输入c也需要输出b
    console.log('c');
    return c;//第三个阶段输出c
}
let it = gen('a');
let g0=it.next();//这个next不传值
console.log(g0)
let g1=it.next('b的传值');
console.log(g1)
let g2=it.next('c的传值');
console.log(g2)
/*
a
{ value: 'a', done: false }
b
{ value: 'b的传值', done: false }
c
{ value: 'c的传值', done: true }


*/ 