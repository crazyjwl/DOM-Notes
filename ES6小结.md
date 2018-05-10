# ECMAScript6？ ES2015？ JavaScript？
### ECMAScript 和 JavaScript
> ECMAScript是JavaScript的规格（标准），JavaScript是JavaScript的一种实现（另外的 ECMAScript 方言还有 Jscript 和 ActionScript）。日常场合，这两个词是可以互换的。
### ES6 和 ES2015
> ES6 既是一个历史名词，也是一个泛指，含义是 5.1 版以后的 JavaScript 的下一代标准，涵盖了 ES2015、ES2016、ES2017 等等，而 ES2015 则是正式名称，特指该年发布的正式版本的语言标准。
### 部署进度
- 各大浏览器的最新版本，对 ES6 的支持可以查看 [kangax.github.io/es5-compat-table/es6/](https://kangax.github.io/es5-compat-table/es6/)
- 检查各种运行环境对 ES6 的支持情况: [ES-Checker](http://ruanyf.github.io/es-checker/)
### Babel转码
Babel可以将ES6代码转为ES5代码，了解更多关于[Babel](https://babeljs.io/)

# ES6特性：
- [let 和 const]()
- [块级作用域]()
- [箭头函数和this]()
## 使用 let 和 const 定义变量
### let
- let 声明的变量只在{}块内有效
	```javascript
	{
		let a = 10;
		var b = 1;
	}
	a;	//undefined
	b;	//1

	for(let i = 0; i < 10; i++){
	console.log(i);		// 0, 1, 2 ...
	}
	console.log(i);		//undefined

	//for循环中，设置循环变量部分是父作用域，循环体内是子作用域
	for(let i = 0; i < 10; i++){
	let i = 'qwe';
	console.log(i);		//'qwe', 'qwe', 'qwe'...10 times
	}
	```
- let 不存在变量提升。在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。
	```javascript
	if (true) {
	  // TDZ开始
	  tmp = 'abc'; // ReferenceError
	  console.log(tmp); // ReferenceError

	  let tmp; // TDZ结束
	  console.log(tmp); // undefined

	  tmp = 123;
	  console.log(tmp); // 123
	}
	
	```
- let 定义的变量，不允许重复声明
	```javascript
	// error
	function func() {
	  let a = 10;
	  var a = 1;
	}

	function func(arg) {
	  let arg; // error
	}

	function func(arg) {
  	{
 	   let arg; // ok
	  }
	}
	```
### const
- const 声明的变量是只读变量，一旦声明(必须同时初始化)，其后不能改变它的值
- 作用域与let 相同
- const 定义的变量本质上是指变量指向的内存地址不可更改「
	```javascript
	const a = 10;
	a = 100;	//error
	const b = [];
	b.push("hello");	//ok
	b = ["hi"];		//error
	```
## 块级作用域
ES6 允许在块级作用域之中声明函数，其行为类似 let

## 箭头函数 和 this
ES6 允许使用箭头(Arrow) `=>` 定义函数，
注意点：
- 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

- 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

- 不可以使用yield命令，因此箭头函数不能用作 Generator 函数。

```javascript
// 表达式
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);
var pairs = evens.map(v => ({even: v, odd: v + 1}));

// 声明
nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});

// 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
var bob = {
  _name: "Bob",
  _friends: [],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
}
```
