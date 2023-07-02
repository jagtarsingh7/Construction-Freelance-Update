import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { useState, useContext } from 'react';
import Header from '../Header';

jest.mock('react', () => {
  const originalModule = jest.requireActual('react');
  return {
    ...originalModule,
    useState: jest.fn(),
    useContext: jest.fn(),
  };
});

describe('Header component', () => {
  test('renders logo and company name correctly', () => {
    (useState as jest.Mock).mockImplementation((initialState) => [initialState, jest.fn()]);
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const logoElement = screen.getByAltText('Virdicon Logo');
    expect(logoElement).toBeInTheDocument();

    const companyName = screen.getByText('VIRDICON');
    expect(companyName).toBeInTheDocument();
  });

  test('toggles menu and sub-menu correctly', () => {
    const mockSetSubHead = jest.fn();
    (useContext as jest.Mock).mockImplementation(() => ({ setSubHead: mockSetSubHead }));
    (useState as jest.Mock).mockImplementation((initialState) => [initialState, jest.fn()]);
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const menuToggleBtn = screen.getByLabelText('Open main menu');
    fireEvent.click(menuToggleBtn);
    expect(useContext).toHaveBeenCalled();

    const subMenuToggleBtn = screen.getByLabelText('Menu');
    fireEvent.click(subMenuToggleBtn);
    expect(mockSetSubHead).toHaveBeenCalled();
  });
});
