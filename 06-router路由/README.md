# 后端渲染阶段
## 后端渲染
> 服务器将数据嵌入到html模板中，在发送给客户端
## 后端路由
> 服务器处理url与页面的映射关系

# 前后端分离阶段
## 静态资源服务器
> 提供 `html` `css` `js` 资源
## 数据服务器
> 提供数据API接口

# 前端渲染阶段
## `SPA`
> 单页面富应用
## 前端路由
> 类似于选项卡的功能，对不同的url，通过js使用不同的模板
## 静态资源服务器
> 一次性提供整网站所需 `html` `css` `js` 资源
## 数据服务器
> 提供数据API接口

# 修改`url`
```javascript
location.hash = 'about'
// 压入栈
history.pushState({}, '', 'home')
// 替换
history.replaceState({}, '', 'home')
// 回退
history.back()
history.go(-1)
// 前进
history.forward()
history.go(1)
history.go(-3)
```

# 安装路由，脚手架已安装
> `npm install vue-router --save`
