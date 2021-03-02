import React from 'react';
import { MemoryRouter } from 'react-router';
import { render, screen, waitFor } from '@testing-library/react';

import Routes from './index';

test('shows SignUp screen when being on the sign up path', async () => {
  window.history.pushState({}, '', '/sign_up');

  render(
    <MemoryRouter initialEntries={['/sign_up']}>
      <Routes />
    </MemoryRouter>
  );
  await waitFor(() => expect(screen.getByRole('form', { name: 'signup-form' })));
});

test('shows Login screen when being on the login path', async () => {
  window.history.pushState({}, '', '/');
  render(
    <MemoryRouter initialEntries={['/']}>
      <Routes />
    </MemoryRouter>
  );

  await waitFor(() => expect(screen.getByText('Login:email')).toBeInTheDocument());
});
