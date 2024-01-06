## React 组件是一段可以使用标签进行扩展的 JavaScript 函数
   * React 是常规的 JavaScript 函数，除了：
     1. 它们的名字总是以大写字母开头。
     2. 它们返回 JSX 标签。

## 组件的导入和导出

### 导出
  * 默认导出
    ```js
    export default function Button() {}
    ```
  * 具名导出
    ```js
    export function Button() {}
    ```
### 导入
  * 默认导入
    ```js
    import Button from './Button.js';
    ```
  * 具名导入
    ```js
    import { Button } from './Button.js';
    ```
    
## JSX 规则
1. 只能返回一个根元素。
   如果需要在一个组件中包含多个元素，需要用一个父标签把它们包裹起来。若不想增加额外的父标签，可以使用 `<>` 和 `</>` 元素来代替。
2. 标签必须闭合。
3. 使用驼峰式命名法给~~所有~~ 大部分属性命名！
