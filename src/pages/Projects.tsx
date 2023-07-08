
import { useEffect, useRef, useState } from 'react'
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import data from "../data/picsLocationData.json"
import LoadingView from "../components/animationComponents/loadingView/LoadingView";
import ViewDetectAnimation from "../components/animationComponents/viewDetectAnimation/ViewDetectAnimation";
import PorfolioPage from "../components/animationComponents/PorfolioPage";

function Projects() {
  const parallax = useRef<IParallax>(null!)
  const [animation, setAnimation] = useState(false);
  const pics = ["/images/projects/1.jpeg", "/images/projects/2.jpeg", "/images/projects/3.jpeg", "/images/projects/4.jpeg", "/images/projects/5.jpeg", "/images/projects/6.jpeg", "/images/projects/7.jpeg", "/images/projects/8.jpeg", "images/projects/9.jpeg", "/images/projects/10.jpeg"
  ]
  useEffect(() => {
    setAnimation(true);
  }, [])
  
  return (
    animation ? (<Parallax
      className="bg-black"
      ref={parallax}
      pages={pics.length} horizontal>
      <ParallaxLayer
        offset={0}
        speed={0.1}
        className=" z-50"
        style={{
          minHeight: "4rem",
          height: "20vh"
        }}
      >
        <div className=" flex flex-col justify-center items-center my-auto mt-2 md:px-5 text-white text-center md:text-base text-xs  bg-opacity-50 md:bg-transparent bg-white rounded-lg " >
          <div className="my-auto">
            <ViewDetectAnimation direction="Y"  styles={""} speed={0} level={0} to={0} repeat={false} >
              <p className="underline font-bold mt-2 text-black">Disclaimer</p>
            </ViewDetectAnimation></div>
          <div className="my-auto">
            <ViewDetectAnimation direction="Y" speed={1000}  styles={""} level={0} to={0} repeat={false}>
              <p className="font-bold px-5 text-black md:mt-2 mt-2 ">The images displayed on this website are the property of Virdicon Ltd. They are used for illustrative purposes only.
                All images are subject to copyright and should not be reproduced without proper authorization</p>
            </ViewDetectAnimation>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        className="-z-50 flex justify-center items-center pb-20"
        speed={0.5}
        sticky={{ start: 0.5, end: pics.length - 1.5 }}>
        <img src={"/images/logo.png"} alt="project" className=" h-1/4 w-1/4 border-8  bg-white shadow-xl " />
      </ParallaxLayer>

      {pics.map((item, index) => (
        <PorfolioPage key={index} reff={parallax} location={data[index]} offset={index} image={item} />)
      )}
    </Parallax>) : (<LoadingView></LoadingView>)
  )
}
export default Projects
