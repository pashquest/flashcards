import React, {Component } from 'react'
import { Text,StyleSheet,TouchableOpacity,View,Animated } from 'react-native'
import { connect } from 'react-redux'


class DeckView extends Component {
    static navigationOptions = ({ navigation }) => 
    {
        const { title } = navigation.state.params;
        return {
            title
        }
    }

    state = {
        bounceValue: new Animated.Value(1)
    }

    componentDidMount (){
        const { bounceValue } = this.state
        Animated.sequence([
            Animated.timing(bounceValue, { duration: 500, toValue: 1.50}),
            Animated.spring(bounceValue, { toValue: 1, friction: 10})
            ]).start()
    }

    render() {
        const { deck } = this.props
        const { bounceValue } = this.state

        return (
            <View style={styles.container}>
                    <Animated.Text style={[styles.headline, {transform: [{scale: bounceValue}]}]}>{deck.title}</Animated.Text>
                    <Text style={styles.headlineText}>{`${deck.questions.length} Questions`}</Text>

                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate(
                        'AddQuestions', {title: deck.title})}>
                        <Text style={styles.buttonText}>Add Questions</Text>
                    </TouchableOpacity>

                    {deck.questions.length > 0 &&
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate(
                        'Quiz', {title: deck.title})}>
                        <Text style={styles.buttonText}>Start Quiz</Text>
                    </TouchableOpacity>
                    }
            </View>
        )
    }
}



function mapStateToProps(state, { navigation }) {
    const { title } = navigation.state.params;

    return {
        deck: state[title]
    }
}

export default connect(mapStateToProps)(DeckView);

//Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    questionStyle: {
        fontSize: 40,
        textAlign: 'center'
    },
    buttonText: {
        color: 'black',
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
    headline: {
        fontSize: 60,
        textAlign: 'center',
        paddingBottom: 100
    },
   headlineText: {
        fontSize: 20,
        textAlign: 'center',
        paddingBottom: 30
    }
});