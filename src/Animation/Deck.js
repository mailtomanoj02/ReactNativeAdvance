import React, {useEffect, useRef, useState} from 'react';
import {Animated, PanResponder, StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const Deck = ({data, renderCard, onSwipeRight, onSwipeLeft, noMoreCards}) => {
  const position = useRef(new Animated.ValueXY()).current;
  const SWIPE_THRESHOLD = 0.25 * width;
  const [index, setIndex] = useState(0);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      position.setValue({x: gestureState.dx, y: gestureState.dy});
    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dx > SWIPE_THRESHOLD) {
        forceSwipe('Right');
      } else if (gestureState.dx < -SWIPE_THRESHOLD) {
        forceSwipe('Left');
      } else {
        resetPosition();
      }
    },
  });

  useEffect(() => {
    if (index >= data.length) {
      setIndex(0);
    }
  }, [data.length, index]);

  const rotate = position.x.interpolate({
    inputRange: [-width * 1.5, 0, width * 1.5],
    outputRange: ['-120deg', '0deg', '120deg'],
  });

  const resetPosition = () => {
    Animated.spring(position, {
      toValue: {x: 0, y: 0},
      useNativeDriver: false,
      duration: 0,
    }).start();
  };

  const forceSwipe = direction => {
    const x = direction === 'Right' ? width : -width;
    Animated.timing(position, {
      toValue: {x, y: 0},
      duration: 250, // Adjust the duration as needed
      useNativeDriver: false,
    }).start(() => onSwipeComplete(direction));
  };

  const onSwipeComplete = direction => {
    const item = data[index];
    direction === 'Right' ? onSwipeRight(item) : onSwipeLeft(item);
    position.setValue({x: 0, y: 0});
    setIndex(index + 1);
  };

  const renderCards = () => {
    if (index >= data.length) {
      return noMoreCards();
    }
    return data
      .map((item, i) => {
        if (i < index) {
          return null;
        }
        if (i === index) {
          return (
            <Animated.View
              key={item.id}
              style={[
                position.getLayout(),
                {transform: [{rotate}]},
                styles.absoluteStyle,
              ]}
              {...panResponder.panHandlers}>
              {renderCard(item, item.id)}
            </Animated.View>
          );
        }
        return (
          <Animated.View
            key={item.id}
            style={[
              styles.absoluteStyle,
              {zIndex: index - data.length, top: 10 * (i - index)},
            ]}>
            {renderCard(item, item.id)}
          </Animated.View>
        );
      })
      .reverse();
  };

  return renderCards();
};

Deck.defaultProps = {
  onSwipeRight: () => {
    console.log('default right');
  },
  onSwipeLeft: () => {
    console.log('default left');
  },
};

const styles = StyleSheet.create({
  Deck: {
    backgroundColor: 'red',
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'black',
  },
  absoluteStyle: {
    position: 'absolute',
    width: width,
  },
});

export default Deck;
