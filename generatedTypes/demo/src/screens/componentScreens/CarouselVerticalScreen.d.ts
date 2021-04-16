import React, { Component } from 'react';
import { Animated } from 'react-native';
interface State {
    numberOfPagesShown: number;
    autoplay: boolean;
}
declare class CarouselVerticalScreen extends Component<{}, State> {
    carousel: React.RefObject<React.ComponentClass<import("../../../..").CarouselProps & {
        useCustomTheme?: boolean | undefined;
    }, any> & import("../../../../generatedTypes/components/carousel").Carousel & {
        pageControlPositions: typeof import("../../../../generatedTypes/components/carousel/types").PageControlPosition;
    }>;
    animatedScrollOffset: Animated.ValueXY;
    constructor(props: {});
    renderAnimatedCounter: () => JSX.Element;
    render(): JSX.Element;
}
export default CarouselVerticalScreen;
