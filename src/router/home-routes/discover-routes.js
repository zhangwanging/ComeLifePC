const WsDiscover = () => import ('$src/components/page/discover/ws-discover.vue');

const discoverRoutes=[
    {
        name: 'discover',
        path: 'discover',
        components: {
            default: WsDiscover
        }
    },
];

export default discoverRoutes;
