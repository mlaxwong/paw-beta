<template>
    <div id="app" style="vislble:hidden">
        <Loader :show="showBLoader"/>
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<script>
import Loader from '@/components/widgets/Loader'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css';

const globalApp = document.getElementById('app');
const globalPreloader = document.getElementById('global-preloader');
const globalPreloaderMessage = document.getElementById('global-preloader-message');

export default {
    name: 'App',
    beforeMount() {
        globalPreloaderMessage.textContent = 'Done';
    },
    mounted() {
        this.$nextTick(function () {
            (new Promise((resolve, reject) => {
                setTimeout(() => {
                    globalPreloader.classList.remove('show', 'blackout');
                    globalApp.style.visibility = 'visible';
                    globalApp.style.opacity = 1;
                    resolve();
                }, 800);
            })).then(() => setTimeout(() => globalPreloader.remove(), 1500));

        })
    },
    computed: {
        showBLoader() {
            return this.$store.state.bloader.length > 0;
        },
    },
    methods: {
        updateBLoader: function() {
            if (this.$store.state.bloader.length > 0) {
                NProgress.start();
            } else {
                NProgress.done();
            }
        }
    },
    watch: {
        '$store.state.bloader' () { this.updateBLoader(); }
    },
    components: { Loader }
}
</script>