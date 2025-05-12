// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { store } from './store';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Reset } from './styles/GlobalStyles';

import App from './App';
import reportWebVitals from './reportWebVitals';

import Home from './pages/Home';
import Recipe from './pages/Recipe';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/recipe/:id', element: <Recipe /> }
    ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Reset />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
