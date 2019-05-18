const WsCommonRecommendAuthorDetail = () => import('$src/components/common/recommend-author/ws-common-recommend-author-detail.vue');
const WsSubject = () => import('$src/components/page/subject/ws-subject.vue');
const WsSubjectMore = () => import('$src/components/page/subject/ws-subject-more.vue');

const authorRoutes=[
    //推荐作者详情
    {
        name: 'recommend-author-detail',
        path: 'recommend-author-detail',
        components: {
            default: WsCommonRecommendAuthorDetail
        }
    },
    {
        name: 'subject',
        path: 'subject',
        components: {
            default: WsSubject
        }
    },
    {
        name: 'subject-more',
        path: 'subject-more',
        components: {
            default: WsSubjectMore
        }
    }
];

export default authorRoutes;
