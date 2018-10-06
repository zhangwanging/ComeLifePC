<template>
    <el-row>
        <el-row id="body-target" class="body-scroll-target"></el-row>
        <el-button
                plain
                v-show="isScrollToTop"
                class="to-top-btn"
                @click="scrollToTopClick">
            <i class="el-icon-arrow-up"/>
        </el-button>
    </el-row>
</template>

<script>
    /**
     * 点击按钮，让body的scrollTop滚动到id="body-target"元素的位置
     *
     */
    const VueScrollTo = require('vue-scrollto')
    const originSelector='#body-origin'

    export default {
        name: "ws-base-scrolltotop",
        data(){
            return{
                //视图控制
                isScrollToTop: true
            }
        },
        mounted() {
            this.setBodyId()
            this.addScrollListener()
        },
        methods:{
            setBodyId(){
                let $body=document.documentElement||document.body
                $body.setAttribute('id',originSelector.substring(1))
            },

            //监听滚动按钮得显示和隐藏
            addScrollListener() {
                let that = this
                window.onscroll=function () {
                    let scrollTop = this.scrollY
                    if (scrollTop > 100) {
                        that.isScrollToTop = true
                    } else {
                        that.isScrollToTop = false
                    }
                }
            },

            scrollToTopClick() {
                this.scrollFromBodyTop()
            },
            scrollFromBodyTop(){
                let options = {
                    container: originSelector,
                    easing: 'ease-in',
                    offset: -60,
                    force: true,
                    cancelable: true,
                    onStart: function (element) {
                        // scrolling started
                    },
                    onDone: function (element) {
                        // scrolling is done
                    },
                    onCancel: function () {
                        // scrolling has been interrupted
                    },
                    x: false,
                    y: true
                }
                VueScrollTo.scrollTo('#body-target', options)
            }
        }
    }
</script>

<style scoped>


    .body-scroll-target {
        position: fixed;
        top: 60px;
        width: 100%;
        height: 1px;
        background-color: white;
    }

    .to-top-btn {
        position: fixed;
        right: 50px;
        bottom: 50px;
        width:40px;
        height:40px;
        padding: 0 !important;
        z-index: 10000;
    }
</style>