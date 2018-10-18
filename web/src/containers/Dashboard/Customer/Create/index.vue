<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <b-form-group label="Name" label-for="input-name">
                <b-form-input id="input-name" placeholder="Name" v-model="name"/>
            </b-form-group>
            <b-form-group label="Company Name" label-for="input-company-name">
                <b-form-input id="input-company-name" placeholder="Company Name" v-model="companyName"/>
            </b-form-group>
            <b-form-group label="Phone" label-for="input-phone">
                <b-form-input id="input-phone" type="tel" placeholder="Phone" v-model="phone"/>
            </b-form-group>
            <b-form-group label="Email" label-for="input-email">
                <b-form-input id="input-email" type="email" placeholder="Email" v-model="email"/>
            </b-form-group>
            <b-form-group label="Address" label-for="input-address">
                <b-form-textarea id="input-address" rows="3" placeholder="Address" v-model="address"/>
            </b-form-group>
            <b-form-group label="Personal Incharge" label-for="input-personal-incharge">
                <b-form-select id="input-personal-incharge" v-model="personalIncharge">
                    <option :value="null">Please select an option</option>
                    <option v-for="admin in admins" :key="admin.id" :value="admin.id">{{ admin.username }}</option>
                </b-form-select>
            </b-form-group>
            <b-button type="submit">Create</b-button>
        </form>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import router from '@/router'

export default {
    mounted() {
        this.getAllStoreAdmin();
    },
    data() {
        return {
            name: '', 
            companyName: '', 
            phone: '', 
            email: '', 
            address: '', 
            personalIncharge: null,
        };
    },
    computed: {
        ...mapState('admin', ['admins']),
    },
    methods: {
        ...mapActions('customer', ['create']),
        ...mapActions('admin', {getAllStoreAdmin: 'getAll'}),
        handleSubmit(e) {
            const {name, companyName, phone, email, address, personalIncharge} = this;
            this.create({name, companyName, phone, email, address, personalIncharge}).then(response => {
                router.push('/dashboard/customer');
            }, error => console.log(error));
        }
    }
}
</script>
