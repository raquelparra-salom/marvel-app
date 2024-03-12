import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './components/Root/Root';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/ErrorPage/ErrorPage';
import { CharactersFavList } from './views/CharactersFavList';
import { CharactersList } from './views/CharacterList';
import { ComicsCharacter } from './views/ComicsCharacter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <CharactersList />,
      },
      {
        path: '/list',
        element: <CharactersList />,
      },
      {
        path: '/fav',
        element: <CharactersFavList />,
      },
      {
        path: '/comics/:characterId',
        element: <ComicsCharacter />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
