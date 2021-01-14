class Stack{
    constructor(push,peek,pop,clear,length){
        this.dataStore=[];
        this.top=0;
        this.push=push;
        this.peek=peek;
        this.pop=pop;
        this.length=length;
        this.clear=clear;
    }
    //push方法
    push(element){
        this.dataStore[this.top++]=element
    }
    //pop方法
    pop(){
        return this.dataStore[--this.top];
    }
    //peek方法返回栈顶元素
    peek(){
        return this.dataStore[this.top-1];
    }
    //length方法
    length(){
        return this.top;
    }
    clear() {
        this.top = 0;
    }
}
