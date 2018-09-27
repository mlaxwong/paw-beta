<template>
    <div class="page-dashboard-setting-field">
        <table v-if="fields">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="field in fields" :key="field.id">
                    <td>{{ field.id }}</td>
                    <td>{{ field.name }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Paws from '@/lib/paws'

export default {
    name: 'Field',
    mounted() {
        const paws = new Paws({
            url: process.env.URL_API,
            auth: this.$store.state.auth.token,
        });
        paws.Field.all().then(res => console.log(res));
        this.getAll();
    },
    computed: {
        ...mapState('field', ['fields'])
    },
    methods: {
        ...mapActions('field', ['getAll']),
    }
}
</script>

