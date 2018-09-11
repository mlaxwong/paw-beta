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
            const baseCrumb = {
                label: this.$t('app.dashboard'),
                link: '/dashboard',
            };
            const crumbs = this.$route.meta.crumbs || [];
            this.crumbs = [baseCrumb, ...crumbs];
        }
    }
}
</script>

<style lang="scss" scoped>
ul.crumbs {
    margin: 0px;
    padding: 0px;
    list-style: none;

    li {
        display: inline;
        a {
            
        }
    }

    li + li:before {
        padding: 8px;
        color: black;
        content: "/\00a0";
    }
}
</style>
