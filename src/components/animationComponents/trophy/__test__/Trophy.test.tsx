import React from 'react';
import { render, screen } from '@testing-library/react';
import Trophy from '../Trophy';

describe('Trophy', () => {
  it('renders the Trophy component with correct counts', () => {
    render(<Trophy />);

    // Check if the Completed Projects count is rendered
    const completedProjectsCount = screen.getByText(/completed projects/i);
    expect(completedProjectsCount).toBeInTheDocument();

    // Check if the Ongoing Projects count is rendered
    const ongoingProjectsCount = screen.getByText(/ongoing projects/i);
    expect(ongoingProjectsCount).toBeInTheDocument();

    // Check if the Recognitions Received count is rendered
    const recognitionsReceivedCount = screen.getByText(/recognitions received/i);
    expect(recognitionsReceivedCount).toBeInTheDocument();

    // Add additional assertions if needed
  });
});
