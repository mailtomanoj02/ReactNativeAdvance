/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Deck from './src/Animation/Deck';
import {Card, Button} from '@rneui/themed';

const DATA = [
  {
    id: 1,
    text: 'Card #1',
    uri: require('/Users/dev/ReactNativeAdvance/src/Images/card1.jpg'),
  },
  {
    id: 2,
    text: 'Card #2',
    uri: require('/Users/dev/ReactNativeAdvance/src/Images/card2.jpg'),
  },
  {
    id: 3,
    text: 'Card #3',
    uri: require('/Users/dev/ReactNativeAdvance/src/Images/card3.jpg'),
  },
  {
    id: 4,
    text: 'Card #4',
    uri: require('/Users/dev/ReactNativeAdvance/src/Images/card4.jpg'),
  },
  {
    id: 5,
    text: 'Card #5',
    uri: require('/Users/dev/ReactNativeAdvance/src/Images/card5.jpg'),
  },
  {
    id: 6,
    text: 'Card #6',
    uri: require('/Users/dev/ReactNativeAdvance/src/Images/card6.jpg'),
  },
  {
    id: 7,
    text: 'Card #7',
    uri: require('/Users/dev/ReactNativeAdvance/src/Images/card7.jpg'),
  },
  {
    id: 8,
    text: 'Card #8',
    uri: require('/Users/dev/ReactNativeAdvance/src/Images/card3.jpg'),
  },
];
const App = () => {
  const renderCard = (item, key) => {
    return (
      <Card key={key}>
        <Card.Title>{item.text}</Card.Title>
        <Card.Image source={item.uri} />
        <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
          I can customize the card
        </Text>
        <Button title={'View Now!!'} containerStyle={styles.buttonStyle} />
      </Card>
    );
  };

  const noMoreCards = () => {
    return (
      <Card>
        <Card.Title>HEY NO MORE CARDS!!</Card.Title>
        <Text style={{textAlign: 'center', fontWeight: 'bold'}}>I am done</Text>
        <Button title={'Get More !!'} containerStyle={styles.buttonStyle} />
      </Card>
    );
  };
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Deck
        data={DATA}
        renderCard={renderCard}
        onSwipeRight={() => console.log('the swipe right is completed')}
        onSwipeLeft={() => console.log('the swipe left is completed')}
        noMoreCards={noMoreCards}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {flex: 1},
  buttonStyle: {
    width: 200,
    alignSelf: 'center',
    marginTop: 5,
  },
});

export default App;
