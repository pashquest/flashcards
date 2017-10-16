import React from 'react';
import {View} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import './ReactotronConfig'

import AddDeck from './components/AddDeck'
import DeckView from './components/DeckView'
import ListDecks from './components/ListDecks'
import AddQuestions from "./components/AddQuestions"
import Quiz from './components/Quiz'
import { setLocalNotification } from "./utils/notification"
import { enhance } from 'react-navigation-addons';

export default class App extends React.Component {

    //ToSetLocalNotifications
    componentDidMount() {
        setLocalNotification()
    }

  render() {
    const Tabs = enhance(TabNavigator)({
        ListDecks: {
              screen: ListDecks
          },
          NewDeck: {
              screen: AddDeck
          }
      });

    const App = StackNavigator({
          Home: {
              screen: Tabs,
              navigationOptions: {title: 'FlashCards' }
          },
          DeckView: {
              screen: DeckView,
          },
          AddQuestions: {
              screen: AddQuestions,
              navigationOptions: {title: 'Add Quiz Item' }
          },
          Quiz: {
            screen: Quiz,
            navigationOptions: {title: 'Quiz' }
        }
      })

    return (
        <Provider store={createStore(reducer)}>
            <View style={{flex: 1}}>
                <App/>
            </View>
        </Provider>
    );
  }
}
