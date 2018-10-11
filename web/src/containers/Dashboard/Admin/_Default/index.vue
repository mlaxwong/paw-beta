<template>
    <div>
        <router-link to="/dashboard/admin/create">Create</router-link>

    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    mounted() {
        this.getAllStoreUser();
    },
    computed: {
        ...mapState('user', ['users'])
    },
    methods: {
        ...mapActions('user', {getAllStoreUser: 'getAll'}),
        updateTable: () => {

        }
    }
}
</script>

<style>

</style>
