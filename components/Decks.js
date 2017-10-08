import React from 'react';
import { StyleSheet, Text, View, AsyncStorage  } from 'react-native';
import Reactotron from 'reactotron-react-native' 

export default class Decks extends React.Component {

state = {
  Decks: []
}

componentDidMount() {
  AsyncStorage.getAllKeys().then(AllKeys => this.setState({Decks: AllKeys}))
}

//currently not used.
getDecks = () => {
  AsyncStorage.getAllKeys().then(AllKeys => this.setState({Decks: AllKeys}))
}

  render() {
  
  var Decks = this.state.Decks
  Reactotron.log(this.state.Decks)
  
    return (
      <View style = {styles.container}>
      {Decks.map(key => (
        <Text key = {key}> {key}</Text>
      ))
      }
      </View>
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
