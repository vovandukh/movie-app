import { HOME_ROUTE, MOVIES_ROUTE, TV_ROUTE, CELEBRITIES_ROUTE, BLOG_ROUTE } from './utils/consts';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TVshows from './pages/TVshows';
import Celebrities from './pages/Celebrities';
import Blog from './pages/Blog';




export const routes =
    [
        { path: HOME_ROUTE, components: <Home /> },
        { path: MOVIES_ROUTE, components: <Movies /> },
        { path: TV_ROUTE, components: <TVshows /> },
        { path: CELEBRITIES_ROUTE, components: <Celebrities /> },
        { path: BLOG_ROUTE, components: <Blog /> },
    ]