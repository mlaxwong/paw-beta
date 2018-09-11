import LoginScreen from '@/screens/Login'

export default [
    {
        path: '/login',
        name: 'Login',
        component: LoginScreen,
        meta: {rules: 'guest'}
    }
]