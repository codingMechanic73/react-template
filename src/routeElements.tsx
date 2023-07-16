import { Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Counter from './features/counter/Counter';

function routeElements() {
  return (
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="counter" element={<Counter />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  );
}

export default routeElements;
