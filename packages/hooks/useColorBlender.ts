export function useColorBlender() {
  interface colorRGB {
    r: number;
    g: number;
    b: number;
  }

  const hexToRGB = (hex: string): colorRGB => {
    hex = hex.replace(/^#/, "");
    if (hex.length === 3) {
      hex = hex
        .split("")
        .map((h) => h + h)
        .join("");
    }
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  };

  const rgbToHex = (rgb: colorRGB): string => {
    return `#${((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b)
      .toString(16)
      .slice(1)
      .toUpperCase()}`;
  };

  const mixColors = (hex1: string, hex2: string, weight: number): string => {
    const rgb1 = hexToRGB(hex1);
    const rgb2 = hexToRGB(hex2);
    const r = Math.round(rgb1.r * (1 - weight) + rgb2.r * weight);
    const g = Math.round(rgb1.g * (1 - weight) + rgb2.g * weight);
    const b = Math.round(rgb1.b * (1 - weight) + rgb2.b * weight);
    const rgb = { r, g, b };
    return rgbToHex(rgb);
  }

  return {
    hexToRGB,
    rgbToHex,
    mixColors
  };
}
