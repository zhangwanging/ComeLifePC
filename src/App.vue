<template>
    <div id="app" class="container-y" style="height:100%;">
        <router-view name="index"></router-view>
        <router-view name="writeessay"></router-view>
        <router-view width="500px" height="500px" class="ws-carousel-content" name="test" :trans-time="1" :stay-time="2" :items="items" dotFgColor="red" dotBgColor="white">干嘛</router-view>
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
    .test{

    }

    .ws-carousel-content{
        width:300px;
        height:500px;
    }
</style>
