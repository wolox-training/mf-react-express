import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import Login from './index';

describe('<Login />', () => {
  const validValues = {
    email: 'email@wolox.com',
    password: '123123'
  };

  it('shows incomplete error message when required fields are empty and form is submitted', async () => {
    render(<Login />);

    userEvent.click(screen.getByRole('button', { name: /Login:login/i }));

    expect(await screen.findAllByText('Login:error'));
  });

  it('shows error message when filling invalid email and no password and form is submitted', async () => {
    render(<Login />);

    const email = screen.getByLabelText('email');

    userEvent.type(email, 'test"error.com');

    userEvent.click(screen.getByRole('button', { name: /Login:login/i }));

    expect(await screen.findByText('Login:error')).toBeInTheDocument();
  });

  it('shows the email error message when the email format is not correct and form is submitted', async () => {
    render(<Login />);

    const email = screen.getByLabelText('email');
    const password = screen.getByLabelText('password');

    userEvent.type(email, 'wolox"wolox.com');
    userEvent.type(password, validValues.password);

    userEvent.click(screen.getByRole('button', { name: /Login:login/i }));

    expect(await screen.findByText('Login:errorEmailFormat')).toBeInTheDocument();
  });

  it('login successfully when required fields are valid and form is submitted', () => {
    render(<Login />);

    const email = screen.getByLabelText('email');
    const password = screen.getByLabelText('password');

    userEvent.type(email, validValues.email);
    userEvent.type(password, validValues.password);

    userEvent.click(screen.getByRole('button', { name: /Login:login/i }));
  });
});
