<script setup lang="ts">
import { computed } from 'vue'
import type { IconProps } from './types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { omit } from 'lodash-es'

defineOptions({
    name: 'GIcon',
    inheritAttrs: false
})

const props = withDefaults(defineProps<IconProps>(), {
    border: false
})

const slots = defineSlots()

const filterProps = computed(() => omit(props, ['type', 'color', 'width', 'height', 'icon']))

const userCustomStyles = computed(() => ({
    width: props.width || undefined,
    height: props.height || undefined,
    color: props.color || undefined,
    transform: props.rotation ? `rotate(${props.rotation}deg)` : undefined,
}))

</script>

<template>
    <i class="g-icon" :class="[`g-icon--${props.type}`]" v-bind="{ ...$attrs }">
        <font-awesome-icon v-bind="filterProps" v-if="!slots.icon" :icon="props.icon || ''"/>
        <div class="g-icon__icon" :class="{
            [`g-icon__icon--${flip}`]: flip,
            'is-spin': spin,
            'is-border': border,
            'is-pulse': pulse,
            'is-inverse': inverse,
            'is-bounce': bounce,
            'is-shake': shake,
            'is-beat': beat,
            'is-fade': fade,
            'is-beat-fade': beatFade,
        }" :style="userCustomStyles" v-if="slots.icon">
            <slot name="icon"></slot>
        </div>
    </i>
</template>

<style>
@import './style.css';
</style>