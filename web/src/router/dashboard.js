import DashboardLayout from '@/screens/Dashboard'
import Dashboard from '@/screens/dashboard/Index'
import Customer from '@/screens/dashboard/Customer'
import CustomerCreate from '@/screens/dashboard/customer/Create'
import Admin from '@/screens/dashboard/Admin'
import AdminCreate from '@/screens/dashboard/admin/Form'
import Service from '@/screens/dashboard/Service'
import ServiceCreate from '@/screens/dashboard/service/Form'
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
                meta: {
                    title: 'Dashboard',
                }
            },
            {
                path: 'customer',
                name: 'Customer',
                component: Customer,
                meta: {
                    title: 'Customer',
                    crumbs: [
                        {label: 'Customer', link: '/dashboard/customer'},
                    ],
                },
            },
            {
                path: 'customer/create',
                name: 'CustomerCreate',
                component: CustomerCreate,
                meta: {
                    title: 'Create Customer',
                    crumbs: [
                        {label: 'Customer', link: '/dashboard/customer'},
                        {label: 'Create', link: '/dashboard/customer/create'},
                    ],
                },
            },
            {
                path: 'admin',
                name: 'Admin',
                component: Admin,
                meta: {
                    title: 'Admin',
                    crumbs: [
                        {label: 'Admin', link: '/dashboard/admin'},
                    ],
                },
            },
            {
                path: 'admin/create',
                name: 'AdminCreate',
                component: AdminCreate,
                meta: {
                    title: 'Create Admin',
                    crumbs: [
                        {label: 'Admin', link: '/dashboard/admin'},
                        {label: 'Create', link: '/dashboard/admin/create'},
                    ],
                },
            },
            {
                path: 'service',
                name: 'Service',
                component: Service,
                meta: {
                    title: 'Service',
                    crumbs: [
                        {label: 'Service', link: '/dashboard/service'},
                    ],
                },
            },
            {
                path: 'service/create',
                name: 'ServiceCreate',
                component: ServiceCreate,
                meta: {
                    title: 'Create Service',
                    crumbs: [
                        {label: 'Service', link: '/dashboard/service'},
                        {label: 'Create', link: '/dashboard/service/create'},
                    ],
                },
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
            {
                path: '*',
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