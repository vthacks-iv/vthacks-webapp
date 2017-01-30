import firebase from 'firebase'

const firebaseConfig = {
    apiKey: 'GO TO FIREBASE',
    authDomain: 'GO TO FIREBASE',
    databaseURL: 'GO TO FIREBASE',
    storageBucket: 'GO TO FIREBASE',
    messagingSenderId: 'GO TO FIREBASE'
}

const fire = firebase.initializeApp(firebaseConfig)

const database = fire.database()
const firebaseAuth = fire.auth()
const storage = fire.storage().ref()

export {
    database,
    firebaseAuth,
    storage
}
