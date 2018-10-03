function state() {
    return {
        items: [
            {
                label: 'Dashboard',
                link: '/dashboard',
            },
            {
                label: 'Services',
                link: '/dashboard/service',
            },
            {
                label: 'Customer',
                link: '/dashboard/customer',
            },
            {
                label: 'Admin',
                link: '/dashboard/admin',
            }
        ]
    };
}

export default {
    namespace: true,
    state,
}