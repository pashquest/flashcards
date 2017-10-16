function decks (state = {}, action) {
    switch (action.type) {
        case "RECEIVE_DECKS" :
            return {
                ...action.decks
            }

        case "ADD_DECK" :
            return {
                ...state,
                ...action.newDeck
            }

        case "ADD_QUIZ" :
            let quizItem = { question: action.question, answer: action.answer}
            let deck = state[action.title];
            deck.questions.push({ question: action.question, answer: action.answer});
            return {
                ...state,
                deck
            }

        default :
            return state
    }
}

export default decks