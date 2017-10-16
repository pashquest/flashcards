import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const NOTIFICATION_KEY = 'flashCards:notification';


export function saveNewDeck(title) {
    return AsyncStorage.mergeItem( "FLASHCARDS", JSON.stringify({
        [title]: {
            title: title,
            questions: []
        }
    }))
}

export function getDecks() {
    return AsyncStorage.getItem("FLASHCARDS", (res) => {
        return JSON.parse(res)
    })
}

export function multiRemove(keys) {
    return AsyncStorage.multiRemove( keys, (err) => {
        console.log('multiremove');
    })
}

export function submitQuestion(title, card) {
    return AsyncStorage.getItem("FLASHCARDS")
        .then(res => {
            const data = JSON.parse(res);
            data[title].questions.push(card);
            AsyncStorage.setItem("FLASHCARDS", JSON.stringify(data));       
        })
}