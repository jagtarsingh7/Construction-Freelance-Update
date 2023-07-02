import React from 'react';
import { render } from '@testing-library/react';
import CoreValues from '../CoreValues';

describe('CoreValues', () => {
  it('renders the CoreValues component with the correct content', () => {
    const { getByText } = render(<CoreValues />);

    const backgroundHeading = getByText('Background');
    const paragraph = getByText(
      'Established in 2012, VIRDICON Ltd (parent company-Rattansons Building Contractors Ltd) is a distinct organisation that strives to offer exceptional services and solutions within the construction sector. Rattansons Building Contractors Ltd has always embraced changes within the industry and thrived on innovation, continuous improvement, best practice, and has developed VIRDICON Ltd into a dynamic and forward-thinking company.'
    );

    expect(backgroundHeading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();

    const serviceTitles = [
      'Core Value 1',
      'Core Value 2',
      'Core Value 3',
    ];

    serviceTitles.forEach((title) => {
      const serviceTitle = getByText(title);
      expect(serviceTitle).toBeInTheDocument();
    });
  });
});
