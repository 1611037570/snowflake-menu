今日小雪，来填上次的坑。<https://juejin.cn/post/7349025789537304602>


## 功能介绍

展开模式：支持左键、右键、长按

展开位置：支持指定 tl、tr、bl、br 和自动适配

声明周期：提供从创建前到卸载后的完整回调用于满足不同场景

## 演示地址

提供三种模式的触发演示

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/0b2fa2d2066f46c38e8f50611bf002b4~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6YCB5py15bCP57qi6Iqx:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjM0MjM4NjgyNzc5MTY4NyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1732843651&x-orig-sign=C916cdMMNVYA7bPKegpuhICzdL8%3D)

<http://1611037570.3vhost.vip/>

## 安装和使用

pnpm i

pnpm run dev

## MenuAttributes

| 事件名                | 说明                    | 类型                              | **默认值**   |
| ------------------ | --------------------- | ------------------------------- | --------- |
| list               | 菜单列表                  | array                           | \[]       |
| model              | 菜单展开模式                | enum \[click、contextmenu、press] | click     |
| stopPropagation    | 阻止冒泡事件                | boolean                         | true      |
| preventDefault     | 阻止默认事件                | boolean                         | true      |
| beforeCreateFn     | 菜单展开前的前置事件，可用于判断是否展开  | Function                        | ()=\>true |
| beforeUnmountFn    | 菜单展开前                 | Function                        | ()=\>true |
| position           | 菜单展开的定位点，null 为自动适配   | enum \[tl、tr、bl、br、null]        | null      |
| style              | 绑定菜单触发区域自定义样式         | object                          | {}        |
| menuContainerStyle | 绑定展开菜单容器自定义样式（非菜单列表）  | object                          | {}        |
| nameKey            | 循环列表时展示名称的 key        | string                          | name      |
| fnKey              | 选择列表 item 触发回调方法的 key | string                          | fn        |

## MenuSlots

| 事件名     | 说明     |
| ------- | ------ |
| default | 触发菜单区域 |
| menu    | 展示菜单区域 |

## MenuEmits

| 事件名             | 说明      | 类型       |
| --------------- | ------- | -------- |
| onBeforeCreate  | 菜单展开前   | Function |
| onMounted       | 菜单展开后   | Function |
| onSelected      | 选中菜单元素时 | Function |
| onBeforeUnmount | 菜单关闭前   | Function |
| onUnmounted     | 菜单关闭后   | Function |

## 源码

<https://github.com/1611037570/snowflow-menu>
