<template>
    <div class="global-container">
        <div class="global-sidebar">
            <nav>
                <TreeMenu :items="nav.items"/>
                <ul>
                    <li>
                        <a href="#" @click.prevent="handleClickLogout">Logout</a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="main-container">
            <div class="top-main">
                <Crumbs />
                <h1 class="float-left">
                    {{ dom.title }}
                </h1>
                <div class="float-right">

                </div>
            </div>
            <main>
                <header></header>
                <transition name="fade" mode="out-in">
                    <router-view/>
                </transition>
            </main>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import router from '@/router'
import Crumbs from '@/components/widgets/Crumbs';
import TreeMenu from '@/components/widgets/TreeMenu';
import '@/assets/scss/style.scss';

console.log(globalConfig);

export default {
    name: 'Dashboard',
    computed: {
        dom() { return this.$store.state.dom },
        user() { return this.$store.getters.getUser },
        auth() { return this.$store.state.auth },
        nav() { return this.$store.state.nav },
    },
    methods: {
        ...mapActions('auth', ['logout']),
        handleClickLogout(e) {
            this.logout();
            router.push('/login');
        }
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
        background-color: #333f4d;
        height: 100vh;
        width: $sidebar-width;
        display: flex;
        flex-direction: column;
    }

    .main-container
    {
        // background-color: #f1f5f8;
        display: flex;
        flex: 1 0 0;
        -webkit-box-flex: 1;
        flex-direction: column;
        -ms-flex-direction: column;

        .top-main
        {
            padding: 7px 24px;
            border-bottom: 1px solid #ddd;
        }

        main 
        {
            padding: 7px 24px;
        }
    }
}
</style>


