import React from 'react';
import { StyleSheet, Text, View, AsyncStorage  } from 'react-native';
import Reactotron from 'reactotron-react-native' 

export default class Decks extends React.Component {

state = {
  Decks: []
}

componentDidMount() {
  AsyncStorage.getAllKeys().then(AllKeys => this.setState({Decks: AllKeys}))
  //var testeBasser = this.getDecks()
  //console.log("NAVIGATION", this.props.navigation)
  //his.props.navigation.addListener('focus', this.getDecks())
}

//currently not used.
getDecks = async() => {
  try{
  let keys = await AsyncStorage.getAllKeys().then(AllKeys => this.setState({Decks: AllKeys}))
  }
    catch(error)
  {
    console.log("Error:", error)
  }
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
