function printListFromTailToHead(head)
{
    // write code here
    let stk = [];//模拟栈
    for(;head;){
        stk.push(head.val); //把链表的值和索引表示
        head=head.next;
    }
    return stk.reverse();//反转输出
}