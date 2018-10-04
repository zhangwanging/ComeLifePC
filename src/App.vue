<template>
    <div id="app">
        <transition name="fade">
            <!--首页的不同排版，index是默认排版-->
            <router-view name="index"/>
            <router-view name="writeessay"/>
            <router-view name="session"/>
            <!--优选连载-->
            <router-view name="serial"/>
        </transition>
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
        methods: {},
    }
</script>

<style>

</style>
