# 快速开始

本节将介绍如何在项目中使用 Gxcel UI。

## 用法

### 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

``` ts
// main.ts
import { createApp } from 'vue'
import GxcelUI from 'gxcel-ui'
import 'gxcel-ui/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(GxcelUI)
app.mount('#app')
```

### 按需导入

您需要使用额外的插件来导入要使用的组件。

### 自动导入

首先你需要安装 `unplugin-vue-components` 和 `unplugin-auto-import` 这两款插件

``` bash
npm install -D unplugin-vue-components unplugin-auto-import
```

然后把下列代码插入到你的 `Vite` 或 `Webpack` 的配置文件中

::: code-group

``` ts [vite]
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { GxcelUIResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [GxcelUIResolver()],
    }),
    Components({
      resolvers: [GxcelUIResolver()],
    }),
  ],
})
```

``` js [webpack]
// webpack.config.js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { GxcelUIResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  // ...
  plugins: [
    AutoImport({
      resolvers: [GxcelUIResolver()],
    }),
    Components({
      resolvers: [GxcelUIResolver()],
    }),
  ],
}
```

:::


## 开始使用

现在你可以启动项目了。 对于每个组件的用法，请查阅 [对应的独立文档](/components/button)。