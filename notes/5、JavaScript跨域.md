## 跨域

### 1、理解同源策略

- 通俗讲：**协议**+**域名**+**端口**三者完全一样就叫做同源。

- **协议就是看这个网址是http还是https**。

- **域名指的是子域名、主域名、二级域名判别**。

- **端口指的就是端口号**。

  #### 一个简单的例子

  > 比如在github上面访问https://github.com/a/1.js 这样一个js文件。判断以下URL是否同源。

|              URL               | 判断是否同源 | 原因                         |
| :----------------------------: | ------------ | ---------------------------- |
|   https://github.com/b/1.js    | 同源         | 只有访问路径不同             |
|  https://github.com/a/c/1.js   | 同源         | 只有访问路径不同             |
|    http://github.com/a/1.js    | 不同源       | 协议不同                     |
| https://github.com:8080/a/1.js | 不同源       | 端口不同                     |
|    https://gitee.com/a/1.js    | 不同源       | 主域名不同                   |
|   https://24.54.55.66/a/1.js   | 不同源       | 域名和对应ip相同也不可以访问 |
| https://www.github.com/a/1.js  | 不同源       | 二级域名和主域名不能访问     |
|  https://me.github.com/a/1.js  | 不同源       | 子域名不同                   |

### 2、同源策略的原因

> 同源策略是在浏览器上面的一种策略，我们向服务器发出请求了，服务器也返回结果了，但是我们的浏览器对这个结果进行了拦截。这样做的原因是为了防止XSS、CSRF、SQL注入、DDOS等。

### 3、不在恶意攻击他人网站情况下如何跨域

#### 3.1、理解三个可以跨域标签

```html
 <!--三个标签可以跨域请求 -->
  <!-- script标签 -->
    <script src="https://cdn.bootcdn.net/ajax/libs/vue/3.0.1/vue.cjs.min.js"></script>
    <!-- img标签 -->
    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=341802306,419856862&fm=26&gp=0.jpg">
    <!-- link标签 -->
    <link href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap-grid.min.css" rel="stylesheet">

```

#### 3.2 使用jsonp跨域

