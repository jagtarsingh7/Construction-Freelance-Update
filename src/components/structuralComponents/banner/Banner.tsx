import { ParallaxLayer } from '@react-spring/parallax';
import { useSpring, animated, useChain, useSpringRef } from '@react-spring/web';
import { Children } from 'react';
import { IBannerProp } from '../../../Interface/Interfaces';

export default function Banner(props: IBannerProp) {

    const { parallaxEffect, extraLayer, heading, subHeading, backgroundImageName, children, customCss1, customCss2, speed1, speed2, level1, level2, customCssOuter } = props
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
                    <div className={`h-full -z-10  bg-cover bg-center`} style={{ backgroundImage: `url(/images/${backgroundImageName})` }}></div>
                    {extraLayer && <div className="bg-white h-1/5 "></div>}
                </ParallaxLayer>

                <ParallaxLayer
                    offset={0}
                    speed={0.3}
                    className={customCssOuter ? (customCssOuter) : (`flex flex-col items-center relative pt-32 h-full`)}
                >
                    {heading && <animated.div style={animateSpring1}>
                        <h1 className={`${customCss1 ? (customCss1) : ('xl:text-7xl md:text-5xl p-5 text-3xl underline text-center font-serif mb-20 text-white')}`}>{heading}</h1>
                    </animated.div>}
                    {subHeading && <animated.div style={animateSpring2}>
                        <p className={`${customCss2 ? (customCss2) : ('md:border-8 border-4 md:p-10 md:px-8 p-12 text-center border-yellow-300 xl:text-4xl text-white  md:text-3xl text-xl font-medium mb-20 mt-10')}`}>{subHeading}</p>
                    </animated.div>}
                    {
                        (childrenArray.length >= 1 && (heading || subHeading)) ?(<animated.div style={animateSpring3} >{childrenArray.map((child, index) => (<div key={index}>{child}</div>))} </animated.div>):(childrenArray.map((child, index) => (<div key={index}>{child}</div>)))
                    }
                </ParallaxLayer>
            </>
        ) : (
            <div className=" bg-cover bg-center" style={{ backgroundImage: `url(/images/${backgroundImageName})` }}>
                <div className={customCssOuter ? (customCssOuter) : (`flex flex-col items-center relative pt-32 h-full`)}>
                    {heading && <animated.div style={animateSpring1}>
                        <h1 className={`${customCss1 ? (customCss1) : ('xl:text-7xl md:text-5xl p-5 text-3xl underline text-center font-serif mb-20 text-white')}`}>{heading}</h1>
                    </animated.div>}
                    {subHeading && <animated.div style={animateSpring2}>
                        <p className={`${customCss2 ? (customCss2) : ('md:border-8 border-4 md:p-10 md:px-8 p-12 text-center border-yellow-300 xl:text-4xl text-white  md:text-3xl text-xl font-medium mb-20 mt-10')}`}>{subHeading}</p>
                    </animated.div>}
                    {
                        (childrenArray.length >= 1 && (heading || subHeading)) ?(<animated.div style={animateSpring3} >{childrenArray.map((child, index) => (<div key={index}>{child}</div>))} </animated.div>):(childrenArray.map((child, index) => (<div key={index}>{child}</div>)))
                    }
                </div>
            </div>
        )

    )

}