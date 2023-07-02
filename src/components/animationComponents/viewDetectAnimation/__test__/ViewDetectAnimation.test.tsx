import React from 'react';
import { render } from '@testing-library/react';
import ViewDetectAnimation from '../ViewDetectAnimation';

describe('ViewDetectAnimation', () => {
  it('renders the ViewDetectAnimation component with animation styles', () => {
    const mockProps = {
      direction: 'X',
      children: <div>Test Content</div>,
      styles: 'test-styles',
      speed: 1000,
      level: 20,
      to: 100,
      repeat: true,
    };

    const { container } = render(<ViewDetectAnimation {...mockProps} />);

    const animatedElement = container.querySelector('.test-styles');

    expect(animatedElement).toBeInTheDocument();
    expect(animatedElement).toHaveStyle('opacity: 1');
    expect(animatedElement).toHaveStyle('transform: translateX(100%)');
  });

  it('renders the ViewDetectAnimation component without animation styles', () => {
    const mockProps = {
      direction: 'Y',
      children: <div>Test Content</div>,
      styles: '',
      speed: 500,
      level: 0,
      to: 0,
      repeat: false,
    };

    const { container } = render(<ViewDetectAnimation {...mockProps} />);

    const animatedElement = container.querySelector('div');

    expect(animatedElement).toBeInTheDocument();
    expect(animatedElement).not.toHaveStyle('opacity: 0');
    expect(animatedElement).not.toHaveStyle('transform: translateY(0)');
  });
});
