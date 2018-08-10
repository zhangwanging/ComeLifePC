<template>
    <div id="app" class="container-y" style="height:100%;">
        <router-view name="index"></router-view>
        <router-view name="writeessay"></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {}
        },
        created() {
            console.log('app init...');
        },
        methods:{

        }
    }
</script>

<style>

</style>
