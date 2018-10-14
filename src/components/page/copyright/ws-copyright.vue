<template>
    <el-row class="container">
        <el-row id="copyright-target" class="body-scroll-target"></el-row>
        <el-col class="container-left" :span="5">
            <ws-copyright-nav>
                <span slot="title">分类导航</span>
                <template slot="content">
                    <ws-copyright-nav-item
                            :key="index"
                            v-for="(category,index) in categorys">
                        <ws-base-button-text
                           @click="turnToCategoryClick('#'+category.type)">{{category.label}}
                        </ws-base-button-text>
                    </ws-copyright-nav-item>
                </template>
            </ws-copyright-nav>

            <ws-copyright-nav>
                <span slot="title">我想出书</span>
                <template slot="content">
                    <ws-copyright-nav-item>
                        <div>什么是简书版权？</div>
                        <div class="font-color-minor">借助「简书版权」出一本你自己的书</div>
                        <a href="#">查看详情</a>
                    </ws-copyright-nav-item>
                    <ws-copyright-nav-item>
                        <div>如何投稿？</div>
                        <div class="font-color-minor">投稿要求及方式</div>
                        <a href="#">查看详情</a>
                    </ws-copyright-nav-item>
                </template>
            </ws-copyright-nav>

            <!--关注我们-->
            <ws-copyright-nav>
                <span slot="title">我想出书</span>
                <template slot="content">
                    <ws-copyright-nav-item>
                        <a href="#">
                            <div>@简书出版</div>
                            <div class="font-color-minor">官方微博</div>
                        </a>
                    </ws-copyright-nav-item>
                    <ws-copyright-nav-item>
                        <a href="#">
                            <div>简书出版</div>
                            <div class="font-color-minor">简书官方帐号</div>
                        </a>
                    </ws-copyright-nav-item>
                </template>
            </ws-copyright-nav>

            <!--版权合作-->
            <ws-copyright-nav>
                <span slot="title">版权合作</span>
                <template slot="content">
                    <ws-copyright-nav-item>
                        <span>图书出版、影视改编、版权采购等机构方合作，请邮件联系：
                            <a href="#">pub@jianshu.com</a>
                        </span>

                    </ws-copyright-nav-item>
                </template>
            </ws-copyright-nav>
        </el-col>
        <el-col
                class="container-right"
                :span="19">
            <el-row
                    v-for="(category,index) in categorys"
                    :key="index"
                    class="container-category">
                <div
                        :id="category.type"
                        class="category-title font-size-smalltitle">
                    <span>{{category.label}}</span>
                </div>
                <el-row class="category-content">
                    <el-col
                            v-for="(book,index) in category.books"
                            :key="index"
                            :span="12">
                        <ws-copyright-book-item
                                :price="book.price"
                                :profile="book.profile"
                                :author="book.author"
                                :title="book.title"
                                :book-img-url="book.bookImgUrl"/>
                    </el-col>
                </el-row>

            </el-row>

        </el-col>
    </el-row>
</template>

<script>

    import WsCopyrightNav from '$src/components/page/copyright/ws-copyright-nav.vue'
    import WsCopyrightNavItem from '$src/components/page/copyright/ws-copyright-nav-item.vue'
    import WsCopyrightBookItem from '$src/components/page/copyright/ws-copyright-book-item.vue'
    import WsBaseButtonText from '$src/components/base/button/ws-base-button-text.vue'
    import {getCopyrightBooks} from '$src/api/page/copyright.js'

    const VueScrollTo = require('vue-scrollto')

    export default {
        name: "ws-copyright",
        components: {
            WsCopyrightNav,
            WsCopyrightNavItem,
            WsCopyrightBookItem,
            WsBaseButtonText
        },
        data() {
            return {
                categorys: []
            }
        },
        created() {
            this.init()
        },
        methods: {
            init() {
                this.getCopyrightBooksRequest()
            },
            getCopyrightBooksRequest() {
                let that = this
                getCopyrightBooks({}, function (err, res) {
                    if (res.code === 0) {
                        console.dir(res.data)
                        that.categorys = res.data
                    }
                })
            },
            turnToCategoryClick(originSelector){
                console.log('selector:'+originSelector)
                this.scrollToTarget(originSelector)
            },
            //不明白，body-origin的scrollTop追着各selector?
            scrollToTarget(originSelector){
                let options = {
                    container: '#body-origin',
                    easing: 'ease-in',
                    offset: -15,
                    duration: 200,
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
                VueScrollTo.scrollTo(originSelector, options)
            }
        }
    }

</script>

<style scoped>
    .container {
        height: 100%;
    }

    /*左栏*/
    .container-left {
        height: 100%;
        padding-right: 20px;
    }

    /*右栏*/
    .container-right {
        height: 100%;
    }

    .category-title span {
        display: inline-block;
        padding-left: 8px;
        margin-bottom: 15px;
        border-left: 3px solid #409EFF;
    }

    .category-title:before {
        content: "";
        display: block;
        height:60px;
        margin: -80px 0 0;
    }

    .container-category {
        margin-bottom: 30px;
    }

    .category-content .el-col {
        padding: 0 8px 8px 0;
    }


    .body-scroll-target {
        position: fixed;
        top: 60px;
        width: 100%;
        height: 1px;
    }
</style>