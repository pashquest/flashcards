import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import NewDeck from './components/NewDeck'
import Decks from './components/Decks'
import './ReactotronConfig'
import Reactotron from 'reactotron-react-native' // To use specfiic Method from Reactotron


//TabNavigator
const Tabs = TabNavigator({
    Decks:{
      screen: Decks
    },
    NewDeck: {
      screen: NewDeck
    }
  })

export default class App extends React.Component {
  render() {
    return (
      <Tabs />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
