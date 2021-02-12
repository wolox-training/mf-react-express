import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import i18next from 'i18next';
import React from 'react';

import SignUp from './index';

describe('#SignUp', () => {
  const validValues = {
    firstName: 'Manuela',
    lastName: 'Fernandez',
    email: 'email@wolox.com',
    password: '123123'
  };

  describe('when required fields are empty and form is submitted', () => {
    it('shows the required message for each required field', async () => {
      render(<SignUp />);

      const firstName = screen.getByLabelText('firstName');
      const lastName = screen.getByLabelText('lastName');
      const email = screen.getByLabelText('email');
      const password = screen.getByLabelText('password');
      const passwordConfirmation = screen.getByLabelText('passwordConfirmation');
      const form = screen.getByRole('form', { name: 'signup-form' });

      // eslint-disable-next-line max-nested-callbacks
      await waitFor(() => fireEvent.submit(form));

      expect(firstName.parentElement?.innerHTML).toMatch(`${i18next.t('SignUp:errorFirstName') as string}`);
      expect(lastName.parentElement?.innerHTML).toMatch(`${i18next.t('SignUp:errorLastName') as string}`);
      expect(email.parentElement?.innerHTML).toMatch(`${i18next.t('SignUp:errorEmail') as string}`);
      expect(password.parentElement?.innerHTML).toMatch(`${i18next.t('SignUp:errorPassword') as string}`);
      expect(passwordConfirmation.parentElement?.innerHTML).toMatch(
        `${i18next.t('SignUp:errorPasswordConfirmation') as string}`
      );
    });
  });

  describe('when password length is too short and form is submitted', () => {
    it('shows the password error', async () => {
      render(<SignUp />);

      const firstName = screen.getByLabelText('firstName');
      const lastName = screen.getByLabelText('lastName');
      const email = screen.getByLabelText('email');
      const password = screen.getByLabelText('password');
      const passwordConfirmation = screen.getByLabelText('passwordConfirmation');
      const form = screen.getByRole('form', { name: 'signup-form' });

      fireEvent.change(firstName, { target: { value: validValues.firstName } });
      fireEvent.change(lastName, { target: { value: validValues.lastName } });
      fireEvent.change(email, { target: { value: validValues.email } });
      fireEvent.change(password, { target: { value: '123' } });
      fireEvent.change(passwordConfirmation, { target: { value: '123' } });

      // eslint-disable-next-line max-nested-callbacks
      await waitFor(() => fireEvent.submit(form));

      expect(password.parentElement?.innerHTML).toMatch(
        `${i18next.t('SignUp:errorPasswordFormat') as string}`
      );
    });
  });

  describe('when password confirmation does not match password and form is submitted', () => {
    it('shows the password confirmation error', async () => {
      render(<SignUp />);

      const firstName = screen.getByLabelText('firstName');
      const lastName = screen.getByLabelText('lastName');
      const email = screen.getByLabelText('email');
      const password = screen.getByLabelText('password');
      const passwordConfirmation = screen.getByLabelText('passwordConfirmation');
      const form = screen.getByRole('form', { name: 'signup-form' });

      fireEvent.change(firstName, { target: { value: validValues.firstName } });
      fireEvent.change(lastName, { target: { value: validValues.lastName } });
      fireEvent.change(email, { target: { value: validValues.email } });
      fireEvent.change(password, { target: { value: validValues.password } });
      fireEvent.change(passwordConfirmation, { target: { value: '123' } });

      // eslint-disable-next-line max-nested-callbacks
      await waitFor(() => fireEvent.submit(form));

      expect(passwordConfirmation.parentElement?.innerHTML).toMatch(
        `${i18next.t('SignUp:errorPasswordConfirmationIdem') as string}`
      );
    });
  });

  describe('when required fields are valid and form is submitted', () => {
    it('sign up successfully', async () => {
      render(<SignUp />);

      const firstName = screen.getByLabelText('firstName');
      const lastName = screen.getByLabelText('lastName');
      const email = screen.getByLabelText('email');
      const password = screen.getByLabelText('password');
      const passwordConfirmation = screen.getByLabelText('passwordConfirmation');
      const form = screen.getByRole('form', { name: 'signup-form' });

      fireEvent.change(firstName, { target: { value: validValues.firstName } });
      fireEvent.change(lastName, { target: { value: validValues.lastName } });
      fireEvent.change(email, { target: { value: validValues.email } });
      fireEvent.change(password, { target: { value: validValues.password } });
      fireEvent.change(passwordConfirmation, { target: { value: validValues.password } });

      // eslint-disable-next-line max-nested-callbacks
      await waitFor(() => fireEvent.submit(form));
    });
  });
});
