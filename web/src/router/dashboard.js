import DashboardLayout from '@/screens/Dashboard';
import Dashboard from '@/screens/dashboard/Index';
import Setting from '@/screens/dashboard/Setting';

export default [
    {
        path: '/dashboard',
        name: 'DashboardLayout',
        meta: {rules: 'all'},
        component: DashboardLayout,
        children: [
            {
                path: '',
                name: 'Dashboard',
                meta: {rules: 'all'},
                component: Dashboard,
            },
            {
                path: 'setting',
                name: 'Setting',
                meta: {rules: 'all'},
                component: Setting,
            }
        ]
    }
]