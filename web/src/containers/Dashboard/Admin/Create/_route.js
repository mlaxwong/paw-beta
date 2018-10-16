import Container from './'

export default {
    path: 'create',
    component: Container,
    meta: {
        title: 'Create Admin',
        crumbs: [
            {label: 'Admin', link: '/dashboard/admin'},
            {label: 'Admin', link: '/dashboard/admin/create'},
        ],
    },
}