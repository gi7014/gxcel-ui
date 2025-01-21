<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import PlayGround from '../vue-components/PlayGround.vue'
import { GIcon } from 'gxcel-ui'
import { AgGridVue } from "ag-grid-vue3"
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'

ModuleRegistry.registerModules([AllCommunityModule])

const iconAPI = reactive({
    headers: [
        { field:"attribution", headerName: "属性名" },
        { field:"description", headerName: "说明" },
        { field:"type", headerName: "类型", tooltipValueGetter: (params) => {
            if (params.data.toolTip) return params.data.toolTip
        }},
        { field:"default", headerName: "默认值" },
    ],
    data: [
        { attribution:"border", description:"icon 外圈边框", type:"boolean", default:"false" },
        { attribution:"fixedWidth", description:"固定 icon 宽度 (仅内置图标)", type:"boolean", default:"false" },
        { attribution:"flip", description:"icon 水平垂直翻转", type:"enum", default:"-", toolTip: '"horizontal" | "vertical" | "both"' },
    ]
})

const iconSlot = reactive({

})

const githubLink = 'https://github.com/gi7014/gxcel-ui/blob/main/packages/components/Icon/Icon.vue'
</script>

<style>
html {
  scroll-behavior: smooth;
}
.in-content {
  margin: 14px 0;
}
</style>

# Icon 图标

