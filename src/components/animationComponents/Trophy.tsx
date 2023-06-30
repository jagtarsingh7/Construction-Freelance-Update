import LogoCarousel from "./LogoCarousel"
import { useInView, } from '@react-spring/web';
import ViewDetectAnimation from "./ViewDetectAnimation";
import CountUp from "./CountUp";

function Trophy() {
    const [trophyRef, trophyAnimated] = useInView()

    return (

        <div
            className='flex items-start'
        >
            <section ref={trophyRef} id="trophy" className="bg-white  w-full">
                <div className="mx-auto w-full px-4 py-12 sm:px-6 md:py-16 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <ViewDetectAnimation direction={"Y"} speed={2000}  styles={""} level={0} to={0} repeat={false} >
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                                Trusted by Businesses
                            </h2>
                        </ViewDetectAnimation>

                        <LogoCarousel></LogoCarousel>
                    </div>

                    <div className="mt-8 sm:mt-12">
                        <dl
                            className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100">
                            <div className="flex flex-col px-4 py-8 text-center">
                                <dt className="order-last text-lg font-medium text-gray-500">
                                    Completed Projects
                                </dt>

                                <dd className="text-4xl font-extrabold text-yellow-300 md:text-5xl">
                                    
                                    {trophyAnimated ? (<CountUp  end={120} duration={5} />) : (0)}+
                                </dd>
                            </div>

                            <div className="flex flex-col px-4 py-8 text-center">
                                <dt className="order-last text-lg font-medium text-gray-500">
                                    Ongoing Projects
                                </dt>

                                <dd className="text-4xl font-extrabold text-yellow-300 md:text-5xl">
                                    {trophyAnimated ? (<CountUp end={30} duration={5} />) : (0)}+
                                </dd>
                            </div>

                            <div className="flex flex-col px-4 py-8 text-center">
                                <dt className="order-last text-lg font-medium text-gray-500">
                                    Recognitions Received
                                </dt>

                                <dd className="text-4xl font-extrabold text-yellow-300 md:text-5xl">
                                    {trophyAnimated ? (<CountUp end={11} duration={5} />) : (0)}+
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Trophy
