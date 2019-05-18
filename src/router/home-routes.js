const WsIndex = () => import('$src/components/page/index/ws-index.vue');

const WsIndexMainLarge = () => import('$src/components/page/index/ws-index-main-large.vue');
const WsIndexMainSmall = () => import('$src/components/page/index/ws-index-main-small.vue');
const WsIndexMainMini = () => import('$src/components/page/index/ws-index-main-mini.vue');

import authorRoutes from './home-routes/author-routes';
import careRoutes from './home-routes/care-routes';
import copyrightRoutes from './home-routes/copyright-routes';
import discoverRoutes from './home-routes/discover-routes';
import feedbackRoutes from './home-routes/feedback-routes';
import homepageRoutes from './home-routes/homepage-routes';
import hotRoutes from './home-routes/hot-routes';
import messageRoutes from './home-routes/message-routes';
import settingRoutes from './home-routes/setting-routes';
import collectionRoutes from './home-routes/collection-routes';
import essaydetailRoutes from './home-routes/essaydetail-routes';
import likeRoutes from './home-routes/like-routes';
import shopRoutes from './home-routes/shop-routes';
import walletRoutes from './home-routes/wallet-routes';

const homeRoutes=[
    {
        name: 'index',
        path: '/index',
        components: {
            index: WsIndex
        },
        children: [
            {
                name: 'mainsmall',
                path: 'mainsmall',
                components: {
                    default: WsIndexMainSmall
                },
                children: [
                    ...authorRoutes,
                    ...careRoutes,
                    ...copyrightRoutes,
                    ...discoverRoutes,
                    ...feedbackRoutes,
                    ...homepageRoutes,
                    ...messageRoutes,
                    ...settingRoutes,
                    ...hotRoutes
                ]
            },
            {
                name: 'mainlarge',
                path: 'mainlarge',
                components: {
                    default: WsIndexMainLarge
                }
            },
            {
                name: 'mainmini',
                path: 'mainmini',
                components: {
                    default: WsIndexMainMini
                },
                children: [
                    ...collectionRoutes,
                    ...essaydetailRoutes,
                    ...likeRoutes,
                    ...shopRoutes,
                    ...walletRoutes,
                ]
            }
        ]
    },
];

export default homeRoutes;

