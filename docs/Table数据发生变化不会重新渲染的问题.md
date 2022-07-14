https://github.com/ant-design/ant-design/issues/34087#issuecomment-1144533440

当前版本解决方案方案是把columns写进render里面

如果 dataSource 引用的数据发生变化, 但是并没有渲染出来, 就重新创建一个新数组, 从而改变引用, 让 react 重新渲染
```js
const newContents = contents ? [...contents] : []
```