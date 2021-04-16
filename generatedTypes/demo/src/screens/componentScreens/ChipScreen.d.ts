import { Component } from 'react';
export default class ChipScreen extends Component {
    colors: {
        value: string;
        label: string;
    }[];
    state: {
        showDialog: boolean;
        selectedValue: string;
    };
    toggleDialog: (showDialog: boolean) => void;
    openDialog: () => void;
    closeDialog: () => void;
    onSelect: (itemValue: string) => void;
    renderItem: ({ item: color }: {
        item: any;
    }) => JSX.Element;
    renderContent: () => JSX.Element;
    renderPickerDialog: () => JSX.Element;
    renderExample: (text: string, chip: JSX.Element) => JSX.Element;
    render(): JSX.Element;
}
