// import { firebaseAuth, database } from '../../firebase_config'
import { router } from '../../routes'

const state = {
    user: {
        uid: '0',
        email: 'hacker@vt.edu',
        firstName: 'Hack',
        lastName: 'VT',
        school: 'Virginia Tech',
        gender: 'Non-Binary',
        dietary: 'Bits'
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
        // firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
        // .then((user) => {
        //     if (user) {
        //         console.log(user)
        //         database
        //             .ref('users')
        //             .child(user.uid)
        //             .once('value')
        //             .then(snapshot => {
        //                 const dbUser = snapshot.val()
        //                 dbUser.uid = user.uid
        //                 commit('AUTH_USER', dbUser)
        //                 router.replace(router.currentRoute.query.redirect || '/')
        //             })
        //     }
        // })
        // .catch((err) => {
        //     console.log(err)
        // })

        const dbUser = state.user
        dbUser.uid = state.user.uid
        commit('AUTH_USER', dbUser)
        router.replace(router.currentRoute.query.redirect || '/')
    },
    signOut: ({commit}, next) => {
        // firebaseAuth.signOut().then(
        //     () => {
        //         commit('UNAUTH_USER')
        //         next('/')
        //     }
        // )

        commit('UNAUTH_USER')
        next('/')
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
