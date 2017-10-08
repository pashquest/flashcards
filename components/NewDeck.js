import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, TextInput, TouchableHighlight, TouchableNativeFeedback  } from 'react-native';
import Reactotron from 'reactotron-react-native' 

export default class NewDeck extends React.Component {

  state = { 
      deckName: ""
  }

  render() {

   const saveData = () => {
      AsyncStorage.setItem(this.state.deckName, this.state.deckName).done();
      // After saving Data it should navigate to the Decks. https://facebook.github.io/react-native/docs/navigation.html
      this.props.navigation.navigate("Decks") 
     // Reactotron.log("SaveData and Navigate")
    }

    const checkData = () => {
          AsyncStorage.getAllKeys().then((AllKeys) => console.log(AllKeys))
          }
  
    return (
    <View style = {styles.container}>

        <TextInput placeholder="Name of your Deckname ?"style= {styles.formInput} onChangeText={(text) => this.setState({deckName: text})} />
        <TouchableHighlight style={styles.button} 
          onPress={() => saveData()}  
          underlayColor="white">
          <Text style={styles.buttonText}> New Deck </Text>
        </TouchableHighlight>

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
  formInput: {
    height: 40, 
    width: 200,
    borderColor: 'gray', 
    borderWidth: 1
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: '#006289',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
});
