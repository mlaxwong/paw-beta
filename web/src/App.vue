<template>
    <div id="app">
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<script>
import Preloader from '@/components/widgets/Preloader';

const globalPreloaderMessage = document.getElementById('global-preloader-message');

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
    beforeMount() {
        globalPreloaderMessage.textContent = 'Done';
    },
    mounted() {
        this.$nextTick(function () {
            setTimeout(() => {
                const globalPreloader = document.getElementById('global-preloader');
                globalPreloader.classList.remove('show', 'blackout');
            }, 800);
        })
    },
    components: { Preloader }
}
</script>