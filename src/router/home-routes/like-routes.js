const WsLike = () => import('$src/components/page/like/ws-like.vue');

const likeRoutes=[
    //喜欢的文章
    {
        meta: {requiresAuth: true},
        name: 'like',
        path: 'like',
        components: {
            default: WsLike
        }
    }
];

export default likeRoutes;
