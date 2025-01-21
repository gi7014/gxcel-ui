---
outline: deep
---

<script setup>
import { reactive } from 'vue'
import { GButton, GIcon } from 'gxcel-ui'
import { AgGridVue } from "ag-grid-vue3"
import PlayGround from '../vue-components/PlayGround.vue'
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'

ModuleRegistry.registerModules([AllCommunityModule])

const buttons = reactive([
  { type: '', text: 'Plain' },
  { type: 'primary', text: 'Primary' },
  { type: 'success', text: 'Success' },
  { type: 'info', text: 'Info' },
  { type: 'warning', text: 'Warning' },
  { type: 'danger', text: 'Danger' },
])

const buttonAPI = reactive({
    headers: [
        { field:"attribution", headerName: "属性名" },
        { field:"description", headerName: "说明" },
        { field:"type", headerName: "类型", tooltipValueGetter: (params) => {
            if (params.data.toolTip) return params.data.toolTip
        }},
        { field:"default", headerName: "默认值" },
    ],
    data: [
        { attribution:"tag", description:"自定义元素标签", type:"string / Component", default:"button" },
        { attribution:"type", description:"按钮类型", type:"enum", default:"-", toolTip: '"primary" | "success" | "warning" | "danger" | "info"'},
        { attribution:"plain", description:"是否为朴素按钮", type:"boolean", default:"false" },
        { attribution:"text", description:"是否为文字按钮", type:"boolean", default:"false" },
        { attribution:"round", description:"是否为圆角按钮", type:"boolean", default:"false" },
        { attribution:"circle", description:"是否为圆形按钮", type:"boolean", default:"false" },
        { attribution:"loading", description:"是否为加载中状态", type:"boolean", default:"false" },
        { attribution:"loading-icon", description:"自定义加载中状态图标组件", type:"string / Component", default:"-" },
        { attribution:"disabled", description:"按钮是否为禁用状态", type:"boolean", default:"false" },
        { attribution:"useThrottle", description:"是否启用节流模式", type:"boolean", default:"true" },
        { attribution:"throttleDuration", description:"节流时间", type:"number", default:"500" },
        { attribution:"icon", description:"图标组件", type:"string / Component", default:"-" },
        { attribution:"icon-size", description:"图标大小", type:"enum", default:"1x", toolTip: '请参照Icon组件的size属性' },
        { attribution:"width", description:"按钮宽度", type:"string | number", default:"-" },
        { attribution:"height", description:"按钮高度", type:"string | number", default:"-" },
        { attribution:"icon-size", description:"图标大小", type:"enum", default:"1x", toolTip: '请参照Icon组件的size属性' },
        { attribution:"animation", description:"按钮动画", type:"enum", default:"scale", toolTip: '"scale" | "heartbeat" | "fly"' },
        { attribution:"autofocus", description:"原生autofocus属性", type:"boolean", default:"-" },
        { attribution:"native-type", description:"原生type属性", type:"enum", default:"-", toolTip: '"button" | "submit" | "reset"'},
    ]
})

const buttonSlot = reactive({
    headers: [
        { field:"attribution", headerName: "插槽名" },
        { field:"description", headerName: "说明", flex: 1 },
    ],
    data: [
        { attribution:"default", description:"自定义默认内容" },
        { attribution:"loading", description:"自定义加载中组件" },
        { attribution:"icon", description:"自定义图标组件" }
    ]
})

const buttonExpose = reactive({
    headers: [
        { field:"attribution", headerName: "属性名" },
        { field:"description", headerName: "说明", flex: 1 },
        { field:"type", headerName: "类型", tooltipValueGetter: (params) => {
            if (params.data.toolTip) return params.data.toolTip
        }},
    ],
    data: [
        { attribution:"ref", description:"按钮 html 元素", type: "object", toolTip: "Ref<HTMLButtonElement>"}
    ]
})
</script>

<style>
html {
  scroll-behavior: smooth;
}
.in-content {
  margin: 14px 0;
}
</style>

# Button 按钮

常用的操作按钮。

## 基础用法

使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。

<play-ground>
  <div class="in-content">
      <g-button>Default</g-button>
      <g-button type="primary">Primary</g-button>
      <g-button type="success">Success</g-button>
      <g-button type="info">Info</g-button>
      <g-button type="warning">Warning</g-button>
      <g-button type="danger">Danger</g-button>
  </div>
  <div class="in-content">
      <g-button plain>Plain</g-button>
      <g-button type="primary" plain>Primary</g-button>
      <g-button type="success" plain>Success</g-button>
      <g-button type="info" plain>Info</g-button>
      <g-button type="warning" plain>Warning</g-button>
      <g-button type="danger" plain>Danger</g-button>
  </div>
  <div class="in-content">
      <g-button round>Round</g-button>
      <g-button type="primary" round>Primary</g-button>
      <g-button type="success" round>Success</g-button>
      <g-button type="info" round>Info</g-button>
      <g-button type="warning" round>Warning</g-button>
      <g-button type="danger" round>Danger</g-button>
  </div>
  <div class="in-content">
      <g-button icon="search" circle />
      <g-button type="primary" icon="edit" circle />
      <g-button type="success" icon="check" circle />
      <g-button type="info" icon="message" circle />
      <g-button type="warning" icon="star" circle />
      <g-button type="danger" icon="trash" circle />
  </div>
