import Container from './'

export default {
    path: 'create',
    component: Container,
    meta: {
        title: 'Customer',
        crumbs: [
            {label: 'Customer', link: '/dashboard/customer'},
            {label: 'Create', link: '/dashboard/customer/create'},
        ],
    },
}