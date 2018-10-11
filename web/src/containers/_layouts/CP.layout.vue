<template>
    <div class="global-container">
        <div class="global-sidebar" :class="{'show': showGlobalSidebar}">
            <div class="profile">
                <b-dropdown class="quick-menu" :text="identity.username" right>
                    <b-dropdown-item @click.prevent="handleClickLogout">Logout</b-dropdown-item>
                </b-dropdown>
            </div>
            <nav>
                <TreeMenu :items="nav.items"/>
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
                <button class="global-sidebar-toggle" :class="{'show': showGlobalSidebar}" @click.prevent="handleClickToggleGlobalSidebar"><fa name="bars" /></button>
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

export default {
    name: 'Dashboard',
    data() {
        return {
            showGlobalSidebar: false,
        }
    },
    mounted() {
        this.getIdentity();
    },
    computed: {
        ...mapState('auth', ['identity']),
        dom() { return this.$store.state.dom },
        user() { return this.$store.getters.getUser },
        auth() { return this.$store.state.auth },
        nav() { return this.$store.state.nav },
    },
    methods: {
        ...mapActions('auth', ['logout']),
        ...mapActions('auth', ['getIdentity']),
        ...mapActions('user', ['getOne']),
        handleClickLogout(e) {
            this.logout();
            router.push('/login');
        },
        handleClickToggleGlobalSidebar(e) {
            this.showGlobalSidebar = !this.showGlobalSidebar;
        }
    },
    components: { Crumbs, TreeMenu }
}
</script>

<style lang="scss">
@import '../../assets/scss/mixin/breakpoint';
@import '../../assets/scss/mixin/prefix';

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
        background-color: rgba(51, 63, 77, 1);
        height: 100vh;
        width: $sidebar-width;
        display: flex;
        flex-direction: column;
        position: relative;
        left: 0%;
        z-index: 9;
        @include prefix(transition, left 0.5s);

        @include breakpoint(sm) {
            position: fixed;
            left: -100%;
            background-color: rgba(51, 63, 77, .85);
        }

        &.show {
            left: 0%;
        }
        
        .profile {
            border-bottom: 1px solid #666;

            .quick-menu {
                width: 100%;

                button.dropdown-toggle {
                    text-align: left;
                    font-size: 0.8em;
                    width: 100%;
                    padding: 15px 14px 15px 24px;
                }

                .btn-secondary:focus, .btn-secondary.focus {
                    box-shadow: none;
                }

                .dropdown-menu {
                    font-size: .8em;
                    padding: 0px;
                }
            } 
        }
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
            position: relative;

            @include breakpoint(sm) {
                padding-left: 50px;
            }

            button.global-sidebar-toggle
            {
                background-color: #fff;
                padding: 0px 10px;
                border: 0;
                border-right: 1px solid #ddd;
                position: absolute;
                left: -100%;
                top: 0px;
                bottom: 0px;
                outline: 0;
                cursor: pointer;
                @include prefix(transition, all 0.3s ease-out);
                @include breakpoint(sm) {
                    left: 0%;
                }

                &.show{
                    padding-left: $sidebar-width + 10px;
                }
            }
        }

        main 
        {
            padding: 7px 24px;
            overflow: auto;
        }
    }
}
</style>