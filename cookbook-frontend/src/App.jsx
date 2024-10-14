import { Provider } from 'react-redux'
import store from './store'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './containers/Root';
import ErrorPage from './page/ErrorPage';
import AddRecipe from './page/AddRecipe';
import Index from './page/Index';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "add-recipe",
        element: <AddRecipe />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
