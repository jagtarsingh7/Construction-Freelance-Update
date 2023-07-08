import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useEffect, useState } from "react";
import LoadingView from "../components/animationComponents/loadingView/LoadingView";
import Banner from "../components/structuralComponents/banner/Banner";
import FeatureCards from "../components/dataComponents/featureCards/FeatureCards";
import CoreValues from "../components/dataComponents/coreValues/CoreValues";
import QuoteForm from "../components/dataComponents/quoteForm/QuoteForm";
import Trophy from "../components/animationComponents/trophy/Trophy";
import Footer from "../components/structuralComponents/footer/Footer";
import ViewDetectAnimation from "../components/animationComponents/viewDetectAnimation/ViewDetectAnimation";

function Home() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false)
    }, [])

    return (
        loading ? (<LoadingView />) : (
            <Parallax
                pages={4}
                className="bg-white min-w-full"
                style={{ minHeight: "50rem" }}>

                <Banner
                    parallaxEffect={true} heading={"We build the future with passion"} subHeading={"Virdicon"} direction1={"Y"} direction2={"Y"}
                    backgroundImageName={"site1.jpg"} extraLayer={true} speed1={1500} speed2={1000} level1={50} level2={20} customCss1={null} customCss2={null} customCssOuter={null} >
                    <FeatureCards />
                </Banner>

                <ParallaxLayer
                    offset={0.2}
                    speed={1}
                    className="-z-50"
                    sticky={{ start: 0.2, end: 1.2 }}>
                    <div className="bg-[url('../public/images/kenya.jpg')] h-full bg-cover bg-center min-w-full "></div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1.5}
                    speed={0.7}
                    factor={3}
                    className="bg-white flex flex-col mx-auto py-14 justify-between">
                    <CoreValues />
                    <Trophy />
                    <div className="bg-white  ">
                        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                            <div className="max-w-screen-lg text-black sm:text-lg ">
                                <ViewDetectAnimation direction={"X"} level={-10} styles={""} speed={0} to={0} repeat={true}>
                                    <h2 className="mb-4 md:text-5xl text-2xl  tracking-tight font-bold text-gray-900 ">Empowering<span className="font-extrabold"> 20+</span> ventures</h2>
                                </ViewDetectAnimation>
                                <ViewDetectAnimation direction={"Y"} styles={""} speed={0} level={0} to={0} repeat={false}>
                                    <p className="mb-4 font-light hidden md:block">VIRDICON Ltd's comprehensive approach to construction projects encompasses efficient procurement processes, meticulous project planning, cost reduction strategies, cycle time optimization, fabrication expertise, construction excellence, and reliable plumbing and water installations.</p>
                                    <p className="mb-4 font-medium">We work closely with our clients to understand their preferences and requirements, tailoring our landscaping solutions to meet their specific needs</p>
                                </ViewDetectAnimation>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-contain bg-center mb-1 bg-[url('https://i.pinimg.com/originals/74/43/a3/7443a31b6a19e5630b94a6538ff9bdd1.gif')]" >
                        <QuoteForm />
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={3}
                    speed={0.7}
                    factor={1}
                    className="-z-20">
                    <div className="flex h-full flex-col justify-between bg-cover bg-center ">
                        <div className=" md:flex flex-col items-center hidden container mx-auto md:px-6 mt-40 ">
                            <section className="flex flex-col">
                                <ViewDetectAnimation direction={"Y"} speed={1000} styles={''} level={-50} to={0} repeat={true}>
                                    <h1 className="mb-4 md:text-5xl text-3xl text-center text-yellow-400 font-bold">
                                        Community Engagement
                                    </h1>
                                </ViewDetectAnimation>
                                <ViewDetectAnimation direction={"Y"} speed={1000} styles={'hidden md:block'} level={50} to={0} repeat={false}>
                                    <p className="mb-6 md:text-xl text-center">As we continue to grow and expand our services, VIRDICON maintains its core values of integrity, professionalism, and customer-centricity. We are dedicated to making a positive impact in the construction industry and contributing to the development of sustainable and resilient communities.</p>
                                </ViewDetectAnimation>
                                <ViewDetectAnimation direction={"Y"} speed={1000} styles={''} level={0} to={0} repeat={true}>
                                    <p className="mb-6 text-center  md:text-xl">We participate in community development initiatives, support local businesses, and prioritize sustainable and inclusive growth. Follow us</p>
                                </ViewDetectAnimation>
                            </section>
                            <span className=" mt-2 inline-flex">
                                <a className="text-gray-500" href="https://www.facebook.com/">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-2 text-gray-500" href="https://www.twitter.com/">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-2 text-gray-500" href="https://www.instagram.com/">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                </a>
                            </span>
                        </div>
                        <div className="md:hidden h-full bg-contain bg-center mb-1 bg-[url('https://i.pinimg.com/originals/74/43/a3/7443a31b6a19e5630b94a6538ff9bdd1.gif')] "></div>
                        <Footer />
                    </div>
                </ParallaxLayer>
            </Parallax>));
}
export default Home;
