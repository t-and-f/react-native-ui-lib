import React, { Component } from 'react';
import { CardProps } from 'react-native-ui-lib';
declare type CardsScreenProps = {};
declare type CardsScreenState = {
    selected1: boolean;
    selected2: boolean;
};
export default class CardsScreen extends Component<CardsScreenProps, CardsScreenState> {
    state: {
        selected1: boolean;
        selected2: boolean;
    };
    renderSelectableCards: () => JSX.Element;
    renderTextSection: () => JSX.Element;
    renderText: () => JSX.Element;
    renderHorizontalCard: (isImageOnLeft: boolean, borderRadius: number, useSection: boolean) => JSX.Element;
    renderImageOnBottom: () => JSX.Element;
    renderCoupon: (cardProps: CardProps) => JSX.Element;
    renderCoupons: () => JSX.Element;
    renderComplexImage: (cardProps: CardProps, image: React.ReactNode) => JSX.Element;
    renderComplexImages: () => JSX.Element;
    renderNumbers: () => JSX.Element;
    renderBackgroundCard: (cardProps: CardProps, body: React.ReactNode) => JSX.Element;
    renderComplexExample: () => JSX.Element[];
    renderCustomContent: () => JSX.Element;
    render(): JSX.Element;
}
export {};
