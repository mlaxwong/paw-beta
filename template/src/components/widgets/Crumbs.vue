<template>
    <ul class="crumbs">
        <router-link v-for="crumb in crumbs" :to="crumb.link" :key="crumb.key" tag="li"><a>{{ crumb.label }}</a></router-link>
    </ul>
</template>

<script>
export default {
    name: 'Crumbs',
    data() {
        return {
            crumbs: []
        }
    },
    mounted() {
        this.updateCrumbs();
    },
    methods: {
        updateCrumbs: function() {
            const crumbs = this.$route.meta.crumbs || [];
            crumbs.unshift({
                label: this.$t('app.dashboard'),
                link: '/dashboard',
            });
            this.crumbs = crumbs;
        }
    }
}
</script>
