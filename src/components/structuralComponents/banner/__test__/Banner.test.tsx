import { render } from '@testing-library/react';
import Banner from '../Banner';

describe('Banner', () => {
  it('renders without errors', () => {
    const props = {
      parallaxEffect: true,
      extraLayer: true,
      heading: 'Welcome to the Banner',
      subHeading: 'Subheading',
      backgroundImageName: 'image.jpg',
      children: <div>Child Component</div>,
    };

    render(<Banner direction1={'X'} direction2={'X'} speed1={0} speed2={0} level1={0} level2={0} {...props} />);
  });
});
