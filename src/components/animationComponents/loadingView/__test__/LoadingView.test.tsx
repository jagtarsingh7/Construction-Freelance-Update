import React from 'react';
import { render } from '@testing-library/react';
import LoadingView from '../LoadingView';

describe('LoadingView', () => {
  it('renders the loading spinner', () => {
    const { getByText } = render(<LoadingView />);
    const spinnerElement = getByText('⌛');
    
    expect(spinnerElement).toBeInTheDocument();
  });
});
