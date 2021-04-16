import _ from 'lodash';
import tinycolor from 'tinycolor2';
declare type Schemes = {
    light: {
        [key: string]: string;
    };
    dark: {
        [key: string]: string;
    };
};
export declare class Colors {
    [key: string]: any;
    schemes: Schemes;
    constructor();
    /**
     * Load custom set of colors
     * arguments:
     * colors - map of keys and colors values e.g {dark10: '#20303C', dark20: '#43515C'}
     */
    loadColors(colors: {
        [key: string]: string;
    }): void;
    /**
     * Load set of schemes for light/dark mode
     * arguments:
     * schemes - two sets of map of colors e.g {light: {screen: 'white'}, dark: {screen: 'black'}}
     */
    loadSchemes(schemes: Schemes): void;
    /**
     * Add alpha to hex or rgb color
     * arguments:
     * p1 - hex color / R part of RGB
     * p2 - opacity / G part of RGB
     * p3 - B part of RGB
     * p4 - opacity
     */
    rgba(p1: string, p2: number): string;
    rgba(p1: number, p2: number, p3: number, p4: number): string;
    getBackgroundKeysPattern(): RegExp;
    isEmpty(color: string): boolean;
    getColorTint(color: string, tintKey: string | number): any;
    getColorName(color: string): any;
    getTintedColorForDynamicHex(color: string, tintKey: string | number): string;
    generateColorPalette: ((color: any) => string[]) & _.MemoizedFunction;
    isDark(color: string): boolean;
    isValidHex(string: string): boolean;
    getHexString(color: string): string;
    getHSL(color: string): tinycolor.ColorFormats.HSLA;
    isTransparent(color: string): boolean;
    areEqual(colorA: string, colorB: string): boolean;
}
declare const colorObject: any;
export default colorObject;
