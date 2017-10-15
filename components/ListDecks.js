import React, { Component } from 'react'
import { View, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import { receiveDecks } from '../actions/index'
import Reactotron from 'reactotron-react-native'
//Gute Sehr gute Done 


class ListDecks extends Component {

    componentDidMount() {
        getDecks()
            .then((decks) => this.props.dispatch(receiveDecks(JSON.parse(decks))))
    }

    render() {
        const { decks } = this.props
        const decksObj = Object.keys(decks).map((key) => { 
            return decks[key]
        })
            
        return (
            <View style={styles.container}>
                    <FlatList data={decksObj} renderItem={({item, index}) => 
                        <TouchableOpacity style ={styles.touch} onPress={() => 
                            this.props.navigation.navigate('DeckView', { title: item.title })}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.cardNumber}>{`${item.questions.length} Questions`}</Text>
                         </TouchableOpacity>
                    }
                        keyExtractor={(item, index) => index}
                    />
            </View>
        )
    }
}

function mapStateToProps( state ) {
    return {
        decks: state
    }
}

export default connect(mapStateToProps)(ListDecks);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    title: {
        fontSize: 25,
        textAlign: "center",
        color: "black"
    },
    cardNumber: {
        fontSize: 15,
        color: "grey",
        paddingBottom: 10,
        textAlign: "center"
    },
    touch: {
        borderStyle: "solid",
        borderWidth: 1,
        alignItems: 'center'
    },
});
