import { useRef } from "react";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import ScrollButton from "../components/structuralComponents/scrollButton/ScrollButton";
import Banner from "../components/structuralComponents/banner/Banner";
import services from "../data/services.json"
import ViewDetectAnimation from "../components/animationComponents/viewDetectAnimation/ViewDetectAnimation";
import Footer from "../components/structuralComponents/footer/Footer";

function Services() {
    const parallax = useRef<IParallax>(null!)
    return (
        <Parallax
            pages={7.4}
            ref={parallax}
            className="bg-white">

            <Banner
                parallaxEffect={true} heading={"Engineering Services"} subHeading={"Building the Future with Engineering"} direction1={"Y"} direction2={"Y"} speed1={500} speed2={500} level1={50} level2={-50}
                backgroundImageName={"site4.jpg"} extraLayer={false} customCss1={"underline text-white text-center md:border-8 border-4 lg:px-48 lg:p-24 md:p-14 p-6 hover:shadow-2xl shadow-inner  border-black z-20 bg-gray-100 bg-opacity-10 lg:text-7xl md:text-5xl  text-2xl font-serif"}
                customCss2={"mt-24 text-white text-center md:text-3xl text-xl underline font-serif"} customCssOuter={"flex flex-col justify-center items-center z-10"} >
                <ScrollButton to={1} page={parallax} parallaxEffect={true} target={null} customCss={null}></ScrollButton>
            </Banner>

            <ParallaxLayer
                offset={1}
                speed={0.4}
                factor={0.5}>
                <div className="container mx-auto">
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 pb-24 pt-10 mx-auto flex flex-wrap">
                            <ViewDetectAnimation direction={"Y"} level={-50} styles={"md:text-7xl text-4xl text-gray-900 font-medium title-font mb-2 md:w-2/5 text-yellow-400"} speed={1000} to={0} repeat={false}>
                                <h1 className="">Services</h1>
                            </ViewDetectAnimation>
                            <div className="md:w-3/5 md:pl-6">
                                <ViewDetectAnimation direction={"Y"} speed={0} styles={"mb-10"} level={0} to={0} repeat={false}>
                                    <p className="leading-relaxed md:text-xl text-base">At VIRDICON, we believe in fostering strong relationships with our clients, partners, and stakeholders. We prioritize open communication, transparency, and collaboration throughout the project lifecycle. Our customer-centric approach enables us to understand and fulfill the unique needs of each client, resulting in successful project outcomes and long-lasting partnerships.</p>
                                </ViewDetectAnimation>
                                <ViewDetectAnimation direction={"Y"} speed={0} styles={"mb-10"} level={0} to={0} repeat={false}>
                                    <p className="leading-relaxed md:text-xl text-base">As we continue to grow and expand our services, VIRDICON maintains its core values of integrity, professionalism, and customer-centricity. We are dedicated to making a positive impact in the construction industry and contributing to the development of sustainable and resilient communities.</p>
                                </ViewDetectAnimation>
                            </div>
                        </div>
                    </section>
                </div>
            </ParallaxLayer>

            <ParallaxLayer
                offset={1.6}
                speed={0.4}
                factor={0.4}>
                <div className="container mx-auto">
                    <ViewDetectAnimation direction={"Y"} speed={1000} styles={"hidden md:block mt-32 text-center"} level={-100} to={100} repeat={false}>
                        <p className="leading-relaxed md:text-xl text-base mb-10"> VIRDICONLtd.’s track record includes
                            successful implementation of services
                            wherever required. We offer the complete
                            package from project procurement,
                            construction, through to completion
                            as detailed below.</p>
                            <ScrollButton to={2} page={parallax} parallaxEffect={true} target={null} customCss={" "}></ScrollButton>
                    </ViewDetectAnimation>
                </div>
            </ParallaxLayer>

            {services.map((item, index) => (
                <ParallaxLayer
                    key={index}
                    offset={1 + index + 1}
                    speed={0.2}
                    sticky={{ start: 1 + index + 1, end: 1.5 + index + 1 }}
                    className="block md:hidden">
                    <div className="flex flex-col justify-center items-center h-full text-sm font-light  ">
                        <ViewDetectAnimation to={0} direction={"Y"} styles={""} speed={0} level={0} repeat={false}>
                            <div className="space-y-4 rounded-lg shadow-2xl bg-white ">
                                <details className="group [&_summary::-webkit-details-marker]:hidden" >
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg  p-4 text-gray-900">
                                        <h2 className="font-medium text-lg">{item.title}</h2>
                                        <svg
                                            className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <ViewDetectAnimation to={0} direction={"Y"} styles={"mt-4 px-4 leading-relaxed text-gray-700 font-semibold"} speed={500} level={0} repeat={false} >
                                        <p>{item.description1}</p>
                                    </ViewDetectAnimation>
                                    <ViewDetectAnimation to={0} direction={"Y"} styles={"mt-4 px-4 leading-relaxed text-gray-700 font-semibold"} speed={500} level={0} repeat={false} >
                                        <p>{item.description2}</p>
                                    </ViewDetectAnimation>
                                    <ViewDetectAnimation to={0} direction={"Y"} styles={"mt-4 px-4 leading-relaxed text-gray-700 pb-5 font-semibold"} speed={800} level={0} repeat={false} >
                                        <p>{item.description2}</p>
                                    </ViewDetectAnimation>
                                </details>
                            </div>
                        </ViewDetectAnimation>
                    </div>
                </ParallaxLayer>))
            }
            {services.map((item, index) => (
                <ParallaxLayer
                    key={index}
                    offset={1 + index + 1}
                    speed={0.2}
                    style={{ width: "50%" }}
                    sticky={{ start: 1 + index + 1, end: 1.5 + index + 1 }}
                    className=" hidden md:flex ">
                    <div className=" hidden md:flex justify-start items-center h-full mr-auto pl-20 lg:text-4xl md:text-2xl  text-sm font-light ">
                        <h1 className="text-black md:p-5 p-2 text-center  bg-white rounded-lg shadow-2xl h-20 md:w-96  w-80">{item.title}</h1>
                    </div>
                </ParallaxLayer>))
            }
            {services.map((item, index) => (
                <ParallaxLayer key={index}
                    offset={1.5 + index + 1}
                    speed={0.5}
                    style={{ width: "50%" }}
                    className="ml-auto  hidden md:flex z-50 justify-center">
                    <div className="flex flex-col   h-full items-start justify-center pr-20 xl:text-xl lg:text-lg text-white text-md font-light   " >
                        <ViewDetectAnimation to={0} direction="Y" speed={1000} styles={""} level={0} repeat={false}>
                            <div className="space-y-4 my-auto">
                                <details className="group [&_summary::-webkit-details-marker]:hidden z-50 bg-white rounded-xl  border-2 border-slate-300" >
                                    <summary
                                        className="flex cursor-pointeritems-center  gap-1.5 rounded-lg  p-4 text-gray-900 bg-white">
                                        <h2 className="font-medium "> {item.description1}</h2>
                                        <svg
                                            className="h-7 w-7 shrink-0 transition duration-300 group-open:-rotate-180 z-50 text-yellow-400 "
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <p className="mt-4 px-4 leading-relaxed text-gray-700 md:text-base">{item.description2}</p>
                                    <p className="mt-4 px-4 leading-relaxed text-gray-700 md:text-base pb-4">{item.description3}</p>
                                </details>
                            </div>
                        </ViewDetectAnimation>
                        <ViewDetectAnimation to={0} direction="Y" speed={1500} styles={""} level={0} repeat={false}>
                            <div className="space-y-4 my-auto ">
                                <details className="group [&_summary::-webkit-details-marker]:hidden bg-white rounded-xl shadow-xl  border-2 border-slate-300 " >
                                    <summary
                                        className="flex cursor-pointer items-center gap-1.5   p-4 text-gray-900">
                                        <h1 className="font-medium">{item.description4}</h1>
                                        <svg
                                            className="h-7 w-7 shrink-0 transition duration-300  group-open:-rotate-180 text-yellow-400 "
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <p className="mt-4 px-4 leading-relaxed text-gray-700 md:text-base ">{item.description5}</p>
                                    <p className="mt-4 px-4 leading-relaxed text-gray-700  md:text-base pb-4">{item.description6}</p>
                                </details>
                            </div>
                        </ViewDetectAnimation>
                    </div>
                </ParallaxLayer>))
            }
            {services.map((item, index) =>
                <ParallaxLayer
                    key={index}
                    offset={2.4 + index}
                    speed={0.2}
                    className={`-z-50`}>
                    <div style={{ backgroundImage: `url(${item.icon})` }} className=" bg-cover bg-center md:w-1/2 h-full ">
                    </div>
                </ParallaxLayer>)
            }
            <ParallaxLayer
                offset={6.5}
                speed={0.2}>
                <div className="flex h-full w-full items-end">
                    <Footer />
                </div>
            </ParallaxLayer>
        </Parallax>
    );
}
export default Services;
