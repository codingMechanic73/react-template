import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import routeElements from './routeElements';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(routeElements()));
  return <RouterProvider router={router} />;
}

export default App;
