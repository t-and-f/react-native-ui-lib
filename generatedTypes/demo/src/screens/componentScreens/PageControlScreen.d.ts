import { Component } from 'react';
export default class PageControlScreen extends Component {
    state: {
        currentPage: number;
        limitShownPages: boolean;
        numberOfPagesShown: number;
    };
    prevPage: () => void;
    nextPage: () => void;
    onPagePress: (index: number) => void;
    render(): JSX.Element;
}
