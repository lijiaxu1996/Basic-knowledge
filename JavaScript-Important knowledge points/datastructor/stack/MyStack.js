//这里要用数组进行模拟
class MyStack {
    constructor(){
        this.store = [];
    }
    //push()
    push(el){
        return this.store.push(el);
    }
    //pop()
    pop(){
        return this.store.pop();
    }
    //peek()
    peek(){
        let top = this.store.length-1;
        return this.store[top];
    }
    //isEmpty()
    isEmpty(){
        return this.store.length === 0;
    }
    //size()
    size(){
        return this.store.length;
    }
    //clear()
    clear(){
        return this.store = [];
    }
    //toString()
    toString(){
        return this.store.toString()
    }
}
module.exports = MyStack;