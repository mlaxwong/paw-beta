import DashboardLayout from '@/screens/Dashboard'
import Dashboard from '@/screens/dashboard/Index'
import Setting from '@/screens/dashboard/Setting'
import Field from '@/screens/dashboard/setting/Field'

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
                meta: {
                    rules: 'all',
                    crumbs: [{label: 'Setting', link: '/dashboard/setting'}],
                },
                component: Setting,
            },
            {
                path: 'setting/field',
                name: 'Field',
                meta: {
                    rules: 'all',
                    crumbs: [
                        {label: 'Setting', link: '/dashboard/setting'},
                        {label: 'Field', link: '/dashboard/setting/field'},
                    ],
                },
                component: Field,
            },
        ]
    }
]