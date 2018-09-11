<template>
    <div class="global-container">
        <div class="global-sidebar">
            <nav>
                <ul>

                </ul>
            </nav>
        </div>
        <div class="main-container">
            <Crumbs />
            <main>
                <header></header>
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>

<script>
import Crumbs from '@/components/widgets/Crumbs';

export default {
    name: 'Dashboard',
    // data() {
    //     console.log(this.$store);
    //     return {
    //         test: 'testing',
    //     };
    // }
    computed: {
        test: () => {
            console.log(this);
            return 'testingss';
        }
    },
    components: { Crumbs }
}
</script>

