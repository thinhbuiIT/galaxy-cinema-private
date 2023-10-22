import { Suspense, lazy, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const MainLayout = lazy(() => import('./Layout/MainLayout/MainLayout'));
const Home = lazy(() => import('./pages/Home/Home'));
const Showtimes = lazy(() => import('./pages/Showtimes/Showtimes'));
const Film = lazy(() => import('./pages/Film/Film'));
const Loading = lazy(() => import('./pages/Loading/Loading'));
const DetailFilm = lazy(() => import('./pages/DetailFilm/DetailFilm'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

const router = createBrowserRouter([
  {
    element:
      <Suspense fallback={<Loading />}>
        <MainLayout />
      </Suspense>
    ,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/lich-chieu',
        element: <Showtimes />
      },
      {
        path: 'all-film',
        element: <Film />
      },
      { 
        path: 'detail/:slug',
        element: <DetailFilm />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'APP_STARTUP' })
  }, [])

  return <RouterProvider router={router} />
}
