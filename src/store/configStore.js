import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";
import { compose } from 'redux'
import { reactReduxFirebase } from 'react-redux-firebase'
import firebase from 'firebase'


//Colocar configuración de firebase
var firebaseConfig = {
  apiKey: "AIzaSyDpVSnxXUs1NLqINAMiyPDfJ-N8ZkyjRr8",
  authDomain: "redux-90854.firebaseapp.com",
  databaseURL: "https://redux-90854.firebaseio.com"
};

// Colocar opciones de configuración de firebase
const config = {
  userProfile: "users", // la raíz en firebase donde los perfiles son guardados
  attachAuthIsReady: true, // boolean para permitir o no el loggeo con la dep.
  firebaseStateName: 'firebase',
  userProfile: 'users', // where profiles are stored in database
  presence: 'presence', // where list of online users is stored in database
  sessions: 'sessions' // where list of user sessions is stored in database (presence must be enabled)
};

// Inicializamos la instancia default de firebase con la configuración
firebase.initializeApp(firebaseConfig)

// Compose de firebase con la configuración
const createStoreWithFirebase = compose(reactReduxFirebase(firebase, config))(
  createStore
);

// Creación de la tienda con un reductor raíz y un estado inicial vacío
const initialState = {};
const store = createStoreWithFirebase(rootReducer, initialState);

export default  store;
