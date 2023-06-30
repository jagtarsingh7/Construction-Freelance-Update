import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useEffect, useState } from "react";
import LoadingView from "../components/animationComponents/LoadingView";
import Banner from "../components/structuralComponents/Banner";
import FeatureCards from "../components/dataComponents/FeatureCards";
import CoreValues from "../components/dataComponents/CoreValues";
import QuoteForm from "../components/dataComponents/QuoteForm";

function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false)
    }, [])

    return (
        loading ? (<LoadingView />) : (
            <Parallax
                pages={4}
                className="bg-[url('../public/images/kenya.jpg')] bg-cover bg-center"
                id="main"
            >
                <Banner parallaxEffect={true} heading={"We build the future with passion"} subHeading={"Virdicon"} direction1={""} direction2={""}
                    backgroundImageName={"site1.jpg"} extraLayer={true} speed1={0} speed2={0} level1={0} level2={0}  >
                    <FeatureCards/>
                </Banner>

                <ParallaxLayer
                    offset={1.4}
                    speed={0.5}
                    factor={2}
                    className=""
                >
                    <CoreValues/>
                    
                </ParallaxLayer>
          
                <ParallaxLayer
                    offset={2.5}
                    speed={0.5}
                >
                    <QuoteForm/>

                </ParallaxLayer>

              
                <ParallaxLayer
                    offset={3}
                    speed={1}
                >
                    <QuoteForm/>
                </ParallaxLayer>
            </Parallax>)
    );
}

export default Home;
