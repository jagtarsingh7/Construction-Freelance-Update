import { IParallax } from '@react-spring/parallax';
import { render, fireEvent } from '@testing-library/react';
import { IScrollButtonProp } from '../../../../Interface/Interfaces';
import ScrollButton from '../ScrollButton';

describe('ScrollButton', () => {
  const scrollToMock = jest.fn();
  const scrollIntoViewMock = jest.fn();

  const pageRef = {
    current: {
      scrollTo: scrollToMock,
    },
  };

  const targetRef = {
    current: {
      scrollIntoView: scrollIntoViewMock,
    },
  };

  const props: IScrollButtonProp = {
    to: 100,
    page: pageRef as unknown as React.MutableRefObject<IParallax>,
    parallaxEffect: true,
    target: targetRef as unknown as React.RefObject<HTMLDivElement>,
    customCss: null
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should call scrollTo when parallaxEffect is true', () => {
    const { getByText } = render(<ScrollButton {...props} />);
    const button = getByText('Learn more');

    fireEvent.click(button);

    expect(scrollToMock).toHaveBeenCalledWith(props.to);
    expect(scrollIntoViewMock).not.toHaveBeenCalled();
  });

  test('should call scrollIntoView when parallaxEffect is false', () => {
    const { getByText } = render(<ScrollButton {...props} parallaxEffect={false} />);
    const button = getByText('Learn more');

    fireEvent.click(button);

    expect(scrollIntoViewMock).toHaveBeenCalled();
    expect(scrollToMock).not.toHaveBeenCalled();
  });
});
