function state() {
    return {
        items: [
            {
                label: 'Dashboard',
                link: '/dashboard',
            },
        ]
    };
}

export default {
    namespace: true,
    state,
}