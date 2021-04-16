import React, { Component } from 'react';
import { Constants } from 'react-native-ui-lib';
interface Props {
}
interface State {
    orientation: typeof Constants.orientation;
    width: number;
    limitShownPages: boolean;
    numberOfPagesShown: number;
    currentPage: number;
    autoplay: boolean;
}
declare class CarouselScreen extends Component<Props, State> {
    carousel: React.RefObject<React.ComponentClass<import("../../../..").CarouselProps & {
        useCustomTheme?: boolean | undefined;
    }, any> & import("../../../../generatedTypes/components/carousel").Carousel & {
        pageControlPositions: typeof import("../../../../generatedTypes/components/carousel/types").PageControlPosition;
    }>;
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    onOrientationChange: () => void;
    getWidth: () => number;
    onChangePage: (currentPage: number) => void;
    onPagePress: (index: number) => void;
    render(): JSX.Element;
}
export default CarouselScreen;
