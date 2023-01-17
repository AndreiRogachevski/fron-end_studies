import { createBrowserRouter } from 'react-router-dom';
import Product from './components/product/Product';
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
    element: <Product />,
  },
]);
