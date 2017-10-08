// Followed https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-native.md
// Used to inspect the ReactNative Application

import Reactotron from 'reactotron-react-native'

Reactotron
  .configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect() // let's connect!