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

export default {
    name: 'Field',
    mounted() {
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

