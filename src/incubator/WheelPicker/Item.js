import React, { useCallback, useMemo } from 'react';
import Animated, { interpolateColors } from 'react-native-reanimated';
import Text from "../../components/text";
import TouchableOpacity from "../../components/touchableOpacity";
import { Colors } from "../../../src/style";
const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);
const AnimatedText = Animated.createAnimatedComponent(Text);
export default (({
  index,
  label,
  itemHeight,
  onSelect,
  offset,
  activeColor = Colors.primary,
  inactiveColor = Colors.grey20,
  style
}) => {
  const selectItem = useCallback(() => onSelect(index), [index]);
  const itemOffset = index * itemHeight;
  const color = useMemo(() => {
    return interpolateColors(offset, {
      inputRange: [itemOffset - itemHeight, itemOffset, itemOffset + itemHeight],
      outputColorRange: [inactiveColor, activeColor, inactiveColor]
    });
  }, [itemHeight]);
  return <AnimatedTouchableOpacity activeOpacity={1} style={{
    height: itemHeight
  }} key={index} center onPress={selectItem} // @ts-ignore reanimated2
  index={index}>
      {
      /* @ts-ignore reanimated2*/
    }
      <AnimatedText text60R style={{
      color,
      ...style
    }}>
        {label}
      </AnimatedText>
    </AnimatedTouchableOpacity>;
});