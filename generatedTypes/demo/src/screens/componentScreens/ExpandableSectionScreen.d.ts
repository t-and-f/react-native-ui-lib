import { PureComponent } from 'react';
declare class ExpandableSectionScreen extends PureComponent {
    state: {
        expanded: boolean;
        top: boolean;
    };
    onExpand(): void;
    getChevron(): any;
    getHeaderElement(): JSX.Element;
    getBodyElement(): JSX.Element;
    render(): JSX.Element;
}
export default ExpandableSectionScreen;
