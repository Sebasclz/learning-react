import { lazy, Suspense } from 'react';

const lazyAboutPage = lazy(() => import('./pages/About.jsx'));
const lazyHomePage = lazy(() => import('./pages/Home.jsx'));
const lazyPage404 = lazy(() => import('./pages/404.jsx'));
const lazySearchPage = lazy(() => import('./pages/Search.jsx'));

import { Router } from './Components/Router.jsx';

export const routes = [
  {
    path: '/:lang(es|en)/about',
    Component: lazyAboutPage,
  },
  {
    path: '/:lang(es|en)',
    Component: lazyHomePage,
  },
  {
    path: '/:lang(es|en)/search/:query',
    Component: lazySearchPage,
  },
  {
    path: '*',
    Component: lazyPage404,
  },
];

function App() {
  return (
    <main>
      <Suspense fallback={null}>
        <Router routes={routes} defaultComponent={lazyPage404} />
      </Suspense>
    </main>
  );
}

export default App;
