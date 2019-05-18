const WsSession = () => import('$src/components/page/session/ws-session.vue');

const sessionRoutes=[
    {
        name: 'session',
        path: '/session/:type',
        components: {
            'session': WsSession
        }
    },
];

export default sessionRoutes;
