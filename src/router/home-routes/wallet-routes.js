const WsWallet = () => import('$src/components/page/wallet/ws-wallet.vue');

const walletRoutes=[
    //我的钱包
    {
        meta: {requiresAuth: true},
        name: 'wallet',
        path: 'wallet',
        components: {
            default: WsWallet
        }
    },
];

export default walletRoutes;
