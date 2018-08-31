<template>
    <div id="app">
        <!--首页的不同排版，index是默认排版-->
        <router-view name="index"></router-view>
        <router-view name="writeessay"></router-view>
        <router-view
                width="500px"
                height="500px"
                name="test"
                :trans-time="1"
                :stay-time="2"
                :items="items"
                dotFgColor="blue"
                dotBgColor="white">
        </router-view>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                items:[
                    {
                        src:require('$src/components/common/carousel/item1.jpg')
                    },
                    {
                        src:require('$src/components/common/carousel/item2.jpg')
                    },
                    {
                        src:require('$src/components/common/carousel/item3.jpg')
                    }
                ]
            }
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
