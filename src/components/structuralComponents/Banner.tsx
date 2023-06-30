import { ParallaxLayer } from '@react-spring/parallax';
import { useSpring, animated, useChain, useSpringRef } from '@react-spring/web';
import { Children } from 'react';
import { IBannerProp } from '../../Interface/Interfaces';

export default function Banner(props: IBannerProp) {

    const { parallaxEffect, extraLayer, heading, subHeading, backgroundImageName, children } = props

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

    return (
        parallaxEffect ? (
            <>
                <ParallaxLayer
                    offset={0}
                    speed={0.5}
                    className=" h-full"
                >
                    <div className={`h-screen -z-10  bg-cover bg-center`} style={{ backgroundImage: `url(/images/${backgroundImageName})` }}></div>
                    {extraLayer && <div className="bg-white h-1/5"></div>}
                </ParallaxLayer>

                <ParallaxLayer
                    offset={0}
                    speed={0.2}
                    className="flex flex-col justify-center items-center text-white text-center"
                >
                    <animated.div style={animateSpring1}>
                        {childrenArray.length > 2 ? (childrenArray[0]) : (<p className="xl:text-7xl md:text-5xl text-3xl underline font-serif mb-20">{heading}</p>)}
                    </animated.div>
                    <animated.div style={animateSpring2}>

                        {childrenArray.length > 2 ? (childrenArray[1]) : (<h1 className=" md:border-8 border-4 md:p-10 md:px-8 p-6  border-yellow-300 xl:text-4xl  md:text-3xl text-xl font-medium mb-20 mt-10">{subHeading}</h1>)}
                    </animated.div>
                    {
                        childrenArray.length > 2 && <animated.div style={animateSpring3} >{childrenArray.map((child, index) => (<div key={index}>{child}</div>))} </animated.div>
                    }
                </ParallaxLayer>
            </>
        ) : (
            <div className= "h-screen bg-cover bg-center" style={{ backgroundImage: `url(/images/${backgroundImageName})`}}>
            <div className="flex flex-col h-full justify-center items-center text-white text-center">
                <animated.div style={animateSpring1} >
                    {childrenArray.length > 2 ? (childrenArray[0]) : (<p className="xl:text-7xl md:text-5xl text-3xl underline font-serif mb-20">{heading}</p>)}
                </animated.div>
                <animated.div style={animateSpring2}>
                    {childrenArray.length > 2 ? (childrenArray[1]) : (<h1 className=" md:border-8 border-4 md:p-10 md:px-8 p-6  border-yellow-300 xl:text-4xl  md:text-3xl text-xl font-medium mb-20 mt-10">{subHeading}</h1>)}
                </animated.div>
                {
                    childrenArray.length > 2 && <animated.div style={animateSpring3} >{childrenArray.map((child, index) => (<div key={index}>{child}</div>))} </animated.div>
                }
            </div>
            </div>
        )

    )

}