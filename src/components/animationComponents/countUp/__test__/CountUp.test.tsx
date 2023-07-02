import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSpring } from '@react-spring/web';
import CountUp from '../CountUp';

jest.mock('@react-spring/web', () => ({
  useSpring: jest.fn(),
  animated: jest.fn().mockImplementation(({ children }) => <span>{children}</span>),
}));

describe('CountUp', () => {
  test('renders the animated number correctly', () => {
    const end = 10;
    const duration = 2000;
    const interpolatedValue = 7.5;

    // Mock the useSpring hook with the desired values
    (useSpring as jest.Mock).mockReturnValue({
      number: interpolatedValue,
    });

    render(<CountUp end={end} duration={duration} />);

    // Verify that the interpolated number is rendered correctly
    const animatedNumber = screen.getByText(Math.floor(interpolatedValue).toString());
    expect(animatedNumber).toBeInTheDocument();
  });
});
