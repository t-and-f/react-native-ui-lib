import { Component } from 'react';
declare class ScrollBarScreen extends Component {
    state: {
        selectedIndex: number;
    };
    focus: ({ index }: {
        index: any;
    }) => void;
    render(): JSX.Element;
}
export default ScrollBarScreen;
