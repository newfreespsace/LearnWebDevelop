## CommonJS:

1. **背景**: CommonJS 是一种模块系统，最初是为了解决 JavaScript 在服务器端的模块化需求而设计的。主要用于 Node.js 等环境。

2. **导出方式**： 使用 `module.exports` 导出模块，通过 `require` 关键字导入模块。

   ```javascript
   // 导出模块
   const myModule = { key: 'value' };
   module.exports = myModule;

   // 导入模块
   const importedModule = require('./myModule');
3. **特点**： CommonJS 是同步加载的，模块在运行时动态加载。

## ES6 模块系统:
1. **背景**： ES6 模块系统是 ECMAScript 2015 规范引入的一部分，旨在提供一种更现代、更灵活的模块化方案。被广泛用于浏览器和现代 JavaScript 开发中。

2. **导出方式**： 使用 export 导出模块，使用 import 导入模块。支持导出默认值（export default）和命名导出。

```js
// 导出模块
const myModule = { key: 'value' };
export default myModule;

// 导入模块
import myModule from './myModule';
```
3. **特点**： ES6 模块是异步加载的，模块在解析阶段静态分析，不会在运行时动态改变。

## 联系
1. 两者都是用于模块化开发，提高代码的可维护性和可复用性。
2. 都允许将代码分割成模块，使项目结构更清晰。
## 区别
**语法不同**： CommonJS 使用 module.exports 和 require，而 ES6 使用 export 和 import。  
**加载方式不同**： CommonJS 是同步加载的，而 ES6 模块是异步加载的。  
**静态分析**： ES6 模块在静态分析阶段就确定了模块的依赖关系，而 CommonJS 模块是在运行时动态加载的。  
**适用场景**： CommonJS 更适用于服务器端的同步加载，而 ES6 模块更适用于现代浏览器环境和异步加载的情况。  

总体而言，ES6 模块系统在现代 JavaScript 开发中更为普遍，并且被推荐用于新的项目。然而，Node.js 仍然支持 CommonJS，因此在一些特定情境下可能会选择使用它。
