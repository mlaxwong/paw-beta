<template>
    <ul>
        {{ label }}
        <TreeMenu v-for="(item, index) in this.items" :key="index" :items="item.items" :label="item.label">
        </TreeMenu>
    </ul>
</template>

<script>
export default {
    name: 'TreeMenu',
    props: ['items', 'label'],
    // data() {
    //     return {
    //         items: this.items
    //     };
    // },
    components: {'TreeMenu': this}
}
</script>
