<template>
    <el-row class="admire">

        <!--赞赏入口-->

        <p>小礼物走一走，来简书关注我</p>
        <el-row type="flex" justify="center">
            <el-button
                @click="isDialogVisible=true"
                size="small"
                type="primary"
                round
                plain>
                赞赏支持
            </el-button>
        </el-row>

        <!--赞赏弹出层-->

        <el-dialog
            @close="closeDialog"
            width="450px"
            :modal="false"
            :visible="isDialogVisible">
            <div class="container-dialog">
                <!--头部-->
                <el-row
                    class="header"
                    type="flex"
                    justify="center"
                    align="middle">
                    <img class="avatar" src="../../../assets/star.jpg" alt="">
                    <span>给作者送糖</span>
                </el-row>
                <!--选择糖果数目-->
                <el-row class="container-candy">
                    <el-radio-group
                        @click.native="showCustomCandyNumButton"
                        @change="chooseCandyNumChange"
                        v-model="radioGroupCandyNum"
                        size="small">
                        <el-row :gutter="15">
                            <el-col :span="8" type="primary" plain>
                                <el-radio label="2" border>2颗</el-radio>
                            </el-col>
                            <el-col :span="8">
                                <el-radio label="5" border>5颗</el-radio>
                            </el-col>
                            <el-col :span="8">
                                <el-radio label="10" border>10颗</el-radio>
                            </el-col>
                        </el-row>
                        <el-row :gutter="15">
                            <el-col :span="8" type="primary" plain>
                                <el-radio label="20" border>20颗</el-radio>
                            </el-col>
                            <el-col :span="8">
                                <el-radio label="50" border>50颗</el-radio>
                            </el-col>
                            <el-col :span="8">
                                <el-button
                                    size="mini"
                                    v-if="isFocusCandyButton&&!inputCandyNum"
                                    @click.stop="customCandyNumClick">自定义
                                </el-button>
                                <el-input
                                    @keydown.native="validateCandyNumKeydown"
                                    class="ws-common-essay-detail-admire"
                                    style="height:32px;"
                                    size="mini"
                                    @click.native.stop=""
                                    v-else
                                    v-model="inputCandyNum"
                                    type="text"
                                    v-focus
                                    placeholder="糖果数量"/>
                            </el-col>
                        </el-row>
                    </el-radio-group>
                </el-row>
                <!--留言-->
                <el-input type="textarea" placeholder="给Ta留言"/>
                <!--当前选中糖果数目-->
                <el-row
                    class="candyNum"
                    type="flex"
                    justify="center"
                    align="middle">
                    <i class="iconfont icon-goumai"></i>
                    <span> {{currentCandyNum}}</span>
                </el-row>
                <!--选择支付方式-->
                <el-row class="container-payway"
                        type="flex"
                        justify="center"
                        :gutter="15">
                    <el-radio-group
                        size="small"
                        v-model="radioGroupPayWay">
                        <el-col :span="8" type="primary" plain>
                            <el-radio :label="0" border>微信支付</el-radio>
                        </el-col>
                        <el-col :span="8">
                            <el-radio :label="1" border>支付宝</el-radio>
                        </el-col>
                        <el-col :span="8">
                            <el-radio :label="2" border disabled>简书余额</el-radio>
                        </el-col>
                    </el-radio-group>

                </el-row>
                <!--支付按钮-->
                <el-row class="button-pay" type="flex" justify="center">
                    <el-button
                        @click="payNow"
                        type="primary"
                        size="small"
                        round>
                        立即支付
                    </el-button>
                </el-row>
            </div>
        </el-dialog>
    </el-row>
</template>

