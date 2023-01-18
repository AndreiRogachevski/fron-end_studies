import { createBrowserRouter } from 'react-router-dom';
import View from './components/product/View';
import Products from './components/product/Products';

export default createBrowserRouter([
  {
    path: '/',
    element: <Products />,
    children: [
      {
        path: '/:page',
        element: <Products />,
      },
    ],
  },
  {
    path: '/products/:id',
    element: <View />,
  },
]);
