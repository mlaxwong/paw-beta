import DashboardScreen from '@/screens/Dashboard';
import HomeScreen from '@/screens/dashboard/Home';

export default [
    {
        path: '/dashboard',
        name: 'Dashboard',
        meta: {rules: 'all'},
        component: DashboardScreen,
        redirect: '/dashboard/home',
        children: [
            {
                path: '/dashboard/home',
                name: 'Home',
                meta: {rules: 'all'},
                component: HomeScreen,
            }
        ]
    }
]