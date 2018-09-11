import DashboardScreen from '@/screens/Dashboard';
import HomeScreen from '@/screens/dashboard/Home';

export default [
    {
        path: '/dashboard',
        name: 'Dashboard',
        meta: {rules: 'all'},
        component: DashboardScreen,
        // redirect: '/dashboard/home',
        children: [
            {
                path: 'home',
                name: 'Home',
                meta: {rules: 'all'},
                component: HomeScreen,
            }
        ]
    }
]