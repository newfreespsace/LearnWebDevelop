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

## 在 JSX 中通过大括号使用 JavaScript
1. JSX 引号内的值会作为字符串传递给属性。
2. 大括号让你可以将 JavaScript 的逻辑和变量带入到标签中。
3. 它们会在 JSX 标签中的内容区域或紧随属性的 = 后起作用。
4. {{ 和 }} 并不是什么特殊的语法：它只是包在 JSX 大括号内的 JavaScript 对象。

## 将 Props 传递给组件
1. 要传递 props，请将它们添加到 JSX，就像使用 HTML 属性一样。
2. 要读取 props，请使用 function Avatar({ person, size }) 解构语法。
3. 你可以指定一个默认值，如 size = 100，用于缺少值或值为 undefined 的 props 。
4. 你可以使用 <Avatar {...props} /> JSX 展开语法转发所有 props，但不要过度使用它！
5. 像 <Card><Avatar /></Card> 这样的嵌套 JSX，将被视为 Card 组件的 children prop。
6. Props 是只读的时间快照：每次渲染都会收到新版本的 props。
7. 你不能改变 props。当你需要交互性时，你可以设置 state。

## 条件渲染
1. 在 React，你可以使用 JavaScript 来控制分支逻辑。
2. 你可以使用 if 语句来选择性地返回 JSX 表达式。
3. 你可以选择性地将一些 JSX 赋值给变量，然后用大括号将其嵌入到其他 JSX 中。
4. 在 JSX 中，{cond ? <A /> : <B />} 表示 “当 cond 为真值时, 渲染 <A />，否则 <B />”。
5. 在 JSX 中，{cond && <A />} 表示 “当 cond 为真值时, 渲染 <A />，否则不进行渲染”。
6. 快捷的表达式很常见，但如果你更倾向于使用 if，你也可以不使用它们，。


## 渲染列表
1.如何从组件中抽离出数据，并把它们放入像数组、对象这样的数据结构中。
2.如何使用 JavaScript 的 map() 方法来生成一组相似的组件。
3.如何使用 JavaScript 的 filter() 方法来筛选数组。
4.为何以及如何给集合中的每个组件设置一个 key 值：它使 React 能追踪这些组件，即便后者的位置或数据发生了变化。
