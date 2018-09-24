<template>
    <div class="page-dashboard-setting-field">
        <form @submit.prevent="handleSubmit">
            <button>Test</button>
        </form>
        <div>{{ this.$store.state.counter.counter }}</div>
        <button @click.prevent="handleClick">increate</button>
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
        },
        handleClick(e) {
            this.$store.state.counter.counter += 1;
        }
    }
}
</script>

