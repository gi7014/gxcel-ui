import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type IconFlip = "horizontal" | "vertical" | "both";
export type IconPull = "left" | "right";
export type IconRotation = 90 | 180 | 270 | "90" | "180" | "270";
export type IconType = "primary" | "success" | "warning" | "danger" | "info";
export type IconSize = "2xs" | "xs" | "sm" | "lg" | "xl" | "2xl" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x";
export interface IconProps {
    border?: boolean;
    fixedWidth?: boolean;
    flip?: IconFlip;
    icon?: object | Array<string> | string | IconDefinition;
    mask?: object | Array<string> | string;
    listItem?: boolean;
    pull?: IconPull;
    pulse?: boolean;
    rotation?: IconRotation;
    swapOpacity?: boolean;
    size?: IconSize;
    spin?: boolean;
    transform?: object | string;
    symbol?: boolean | string;
    title?: string;
    inverse?: boolean;
    bounce?: boolean;
    shake?: boolean;
    beat?: boolean;
    fade?: boolean;
    beatFade?: boolean;
    spinPulse?: boolean;
    spinReverse?: boolean;
    type?: IconType;
    color?: string;
    width?: string | number;
    height?: string | number;
}
