import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import SignUp from './index';

describe('<SignUp />', () => {
  const validValues = {
    firstName: 'Manuela',
    lastName: 'Fernandez',
    email: 'email@wolox.com',
    password: '123123'
  };

  it('shows the required message for each required field when required fields are empty and form is submitted', async () => {
    render(<SignUp />);

    userEvent.click(screen.getByRole('button', { name: /SignUp:signUp/i }));

    expect(await screen.findByText('SignUp:errorFirstName')).toBeInTheDocument();
    expect(await screen.findByText('SignUp:errorLastName')).toBeInTheDocument();
    expect(await screen.findByText('SignUp:errorEmail')).toBeInTheDocument();
    expect(await screen.findByText('SignUp:errorPassword')).toBeInTheDocument();
    expect(await screen.findByText('SignUp:errorPasswordConfirmation')).toBeInTheDocument();
  });

  it('shows the first name error message when first name field is empty and form is submitted', async () => {
    render(<SignUp />);

    const lastName = screen.getByLabelText('lastName');
    const email = screen.getByLabelText('email');
    const password = screen.getByLabelText('password');
    const passwordConfirmation = screen.getByLabelText('passwordConfirmation');

    userEvent.type(lastName, validValues.lastName);
    userEvent.type(email, validValues.email);
    userEvent.type(password, validValues.password);
    userEvent.type(passwordConfirmation, validValues.password);

    userEvent.click(screen.getByRole('button', { name: /SignUp:signUp/i }));

    expect(await screen.findByText('SignUp:errorFirstName')).toBeInTheDocument();
  });

  it('shows the password error message when password length is too short and form is submitted', async () => {
    render(<SignUp />);

    const firstName = screen.getByLabelText('firstName');
    const lastName = screen.getByLabelText('lastName');
    const email = screen.getByLabelText('email');
    const password = screen.getByLabelText('password');
    const passwordConfirmation = screen.getByLabelText('passwordConfirmation');

    userEvent.type(firstName, validValues.firstName);
    userEvent.type(lastName, validValues.lastName);
    userEvent.type(email, validValues.email);
    userEvent.type(password, '123');
    userEvent.type(passwordConfirmation, '123');

    userEvent.click(screen.getByRole('button', { name: /SignUp:signUp/i }));

    expect(await screen.findByText('SignUp:errorPasswordFormat')).toBeInTheDocument();
  });

  it('shows the password confirmation error message when password confirmation does not match password and form is submitted', async () => {
    render(<SignUp />);

    const firstName = screen.getByLabelText('firstName');
    const lastName = screen.getByLabelText('lastName');
    const email = screen.getByLabelText('email');
    const password = screen.getByLabelText('password');
    const passwordConfirmation = screen.getByLabelText('passwordConfirmation');

    userEvent.type(firstName, validValues.firstName);
    userEvent.type(lastName, validValues.lastName);
    userEvent.type(email, validValues.email);
    userEvent.type(password, validValues.password);
    userEvent.type(passwordConfirmation, '123');

    userEvent.click(screen.getByRole('button', { name: /SignUp:signUp/i }));

    expect(await screen.findByText('SignUp:errorPasswordConfirmationIdem')).toBeInTheDocument();
  });

  it('sign up successfully when required fields are valid and form is submitted', () => {
    render(<SignUp />);

    const firstName = screen.getByLabelText('firstName');
    const lastName = screen.getByLabelText('lastName');
    const email = screen.getByLabelText('email');
    const password = screen.getByLabelText('password');
    const passwordConfirmation = screen.getByLabelText('passwordConfirmation');

    userEvent.type(firstName, validValues.firstName);
    userEvent.type(lastName, validValues.lastName);
    userEvent.type(email, validValues.email);
    userEvent.type(password, validValues.password);
    userEvent.type(passwordConfirmation, validValues.password);

    userEvent.click(screen.getByRole('button', { name: /SignUp:signUp/i }));
  });
});
