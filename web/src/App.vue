<template>
    <div id="app" style="vislble:hidden">
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<script>
import Preloader from '@/components/widgets/Preloader';

const globalApp = document.getElementById('app');
const globalPreloader = document.getElementById('global-preloader');
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
                globalPreloader.classList.remove('show', 'blackout');
                globalApp.style.visibility = 'visible';
                globalApp.style.opacity = 1;
            }, 800);
        })
    },
    components: { Preloader }
}
</script>