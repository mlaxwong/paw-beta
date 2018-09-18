function state() {
    return {
        items: [
            {
                label: 'Dashboard',
                link: '/dashboard',
            },
            {
                label: 'Setting',
                link: '/dashboard/setting',
                items: [
                    {
                        label: 'Field',
                        link: '/dashboard/setting/field',
                    },
                    {
                        label: 'Field two',
                        link: '/dashboard/setting/field',
                    },
                ]
            },
        ]
    };
}

export default {
    namespace: true,
    state,
}