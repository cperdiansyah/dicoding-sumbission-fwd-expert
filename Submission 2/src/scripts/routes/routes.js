import List from '../views/pages/list';
import Detail from '../views/pages/detail';
import Search from '../views/pages/search';
import Favorite from '../views/pages/favorite';

const routes = {
    '/': List, // default page
    '/list': List, // default page
    '/detail/:id': Detail,
    '/search': Search,
    '/search/:id': Search,
    '/favorite': Favorite
};

export default routes;
