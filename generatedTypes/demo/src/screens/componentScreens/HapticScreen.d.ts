import { Component } from 'react';
export default class HapticScreen extends Component {
    onPress: ({ method }: {
        method: string;
    }) => void;
    render(): JSX.Element;
}
