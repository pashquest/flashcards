export function addDeck ( newDeck) {
    return {
        type: "ADD_DECK",
        newDeck
    }
}

export function receiveDecks ( decks ) {
    return {
        type: "RECEIVE_DECKS",
        decks
    }
}

export function addQuiz( newQuiz ) {
    return {
        type: "ADD_QUIZ",
        title: newQuiz.title,
        question: newQuiz.question
    }
}