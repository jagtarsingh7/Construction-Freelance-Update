import { IPortfolioPage } from '../../../Interface/Interfaces';
import { ParallaxLayer } from '@react-spring/parallax'
import { useState } from 'react'
import ViewDetectAnimation from '../viewDetectAnimation/ViewDetectAnimation';

const PorfolioPage = (props:IPortfolioPage) => {
  const{ reff, location, offset, image }=props
  const locationData = Object.values(location)
  const [count] = useState(offset);
  const scroll = (to:number) => {
    if (reff.current) {
      const newPosition = (to + 1) % 10;
      reff.current.scrollTo(newPosition);
    }
  };

  return (
    <>
      <ParallaxLayer offset={count} style={{ cursor: "pointer" }} className="flex justify-center items-center" speed={0.2} onClick={() => { scroll(count) }}>
        <img src={image} alt="project" className=" mx-auto w-full sm:h-full h-4/6 shadow-2xl shadow-black" />
      </ParallaxLayer>
      <ParallaxLayer
        style={{
          pointerEvents: "none"
        }}
        className="md:text-2xl  z-20 flex justify-center items-center  text-white" offset={count} speed={0}>
        <div className="pb-12 mb-12 ml-10 md:text-4xl text-2xl transition delay-300 animate-pulse font-semibold ">{'<'}</div>
        <div className="pb-12 mb-12 mr-10 mx-auto md:text-4xl text-2xl transition delay-300 animate-pulse font-semibold" >{'>'}</div>
      </ParallaxLayer>
      <ParallaxLayer
        style={{
          pointerEvents: "none"
        }}
        className="z-20 flex justify-start items-end  text-white" offset={count} speed={0.1}>
        <ViewDetectAnimation direction={"Y"} styles={''} speed={0} level={0} to={0} repeat={false} >
          <article className="rounded-lg  border-gray-100 border-2 bg-white bg-opacity-80 md:p-6 md:mb-20 md:ml-10 mb-28">
            <div className="inline-flex gap-2 self-end rounded"> </div>
            <div> <strong className="block text-sm font-medium text-gray-500"> Status </strong>
              <p><span className="md:text-2xl text-lg font-medium text-gray-900">{locationData[1]} </span></p>
              <p><span className="text-xs text-gray-500"> at {locationData[0]}  </span><span className="md:text-lg  text-md font-medium">{locationData[2]}</span></p>
            </div>
          </article>
        </ViewDetectAnimation>
      </ParallaxLayer>
    </>)
}
export default PorfolioPage