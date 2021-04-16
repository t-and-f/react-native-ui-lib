import _pt from "prop-types";
// TODO: Support style customization
import React, { useCallback, useRef, useMemo, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import Animated from 'react-native-reanimated';
import { onScrollEvent, useValues } from 'react-native-redash';
import { Colors, Spacings } from "../../../src/style";
import View from "../../components/view";
import Fader, { FaderPosition } from "../../components/fader";
import { Constants } from "../../helpers";
import Item from "./Item";
import usePresenter from "./usePresenter";
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const WheelPicker = React.memo(({
  items: propItems,
  itemHeight = 44,
  numberOfVisibleRows = 5,
  activeTextColor,
  inactiveTextColor,
  textStyle,
  onChange,
  style,
  children,
  selectedValue
}) => {
  const scrollView = useRef();
  const [offset] = useValues([0], []);
  const onScroll = onScrollEvent({
    y: offset
  });
  const {
    height,
    items,
    shouldControlComponent,
    index: currentIndex,
    getRowItemAtOffset
  } = usePresenter({
    selectedValue,
    items: propItems,
    children,
    itemHeight,
    preferredNumVisibleRows: numberOfVisibleRows
  });
  const [scrollOffset, setScrollOffset] = useState(currentIndex * itemHeight);
  useEffect(() => {
    controlComponent();
  });
  /**
   * The picker is a controlled component. This means we expect the
   * to relay on `selectedValue` prop to be our
   * source of truth - not the picker current value.
   * This way, you can control disallow or mutate selection of some values.
   */

  const controlComponent = () => {
    if (shouldControlComponent(scrollOffset)) {
      scrollToIndex(currentIndex, true);
    }
  };

  const scrollToPassedIndex = () => {
    scrollToIndex(currentIndex, false);
  };

  const scrollToIndex = (index, animated) => {
    if (scrollView.current?.getNode()) {
      //@ts-ignore for some reason scrollToOffset isn't recognized
      scrollView.current?.getNode()?.scrollToOffset({
        offset: index * itemHeight,
        animated
      });
    }
  };

  const selectItem = useCallback(index => {
    scrollToIndex(index, true);
  }, [itemHeight]);

  const onValueChange = event => {
    setScrollOffset(event.nativeEvent.contentOffset.y);
    const {
      index,
      value
    } = getRowItemAtOffset(event.nativeEvent.contentOffset.y);
    onChange?.(value, index);
  };

  const renderItem = useCallback(({
    item,
    index
  }) => {
    return <Item index={index} itemHeight={itemHeight} offset={offset} activeColor={activeTextColor} inactiveColor={inactiveTextColor} style={textStyle} {...item} onSelect={selectItem} />;
  }, [itemHeight]);

  const separators = () => {
    return <View absF centerV pointerEvents="none">
          <View style={{
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: Spacings.s9,
        borderColor: Colors.grey60
      }} />
        </View>;
  };

  const fader = useMemo(() => position => {
    return <Fader visible position={position} size={60} />;
  }, []);
  return <View style={style}>
        <AnimatedFlatList height={height} data={items} // @ts-ignore reanimated2
    keyExtractor={keyExtractor} scrollEventThrottle={100} onScroll={onScroll} onMomentumScrollEnd={onValueChange} showsVerticalScrollIndicator={false} onLayout={scrollToPassedIndex} // @ts-ignore
    ref={scrollView} contentContainerStyle={{
      paddingVertical: height / 2 - itemHeight / 2
    }} snapToInterval={itemHeight} decelerationRate={Constants.isAndroid ? 0.98 : 'normal'} renderItem={renderItem} />
        {fader(FaderPosition.BOTTOM)}
        {fader(FaderPosition.TOP)}
        {separators()}
      </View>;
});
WheelPicker.propTypes = {
  /**
     * Data source for WheelPicker
     */
  items: _pt.array,

  /**
     * Describe the height of each item in the WheelPicker
     * default value: 44
     */
  itemHeight: _pt.number,

  /**
     * Describe the number of rows visible
     * default value: 5
     */
  numberOfVisibleRows: _pt.number,

  /**
     * Text color for the focused row
     */
  activeTextColor: _pt.string,

  /**
     * Text color for other, non-focused rows
     */
  inactiveTextColor: _pt.string,

  /**
     * Event, on active row change
     */
  onChange: _pt.func,

  /**
     * Support passing items as children props
     */
  children: _pt.oneOfType([_pt.element, _pt.arrayOf(_pt.element)])
};

const keyExtractor = item => `${item.value}`;

export default WheelPicker;