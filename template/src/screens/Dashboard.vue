<template>
    <div class="global-container">
        <div class="global-sidebar">
            <nav>
                <ul>

                </ul>
            </nav>
        </div>
        <div class="main-container">
            <header>{{ this.$t("app.welcome") }}</header>
            <main>
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>

<script>
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
    }
}
</script>

