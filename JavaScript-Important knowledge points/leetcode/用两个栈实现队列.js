const stk1 = [];
const stk2 = [];

function push(node){
    stk1.push(node);
}
function pop(){
    if(stk2.length === 0){
        /**
         * 1.两个栈
         * 2.第一个栈放入数据
         * 3.第二个栈放入第一个栈出来的数据（这个时候顺序相反）
         * 4.第二个栈再次输出，顺序变成正向
         * 5.变成先进先出的队列了
         */
        for(;stk1.length;){
            stk2.push(stk1.pop());
        }
    }
    return stk2.pop();
}