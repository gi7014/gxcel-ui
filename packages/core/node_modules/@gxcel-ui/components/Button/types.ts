import type { Component, Ref, Slot } from "vue";

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type NativeType = 'button' | 'submit' | 'reset';
export type ButtonSize = 'large' | 'default' | 'small';

export interface ButtonProps {
    tag?: string | Component;
    type?: ButtonType;
    nativeType?: NativeType;
    size?: ButtonSize;
    icon?: Slot | string;
    loadingIcon?: Slot | string;
    disabled?: boolean;
    loading?: boolean;
    plain?: boolean;
    round?: boolean;
    circle?: boolean;
    text?: boolean;
    color?: string;
    autofocus?: boolean;
    useThrottle?: boolean;
    throttleDuration?: number;
}

export interface ButtonEmits {
    (e: 'click', val: MouseEvent): void;
}

export interface ButtonInstance {
    ref: Ref<HTMLButtonElement | void>;
}