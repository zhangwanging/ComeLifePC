<template>
    <el-row>
        <ws-common-card-attention
                @add-attention-click="addAttentionClick"
                @cancel-attention-click="cancelAttentionClick"
                @detail-click="detailClick"
                :avatar="avatar"
                :name="name"
                :profile="profile"
                :isAttention="isAttented"
                />
    </el-row>
</template>

<script>

    import WsCommonCardAttention from '$src/components/common/card/ws-common-card-attention.vue'

    export default {
        name: "ws-subject-more-tab-item",
        components:{
            WsCommonCardAttention
        },
        props: {
            avatar: {
                type: String
            },
            name: {
                type: String
            },
            profile: {
                type: String
            },
            isAttention: {
                type: Boolean
            }
        },
        data() {
            return {
                isAttented:this.isAttention
            }
        },
        methods: {
            addAttentionClick() {
                let that=this
                this.request.addAttention({},function (err,res) {
                    if(res.code===0){
                        that.isAttented=true
                    }
                })
            },
            cancelAttentionClick() {
                let that=this
                this.request.addAttention({},function (err,res) {
                    if(res.code===0){
                        that.isAttented=false
                    }
                })
            },
            detailClick() {
                this.$router.push({name: 'tabsessay'})
            }
        }
    }
</script>

<style scoped>

</style>