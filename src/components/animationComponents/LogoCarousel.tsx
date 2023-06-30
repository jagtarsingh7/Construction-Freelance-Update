import  { useState, useEffect } from 'react';
import logo1 from '../images/client1.png';
import logo2 from '../images/client4.png';
import logo3 from '../images/client5.jpeg';
import logo4 from '../images/client6.png';

const LogoCarousel = () => {
  const logos = [logo1, logo2, logo3, logo4];
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex items-center justify-center py-8">
      <div className="flex space-x-4">
        <img
          src={logos[currentLogoIndex]}
          alt={`Logo ${currentLogoIndex + 1}`}
          className="h-20 w-auto"
        />
      </div>
    </div>
  );
};

export default LogoCarousel;
