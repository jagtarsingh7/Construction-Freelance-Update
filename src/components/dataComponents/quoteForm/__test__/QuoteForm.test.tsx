import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import QuoteForm from '../QuoteForm';

describe('QuoteForm', () => {
  it('submits the form and displays a success message', async () => {
    render(<QuoteForm />);

    // Fill in the form fields
    const nameInput = screen.getByPlaceholderText('Name');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });

    const emailInput = screen.getByPlaceholderText('Email address');
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });

    const phoneInput = screen.getByPlaceholderText('Phone Number');
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });

    const messageTextarea = screen.getByPlaceholderText('Message');
    fireEvent.change(messageTextarea, { target: { value: 'Test message' } });

    // Submit the form
    const submitButton = screen.getByText('Send Enquiry');
    fireEvent.click(submitButton);

    // Wait for the success message to appear
    await waitFor(() => {
      const successMessage = screen.getByText('Your message has been successfully reached to us. We will contact you.');
      expect(successMessage).toBeInTheDocument();
    });
  });
});