</play-ground>

::: details 查看源代码

```vue
<template>
  <div>
    <g-button>Default</g-button>
    <g-button type="primary">Primary</g-button>
    <g-button type="success">Success</g-button>
    <g-button type="info">Info</g-button>
    <g-button type="warning">Warning</g-button>
    <g-button type="danger">Danger</g-button>
    <br />
    <g-button plain>Plain</g-button>
    <g-button type="primary" plain>Primary</g-button>
    <g-button type="success" plain>Success</g-button>
    <g-button type="info" plain>Info</g-button>
    <g-button type="warning" plain>Warning</g-button>
    <g-button type="danger" plain>Danger</g-button>
    <br />
    <g-button round>Round</g-button>
    <g-button type="primary" round>Primary</g-button>
    <g-button type="success" round>Success</g-button>
    <g-button type="info" round>Info</g-button>
    <g-button type="warning" round>Warning</g-button>
    <g-button type="danger" round>Danger</g-button>
    <br />
    <g-button icon="search" circle />
    <g-button type="primary" icon="edit" circle />
    <g-button type="success" icon="check" circle />
    <g-button type="info" icon="message" circle />
    <g-button type="warning" icon="star" circle />
    <g-button type="danger" icon="trash" circle />
  </div>
</template>

<script lang="ts" setup>
import { GButton } from "gxcel-ui";
</script>
```

:::

## 禁用状态

你可以使用 `disabled` 属性来定义按钮是否被禁用。

使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `Boolean` 类型的值。

<play-ground>
  <div class="in-content">
      <g-button disabled>Default</g-button>
      <g-button type="primary" disabled>Primary</g-button>
      <g-button type="success" disabled>Success</g-button>
      <g-button type="info" disabled>Info</g-button>
      <g-button type="warning" disabled>Warning</g-button>
      <g-button type="danger" disabled>Danger</g-button>
  </div>
  <div class="in-content">
      <g-button plain disabled>Plain</g-button>
      <g-button type="primary" plain disabled>Primary</g-button>
      <g-button type="success" plain disabled>Success</g-button>
      <g-button type="info" plain disabled>Info</g-button>
      <g-button type="warning" plain disabled>Warning</g-button>
      <g-button type="danger" plain disabled>Danger</g-button>
  </div>
</play-ground>

::: details 查看源代码

```vue
<template>
  <div>
    <g-button disabled>Default</g-button>
    <g-button type="primary" disabled>Primary</g-button>
    <g-button type="success" disabled>Success</g-button>
    <g-button type="info" disabled>Info</g-button>
    <g-button type="warning" disabled>Warning</g-button>
    <g-button type="danger" disabled>Danger</g-button>
    <br />
    <g-button plain disabled>Plain</g-button>
    <g-button type="primary" plain disabled>Primary</g-button>
    <g-button type="success" plain disabled>Success</g-button>
    <g-button type="info" plain disabled>Info</g-button>
    <g-button type="warning" plain disabled>Warning</g-button>
    <g-button type="danger" plain disabled>Danger</g-button>
  </div>
</template>

<script lang="ts" setup>
import { GButton } from "gxcel-ui";
</script>
```

:::

## 文字按钮

没有边框和背景色的按钮。

<play-ground>
    <p>基础文字按钮</p>
    <div class="in-content">
        <g-button
            v-for="button in buttons"
            :key="button.type"
            :type="button.type"
            text
        >
            {{ button.text }}
        </g-button>
    </div>
      <p>禁用文字按钮</p>
    <div class="in-content">
        <g-button
            v-for="button in buttons"
            :key="button.type"
            :type="button.type"
            text
            disabled
        >
            {{ button.text }}
        </g-button>
    </div>
</play-ground>

::: details 查看源代码

```vue
<template>
  <p>基础文字按钮</p>
  <div>
    <g-button
      v-for="button in buttons"
      :key="button.type"
      :type="button.type"
      text
    >
      {{ button.text }}
    </g-button>
  </div>
  <p>禁用文字按钮</p>
  <div>
    <g-button
      v-for="button in buttons"
      :key="button.type"
      :type="button.type"
      text
      disabled
    >
      {{ button.text }}
    </g-button>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { GButton } from "gxcel-ui";

const buttons = reactive([
  { type: "", text: "plain" },
  { type: "primary", text: "primary" },
  { type: "success", text: "success" },
  { type: "info", text: "info" },
  { type: "warning", text: "warning" },
  { type: "danger", text: "danger" },
]);
</script>
```

:::

## 图标按钮

使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。

