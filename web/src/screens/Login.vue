<template>
    <div class="page-login">
        <b-container class="centered">
            <b-row>
                <b-col md="4" offset-md="4" sm="12">
                    <b-form @submit.prevent="handleSubmit">
                        <b-form-group>
                            <b-form-input type="text" name="username" placeholder="Username" v-model="username" />
                        </b-form-group>
                        <b-form-group>
                            <b-form-input type="password" name="password" placeholder="Password" v-model="password" />
                        </b-form-group>
                        <b-button type="submit">Login</b-button>
                    </b-form>
                </b-col>
            </b-row>
        </b-container>
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

