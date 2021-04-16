import { Component } from 'react';
interface ModalScreenPropTypes {
    componentId: string;
}
interface State {
    currentPage?: number;
}
export default class ModalScreen extends Component<ModalScreenPropTypes, State> {
    static options(): {
        topBar: {
            drawBehind: boolean;
            visible: boolean;
        };
    };
    constructor(props: ModalScreenPropTypes);
    closeScreen(): void;
    render(): JSX.Element;
}
export {};