使用 `icon` 属性来为按钮添加图标。 您可以在我们的 `Icon` 组件或 [fontawesome](https://fontawesome.com.cn/v5) 图标库中找到所需图标。

<play-ground>
  <div class="in-content">
      <g-button type="primary" icon="edit" />
      <g-button type="primary" icon="share" />
      <g-button type="primary" icon="trash" />
      <g-button type="primary" icon="search">Search</g-button>
      <g-button type="primary">
          Upload
          <template #icon>
              <g-icon icon="upload" style="margin-left: 6px;" />
          </template>
      </g-button>
  </div>
</play-ground>

::: details 查看源代码

```vue
<template>
  <div>
    <g-button type="primary" icon="edit" />
    <g-button type="primary" icon="share" />
    <g-button type="primary" icon="trash" />
    <g-button type="primary" icon="search">Search</g-button>
    <g-button type="primary">
      Upload
      <template #icon>
        <g-icon icon="upload" style="margin-left: 6px;" />
      </template>
    </g-button>
  </div>
</template>

<script lang="ts" setup>
import { GButton, GIcon } from "gxcel-ui";
</script>
```

:::

## 加载状态按钮

点击按钮来加载数据，并向用户反馈加载状态。

通过设置 `loading` 属性为 `true` 来显示加载中状态。

::: tip

您可以使用 `loading` 插槽或 `loadingIcon` 属性自定义您的 loading 图标

:::

<play-ground>
  <div class="in-content">
      <g-button type="primary" loading>Loading</g-button>
      <g-button type="primary" loading-icon="rotate-right" loading>Loading</g-button>
      <g-button type="primary" loading>
          Loading
          <template #loading>
              <div class="custom-loading">
                  <g-icon icon="heart" spin/>
              </div>
          </template>
      </g-button>
  </div>
</play-ground>

<style>
.g-button {
    .custom-loading {
        margin-right: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>

::: details 查看源代码

```vue
<template>
  <div>
    <g-button type="primary" loading>Loading</g-button>
    <g-button type="primary" loading-icon="rotate-right" loading
      >Loading</g-button
    >
    <g-button type="primary" loading>
      Loading
      <template #loading>
        <div class="custom-loading">
          <g-icon icon="heart" spin />
        </div>
      </template>
    </g-button>
  </div>
</template>

<script lang="ts" setup>
import { GButton, GIcon } from "gxcel-ui";
</script>

<style scoped>
.g-button {
  .custom-loading {
    margin-right: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
```

:::

## 调整尺寸

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。
考虑到特殊要求，您也可以自定义按钮的尺寸。

使用 `size` 属性额外配置尺寸，可使用 `large` 和 `small` 两种值。
使用 `width` 和 `height` 属性可以分别设置按钮宽度和高度。

<play-ground>
  <div class="in-content">
      <g-button size="large">Large</g-button>
      <g-button>Default</g-button>
      <g-button size="small">Small</g-button>
      <g-button size="large" icon="search">Large</g-button>
      <g-button icon="search">Default</g-button>
      <g-button size="small" icon="search">Small</g-button>
  </div>
  <div class="in-content">
      <g-button size="large" round>Large</g-button>
      <g-button round>Default</g-button>
      <g-button size="small" round>Small</g-button>
      <g-button size="large" icon="search" round>Large</g-button>
      <g-button icon="search" round>Default</g-button>
      <g-button size="small" icon="search" round>Small</g-button>
  </div>
  <div class="in-content">
      <g-button size="large" icon="search" circle></g-button>
      <g-button icon="search" circle></g-button>
      <g-button size="small" icon="search" circle></g-button>
  </div>
  <div class="in-content">
      <g-button width="200px" height="40px">Width + Height</g-button>
  </div>
</play-ground>

::: details 查看源代码

```vue
<template>
  <div>
    <g-button size="large">Large</g-button>
    <g-button>Default</g-button>
    <g-button size="small">Small</g-button>
    <g-button size="large" icon="search">Large</g-button>
    <g-button icon="search">Default</g-button>
    <g-button size="small" icon="search">Small</g-button>
    <br />
    <g-button size="large" round>Large</g-button>
    <g-button round>Default</g-button>
    <g-button size="small" round>Small</g-button>
    <g-button size="large" icon="search" round>Large</g-button>
    <g-button icon="search" round>Default</g-button>
    <g-button size="small" icon="search" round>Small</g-button>
    <br />
    <g-button size="large" icon="search" circle></g-button>
    <g-button icon="search" circle></g-button>
    <g-button size="small" icon="search" circle></g-button>
    <br />
    <g-button width="200px" height="40px">Width + Height</g-button>
  </div>
</template>

<script lang="ts" setup>
import { GButton, GIcon } from "gxcel-ui";
</script>
```

:::

## Button API

### Button 属性

<ag-grid-vue :rowData="buttonAPI.data" :columnDefs="buttonAPI.headers" style="height: 500px" :tooltipShowDelay="0"></ag-grid-vue>

### Button 插槽

<ag-grid-vue :rowData="buttonSlot.data" :columnDefs="buttonSlot.headers" style="height: 500px" :tooltipShowDelay="0"></ag-grid-vue>

### Button Expose

<ag-grid-vue :rowData="buttonExpose.data" :columnDefs="buttonExpose.headers" style="height: 500px" :tooltipShowDelay="0"></ag-grid-vue>
