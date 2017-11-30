import App from 'app';
import {HomePage, SigninPage, AboutPage, NewsPage, ResidePage, ServicePage , MapPage} from 'pages';

export default function routes({dispatch}) {
  return {
    path: "/", component: App,
    indexRoute: {
      component: HomePage
    },
    childRoutes: [
      {
        path: "/signin",
        component: SigninPage
      },
      {
        path: "/about",
        component: AboutPage
      },
      {
        path: "/news",
        component: NewsPage
      },
      {
        path: "/reside",
        component: ResidePage
      },
      {
        path: "/service",
        component: ServicePage
      },
      {
        path: "/map",
        component: MapPage
      }
    ]
  };
}
