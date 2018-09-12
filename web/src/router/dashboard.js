import DashboardLayout from '@/screens/Dashboard'
import Dashboard from '@/screens/dashboard/Index'
import Setting from '@/screens/dashboard/Setting'
import Field from '@/screens/dashboard/setting/Field'

export default [
    {
        path: '/dashboard',
        name: 'DashboardLayout',
        component: DashboardLayout,
        children: [
            {
                path: '',
                name: 'Dashboard',
                component: Dashboard,
            },
            {
                path: 'setting',
                name: 'Setting',
                meta: {
                    crumbs: [{label: 'Setting', link: '/dashboard/setting'}],
                },
                component: Setting,
            },
            {
                path: 'setting/field',
                name: 'Field',
                meta: {
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