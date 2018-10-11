<template>
    <div class="page-dashboard-admin">
        <form @submit.prevent="handleSubmit">
            <b-form-group label="Username" label-for="input-username">
                <b-form-input v-model="username" id="input-username" placeholder="Username" />
            </b-form-group>
            <b-form-group label="Password" label-for="input-password">
                <b-form-input type="password" v-model="password" id="input-password" placeholder="Password" />
            </b-form-group>
            <b-form-group label="Confirm Password" label-for="input-confirm-password">
                <b-form-input type="password" v-model="confirmPassword" id="input-confirm-password" placeholder="Confirm Password" />
            </b-form-group>
            <b-form-group label="Name" label-for="input-name">
                <b-form-input v-model="name" id="input-name" placeholder="Name" />
            </b-form-group>
            <b-form-group label="Email" label-for="input-email">
                <b-form-input v-model="email" id="input-email" type="email" placeholder="Email" />
            </b-form-group>
            <b-button type="submit">Create</b-button>
        </form>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data() {
        return {
            username: '',
            password: '',
            confirmPassword: '',
            name: '',
            email: '',
        };
    },
    methods: {
        ...mapActions('user', ['create']),
        handleSubmit(e) {
            const {username, email, password} = this;
            this.create({username, email, password}).then(response => {
                console.log(response);
            }, error => console.log(error));
        }
    }
}
</script>
