<template>
    <div id="app">
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<script>
import Preloader from '@/components/widgets/Preloader';

export default {
    name: 'App',
    data() {
        return {
            preloader: true,
        };
    },
    computed: {
        showPreloader() {
            return this.preloader;
        },
        isLoading() {
            return this.preloader;
        }
    },
    mounted() {
        this.$nextTick(function () {
            // Code that will run only after the
            // entire view has been rendered
            setTimeout(() => {
                const globalPreloader = document.getElementById('global-preloader');
                globalPreloader.classList.remove('show', 'blackout');
            }, 800);

            // console.log('root mounted');
        })
    },
    components: { Preloader }
}
</script>