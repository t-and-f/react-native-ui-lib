import { Component } from 'react';
import { LayoutChangeEvent } from 'react-native';
declare class WithScrollEnablerScreen extends Component {
    state: {
        isListView: boolean;
        isHorizontal: boolean;
        numberOfItems: number;
        contentWidth: undefined;
        contentHeight: undefined;
        layoutWidth: undefined;
        layoutHeight: undefined;
    };
    onContentSizeChange: (contentWidth: number, contentHeight: number) => void;
    onLayout: ({ nativeEvent: { layout: { width, height } } }: LayoutChangeEvent) => void;
    renderList: () => JSX.Element;
    renderData: () => JSX.Element;
    renderOptions: () => JSX.Element;
    render(): JSX.Element;
}
export default WithScrollEnablerScreen;
