import firebase from 'firebase'
import config from 'config'

firebase.initializeApp({
    apiKey: config.firebase.apiKey,
    authDomain: config.firebase.authDomain,
    databaseURL: config.firebase.databaseURL,
    storageBucket: config.firebase.storageBucket,
    messagingSenderId: config.firebase.messagingSenderId
})

const database = firebase.database()
const firebaseAuth = firebase.auth()

export {
    database,
    firebaseAuth
}
