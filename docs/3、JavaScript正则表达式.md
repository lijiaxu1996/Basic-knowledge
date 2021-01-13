## 使用正则表达式

```javascript
//官方:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions
let str = 'hello world hello javascript'

let re = /he+/ig

let re1=/java/ig

let re2=/hello+/ig

// \d [1,n]+ {n} {1,n} 
// ^开头 $结尾
console.log(str.match(re))
console.log(str.search(re1))
console.log(str.replace(re2,'*'))
```

