export interface colorRGB {
    r: number;
    g: number;
    b: number;
}
export declare function useColorBlender(): {
    hexToRGB: (hex: string) => colorRGB;
    rgbToHex: (rgb: colorRGB) => string;
    mixColors: (hex1: string, hex2: string, weight: number) => string;
};
