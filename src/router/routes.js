import homeRoutes from './home-routes';
import writeessayRoutes from './writeessay-routes';
import sessionRoutes from './session-routes';
import serialRoutes from './serial-routes';

const routes = [
    // 重定向
    {
        path: '/',
        redirect: {
            name: 'discover'
        }
    },
    // 主页
    ...homeRoutes,
    // 写文章
    ...writeessayRoutes,
    // 登录注册
    ...sessionRoutes,
    // 系列
    ...serialRoutes,
];

export default routes;
