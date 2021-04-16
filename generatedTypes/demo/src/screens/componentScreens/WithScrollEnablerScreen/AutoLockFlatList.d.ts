import React from 'react';
import { LayoutChangeEvent } from 'react-native';
import { WithScrollEnablerProps } from 'react-native-ui-lib';
export declare type AutoLockScrollViewProps = WithScrollEnablerProps & {
    horizontal?: boolean;
    numberOfItems: number;
    onContentSizeChange: (contentWidth: number, contentHeight: number) => void;
    onLayout: (event: LayoutChangeEvent) => void;
};
declare const _default: React.NamedExoticComponent<never>;
export default _default;
