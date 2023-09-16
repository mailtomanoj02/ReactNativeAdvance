import React, {useEffect, useState} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
const Ball = () => {
  const [position, setPosition] = useState(
    new Animated.ValueXY({x: 200, y: 400}),
  );
  console.log(position.getLayout());
  useEffect(() => {
    // setPosition(new Animated.ValueXY({x: 0, y: 0}));
    Animated.spring(position, {
      toValue: {x: 0, y: 0},
      useNativeDriver: false,
    }).start();
  }, []);
  return (
    <Animated.View style={position.getLayout()}>
      <View style={styles.ball} />
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  ball: {
    backgroundColor: 'red',
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'black',
  },
});
export default Ball;
