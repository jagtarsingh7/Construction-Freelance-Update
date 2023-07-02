import { animated, useSpring } from '@react-spring/web';
import { ICountUp } from '../../../Interface/Interfaces';

const CountUp = (props:ICountUp) => {
  const{ end, duration }=props
  
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: end },
    config: { duration: duration || 1000 },
  });

  return <animated.span>{number.interpolate((val: number) => Math.floor(val))}</animated.span>;
};

export default CountUp;
