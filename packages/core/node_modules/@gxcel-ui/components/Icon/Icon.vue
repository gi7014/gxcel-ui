<script setup lang="ts">
import { computed } from 'vue'
import type { IconProps } from './types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { omit } from 'lodash-es'

defineOptions({
    name: 'GIcon',
    inheritAttrs: false
})

const props = defineProps<IconProps>()

const slots = defineSlots()

const filterProps = computed(() => omit(props, ['type', 'color', 'width', 'height']))

const customStyles = computed(() => ({
    color: props.color || undefined,
    width: props.width || undefined,
    height: props.height || undefined
}))

</script>

<template>
    <i class="g-icon" :class="[`g-icon--${props.type}`]" :style="customStyles"
        v-bind="{ ...$attrs }">
        <font-awesome-icon v-bind="filterProps" v-if="!slots.icon"/>
        <slot name="icon"></slot>
    </i>
</template>

<style>
@import './style.css';
</style>