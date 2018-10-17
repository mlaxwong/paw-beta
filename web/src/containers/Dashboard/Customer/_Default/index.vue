<template>
    <div>
        <router-link to="/dashboard/customer/create">Create</router-link>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>username</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(customer, index) in customers" :key="customer.id">
                    <td>{{ customer.id }}</td>
                    <td><button @click.prevent="handleClickDeleteAdmin(index, customer)">delete</button></td>
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
        ...mapState('customer', ['customers'])
    },
    methods: {
        ...mapActions('customer', {getAllStoreAdmin: 'getAll'}),
        ...mapActions('customer', {deleteAdmin: 'delete'}),

        handleClickDeleteAdmin(index, customer) {
            this.$dialog.confirm('Are you sure to delete <b>' + customer.username + '</b>?', {okText: 'Delete'}).then(dielog => {
                this.deleteAdmin({index, customer});
            })
        }
    },
}
</script>

<style>

</style>
