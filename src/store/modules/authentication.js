import { firebaseAuth, database } from '../../firebase_config'
import { router } from '../../routes'

const state = {
    user: {
        uid: '',
        email: '',
        firstName: '',
        lastName: '',
        school: '',
        gender: '',
        dietary: ''
    },
    isAuthenticated: false
}

const mutations = {
    'AUTH_USER' (state, user) {
        state.user = user
        state.isAuthenticated = true
    },
    'UNAUTH_USER' (state) {
        state.user = null
        state.isAuthenticated = false
    }
}

const actions = {
    logIn: ({commit}, payload) => {
        firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
            if (user) {
                console.log(user)
                database
                    .ref('users')
                    .child(user.uid)
                    .once('value')
                    .then(snapshot => {
                        const dbUser = snapshot.val()
                        dbUser.uid = user.uid
                        commit('AUTH_USER', dbUser)
                        router.replace(router.currentRoute.query.redirect || '/')
                    })
            }
        })
        .catch((err) => {
            console.log(err)
        })
    },
    signOut: ({commit}, next) => {
        firebaseAuth.signOut().then(
            () => {
                commit('UNAUTH_USER')
                next('/')
            }
        )
    },
    setUser: ({commit}, user) => {
        commit('AUTH_USER', user)
    }
}

const getters = {
    user: state => state.user,
    isAuth: state => state.isAuthenticated
}

export default { state, mutations, actions, getters }
