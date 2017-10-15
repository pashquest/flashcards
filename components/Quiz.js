import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
// GUT - DONE

class Quiz extends Component {
    state = {
        question: 1,
        score: 0,
        displayAnswer : false
    }

    render() {
        const questionsNum = this.props.deck.questions.length;
        const questionValue = this.props.deck.questions;

        if(this.state.question <= questionsNum) {
            return (
                <View style={styles.container}>
                    <Text style={styles.questionsCounter}>{this.state.question} of {questionsNum}</Text>

                        <Text style= {styles.questionStyle}>{questionValue[this.state.question -1].question}</Text>
                        {this.state.displayAnswer
                        ?
                        <Text style={styles.answerText}> {questionValue[this.state.question -1].answer}</Text>
                        :
                            <TouchableOpacity style={styles.button} onPress={() => (this.setState({displayAnswer:true }))}>
                                    <Text style={styles.buttonText}>Diplay Answer</Text>
                            </TouchableOpacity>
                        }

                        <TouchableOpacity style={styles.button} onPress={() => (this.setState({
                                    question: this.state.question + 1,
                                    score: this.state.score + 1,
                                    displayAnswer: false }))
                                    }>
                        <Text style={styles.buttonText}>Corrent</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonRed} onPress={() => this.setState({
                                   question: this.state.question + 1,
                                   displayAnswer: false
                                })
                        }>    
                        <Text style={styles.buttonText}>Incorrect</Text>
                        </TouchableOpacity>

                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <Text style={styles.quizFont}>End of Quiz</Text>
                    <Text style={styles.quizResultFont}>Your score is:</Text>
                    <Text style={styles.quizResultFont}>{Math.round((this.state.score / questionsNum) * 100)}%</Text>
                    <Text style={styles.quizResultFont}>{this.state.score} out of {questionsNum}</Text>

                    <TouchableOpacity style={styles.button} onPress={() => this.setState({
                                question: 1,
                                score: 0,
                                displayAnswer: false
                                })
                        }>        
                        <Text style={styles.buttonText}>Restart Quiz</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.goBack()}>
                        <Text style={styles.buttonText}>Back to Deck</Text>
                    </TouchableOpacity>

                </View>
            )
        }
    }
}

function mapStateToProps(state, { navigation }) {
    const { title } = navigation.state.params;

    return {
        deck: state[title]
    }
}

export default connect(mapStateToProps)(Quiz);

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
    answerText: {
        color: 'green',
        fontSize: 30
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
    quizFont: {
        fontSize: 40,
        textAlign: 'center'
    },
    quizResultFont: {
        fontSize: 20,
        textAlign: 'center'
    },
    questionsCounter:{
        fontSize: 30, 
        paddingBottom:100
    }
});