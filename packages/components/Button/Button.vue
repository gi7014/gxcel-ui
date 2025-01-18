<script setup lang="ts">
import type { ButtonProps } from './types'
import { ref } from 'vue'
defineOptions({
    name: 'GButton'
})

const props = withDefaults(defineProps<ButtonProps>(), {
    tag: 'button',
    plain: false,
    text: false,
    round: false,
    circle: false,
    loading: false,
    disabled: false,
    nativeType: 'button'
})

const slots = defineSlots()

const _ref = ref<HTMLButtonElement>()
</script>

<template>
    <component
        :is="props.tag"
        ref="_ref"
        class="g-button"
        :type="tag === 'button' ? nativeType : void 0"
        :disabled="disabled || loading ? true : void 0"
        :class="{
            [`g-button--${type}`]: type,
            [`g-button--${size}`]: size,
            'g-button--color': color,
            'is-plain': plain,
            'is-text': text,
            'is-round': round,
            'is-circle': circle,
            'is-loading': loading,
            'is-disabled': disabled
        }"
    >
        <slot></slot>
    </component>
</template>