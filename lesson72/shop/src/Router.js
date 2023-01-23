import { createBrowserRouter } from 'react-router-dom';
import View from './components/product/View';
import Products from './components/product/Products';
import ViewWish from './components/WishList';

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
  {
    path: '/products/wishlist',
    element: <ViewWish />,
  },
]);
