import { createBrowserRouter } from 'react-router-dom';
import Products from './Products';

export default createBrowserRouter([
  {
    path: '/',
    element: <Products />,
  },
]);
