import { Component } from 'react';
export default class TabBarScreen extends Component {
    state: {
        selectedIndex: number;
        selectedIndex1: number;
        selectedIndex2: number;
        labels: string[];
        currentTabs: never[];
        themeColor: string;
    };
    counter: number;
    colorCounter: number;
    tabbar: any;
    /** Index change */
    changeIndex: () => void;
    /** Labels change */
    count(): void;
    changeLabels: () => void;
    /** Colors change */
    countColors(): void;
    changeColors: () => void;
    /** Children Count change */
    addTab: () => void;
    removeTab: () => void;
    /** Actions */
    getTabs(showAddTab: boolean): JSX.Element[];
    /** Renders */
    renderTabs(tab: any): JSX.Element;
    renderAddTabsTab(): JSX.Element;
    render(): JSX.Element;
}
