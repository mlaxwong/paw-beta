<template>
    <ul v-if="!init">
        <TreeMenu v-for="(item, index) in this.items" :key="index" :items="item.items" :item="item" :label="item.label" :init="true" />
    </ul>
    <li v-else>
        {{ label }}
        <ul v-if="item.items">
            <TreeMenu v-for="(item, index) in this.items" :key="index" :items="item.items" :item="item" :label="item.label" :init="true" />
        </ul>
    </li>
</template>

<script>
export default {
    name: 'TreeMenu',
    props: [
        'items', 
        'label', 
        'item',
        'init'
    ],
    components: {'TreeMenu': this}
}
</script>
