import Home from './components/Home'
import Confirmation from './components/Confirmation'
import Payment from './components/Payment'
import PaymentForm from './components/Payment-Form'
import Register from './components/Register'
import Sponsors from './components/Sponsors'
import SponsorsInfo from './components/Sponsors-Info'

export const routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    }, {
        path: '/register',
        component: Register,
        name: 'register'
    }, {
        path: '/sponsors',
        component: Sponsors, // change this
        children: [
            {
                path: '',
                component: SponsorsInfo,
                name: 'sponsors-info'
            }, {
                path: 'payment',
                component: Payment,
                children: [
                    {
                        path: '',
                        component: PaymentForm,
                        name: 'payment-form'
                    }, {
                        path: 'confirmation',
                        component: Confirmation,
                        name: 'payment-confirmation'
                    }
                ]
            }
        ]
    }
//     }, {
//         path: '/resumes',
//         component: Resumes,
//         name: 'resumes'
//     }, {
//         path: '/alumni',
//         component: Alumni,
//         name: 'alumni'
]
