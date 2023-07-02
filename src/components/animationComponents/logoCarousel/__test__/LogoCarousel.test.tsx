import React from 'react';
import { render, waitFor } from '@testing-library/react';
import LogoCarousel from '../LogoCarousel';

jest.useFakeTimers();

describe('LogoCarousel', () => {
  it('renders the logos in a carousel', async () => {
    render(<LogoCarousel />);

    // Wait for the initial render and useEffect to run
    await waitFor(() => expect(setInterval).toHaveBeenCalledTimes(1));

    const logoElement = document.querySelector('img');

    expect(logoElement).toBeInTheDocument();
    expect(logoElement?.src).toContain('client1.png');

    // Advance the carousel by 1 logo
    jest.advanceTimersByTime(2000);

    expect(logoElement?.src).toContain('client2.png');

    // Advance the carousel by 2 logos
    jest.advanceTimersByTime(4000);

    expect(logoElement?.src).toContain('client4.png');
  });
});
