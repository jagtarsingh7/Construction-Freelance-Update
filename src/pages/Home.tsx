import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useEffect, useState } from "react";
import LoadingView from "../components/animationComponents/loadingView/LoadingView";
import Banner from "../components/structuralComponents/banner/Banner";
import FeatureCards from "../components/dataComponents/featureCards/FeatureCards";
import CoreValues from "../components/dataComponents/coreValues/CoreValues";
import QuoteForm from "../components/dataComponents/quoteForm/QuoteForm";
import Trophy from "../components/animationComponents/trophy/Trophy";
import Footer from "../components/structuralComponents/footer/Footer";

function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(()=>{
            setLoading(false)
        },1000)
    }, [])

    return (
        loading ? (<LoadingView/>) : (
            <Parallax
                pages={4}
                className="bg-[url('../public/images/kenya.jpg')] bg-cover bg-center min-w-full"
                style={{minHeight: "50rem"}}>
                <Banner
                    parallaxEffect={true} heading={"We build the future with passion"} subHeading={"Virdicon"} direction1={"X"} direction2={"Y"}
                    backgroundImageName={"site1.jpg"} extraLayer={true} speed1={500} speed2={1000} level1={-50} level2={100} customCss1={null} customCss2={null} customCssOuter={null} >
                    <FeatureCards />
                </Banner>

                <ParallaxLayer
                    offset={1.5}
                    speed={1}
                    factor={1.9}
                    className="bg-white flex x flex-col w-full mx-auto py-20 md:px-10 justify-between">
                    <CoreValues/>
                    <Trophy />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    speed={0.5}
                    sticky={{ start: 2, end: 4.5 }}
                    className="-z-20">
                    <div
                        className="bg-[url('../public/images/project1.jpg')] bg-cover bg-center h-full w-full">
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2.9}
                    speed={1}
                    factor={1}>
                    <QuoteForm />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={3.5}
                    speed={1}
                    factor={0.5}
                    className="flex flex-col-reverse">
                    <Footer />
                </ParallaxLayer>
            </Parallax>)
    );
}

export default Home;
