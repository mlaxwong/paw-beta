<template>
    <ul v-if="!init">
        <TreeMenu v-for="(item, index) in this.items" :key="index" :items="item.items" :item="item" :init="true" />
    </ul>
    <li v-else :class="{'open': subIsActive(item.link) && item.items}">
        <router-link :to="item.link">{{ item.label }}</router-link>
        <ul v-if="item.items">
            <TreeMenu v-for="(item, index) in this.items" :key="index" :items="item.items" :item="item" :init="true" />
        </ul>
    </li>
</template>

<script>
export default {
    name: 'TreeMenu',
    props: [
        'items', 
        'item',
        'init'
    ],
    methods: {
        subIsActive(input) {
            const paths = Array.isArray(input) ? input : [input]
            return paths.some(path => {
                return this.$route.path.indexOf(path) === 0 // current path starts with this path string
            })
        }
    },
    components: {'TreeMenu': this}
}
</script>

<style lang="scss" scoped>
ul 
{
    list-style: none;
    padding: 0px;
    margin: 0px;

    li
    {
        display: block;

        a
        {
            color: #d7d9db;
            display: block;
            padding: 7px 14px 7px 24px;

            &.router-link-exact-active
            {
                color: #fff;
                background-color: rgba(255, 255, 255, 0.1);
            }
        }
    }

    & > li > ul 
    {
        padding-left: 10px;
        font-size: .8em;
    }

    & > li:not(.open) > ul 
    {
        display: none;
    }
}
</style>
