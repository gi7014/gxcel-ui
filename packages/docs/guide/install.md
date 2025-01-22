# 安装

## 使用包管理器

我们建议您使用包管理器（如 [npm](https://www.npmjs.com/)、[yarn](https://yarnpkg.com/) 或 [pnpm](https://pnpm.nodejs.cn/)）安装 Gxcel UI，然后您就可以使用打包工具，例如 [Vite](https://vitejs.cn/) 或 [webpack](https://vitejs.cn/)。

选择一个你喜欢的包管理器

::: code-group

``` bash [npm]
npm install gxcel-ui --save
```

``` bash [yarn]
yarn add gxcel-ui
```

``` bash [pnpm]
pnpm add gxcel-ui
```

:::

我们不推荐您使用 `cnpm` ，他可能会导致一些意想不到的错误。
若您的网络环境不佳，您可以使用 [npm 镜像源](https://registry.npmmirror.com/) 来改善您的安装环境。

``` bash
npm install nrm -g
nrm use taobao
```

## 浏览器直接引入

直接通过浏览器的 HTML 标签导入 Gxcel UI，然后您就可以使用全局变量 `GxcelUI` 了。

当然，您可以使用不同厂商所提供的 CDN 服务，此处以 [unpkg](https://unpkg.com/) 举例。

``` html
<head>
  <!-- Import style -->
  <link rel="stylesheet" href="//unpkg.com/gxcel-ui/dist/index.css" />
  <!-- Import Vue 3 -->
  <script src="//unpkg.com/vue@latest"></script>
  <!-- Import component library -->
  <script src="//unpkg.com/gxcel-ui"></script>
</head>
```
