export default {
    state: {
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
    }
}