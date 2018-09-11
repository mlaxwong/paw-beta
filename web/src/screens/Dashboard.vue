<template>
    <div class="global-container">
        <div class="global-sidebar">
            <nav>
                <ul>
                    <router-link v-for="item in nav.items" :key="item.key" :to="item.link" tag="li"><a>{{ item.label }}</a></router-link>
                </ul>
            </nav>
        </div>
        <div class="main-container">
            <Crumbs />
            <main>
                <header></header>
                <router-view/>
            </main>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Crumbs from '@/components/widgets/Crumbs';

export default {
    name: 'Dashboard',
    computed: {
        nav() {
            return this.$store.state.nav
        },
    },
    components: { Crumbs }
}
</script>

