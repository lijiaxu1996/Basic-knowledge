//了解事件队列 event loop
/**
 *  JS环境先执行 执行栈（同步） 代码，
 * 之后看看有哪些事件，最后遍历事件队列
 * 执行（异步代码）
 * 异步的事件有 ajax请求 请求文件  setTimeout等
 */
let show = () => {
    console.log(1);
    setTimeout(() => {
        console.log(2);
    })
    console.log(3);
}
show() //1 3 2