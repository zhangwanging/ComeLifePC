<template>
    <div class="ws-carousel-container"
         :style="{
             width:width,
             height:height
        }">
        <ul class="ws-carousel-content"
            :style="{
             transform:`translateX(${translate}px)`,
             transition:`transform ${transitionTime}s`
            }">
            <li class="ws-carousel-content-item"
                v-for="(item,index) in getInnerItems"
                :key="index">
                <a href="#">
                    <img class="ws-carousel-content-img" :src="item.src" :alt="index">
                </a>
            </li>
        </ul>
        <ul class="ws-carousel-dots">
            <li v-for="(item,index) in items"
                class="ws-carousel-dot"
                :style="{backgroundColor:index===activeIndex?dotFgColor:dotBgColor}"
                @click="turnItemDirectly(index)"
                :key="index">
            </li>
        </ul>
        <div class="ws-carousel-arrow-container-left">
            <a class="ws-carousel-arrow ws-carousel-arrow-left" @click="turnPreItem"><</a>
        </div>
        <div class="ws-carousel-arrow-container-right">
            <a class="ws-carousel-arrow ws-carousel-arrow-right" @click="turnNextItem">></a>
        </div>
    </div>
</template>

<script>
    /**
     * 轮播图组件，思路是无限滑动，重置内容区域。
     * 为了重置内容区域，使用两层setTimeout,外层为一次滑动的总时间，transitionTime为过渡时间；
     * 内层setTimeout延迟0，让重置部分的代码先执行。
     *
     * 需改进：
     * 1. 由于布局问题，左右两侧有不可点击的区域
     * 2. 当items项目数<=2，方向会有问题
     */

    export default {
        name: "ws-base-carousel",
        props: {
            width: {
                type: String,
                default: '100%'
            },
            height: {
                type: String,
                default: '100%'
            },
            transTime: {
                type: Number,
                default: 2
            },
            stayTime: {
                type: Number,
                default: 3
            },
            items: {
                type: Array,
                default: function () {
                    return [
                        {
                            src: require(`./error.png`)
                        }
                    ]
                }
            },
            dotFgColor: {
                type: String,
                default: 'blue'
            },
            dotBgColor: {
                type: String,
                default: 'white'
            }
        },
        data() {
            return {
                transitionTime: this.transTime,
                translate: 0,
                activeIndex: 0, //对应items
                resetFlag: {
                    toStart: false,
                    toEnd: false
                },
                playFlag: {
                    outer: 0,
                    inner: 0
                }
            }
        },
        created() {
        },
        mounted() {
            this.setFontSizeToEl();
            this.setContentWidth();
            this.resetTranslate();
            this.turnOnCarousel();
        },
        computed: {
            getInnerItems() {
                var innerItems = this.items.concat();
                var firstItem = this.items[0];
                var lastItem = this.items[this.items.length - 1];
                innerItems.push(firstItem);
                innerItems.unshift(lastItem);
                return innerItems;
            }
        },
        methods: {
            //设置组件根元素font-size解决适应问题
            setFontSizeToEl() {
                var w = this.$el.clientWidth;
                var h = this.$el.clientHeight;
                var min = Math.min(w, h);
                //最好有个适应尺寸适应函数
                this.$el.style.fontSize = min * 0.08 + 'px';
            },
            //设置存放内容的区域宽度
            setContentWidth() {
                var w = this.$el.clientWidth;
                var children = this.$el.children;
                for (var i = 0; i < children.length; i++) {
                    if (children[i].className === 'ws-carousel-content') {
                        var c = children[i].children;
                        var contentW = w * c.length || w;
                        children[i].style.width = contentW + 'px';
                        for (var j = 0; j < c.length; j++) {
                            c[j].style.width = w + 'px';
                        }
                        break;
                    }
                }
            },

            turnOnCarousel() {
                this.playCarousel();
            },
            turnOffCarousel() {
                clearTimeout(this.playFlag.outer);
                clearTimeout(this.playFlag.inner);
            },
            //设置区域的初始位置
            resetTranslate() {
                this.transitionTime = 0;
                this.translate = -this.$el.clientWidth;
            },

            //转向某个Item,有方向性的
            updateTranslate(targetIndex) {
                this.transitionTime = this.transTime;
                var w = this.$el.clientWidth;

                if (this.activeIndex === targetIndex) return;

                if (this.activeIndex === 0 && targetIndex === this.items.length - 1) {
                    this.translate = 0;
                    this.activeIndex = this.items.length - 1;
                    this.resetFlag.toEnd = true;
                    return;
                }

                if (this.activeIndex === this.items.length - 1 && targetIndex === 0) {
                    this.translate = -(this.items.length + 1) * w;
                    this.activeIndex = 0;
                    this.resetFlag.toStart = true;
                    return;
                }
                var tx = (targetIndex + 1) * w;
                this.translate = -tx;
                this.activeIndex = targetIndex;
            },
            //自动向左移动播放
            playCarousel() {
                var self = this;
                (function play() {
                    self.playFlag.outer = setTimeout(function () {
                        self.resetStartOrEnd();
                        self.playFlag.inner = setTimeout(function () {
                            var targetIndex = self.activeIndex + 1;
                            if (targetIndex >= self.items.length) {
                                targetIndex = 0;
                            }
                            self.updateTranslate(targetIndex)
                            play();
                        }, 0)
                    }, (self.transTime + self.stayTime) * 1000)
                })();
            },
            //含方向性的转向，需要先调用该函数做区域复位判断
            resetStartOrEnd() {
                if (this.resetFlag.toStart) {
                    this.transitionTime = 0;
                    this.translate = -this.$el.clientWidth;
                    this.resetFlag.toStart = false;
                }
                if (this.resetFlag.toEnd) {
                    this.transitionTime = 0;
                    this.translate = -this.items.length * this.$el.clientWidth;
                    this.resetFlag.toEnd = false;
                }
            },
            turnNextItem() {
                var self = this;
                this.turnOffCarousel();
                this.resetStartOrEnd();
                setTimeout(function () {
                    var targetIndex = self.activeIndex + 1;
                    if (targetIndex >= self.items.length) {
                        targetIndex = 0;
                    }
                    self.updateTranslate(targetIndex)
                    self.turnOnCarousel();
                }, 0)
            },
            turnPreItem() {
                var self = this;
                this.turnOffCarousel();
                this.resetStartOrEnd();
                setTimeout(function () {
                    var targetIndex = self.activeIndex - 1;
                    if (targetIndex < 0) {
                        targetIndex = self.items.length - 1;
                    }
                    self.updateTranslate(targetIndex)
                    self.turnOnCarousel();
                }, 0)
            },
            //直接的，无方向性转向
            turnItemDirectly(targetIndex) {
                this.turnOffCarousel();
                var w = this.$el.clientWidth;
                var tx = (targetIndex + 1) * w;
                this.translate = -tx;
                this.activeIndex = targetIndex;
                this.turnOffCarousel();
            }
        }
    }
</script>

<style scoped>
    ul, li {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    .ws-carousel-container {
        position: relative;
        overflow: hidden;
    }

    /*内容区,横向排列，宽度通过动态设置*/
    .ws-carousel-content {
        width: 100%;
        height: 100%;
        display: flex;
    }

    /*也是*/
    .ws-carousel-content-item {
        height: 100%;
    }

    .ws-carousel-content-img {
        width: 100%;
        height: 100%;
    }

    /*小圆点*/
    .ws-carousel-dots {
        width: 100%;
        display: flex;
        justify-content: center;
        position: absolute;
        bottom: .5em;
    }

    .ws-carousel-dot {
        width: .4em;
        height: .4em;
        background-color: white;
        border-radius: .2em;
        margin-right: .2em;
        z-index: 1;
    }

    .ws-carousel-dot:hover {
        cursor: pointer;
    }

    /*左右箭头 */
    .ws-carousel-arrow-container-left {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
    }

    .ws-carousel-arrow-container-right {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
    }

    .ws-carousel-arrow {
        background-color: rgba(0, 0, 0, .7);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        padding: .6em .3em;
        position: relative;
    }

</style>