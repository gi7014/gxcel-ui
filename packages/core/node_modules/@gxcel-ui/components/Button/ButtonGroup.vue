<script setup lang="ts">
import { provide, reactive, toRef } from 'vue'
import type { ButtonGroupProps } from './types'
import { BUTTON_GROUP_KEY } from './contants'

defineOptions({
    name: 'GButtonGroup'
})

const props = defineProps<ButtonGroupProps>()

provide(
    BUTTON_GROUP_KEY,
    reactive({
        size: toRef(props, 'size'),
        type: toRef(props, 'type')
    })
)
</script>

<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>

<style scoped>
@import '../ButtonGroup/style.css';
</style>