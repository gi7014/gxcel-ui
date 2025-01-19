import type { Component, Ref } from "vue";

export type ButtonType = "primary" | "success" | "warning" | "danger" | "info";
export type NativeType = "button" | "submit" | "reset";
export type ButtonSize = "large" | "default" | "small";
export type ButtonAnimation = "scale" | "heartbeat" | "fly";
export type ButtonIconSize =
  | "2xs"
  | "xs"
  | "sm"
  | "lg"
  | "xl"
  | "2xl"
  | "1x"
  | "2x"
  | "3x"
  | "4x"
  | "5x"
  | "6x"
  | "7x"
  | "8x"
  | "9x"
  | "10x";

export interface ButtonProps {
  tag?: string | Component;
  type?: ButtonType;
  nativeType?: NativeType;
  size?: ButtonSize;
  icon?: Component | string;
  iconSize?: ButtonIconSize;
  loadingIcon?: Component | string;
  animation?: ButtonAnimation;
  disabled?: boolean;
  loading?: boolean;
  plain?: boolean;
  round?: boolean;
  circle?: boolean;
  text?: boolean;
  autofocus?: boolean;
  useThrottle?: boolean;
  throttleDuration?: number;
  width?: string | number;
  height?: string | number;
}

export interface ButtonEmits {
  (e: "click", val: MouseEvent): void;
}

export interface ButtonInstance {
  ref: Ref<HTMLButtonElement | void>;
}
