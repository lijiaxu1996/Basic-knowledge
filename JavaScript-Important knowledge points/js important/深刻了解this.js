/**
 * 1. this在JavaScript里面并不指向函数本身，也不指向函数作用域本身
 * 2. JavaScript里面的this表示当前执行的主体
 * 3. this是在函数发生调用的时候发生绑定
 * 4. 它的指向完全取决于函数在哪里进行调用
 * 参考学习:https://github.com/ljianshu/Blog/issues/7
 */
//函数执行时首先看函数名前面是否有"."，有的话，"."前面是谁,this就是谁；没有的话this就是window
function fn(){
    console.log(this);
  }
  var obj={fn:fn};
  fn();//this->window
  obj.fn();//this->obj
  function sum(){
       fn();//this->window
  }
  sum();
  var oo={
   sum:function(){
   console.log(this);//this->oo
         fn()//this->window
    }
  };
  oo.sum();
  //自执行函数中的this永远是window
  //给元素的某一个事件绑定方法，当事件触发的时候，执行对应的方法，方法中的this是当前的元素，除了IE6~8下使用attachEvent（IE一个著名的bug）
  /**
   * 
   * DOM零级事件绑定
  oDiv.onclick=function(){
     //this->oDiv
  };
DOM二级事件绑定
  oDiv.addEventListener("click",function(){
     //this->oDiv
  },false);
在IE6~8下使用attachEvent，默认的this就是指的window对象
  oDiv.attachEvent("click",function(){
       //this->window
  });
   */

  function fn(){
    console.log(this);
  }
  document.getElementById("div1").onclick=fn;//fn中的this就是#divl
  document.getElementById("div1").onclick=function(){
  console.log(this);//this->#div1
  fn();//this->window
  };
  //在构造函数模式中，类中(函数体中)出现的this.xxx=xxx中的this是当前类的一个实例
  /**
   * call方法的作用:
①首先我们让原型上的call方法执行，在执行call方法的时候，我们让fn方法中的this变为第一个参数值obj；然后再把fn这个函数执行。
   */
  /**
   * apply和call方法的作用是一模一样的，都是用来改变方法的this关键字并且把方法
执行，而且在严格模式下和非严格模式下对于第一个参数是null/undefined这种情况的规
律也是一样的。
fn.call();//this->window
fn.call(null);//this->window
fn.call(undefined);//this->window
//严格模式下 
fn.call();//在严格模式下this->undefined
fn.call(null);// 在严格模式 下this->null
fn.call(undefined);//在严格模式下this->undefined

*/
/**
 * call在给fn传递参数的时候，是一个个的传递值的，而apply不是一个个传，而是把要给fn传递的参数值统一的放在一个数组中进行操作。但是也相当子一个个的给fn的形参赋值。
 * 总结一句话:call第二个参数开始接受一个参数列表,apply第二个参数开始接受一个参数数组
 */
// bind：这个方法在IE6～8下不兼容，和call/apply类似都是用来改变this关键字的，但是和这两者有明显区别：
// fn.call(obj,1,2);//->改变this和执行fn函数是一起都完成了
// fn.bind(obj,1,2);//->只是改变了fn中的this为obj，并且给fn传递了两个参数值1、2，
//                      但是此时并没有把fn这个函数执行
// var tempFn=fn.bind(obj,1,2);
// tempFn(); //这样才把fn这个函数执行
//箭头函数的this指定
// 更简短的函数并且不绑定this。
//箭头函数没有自己的this，箭头函数的this不是调用的时候决定的，而是在定义的时候处在的对象就是它的this。
//箭头函数的this看外层的是否有函数，如果有，外层函数的this就是内部箭头函数的this，如果没有，则this是window。
//用call()或者apply()调用箭头函数时，无法对this进行绑定，即传入的第一个参数被忽略：

