<template>
    <div>
        <router-link to="/dashboard/admin/create">Create</router-link>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>username</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(admin, index) in admins" :key="admin.id">
                    <td>{{ admin.id }}</td>
                    <td>{{ admin.username }}</td>
                    <td><button @click.prevent="handleClickDeleteAdmin(index, admin)">delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    mounted() {
        this.getAllStoreAdmin();
    },
    computed: {
        ...mapState('admin', ['admins'])
    },
    methods: {
        ...mapActions('admin', {getAllStoreAdmin: 'getAll'}),
        ...mapActions('admin', {deleteAdmin: 'delete'}),

        handleClickDeleteAdmin(index, admin) {
            this.$dialog.confirm('Are you sure to delete <b>' + admin.username + '</b>?', {okText: 'Delete'}).then(dielog => {
                this.deleteAdmin({index, admin});
            })
        }
    },
}
</script>

<style>

</style>
