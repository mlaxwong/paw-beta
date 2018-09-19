<template>
    <div class="page-dashboard-setting-field">
        <form @submit.prevent="handleSubmit">
            <button>Test</button>
        </form>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'Field',
    methods: {
        ...mapActions('field', ['getAll']),
        handleSubmit(e) {
            this.getAll();
        }
    }
}
</script>

