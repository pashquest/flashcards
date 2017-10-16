import React, { Component } from 'react'
import { View,Text, TextInput, TouchableOpacity,StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { submitQuestion, getDecks} from "../utils/api"
import { addQuiz } from "../actions/index"
import Reactotron from 'reactotron-react-native'

class AddQuestions extends Component {
    state = {
        question: '',
        answer: ''
    }

    submit = () => {
        const { question, answer } = this.state
        const { title } = this.props.navigation.state.params

        submitQuestion(title, {question, answer})
        this.props.navigation.navigate("ListDecks")
    }

    render() {

        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Enter Quiz question"
                    multiline={true}
                    onChangeText={text => this.setState({ question: text })}
                    value={this.state.question}
                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder= "Enter Quiz answer"
                    multiline={true}
                    onChangeText={text => this.setState({ answer: text })}
                    value={this.state.answer}
                />
                <TouchableOpacity
                        onPress={this.submit}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(AddQuestions);

//Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    inputStyle: {
        fontSize: 25,
        textAlign: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        padding: 30
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
    }
});