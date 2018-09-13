<template>
    <div class="page-login">
        <form @submit.prevent="handleSubmit">
            <input type="text" name="username" v-model="username" />
            <input type="password" name="password" v-model="password" />
            <button>Login</button>
        </form>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import router from '@/router'

export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        ...mapActions('auth', ['login']),
        handleSubmit(e) {
            const {username, password} = this;
            this.login({username, password}).then(
                user => {
                    router.push('/dashboard');
                },
                error => {
                    console.log(error);
                }
            );
        }
    }
}
</script>

