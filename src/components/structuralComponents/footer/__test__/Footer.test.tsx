import { render } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer component', () => {
  test('renders logo and text correctly', () => {
    const { getByAltText, getByText } = render(<Footer />);
    
    const logo = getByAltText('Virdicon Logo');
    expect(logo).toBeInTheDocument();
    
    const companyName = getByText('VIRDICON');
    expect(companyName).toBeInTheDocument();

    const copyrightText = getByText(/Copyright © 2023/i);
    expect(copyrightText).toBeInTheDocument();

    const developerName = getByText(/Developed by Jagtar Singh/i);
    expect(developerName).toBeInTheDocument();
  });
});
