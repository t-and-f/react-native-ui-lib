import { Component } from 'react';
export default class PanDismissibleScreen extends Component {
    state: {
        location: {
            left: number;
            top: number;
        };
        isCoupled: boolean;
        key: boolean;
    };
    switchExample: () => void;
    reset: () => void;
    renderPanListener: () => JSX.Element;
    render(): JSX.Element;
}
