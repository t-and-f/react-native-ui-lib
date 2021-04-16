import React, { PureComponent } from 'react';
import { ImageSourcePropType, ImageStyle, StyleProp, TextStyle, TouchableOpacityProps, ViewStyle, ViewProps } from 'react-native';
declare const LABEL_FORMATTER_VALUES: readonly [1, 2, 3, 4];
export declare enum BADGE_SIZES {
    pimpleSmall = 6,
    pimpleBig = 10,
    pimpleHuge = 14,
    small = 16,
    default = 20,
    large = 24
}
declare type LabelFormatterValues = typeof LABEL_FORMATTER_VALUES[number];
export declare type BadgeSizes = keyof typeof BADGE_SIZES;
export declare type BadgeProps = ViewProps & TouchableOpacityProps & {
    /**
     * Text to show inside the badge.
     * Not passing a label (undefined) will present a pimple badge.
     */
    label?: string;
    /**
     * Color of the badge background
     */
    backgroundColor?: string;
    /**
     * the badge size (default, small)
     */
    size?: BadgeSizes | number;
    /**
     * Press handler
     */
    onPress?: (props: any) => void;
    /**
     * Defines how far a touch event can start away from the badge.
     */
    hitSlop?: ViewProps['hitSlop'];
    /**
     * width of border around the badge
     */
    borderWidth?: number;
    /**
     * radius of border around the badge
     */
    borderRadius?: number;
    /**
     * color of border around the badge
     */
    borderColor?: ImageStyle['borderColor'];
    /**
     * Additional styles for the top container
     */
    containerStyle?: StyleProp<ViewStyle>;
    /**
     * Additional styles for the badge label
     */
    labelStyle?: TextStyle;
    /**
     * Receives a number from 1 to 4, representing the label's max digit length.
     * Beyond the max number for that digit length, a "+" will show at the end.
     * If set to a value not included in LABEL_FORMATTER_VALUES, no formatting will occur.
     * Example: labelLengthFormater={2}, label={124}, label will present "99+".
     */
    labelFormatterLimit?: LabelFormatterValues;
    /**
     * Renders an icon badge
     */
    icon?: ImageSourcePropType;
    /**
     * Additional styling to badge icon
     */
    iconStyle?: object;
    /**
     * Additional props passed to icon
     */
    iconProps?: object;
    /**
     * Custom element to render instead of an icon
     */
    customElement?: JSX.Element;
    /**
     * Use to identify the badge in tests
     */
    testId?: string;
};
/**
 * @description: Round colored badge, typically used to show a number
 * @extends: Animatable.View
 * @extendsLink: https://github.com/oblador/react-native-animatable
 * @image: https://user-images.githubusercontent.com/33805983/34480753-df7a868a-efb6-11e7-9072-80f5c110a4f3.png
 * @example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/BadgesScreen.tsx
 */
declare class Badge extends PureComponent<BadgeProps> {
    styles: ReturnType<typeof createStyles>;
    static displayName: string;
    constructor(props: BadgeProps);
    get size(): number | "small" | "default" | "pimpleSmall" | "pimpleBig" | "pimpleHuge" | "large";
    getAccessibilityProps(): {
        accessible: boolean;
        accessibilityRole: string;
        accessibilityLabel: string | undefined;
    };
    isSmallBadge(): boolean;
    getBadgeSizeStyle(): any;
    getFormattedLabel(): any;
    getBorderStyling(): ViewStyle;
    renderLabel(): JSX.Element | undefined;
    renderCustomElement(): JSX.Element | undefined;
    renderIcon(): 0 | JSX.Element | undefined;
    render(): JSX.Element;
}
declare function createStyles(props: BadgeProps): {
    badge: {
        alignSelf: "flex-start";
        borderRadius: any;
        backgroundColor: any;
        alignItems: "center";
        justifyContent: "center";
        overflow: "hidden";
    };
    label: any;
    labelSmall: any;
};
export { Badge };
declare const _default: React.ComponentClass<ViewProps & TouchableOpacityProps & {
    /**
     * Text to show inside the badge.
     * Not passing a label (undefined) will present a pimple badge.
     */
    label?: string | undefined;
    /**
     * Color of the badge background
     */
    backgroundColor?: string | undefined;
    /**
     * the badge size (default, small)
     */
    size?: number | "small" | "default" | "pimpleSmall" | "pimpleBig" | "pimpleHuge" | "large" | undefined;
    /**
     * Press handler
     */
    onPress?: ((props: any) => void) | undefined;
    /**
     * Defines how far a touch event can start away from the badge.
     */
    hitSlop?: import("react-native").Insets | undefined;
    /**
     * width of border around the badge
     */
    borderWidth?: number | undefined;
    /**
     * radius of border around the badge
     */
    borderRadius?: number | undefined;
    /**
     * color of border around the badge
     */
    borderColor?: string | typeof import("react-native").OpaqueColorValue | undefined;
    /**
     * Additional styles for the top container
     */
    containerStyle?: StyleProp<ViewStyle>;
    /**
     * Additional styles for the badge label
     */
    labelStyle?: TextStyle | undefined;
    /**
     * Receives a number from 1 to 4, representing the label's max digit length.
     * Beyond the max number for that digit length, a "+" will show at the end.
     * If set to a value not included in LABEL_FORMATTER_VALUES, no formatting will occur.
     * Example: labelLengthFormater={2}, label={124}, label will present "99+".
     */
    labelFormatterLimit?: 1 | 3 | 2 | 4 | undefined;
    /**
     * Renders an icon badge
     */
    icon?: number | import("react-native").ImageURISource | import("react-native").ImageURISource[] | undefined;
    /**
     * Additional styling to badge icon
     */
    iconStyle?: object | undefined;
    /**
     * Additional props passed to icon
     */
    iconProps?: object | undefined;
    /**
     * Custom element to render instead of an icon
     */
    customElement?: JSX.Element | undefined;
    /**
     * Use to identify the badge in tests
     */
    testId?: string | undefined;
} & {
    useCustomTheme?: boolean | undefined;
}, any> & typeof Badge;
export default _default;
