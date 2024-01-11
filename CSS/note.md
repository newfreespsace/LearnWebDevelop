## VS Code Html + Css 开发插件推荐

1. image preview
2. Color Highlight
3. Auto Rename Tag

## 一些基本属性

1. **color（颜色）：**
   - 用于定义文本的颜色。
   - 可以使用颜色名称、十六进制值、RGB值等来表示颜色。
   - 示例：`color: red;` 或 `color: #336699;`
2. **font-size（字体大小）：**
   - 用于设置文本的大小。
   - 可以使用像素、em、rem等单位。
   - 示例：`font-size: 16px;` 或 `font-size: 1.2em;`
3. **font-family（字体系列）：**
   - 用于定义文本的字体。
   - 可以指定一个字体系列，以便在未找到第一个字体时使用备选字体。
   - 示例：`font-family: "Arial", sans-serif;`
4. **text-transform（文本转换）：**
   - 用于指定文本的大小写转换。
   - 常用的值包括 `uppercase`（全部大写）、`lowercase`（全部小写）和 `capitalize`（每个单词的首字母大写）。
   - 示例：`text-transform: uppercase;`
5. **font-style（字体风格）：**
   - 用于设置文本的风格，如斜体。
   - 常用值包括 `normal`（默认）、`italic`（斜体）和 `oblique`（倾斜）。
   - 示例：`font-style: italic;`
6. **line-height（行高）：**
   - 用于设置行间距，即文本行之间的垂直间距。
   - 可以使用单位或无单位值。
   - 示例：`line-height: 1.5;` 或 `line-height: 24px;`
7. **text-align（文本对齐）：**
   - 用于定义文本在容器中的水平对齐方式。
   - 常用值包括 `left`（左对齐）、`center`（居中对齐）、`right`（右对齐）和 `justify`（两端对齐）。
   - 示例：`text-align: center;`
8. font-weight

## 选择器

1. **元素选择器（Element Selector）:**
   - 选择指定元素类型的所有元素。
   - 例如，选择所有段落元素：`p { ... }`
2. **类选择器（Class Selector）:**
   - 选择具有指定类名的所有元素。
   - 例如，选择类名为 "example" 的元素：`.example { ... }`
3. **ID 选择器（ID Selector）:**
   - 选择具有指定 ID 的唯一元素。
   - 例如，选择 ID 为 "header" 的元素：`#header { ... }`
4. **通配符选择器（Universal Selector）:**
   - 选择所有元素。
   - 例如，选择文档中的所有元素：`* { ... }`
5. **属性选择器（Attribute Selector）:**
   - 选择具有指定属性的元素。
   - 例如，选择所有带有 "target" 属性的链接：`a[target] { ... }`
6. **子元素选择器（Child Selector）:**
   - 选择某个元素的直接子元素。
   - 例如，选择 `ul` 元素下的所有 `li` 元素：`ul > li { ... }`
7. **后代选择器（Descendant Selector）:**
   - 选择某个元素的所有后代元素，不仅仅是直接子元素。
   - 例如，选择 `div` 元素内部的所有 `p` 元素：`div p { ... }`
8. **相邻兄弟选择器（Adjacent Sibling Selector）:**
   - 选择与指定元素在同一父元素下的相邻兄弟元素。
   - 例如，选择与 `h2` 元素相邻的 `p` 元素：`h2 + p { ... }`
9. **通用兄弟选择器（General Sibling Selector）:**
   - 选择与指定元素在同一父元素下的所有兄弟元素。
   - 例如，选择与 `h2` 元素在同一级别的所有 `p` 元素：`h2 ~ p { ... }`

## COLOR

### THE RGB MODEL

* red      R(255)G(0)B(0)
* green  R(0)G(255)B(0)
* blue    R(0)G(0)B(255)

## 继续属性

* background-color

* board

  `border` 属性可以设置边框的宽度、样式和颜色。以下是 `border` 属性的常见用法：

  ```css
  .example {  border: 1px solid black; }
  ```
## 028 Pseduo-class（伪类）

> 作者在本节视频将伪类和伪元素弄混了，本节讲解的实为伪元素。

通过在元素选择器的元素名后面加上 `:first-child` 等类似修饰语，可以选择满足相应条件的元素。

例如 `li:first-child` 可以选择列表中的第一个 `li`。类似的还有 `li:last-child`，`li:nth-child(2)`，`li:nth-child(even)`。

一个值得注意的地方是，伪元素选择器 `li:first-child` 选择的是所有的 li 的父元素的第一个子元素，且该元素为 li 元素。`li:nth-child(2)` 选择的是 li 的父元素的第 2 个且是 li 的元素。倘若第二个元素不是 li，那么不会有元素被选择。

因为上面的原因，所有的伪元素适用于子元素均为同一类的元素的情况。

## 029 Styling Hyperlinks(超链接样式)

```css
a:link {
  color: #1098af;
  text-decoration: none;
}
```

上面的代码可以设置所有的具有 href 属性的 a 元素。

```css
a:visited {
  color: pink;
}
```

上面的代码设置了点击过的链接的样式

```css
a:hover {
  color: orangered;
  font-weight: bold;
  text-decoration: underline dotted orangered;
}
```

上面的代码定义了当悬停在链接时的样式，text-decoration 定义了文本装饰效果。将 dotted 替换为 wavy, 会出现波浪效果。

```css
a:active {
  background-color: black;
  font-style: italic;
}
```

上面的代码设置了点击链接时链接的样式。

以上的四个伪类可记作 `LVHA`。

## 030 Using Chrome DevTools

## 031 CSS Theory #1\_ Conflicts Between Selectors（CSS 理论 1 选择器冲突）
优先级从高到低
5. Declarations marked !import
4. Inline style(style attirbute in HTML)
3. ID(#) selector
2. Class(.) or pseude-class(:) selector
1. ELement selector(p, div, li, etc.)
0. Universal selector(*)
  

