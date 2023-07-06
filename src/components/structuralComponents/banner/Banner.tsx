import { ParallaxLayer } from '@react-spring/parallax';
import { useSpring, animated, useChain, useSpringRef } from '@react-spring/web';
import { Children, useEffect } from 'react';
import { IBannerProp } from '../../../Interface/Interfaces';

export default function Banner(props: IBannerProp) {

    const { parallaxEffect, extraLayer, heading, subHeading, backgroundImageName, children , customCss1, customCss2, speed1, speed2, level1, level2} = props

    const childrenArray = Children.toArray(children);

    const propAnimation1 = useSpringRef()
    const propAnimation2 = useSpringRef()
    const propAnimation3 = useSpringRef()

    const animateSpring1 = useSpring({
        ref: propAnimation1,
        to: { opacity: 1, transform: `translateY(0)` },
        from: { opacity: 0, transform: `translateY(50%)` },
        config: { duration: 500 },
    });

    const animateSpring2 = useSpring({
        ref: propAnimation2,
        to: { opacity: 1, transform: `translateY(10)` },
        from: { opacity: 0, transform: `translateY(50%)` },
        config: { duration: 500 },
    })

    const animateSpring3 = useSpring({
        ref: propAnimation3,
        to: { opacity: 1, transform: `translateY(-10%)` },
        from: { opacity: 0, transform: `translateY(50%)` },
        config: { duration: 500 },
    })

    useChain([propAnimation2, propAnimation1, propAnimation3])

    useEffect(()=>{
        console.log("childrenArray",childrenArray.length)
    },[])

    return (
        parallaxEffect ? (
            <>
                <ParallaxLayer
                    offset={0}
                    speed={0.5}
                    className=" h-full"
                >
                    <div className={`h-full -z-10  bg-cover bg-center`} style={{ backgroundImage: `url(/images/${backgroundImageName})` }}></div>
                    {extraLayer && <div className="bg-white h-1/5 "></div>}
                </ParallaxLayer>

                <ParallaxLayer
                    offset={0}
                    speed={0.3}
                    className="flex flex-col items-center text-white text-center relative  pt-32 h-full"
                >
                    <animated.div style={animateSpring1}>
                        {heading.length >= 1 ? (<p className={`${customCss1?(customCss1):('xl:text-7xl md:text-5xl p-5 text-3xl underline font-serif mb-20')}`}>{heading}</p>) : (childrenArray[0])}
                    </animated.div>
                    <animated.div style={animateSpring2}>
                        {subHeading.length >= 1 ? (<h1 className={`${customCss2?(customCss2):(' md:border-8 border-4 md:p-10 md:px-8 p-12  border-yellow-300 xl:text-4xl  md:text-3xl text-xl font-medium mb-20 mt-10')}`}>{subHeading}</h1>) : (childrenArray[1])}
                    </animated.div>
                    {
                        childrenArray.length >= 1 && <animated.div style={animateSpring3} >{childrenArray.map((child, index) => (<div key={index}>{child}</div>))} </animated.div>
                    }
                </ParallaxLayer>
            </>
        ) : (
            <div className="h-full bg-cover bg-center" style={{ backgroundImage: `url(/images/${backgroundImageName})` }}>
                <div className="flex flex-col h-full justify-center items-center text-white text-center">
                    <animated.div style={animateSpring1} >
                        {heading.length >= 1 ? (<p className={`${customCss1?(customCss1):('xl:text-7xl md:text-5xl p-5 text-3xl underline font-serif mb-20')}`}>{heading}</p>) : (childrenArray[0])}
                    </animated.div>
                    <animated.div style={animateSpring2}>
                        {subHeading.length >= 1 ? (<h1 className={`${customCss2?(customCss2):(' md:border-8 border-4 md:p-10 md:px-8 p-12  border-yellow-300 xl:text-4xl  md:text-3xl text-xl font-medium mb-20 mt-10')}`}>{subHeading}</h1>) : (childrenArray[1])}
                    </animated.div>
                    {
                        childrenArray.length >= 1 && <animated.div style={animateSpring3} >{childrenArray.map((child, index) => (<div key={index}>{child}</div>))} </animated.div>
                    }
                </div>
            </div>
        )

    )

}