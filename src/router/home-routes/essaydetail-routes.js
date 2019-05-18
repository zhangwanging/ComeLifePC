const WsCommonEssayDetail = () => import('$src/components/common/essay/ws-common-essay-detail.vue');

const essaydetail=[
    //文章详情
    {
        name: 'essaydetail',
        path: 'essaydetail',
        components: {
            default: WsCommonEssayDetail
        }
    },
];

export default essaydetail;
