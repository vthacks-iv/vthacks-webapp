import Home from './components/Home.vue'
import Payment from './components/Payment.vue'
import Register from './components/Register.vue'

export const routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    }, {
        path: '/payment',
        component: Payment,
        name: 'payment'
    }, {
        path: '/register',
        component: Register,
        name: 'register'
//     }, {
//         path: '/resumes',
//         component: Resumes,
//         name: 'resumes'
//     }, {
//         path: '/alumni',
//         component: Alumni,
//         name: 'alumni'
//     }, {
//         path: '/sponsors',
//         component: Component,
//         name: 'sponsors'
    }
]
