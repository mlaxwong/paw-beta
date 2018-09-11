<template>
    <ul class="crumbs">
        <router-link v-for="(crumb, index) in crumbs" :to="crumb.link" :key="index" tag="li">
            <span v-if="index == crumbs.length - 1">{{ crumb.label }}</span>
            <a v-else>{{ crumb.label }}</a>
        </router-link>
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
    watch: {
        '$route' () { this.updateCrumbs(); }
    },
    methods: {
        updateCrumbs: function() {
            const crumbs = this.$route.meta.crumbs || [];
            if (crumbs.length < 2)
            {
                crumbs.unshift({
                    label: this.$t('app.dashboard'),
                    link: '/dashboard',
                });
            }
            this.crumbs = crumbs;
        }
    }
}
</script>
