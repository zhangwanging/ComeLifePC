const WsCollection = () => import('$src/components/page/collection/ws-collection.vue');

const collectionRoutes=[
    //收藏的文章
    {
        meta: {requiresAuth: true},
        name: 'collection',
        path: 'collection',
        components: {
            default: WsCollection
        }
    },
];

export default collectionRoutes;
