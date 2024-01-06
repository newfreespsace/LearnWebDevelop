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
    
