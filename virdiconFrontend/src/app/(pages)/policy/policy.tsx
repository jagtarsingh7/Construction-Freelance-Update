'use client'
import { useRef } from "react";
import ViewDetectAnimation from '../../../components/animationComponents/viewDetectAnimation/ViewDetectAnimation';
import ScrollButton from '../../../components/structuralComponents/scrollButton/ScrollButton';
import Banner from "../../../components/structuralComponents/banner/Banner";
import policies from "../../../data/policies.json"

function PolicyCLientComponent() {
    const policiesValues = Object.values(policies)
    const page = useRef<HTMLDivElement>(null!)
    return (
        <>    
        <Banner
            parallaxEffect={false} heading={null} subHeading={null} direction1={"X"} direction2={""} speed1={0} speed2={0} level1={-50} level2={0}
            customCssOuter={"py-8 px-4 mx-auto max-w-screen-xl min-h-screen  sm:py-16 lg:px-6"} customCss2={null} backgroundImageName={"site2.jpg"} extraLayer={false} customCss1={null} >
            <div className="max-w-screen-md mt-20">
                <ViewDetectAnimation direction={"X"} speed={1000} level={-10} styles={""} to={0} repeat={false}>
                    <h2 className="mb-4 md:text-5xl text-3xl tracking-tight font-extrabold text-white">Quality Assurance Health & Safety policy</h2>
                </ViewDetectAnimation>
                <ViewDetectAnimation direction={"Y"} styles={""} speed={0} level={0} to={0} repeat={false} >
                    <p className=" font-light sm:text text-gray-100">Elevating Standards: Unwavering Dedication to Quality Assurance, Health, and Safety for Uncompromising Excellence.</p>
                </ViewDetectAnimation>
            </div>
            <div className="flex justify-center items-center  ">
                <ScrollButton to={1} parallaxEffect={false} target={page} customCss={null}></ScrollButton>
            </div>
        </Banner>

            <div
                ref={page}
                className="container mx-auto mt-10">
                <section className="bg-white ">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                        <div className="max-w-screen-lg text-gray-500 sm:text-lg ">
                            <ViewDetectAnimation direction={"X"} speed={1000} level={-10} styles={""} to={0} repeat={true}>
                                <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900">{policiesValues[0].title}</h2>
                            </ViewDetectAnimation>
                            <ViewDetectAnimation direction={"Y"} speed={500} level={50} styles={""} to={0} repeat={false}>
                                <p className="mb-4 font-light">{policiesValues[0].description1}</p>
                            </ViewDetectAnimation>
                            <ViewDetectAnimation direction={"Y"} speed={1000} level={50} styles={""} to={0} repeat={false}>
                                <p className="mb-4 font-light">{policiesValues[0].description2}</p>
                            </ViewDetectAnimation>
                        </div>
                    </div>
                </section>
            </div>
        </>


    );
}
export default PolicyCLientComponent;
