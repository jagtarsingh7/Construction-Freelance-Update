import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import FeatureCards from '../FeatureCards';

describe('FeatureCards', () => {
  it('renders the FeatureCards component with the correct content', () => {
    render(
      <Router>
        <FeatureCards />
      </Router>
    );

    const featureTitles = ['Expert Builders', 'Quality Materials', 'Custom Designs'];
    const featureDescriptions = [
      'Our team of experienced builders are skilled in a wide range of construction techniques, from traditional to cutting-edge.',
      'We use only the highest-quality materials in our projects, ensuring that our buildings are not only beautiful, but also built to last.',
      'We work closely with our clients to create custom designs that meet their unique needs and preferences, resulting in truly one-of-a-kind buildings.',
    ];

    featureTitles.forEach((title) => {
      const featureTitle = screen.getByText(title);
      expect(featureTitle).toBeInTheDocument();
    });

    featureDescriptions.forEach((description) => {
      const featureDescription = screen.getByText(description);
      expect(featureDescription).toBeInTheDocument();
    });
  });
});
