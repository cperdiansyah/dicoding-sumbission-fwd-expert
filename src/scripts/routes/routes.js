import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Search from '../views/pages/search';
import Favorite from '../views/pages/favorite';

const routes = {
    '/': Home, // default page
    '/list': Home, // default page
    '/detail/:id': Detail,
    '/search': Search,
    '/search/:id': Search,
    '/favorite': Favorite
};

export default routes;