Gxcel UI 主要使用 [Font Awesome v6](https://fontawesome.com/search?ic=free) 作为主要图标库使用。

## 基础使用

使用 Icon 组件前，需在组件或项目中引入 `GIcon` 才可直接使用。

```vue
import { GIcon } from 'gxcel-ui'
```

之后，在任意 HTML 标签中均可直接使用。

```vue
<template>
  <g-icon icon="search"></g-icon>
</template>
```

由于 Icon 组件使用 FontAwesomeIcon 库，故许多组件属性可查阅该库[文档](https://github.com/andhovesyan/vue-fontawesome)进行调用。

例如，在使用加载图标时，设置 `spin` 属性，可让任意图标加载旋转效果。

<play-ground :githubLink="githubLink">
    <div class="in-content">
        <g-icon icon="spinner" spin style="margin-right: 10px; "></g-icon>
        <g-icon icon="star" spin style="margin-right: 10px; "></g-icon>
        <g-icon icon="fire" spin></g-icon>
    </div>
</play-ground>

::: details 查看源代码

```vue
<template>
  <g-icon icon="spinner" spin style="margin-right: 10px; "></g-icon>
  <g-icon icon="star" spin style="margin-right: 10px; "></g-icon>
  <g-icon icon="fire" spin></g-icon>
</template>

<script lang="ts" setup>
import { GIcon } from "gxcel-ui";
</script>
```

:::

## 直接使用 SVG 图标

考虑到图标库中免费图标数量可能不能满足开发者的需求，故本组件可以使用自定义 SVG 图标，但 SVG 图标仅可使用部分组件属性。

<play-ground :githubLink="githubLink">
    <div class="in-content" style="display: flex; justify-content: space-around;">
        <g-icon height="40px" width="40px">
            <template #icon>
                <svg t="1737471685240" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2823"><path d="M742.4 377.6c-44.8-70.4-12.8-140.8-25.6-140.8-25.6 0-57.6 57.6-57.6 57.6s-38.4-44.8-6.4-108.8c12.8-25.6 32-51.2 25.6-57.6-6.4-12.8-140.8-6.4-256 64C275.2 294.4 147.2 512 211.2 697.6c96 262.4 499.2 268.8 601.6 6.4C864 556.8 793.6 454.4 742.4 377.6zM646.4 544C576 627.2 499.2 704 428.8 787.2c-6.4 6.4-12.8 0-12.8-6.4 19.2-57.6 44.8-115.2 64-172.8-32 0-64 0-89.6 0-6.4 0-6.4-6.4-6.4-12.8 64-76.8 128-153.6 192-230.4 0 0 0 0 0 0 0 0 0 0 0 0 0-6.4 6.4 0 6.4 0 0 0 6.4 6.4 0 6.4C563.2 428.8 550.4 480 531.2 531.2c38.4 0 76.8 0 108.8 0C646.4 531.2 652.8 537.6 646.4 544z" p-id="2824"></path></svg>
            </template>
        </g-icon>
        <g-icon height="40px" width="40px" spin>
            <template #icon>
                <svg t="1737471685240" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2823"><path d="M742.4 377.6c-44.8-70.4-12.8-140.8-25.6-140.8-25.6 0-57.6 57.6-57.6 57.6s-38.4-44.8-6.4-108.8c12.8-25.6 32-51.2 25.6-57.6-6.4-12.8-140.8-6.4-256 64C275.2 294.4 147.2 512 211.2 697.6c96 262.4 499.2 268.8 601.6 6.4C864 556.8 793.6 454.4 742.4 377.6zM646.4 544C576 627.2 499.2 704 428.8 787.2c-6.4 6.4-12.8 0-12.8-6.4 19.2-57.6 44.8-115.2 64-172.8-32 0-64 0-89.6 0-6.4 0-6.4-6.4-6.4-12.8 64-76.8 128-153.6 192-230.4 0 0 0 0 0 0 0 0 0 0 0 0 0-6.4 6.4 0 6.4 0 0 0 6.4 6.4 0 6.4C563.2 428.8 550.4 480 531.2 531.2c38.4 0 76.8 0 108.8 0C646.4 531.2 652.8 537.6 646.4 544z" p-id="2824"></path></svg>
            </template>
        </g-icon>
        <g-icon height="40px" width="40px" shake>
            <template #icon>
                <svg t="1737471685240" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2823"><path d="M742.4 377.6c-44.8-70.4-12.8-140.8-25.6-140.8-25.6 0-57.6 57.6-57.6 57.6s-38.4-44.8-6.4-108.8c12.8-25.6 32-51.2 25.6-57.6-6.4-12.8-140.8-6.4-256 64C275.2 294.4 147.2 512 211.2 697.6c96 262.4 499.2 268.8 601.6 6.4C864 556.8 793.6 454.4 742.4 377.6zM646.4 544C576 627.2 499.2 704 428.8 787.2c-6.4 6.4-12.8 0-12.8-6.4 19.2-57.6 44.8-115.2 64-172.8-32 0-64 0-89.6 0-6.4 0-6.4-6.4-6.4-12.8 64-76.8 128-153.6 192-230.4 0 0 0 0 0 0 0 0 0 0 0 0 0-6.4 6.4 0 6.4 0 0 0 6.4 6.4 0 6.4C563.2 428.8 550.4 480 531.2 531.2c38.4 0 76.8 0 108.8 0C646.4 531.2 652.8 537.6 646.4 544z" p-id="2824"></path></svg>
            </template>
        </g-icon>
        <g-icon height="40px" width="40px" beat>
            <template #icon>
                <svg t="1737471685240" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2823"><path d="M742.4 377.6c-44.8-70.4-12.8-140.8-25.6-140.8-25.6 0-57.6 57.6-57.6 57.6s-38.4-44.8-6.4-108.8c12.8-25.6 32-51.2 25.6-57.6-6.4-12.8-140.8-6.4-256 64C275.2 294.4 147.2 512 211.2 697.6c96 262.4 499.2 268.8 601.6 6.4C864 556.8 793.6 454.4 742.4 377.6zM646.4 544C576 627.2 499.2 704 428.8 787.2c-6.4 6.4-12.8 0-12.8-6.4 19.2-57.6 44.8-115.2 64-172.8-32 0-64 0-89.6 0-6.4 0-6.4-6.4-6.4-12.8 64-76.8 128-153.6 192-230.4 0 0 0 0 0 0 0 0 0 0 0 0 0-6.4 6.4 0 6.4 0 0 0 6.4 6.4 0 6.4C563.2 428.8 550.4 480 531.2 531.2c38.4 0 76.8 0 108.8 0C646.4 531.2 652.8 537.6 646.4 544z" p-id="2824"></path></svg>
            </template>
        </g-icon>
        <g-icon height="40px" width="40px" type="primary">
            <template #icon>
                <svg t="1737471685240" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2823"><path d="M742.4 377.6c-44.8-70.4-12.8-140.8-25.6-140.8-25.6 0-57.6 57.6-57.6 57.6s-38.4-44.8-6.4-108.8c12.8-25.6 32-51.2 25.6-57.6-6.4-12.8-140.8-6.4-256 64C275.2 294.4 147.2 512 211.2 697.6c96 262.4 499.2 268.8 601.6 6.4C864 556.8 793.6 454.4 742.4 377.6zM646.4 544C576 627.2 499.2 704 428.8 787.2c-6.4 6.4-12.8 0-12.8-6.4 19.2-57.6 44.8-115.2 64-172.8-32 0-64 0-89.6 0-6.4 0-6.4-6.4-6.4-12.8 64-76.8 128-153.6 192-230.4 0 0 0 0 0 0 0 0 0 0 0 0 0-6.4 6.4 0 6.4 0 0 0 6.4 6.4 0 6.4C563.2 428.8 550.4 480 531.2 531.2c38.4 0 76.8 0 108.8 0C646.4 531.2 652.8 537.6 646.4 544z" p-id="2824"></path></svg>
            </template>
        </g-icon>
    </div>
</play-ground>

::: details 查看源代码

```vue
<template>
  <g-icon>
    <template #icon>
      <svg>
        <path d="...此处省略"></path>
      </svg>
    </template>
  </g-icon>
  <g-icon spin>
    <template #icon>
      <svg>
        <path d="...此处省略"></path>
      </svg>
    </template>
  </g-icon>
  <g-icon shake>
    <template #icon>
      <svg>
        <path d="...此处省略"></path>
      </svg>
    </template>
  </g-icon>
  <g-icon beat>
    <template #icon>
      <svg>
        <path d="...此处省略"></path>
      </svg>
    </template>
  </g-icon>
  <g-icon type="primary">
    <template #icon>
      <svg>
        <path d="...此处省略"></path>
      </svg>
    </template>
  </g-icon>
</template>

<script lang="ts" setup>
import { GIcon } from "gxcel-ui";
</script>
```

:::

## Icon API

### Icon 属性

<ag-grid-vue :rowData="iconAPI.data" :columnDefs="iconAPI.headers" style="height: 500px" :tooltipShowDelay="0"></ag-grid-vue>

### Icon 插槽

<ag-grid-vue :rowData="iconSlot.data" :columnDefs="iconSlot.headers" style="height: 500px" :tooltipShowDelay="0"></ag-grid-vue>
