import React, { Component } from 'react';
import { TextInput } from 'react-native';
export default class TextFieldScreen extends Component {
    input: React.RefObject<TextInput>;
    input2: React.RefObject<TextInput>;
    state: {
        errorPosition: import("../../../../generatedTypes/incubator/TextField/types").ValidationMessagePosition;
        shouldDisable: boolean;
        value: string;
        searching: boolean;
    };
    componentDidMount(): void;
    resetFieldValue: () => void;
    renderTrailingAccessory(): JSX.Element;
    render(): JSX.Element;
}
