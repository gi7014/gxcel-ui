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

const filterProps = computed(() => omit(props, ['type', 'color']))

const customStyles = computed(() => ({
    color: props.color || undefined
}))

</script>

<template>
    <i class="g-icon" :class="[`g-icon--${props.type}`]" :style="customStyles"
        v-bind="{ ...$attrs }">
        <font-awesome-icon v-bind="filterProps" />
    </i>
</template>

<style>
@import './style.css';
</style>