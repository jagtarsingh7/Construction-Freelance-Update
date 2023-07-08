import { useRef } from "react";
import ScrollButton from "../components/structuralComponents/scrollButton/ScrollButton";
import development from "../data/development.json"
import ViewDetectAnimation from "../components/animationComponents/viewDetectAnimation/ViewDetectAnimation";
import Footer from "../components/structuralComponents/footer/Footer";
import Banner from "../components/structuralComponents/banner/Banner";

function Development() {
  const targetRef = useRef(null);
  const developmentValues = Object.values(development)
  return (
    <div className="bg-white mx-auto ">

      <Banner
        parallaxEffect={false} heading={null} subHeading={null} direction1={""} direction2={""} speed1={0} speed2={0} level1={0} level2={0}
        customCss1={null} customCss2={null} customCssOuter={"flex min-h-screen h-full items-center justify-center"} backgroundImageName={"project1.jpg"} extraLayer={false}>
        <div className="px-6 text-center text-black md:px-12 ">
          <ViewDetectAnimation direction={"Y"} styles={""} speed={0} level={0} to={0} repeat={false}>
            <h2 className="mb-12 lg:text-6xl md:text-5xl  text-3xl font-serif leading-tight tracking-tight underline bg-white bg-opacity-20 ">
              Streamlined Procurement <br /><span>& Timely Delivery</span>
            </h2>
          </ViewDetectAnimation>
          <ScrollButton target={targetRef} parallaxEffect={false} to={0} customCss={null} ></ScrollButton>
          <p className="mt-24 text-white text-center md:text-3xl text-xl underline font-serif ">Prioritizing Safety and Compliance for a Secure Future</p>
        </div>
      </Banner>

      <div ref={targetRef} className=" mt-20 min-h-min">
        <div className="bg-white h-full w-full container mx-auto ">
          <div className=" mx-auto  ">
            <ViewDetectAnimation direction={"X"} level={-10} styles={""} speed={0} to={0} repeat={false}>
              <h2 className="flex border-b-2  font-extrabold md:text-5xl text-2xl  text-yellow-300 font-serif pt-5">
                Project planning
              </h2>
            </ViewDetectAnimation>
            <p className=" md:text-lg mt-2 text-sm text-gray-700 leading-relaxed mb-8 ">
              VIRDICON Ltd's procurement and project planning system focuses on achieving cost reduction and cycle time optimization. By implementing efficient procurement practices, the company can obtain resources at competitive prices, while effective project planning helps in proper resource allocation and timely project execution.
              This systematic approach enables VIRDICON Ltd to deliver projects in a cost-effective and timely manner, ensuring client satisfaction and project success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:gap-8 md:p-10  ">
            <section>
              <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="max-w-3xl">
                  <ViewDetectAnimation direction="Y" styles={""} speed={0} level={0} to={0} repeat={false}>
                    <h2 className="md:text-3xl font-bold text-2xl">
                      {developmentValues[0].title}
                    </h2>
                  </ViewDetectAnimation>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                  <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                    <img
                      alt="Party"
                      src={"/images/projects/1.jpeg"}
                      className="absolute inset-0 h-full w-full object-cover" />
                  </div>
                  <div className="lg:py-16">
                    <ViewDetectAnimation direction={"Y"} styles={""} speed={0} level={0} to={0} repeat={false}>
                      <article className="space-y-4 text-gray-600">
                        <p>{developmentValues[0].description1}</p>
                        <p>{developmentValues[0].description2}</p>
                      </article>
                    </ViewDetectAnimation>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white">
              <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg ">
                  <ViewDetectAnimation direction={"Y"} styles={""} speed={0} level={0} to={0} repeat={false}>
                    <h2 className="mb-4 md:text-5xl text-2xl  tracking-tight font-extrabold text-gray-900 ">  {developmentValues[1].title}</h2>
                  </ViewDetectAnimation>
                  <ViewDetectAnimation direction={"Y"} speed={1000} styles={""} level={0} to={0} repeat={false}>
                    <p className="mb-4">{developmentValues[0].description1}. {developmentValues[0].description2}</p>
                  </ViewDetectAnimation>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <ViewDetectAnimation direction={"X"} level={-50} repeat={true} styles={""} speed={0} to={0} >
                    <img className="w-full rounded-lg" src={"/images/service4.jpg"} alt="content 1" />
                  </ViewDetectAnimation>
                  <ViewDetectAnimation direction={"Y"} repeat={true} styles={""} speed={0} level={0} to={0} >
                    <img className="mt-4 w-full lg:mt-10 rounded-lg" src={"/images/worker1.jpg"} alt="office content 2" />
                  </ViewDetectAnimation>
                </div>
              </div>
            </section>

            <section className="bg-white">
              <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="max-w-screen-lg sm:text-lg ">
                  <ViewDetectAnimation direction={"X"} level={-10} styles={""} speed={0} to={0} repeat={false}>
                    <h2 className="mb-4 md:text-5xl text-2xl  tracking-tight font-bold text-gray-900 ">{developmentValues[2].title}: <span className="font-extrabold"> 20+</span> ventures</h2>
                  </ViewDetectAnimation>
                  <ViewDetectAnimation direction={"Y"} styles={""} speed={0} level={0} to={0} repeat={false}>
                    <p className="mb-4 font-light">{developmentValues[2].description1}</p>
                    <p className="mb-4 font-medium">{developmentValues[2].description2}</p>
                  </ViewDetectAnimation>
                </div>
              </div>
            </section>

            <section className="text-gray-600 body-font overflow-hidden">
              <div className="container px-5 py-24 mx-auto">
                <div className="-my-8 divide-y-2 divide-gray-100">
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <span className="font-semibold title-font text-gray-700">{developmentValues[3].title}</span>
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{developmentValues[3].description1}</h2>
                      <p className="leading-relaxed">{developmentValues[3].description2}</p>
                    </div>
                  </div>
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <span className="font-semibold title-font text-gray-700">{developmentValues[4].title}</span>
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{developmentValues[4].description1}</h2>
                      <p className="leading-relaxed">{developmentValues[4].description2}.</p>
                    </div>
                  </div>
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <span className="font-semibold title-font text-gray-700">{developmentValues[5].title}</span>
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{developmentValues[5].description1}</h2>
                      <p className="leading-relaxed">{developmentValues[5].description2}</p>
                    </div>
                  </div>
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <span className="font-semibold title-font text-gray-700">{developmentValues[6].title}</span>
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{developmentValues[6].description1}</h2>
                      <p className="leading-relaxed">{developmentValues[6].description2}.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white">
              <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <ViewDetectAnimation direction={"Y"} level={-50} speed={1000} styles={""} to={0} repeat={true}>
                    <img className="w-full rounded-lg" src={"/images/projects/9.jpeg"} alt="content 1" />
                  </ViewDetectAnimation>
                  <ViewDetectAnimation direction={"Y"} styles={""} speed={0} level={0} to={0} repeat={true}>
                    <img className="mt-4 w-full lg:mt-10 rounded-lg" src={"/images/projects/3.jpeg"} alt="content 2" />
                  </ViewDetectAnimation>
                </div>
                <div className="font-light text-gray-500 sm:text-lg ">
                  <ViewDetectAnimation direction={"Y"} styles={""} speed={0} level={0} to={0} repeat={false}>
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">{developmentValues[8].title}</h2>
                  </ViewDetectAnimation>
                  <ViewDetectAnimation direction={"Y"} styles={""} speed={0} level={0} to={0} repeat={false}>
                    <p className="mb-4">{developmentValues[8].description1}</p>
                    <p className="mb-4">{developmentValues[8].description2}</p>
                  </ViewDetectAnimation>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse">
        <Footer></Footer>
      </div>

    </div>
  );
}

export default Development;
