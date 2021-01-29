"use strict";
//开始学习数据类型
// var num:number = 12;
// var num = 13 ; 
// console.log(num);
// var num = 12.4;
// console.log(num);
//boolean
// var flag:boolean = true;
// flag = false;
// console.log(flag);
//字符串类型
// let str:string = "hello,ts";
// console.log(str);
//数组
// let arr:number [] = [1,3,4,5];
// console.log(arr)
// let arr:Array<number> = [2,3,4,5];
// console.log(arr);
// let json:[number,string,Array<number>] =[12,"123",[1,2,3]]
// console.log(json)
//枚举
// enum flag {success=1,error=-1}
// console.log(flag.success)
var flag;
(function (flag) {
    flag[flag["red"] = 0] = "red";
    flag[flag["blue"] = 1] = "blue";
    flag[flag["yellow"] = 2] = "yellow";
})(flag || (flag = {}));
console.log(flag.red, flag.blue, flag.yellow);
