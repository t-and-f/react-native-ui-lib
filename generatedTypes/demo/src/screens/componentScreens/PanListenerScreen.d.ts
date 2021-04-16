import { Component } from 'react';
import { PanDirectionsProps, PanAmountsProps } from 'react-native-ui-lib';
export default class PanListenerScreen extends Component {
    state: {
        locationText: string;
        endType: string;
    };
    onDrag: ({ directions, deltas }: {
        directions: PanDirectionsProps;
        deltas: PanAmountsProps;
    }) => void;
    onSwipe: ({ directions, velocities }: {
        directions: PanDirectionsProps;
        velocities: PanAmountsProps;
    }) => void;
    onPanStart: () => void;
    onPanRelease: () => void;
    onPanTerminated: () => void;
    render(): JSX.Element;
}
