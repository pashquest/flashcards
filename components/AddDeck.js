import React, { Component } from 'react'
import { Text,View,TextInput,TouchableHighlight, StyleSheet, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { addDeck } from "../actions/index"
import { saveNewDeck } from "../utils/api"

class CreateDeck extends Component {
    state = {   
        deckTitle: ''
    }

    submit = () => {
            saveNewDeck(this.state.deckTitle);
            this.props.navigation.navigate("ListDecks") 
    }

    render() {
        //only Used in DEV Mode, to clean up the storage
        const clearData = () => AsyncStorage.clear()

        return (
            <View style={styles.container}>
                <Text style={styles.headline}>Title of the new Deck ?</Text>

                <TextInput
                    style={ styles.inputStyle}
                    placeholder='Enter Decktitle here'
                    onChangeText={(title) => this.setState({ deckTitle: title })    }
                    value={this.state.deckTitle}
                />

                <TouchableHighlight style={styles.button} onPress={() => this.submit()}>
                    <Text style={styles.buttonText}> Add new Deck </Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.buttonRed} onPress={() => clearData()}>
                    <Text style={styles.buttonText}> clearStorage </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    headline: {
        paddingBottom:50,
        fontSize: 30,
        alignItems: 'center',
        textAlign: 'center'
    },
    inputStyle: {
        alignSelf: 'stretch',
        height: 20,
        fontSize: 20
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
    buttonRed: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'red',
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
    }
});

function mapStateToProps(state) {
    return {
        decks: state
    }
}

export default connect(mapStateToProps)(CreateDeck);
