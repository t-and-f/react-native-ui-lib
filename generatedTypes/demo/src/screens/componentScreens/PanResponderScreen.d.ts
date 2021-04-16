import { Component } from 'react';
export default class PanResponderScreen extends Component {
    state: {
        location: {
            left: number;
            top: number;
        };
        isCoupled: boolean;
    };
    switchExample: () => void;
    renderPanListener: () => JSX.Element;
    render(): JSX.Element;
}
