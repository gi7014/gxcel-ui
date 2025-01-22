export declare const GButton: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        icon: {
            type: import('vue').PropType<string | import('vue').Component>;
        };
        size: {
            type: import('vue').PropType<import('./types').ButtonSize>;
        };
        type: {
            type: import('vue').PropType<import('./types').ButtonType>;
        };
        width: {
            type: import('vue').PropType<string | number>;
        };
        height: {
            type: import('vue').PropType<string | number>;
        };
        circle: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        text: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        tag: {
            type: import('vue').PropType<string | import('vue').Component>;
            default: string;
        };
        nativeType: {
            type: import('vue').PropType<import('./types').NativeType>;
            default: string;
        };
        iconSize: {
            type: import('vue').PropType<import('./types').ButtonIconSize>;
        };
        loadingIcon: {
            type: import('vue').PropType<string | import('vue').Component>;
        };
        animation: {
            type: import('vue').PropType<import('./types').ButtonAnimation>;
            default: string;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        loading: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        plain: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        round: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        autofocus: {
            type: import('vue').PropType<boolean>;
        };
        useThrottle: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        throttleDuration: {
            type: import('vue').PropType<number>;
            default: number;
        };
    }>> & Readonly<{
        onClick?: ((val: MouseEvent) => any) | undefined;
    }>, {
        ref: import('vue').Ref<HTMLButtonElement | void>;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        click: (val: MouseEvent) => void;
    }, import('vue').PublicProps, {
        circle: boolean;
        text: boolean;
        tag: string | import('vue').Component;
        nativeType: import('./types').NativeType;
        animation: import('./types').ButtonAnimation;
        disabled: boolean;
        loading: boolean;
        plain: boolean;
        round: boolean;
        useThrottle: boolean;
        throttleDuration: number;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        icon: {
            type: import('vue').PropType<string | import('vue').Component>;
        };
        size: {
            type: import('vue').PropType<import('./types').ButtonSize>;
        };
        type: {
            type: import('vue').PropType<import('./types').ButtonType>;
        };
        width: {
            type: import('vue').PropType<string | number>;
        };
        height: {
            type: import('vue').PropType<string | number>;
        };
        circle: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        text: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        tag: {
            type: import('vue').PropType<string | import('vue').Component>;
            default: string;
        };
        nativeType: {
            type: import('vue').PropType<import('./types').NativeType>;
            default: string;
        };
        iconSize: {
            type: import('vue').PropType<import('./types').ButtonIconSize>;
        };
        loadingIcon: {
            type: import('vue').PropType<string | import('vue').Component>;
        };
        animation: {
            type: import('vue').PropType<import('./types').ButtonAnimation>;
            default: string;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        loading: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        plain: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        round: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        autofocus: {
            type: import('vue').PropType<boolean>;
        };
        useThrottle: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        throttleDuration: {
            type: import('vue').PropType<number>;
            default: number;
        };
    }>> & Readonly<{
        onClick?: ((val: MouseEvent) => any) | undefined;
    }>, {
        ref: import('vue').Ref<HTMLButtonElement | void>;
    }, {}, {}, {}, {
        circle: boolean;
        text: boolean;
        tag: string | import('vue').Component;
        nativeType: import('./types').NativeType;
        animation: import('./types').ButtonAnimation;
        disabled: boolean;
        loading: boolean;
        plain: boolean;
        round: boolean;
        useThrottle: boolean;
        throttleDuration: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    icon: {
        type: import('vue').PropType<string | import('vue').Component>;
    };
    size: {
        type: import('vue').PropType<import('./types').ButtonSize>;
    };
    type: {
        type: import('vue').PropType<import('./types').ButtonType>;
    };
    width: {
        type: import('vue').PropType<string | number>;
    };
    height: {
        type: import('vue').PropType<string | number>;
    };
    circle: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    text: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    tag: {
        type: import('vue').PropType<string | import('vue').Component>;
        default: string;
    };
    nativeType: {
        type: import('vue').PropType<import('./types').NativeType>;
        default: string;
    };
    iconSize: {
        type: import('vue').PropType<import('./types').ButtonIconSize>;
    };
    loadingIcon: {
        type: import('vue').PropType<string | import('vue').Component>;
    };
    animation: {
        type: import('vue').PropType<import('./types').ButtonAnimation>;
        default: string;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    loading: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    plain: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    round: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    autofocus: {
        type: import('vue').PropType<boolean>;
    };
    useThrottle: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    throttleDuration: {
        type: import('vue').PropType<number>;
        default: number;
    };
}>> & Readonly<{
    onClick?: ((val: MouseEvent) => any) | undefined;
}>, {
    ref: import('vue').Ref<HTMLButtonElement | void>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (val: MouseEvent) => void;
}, string, {
    circle: boolean;
    text: boolean;
    tag: string | import('vue').Component;
    nativeType: import('./types').NativeType;
    animation: import('./types').ButtonAnimation;
    disabled: boolean;
    loading: boolean;
    plain: boolean;
    round: boolean;
    useThrottle: boolean;
    throttleDuration: number;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<Record<string, any>> & Record<string, any>;
}) & import('vue').Plugin;
export declare const GButtonGroup: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        type: {
            type: import('vue').PropType<import('./types').ButtonType>;
        };
        size: {
            type: import('vue').PropType<import('./types').ButtonSize>;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        type: {
            type: import('vue').PropType<import('./types').ButtonType>;
        };
        size: {
            type: import('vue').PropType<import('./types').ButtonSize>;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    type: {
        type: import('vue').PropType<import('./types').ButtonType>;
    };
    size: {
        type: import('vue').PropType<import('./types').ButtonSize>;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
}) & import('vue').Plugin;
export * from './types';
