import { Component } from 'react';
interface State {
    showButton: boolean;
    showSecondary: boolean;
}
export default class FloatingButtonScreen extends Component<{}, State> {
    state: {
        showButton: boolean;
        showSecondary: boolean;
    };
    notNow: () => void;
    close: () => void;
    render(): JSX.Element;
}
export {};
