import { Form } from './components/Form';
import { TodoList } from './components/TodoList';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { addTodoItem, changeTodoItem } from './store/todoAPI';
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TodoList/>,
    },
    {
      path: "/add",
      element: <Form handler={ addTodoItem } />,
    },
    {
      path: "/:id",
      element: <Form handler={ changeTodoItem } />,
    },
  ]);
  
 
const App = () => <RouterProvider router={ router } />

export default App;