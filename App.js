import { createStackNavigator } from 'react-navigation';
import firebase from 'firebase';

import SignupLoginScreen from './src/screens/SignupLoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import LoginScreen from './src/screens/LoginScreen';
import TopScreen from './src/screens/TopScreen';


require("firebase/firestore");
import ENV from './env.json';

const config = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DB_URL,
  projectId: ENV.FIREBASE_PRO_ID,
  storageBucket: ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDER_ID,
};
firebase.initializeApp(config);
/*
const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);
*/

const App = createStackNavigator({
  SignupLogin: {screen: SignupLoginScreen, navigationOptions: { header: null } },
  SignUp: {screen: SignupScreen},
  LogIn: {screen: LoginScreen},
  TopPage: {screen: TopScreen},
},
);

export default App;
