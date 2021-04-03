import Home from '../../pages/home/';
import DetailMovie from '../../pages/detail-movie/';

export default [
    {
        name : 'home',
        path: '/',
        component: Home
    },
    {
        name : 'detail',
        path: '/detail/:id',
        component: DetailMovie
    }
]