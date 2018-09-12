<template>
    <div class="global-container">
        <div class="global-sidebar">
            <nav>
                <TreeMenu :items="nav.items"/>
                <ul>
                    <router-link v-for="item in nav.items" :key="item.key" :to="item.link" tag="li"><a>{{ item.label }}</a></router-link>
                </ul>
            </nav>
        </div>
        <div class="main-container">
            <div class="top-main">
                <Crumbs />
            </div>
            <main>
                <header></header>
                <router-view/>
            </main>
        </div>
    </div>
</template>

<script>
import Crumbs from '@/components/widgets/Crumbs';
import TreeMenu from '@/components/widgets/TreeMenu';
import '@/assets/scss/style.scss';

export default {
    name: 'Dashboard',
    computed: {
        nav() { return this.$store.state.nav },
    },
    components: { Crumbs, TreeMenu }
}
</script>

<style lang="scss" scoped>
$sidebar-width: 225px;

.global-container
{
    width: 100vw;
    height: 100vh;
    display: flex;
    position: relative;

    flex-direction: row;
    align-items: stretch;

    .global-sidebar
    {
        background-color: #ddd;
        height: 100vh;
        width: $sidebar-width;
        display: flex;
    }

    .main-container
    {
        display: flex;
        flex: 1 0 0;
        -webkit-box-flex: 1;
        flex-direction: column;
        -ms-flex-direction: column;

        .top-main
        {
        }

        main 
        {
        }
    }
}
</style>


