<script setup lang="ts">
import type { ButtonProps, ButtonEmits, ButtonInstance } from './types'
import { ref, computed } from 'vue'
import { throttle } from 'lodash-es'
import GIcon from '../Icon/Icon.vue'

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
    throttleDuration: 500,
    animation: 'scale'
})

const slots = defineSlots()

const emits = defineEmits<ButtonEmits>()

const _ref = ref<HTMLButtonElement>()

const iconStyle = computed(() => ({
    marginRight: slots.default ? '6px' : '0px'
}))

const customStyles = computed(() => ({
    width: props.width || undefined,
    height: props.height || undefined,
}))

const handleBtnClick = (e: MouseEvent) => emits('click', e)
const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration)

defineExpose<ButtonInstance>({
    ref: _ref
})
</script>

<template>
    <component ref="_ref" class="g-button" :is="props.tag" :autofocus="autofocus"
        :type="tag === 'button' ? nativeType : void 0" :disabled="disabled || loading ? true : void 0"
        :style="customStyles" :class="{
            [`g-button--${type}`]: type,
            [`g-button--${size}`]: size,
            [`g-button--${animation}`]: animation,
            'is-plain': plain,
            'is-text': text,
            'is-round': round,
            'is-circle': circle,
            'is-loading': loading,
            'is-disabled': disabled
        }" @click="(e: MouseEvent) =>
            useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e)
            ">
        <template v-if="loading && props.animation !== 'fly'">
            <slot name="loading">
                <g-icon class="loading-icon" :style="iconStyle" :icon="loadingIcon ?? 'spinner'" size="1x"
                    spin></g-icon>
            </slot>
        </template>

        <g-icon v-if="icon && (!loading || props.animation === 'fly')" :icon="icon" :size="props.iconSize ?? '1x'"
            :style="iconStyle" />
        <span>
            <slot></slot>
        </span>
    </component>
</template>

<style>
@import './style.css';
</style>