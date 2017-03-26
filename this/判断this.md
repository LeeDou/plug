### 根据优先级来判断函数在某个调用位置应用的是哪条规则

1. 函数是否在new中使用（new绑定）？ 如果是的话this  绑定是新创建的对象。、
  ` var bar = new foo();`;
2. 函数是否通过call、apply （显式绑定）或者硬绑定调用？ 如果是的话this就绑定的指定的对象。
  ` var bar = foo.call(obj2)`
3. 函数是否在某个上下文中调用（隐式绑定）？ 如果是的话， this绑定的是那个上下文对象。
  ` var bar = obj1.foo()`
4. 如果都不是的话，使用默认绑定。如果在严格模式下，就绑定到undefined， 否则绑定到全局对象。
  ` var bar =foo()`

### 箭头函数
```
 function foo() {
 	return (a)=>{
 		console.log(this.a);
 	};
 }
 var obj1 = {
 	a:2
 };

 var obj2 = {
 	a:3
 };
 var bar = foo.call(obj1);
 bar.call(obj2);
```
foo() 内部的箭头函数会捕获调用时的foo() 的this。由于foo() 的this绑定到obj1，bar(应用箭头函数)的this也会绑定到obj1，箭头函数的绑定无法被修改。