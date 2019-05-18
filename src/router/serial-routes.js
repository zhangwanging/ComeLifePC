const WsSerial = () => import('$src/components/page/serial/ws-serial.vue');

const serialRoutes=[
    {
        name: 'serial',
        path: '/serial',
        components: {
            'serial': WsSerial
        }
    }
];

export default serialRoutes;
