import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import {
  RouterProvider,
  createMemoryRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import routeElements from './routeElements';

describe('App', () => {
  it('event route', async () => {
    const routes = createRoutesFromElements(routeElements());

    const router = createMemoryRouter(routes, {
      initialEntries: ['/eafa', '/'],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Not found');
  });
});
