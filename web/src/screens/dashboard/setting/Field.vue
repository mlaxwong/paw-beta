<template>
    <div class="page-dashboard-setting-field">
        <form @submit.prevent="handleSubmit">
            <input type="text" name="handle" v-model="handle" />
            <input type="text" name="name" v-model="name" />
            <input type="text" name="config" v-model="config" />
            <button>Create</button>
        </form>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data() {
        return {
            handle: '',
            name: '',
            config: '',
        }
    },
    name: 'Field',
    methods: {
        ...mapActions('field', ['create']),
        handleSubmit(e) {
            const {handle, name, config} = this;
            this.create({handle, name, config});
        },
    }
}
</script>