<script>
    export default {
        name: "ws-common-essay-detail-admire",
        data() {
            return {
                //弹层可见
                isDialogVisible: false,
                //自定义按钮可见
                isFocusCandyButton: true,
                //按钮显示的糖果单选组标志
                radioGroupCandyNum: '2',
                //自定义糖果数
                inputCandyNum: '',
                //当前选定糖果数
                currentCandyNum: 2,
                //支付方式单选组标志
                radioGroupPayWay: 0
            };
        },
        watch: {
            inputCandyNum: function (val, oldVal) {
                this.currentCandyNum = val;
            }
        },
        methods: {
            closeDialog() {
                this.isDialogVisible = false;
            },
            //选择糖果数量
            chooseCandyNumChange(label) {
                this.currentCandyNum = label;
            },
            //自定义糖果数量
            customCandyNumClick() {
                this.hideCustomCandyNumButton();
            },
            //显示自定义按钮
            showCustomCandyNumButton() {
                this.isFocusCandyButton = true;
                this.inputCandyNum = '';
            },
            //隐藏自定义按钮
            hideCustomCandyNumButton() {
                this.isFocusCandyButton = false;
                this.currentCandyNum = '';
                this.radioGroupCandyNum = '';
            },
            //支付按钮事件
            payNow() {
                if (this.isNumber(this.currentCandyNum)) {
                    if (this.radioGroupPayWay === 0) {
                        this.payByWeixin();
                    } else if (this.radioGroupPayWay === 1) {
                        this.payByZhiFuBao();
                    } else if (this.radioGroupPayWay === 2) {
                        this.payByJianShu();
                    }
                } else {
                    this.$message({
                        showClose: true,
                        message: '赞赏金额必须为数字',
                        type: 'error'
                    });
                }
            },
            //三种支付方式
            payByWeixin() {
                alert('微信支付');
            },
            payByZhiFuBao() {
                alert('支付宝支付');
            },
            payByJianShu() {
                alert('简书支付');
            },
            isNumber(val) {
                var regPos = /^\d+(\.\d+)?$/; //非负浮点数
                if (regPos.test(val)) {
                    return true;
                } else {
                    return false;
                }
            },
            //TODO:无效
            validateCandyNumKeydown(e) {
                console.dir(e);
                let that = this;
                if (!this.isAllowNumber(e.keyCode)) {
                    //  that.inputCandyNum=that.inputCandyNum.substring(0,that.inputCandyNum.length-1)
                    return false;
                }
            },
            isAllowNumber(keyCode) {
                // 数字
                if (keyCode >= 48 && keyCode <= 57) return true;
                // 小数字键盘
                if (keyCode >= 96 && keyCode <= 105) return true;
                // Backspace, del, 左右方向键
                if (keyCode == 8 || keyCode == 46 || keyCode == 37 || keyCode == 39) return true;
                return false;
            }
        }
    };
</script>

<style scoped>
    /*赞赏支持*/
    .admire {
        position: relative;
        margin-top: 20px;
        margin-bottom: 40px;
    }

    .admire p {
        text-align: center;
    }

    /*dialog头部*/
    .container-dialog {
        padding: 0 25px;
    }

    .header {
        width: 100%;
        margin-bottom: 15px;
    }

    .avatar {
        width: 24px;
        height: 24px;
        margin-right: 10px;
        -webkit-border-radius: 12px;
        -moz-border-radius: 12px;
        border-radius: 12px;
    }

    /*选择糖果数目*/
    .container-candy {

    }

    .container-candy .el-button {
        width: 100%;
        margin-bottom: 10px;
    }

    .candyNum {
        padding: 20px 0;
        font-weight: bold;
        font-size: 20px;
        color: #409EFF;
    }

    .el-radio-group {
        width: 100%;
    }

    .el-radio-group .el-radio {
        width: 100%;
        margin-bottom: 15px;
    }

    .el-radio-group .el-button {
        width: 100% !important;
        height: 32px;
    }

    .el-radio-group .el-input {
        width: 100%;
    }

    /*支付方式*/
    .container-payway {
    }

    .container-payway .el-button {
        width: 100%;
    }

    /*支付按钮*/

    .button-pay {
        margin-top: 20px;
    }
</style>