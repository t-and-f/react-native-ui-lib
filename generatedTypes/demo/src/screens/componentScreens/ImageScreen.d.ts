import { Component } from 'react';
declare enum SizeType {
    None = "",
    Fixed = "50",
    Percentage = "50%"
}
declare class ImageScreen extends Component {
    state: {
        cover: boolean;
        showOverlayContent: boolean;
        overlayType: string;
        margin: number;
        showErrorImage: boolean;
        showSvg: boolean;
        isFile: boolean;
        sizeType: SizeType;
    };
    renderOverlayContent(): JSX.Element | undefined;
    renderImage(): JSX.Element;
    renderSvgImage(): JSX.Element;
    renderOptions(): JSX.Element;
    renderSvgOptions(): JSX.Element;
    render(): JSX.Element;
}
export default ImageScreen;
