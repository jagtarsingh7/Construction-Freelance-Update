'use client'
import { useRef } from "react";
import company from "../../../data/companyInfo.json";
import ViewDetectAnimation from '../../../components/animationComponents/viewDetectAnimation/ViewDetectAnimation';
import ScrollButton from '../../../components/structuralComponents/scrollButton/ScrollButton';
import Banner from "../../../components/structuralComponents/banner/Banner";
import Image from "next/image";

function AboutCLientComponent() {
    const target = useRef<HTMLDivElement>(null!)
    return (
        <>
        <Banner
            parallaxEffect={false} heading={"About the Company"} subHeading={"Building the Future with Engineering"} direction1={"Y"} direction2={"Y"} speed1={1000} speed2={500} level1={50} level2={20}
            customCss1={"underline text-white text-center md:border-8 border-4 lg:px-48 lg:p-24 md:p-14 p-6 hover:shadow-2xl shadow-inner  border-black z-20 bg-gray-100 bg-opacity-10   lg:text-7xl md:text-5xl  text-2xl font-serif "} customCss2={"mt-24 text-white text-center md:text-3xl text-xl underline font-serif"}
            customCssOuter={"flex flex-col justify-center items-center z-10 h-screen"} backgroundImageName={"service3.jpg"} extraLayer={false}>
            <ScrollButton to={1} target={target} parallaxEffect={false} customCss={null}></ScrollButton>
        </Banner>
        <section ref={target} className="mb-32 container my-20 mx-auto px-5">
                <ViewDetectAnimation direction={"Y"} speed={500} styles={''} level={0} to={0} repeat={false}>
                    <h1 className="mb-4 text-3xl font-bold">
                        {company.title}
                    </h1>
                </ViewDetectAnimation>
                <ViewDetectAnimation direction={"Y"} speed={500} styles={''} level={0} to={0} repeat={true}>
                    <p className="mb-6">
                        {company.description1}
                    </p>
                </ViewDetectAnimation>
                <ViewDetectAnimation direction={"Y"} speed={500} styles={''} level={0} to={0} repeat={true}>
                    <p className="mb-6">
                        <strong> {company.description2}</strong>
                    </p>
                </ViewDetectAnimation>
                <ViewDetectAnimation direction={"Y"} speed={500} styles={''} level={0} to={0} repeat={true}>
                    <p className="mb-6">
                        {company.description3}
                    </p>
                </ViewDetectAnimation>
                <ViewDetectAnimation direction={"Y"} speed={500} styles={''} level={0} to={0} repeat={true}>
                    <p
                        className="mb-6 rounded border-l-4 border-neutral-800 bg-neutral-100 p-2  ">
                        <strong>Note:</strong>{company.description3}
                    </p>
                </ViewDetectAnimation>
                <ViewDetectAnimation direction={"Y"} speed={500} styles={''} level={0} to={0} repeat={true}>
                    <p className="mb-6">
                        {company.description4}
                    </p>
                </ViewDetectAnimation>
                <ViewDetectAnimation direction={"Y"} speed={500} styles={''} level={0} to={0} repeat={true}>
                    <Image src={"/images/projects/6.jpeg"} width={500} height={500}
                        className="mb-6 w-full rounded-lg shadow-lg " alt="project" />
                </ViewDetectAnimation>
                <ViewDetectAnimation direction={"Y"} speed={500} styles={''} level={0} to={0} repeat={false}>
                    <ul className="mb-6 list-inside list-disc">
                        <li>{company.description6}</li>
                        <li>{company.description7}</li>
                    </ul>
                </ViewDetectAnimation>
                <ViewDetectAnimation direction={"Y"} speed={500} styles={''} level={0} to={0} repeat={false}>
                    <p>
                        {company.description8}
                    </p>
                </ViewDetectAnimation>
            </section>
            
            </>

    );
}

export default AboutCLientComponent;
