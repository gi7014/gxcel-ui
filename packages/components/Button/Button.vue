<script setup lang="ts">
import { ref } from 'vue'
import type { ButtonProps, ButtonEmits, ButtonInstance } from './types'
import { throttle } from 'lodash-es'

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
    nativeType: 'button',
    useThrottle: true,
    throttleDuration: 500
})

const slots = defineSlots()

const emits = defineEmits<ButtonEmits>()

const _ref = ref<HTMLButtonElement>()

const handleBtnClick = (e: MouseEvent) => emits('click', e)
const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration)

defineExpose<ButtonInstance>({
    ref: _ref
})
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
        @click="
            (e: MouseEvent) => 
                useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e)
            "
    >
        <span><slot /></span>
    </component>
</template>

<style>
@import './style.css';
</style>