import development from "../../../data/development.json"
import ViewDetectAnimation from "../../../components/animationComponents/viewDetectAnimation/ViewDetectAnimation";
import Footer from "../../../components/structuralComponents/footer/Footer";
import Image from 'next/image'
import DevelopmentCLientComponent from "./development";

function Development() {
  const developmentValues = Object.values(development)
  return (
    <div className="bg-white mx-auto ">
      <DevelopmentCLientComponent/>
      <div  className=" mt-20 min-h-min">
        <div className="bg-white h-full w-full container mx-auto ">
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
                    < Image width={500} height={500} 
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
                    <Image width={500} height={500} className="w-full rounded-lg" src={"/images/service4.jpg"} alt="content 1" />
                  </ViewDetectAnimation>
                  <ViewDetectAnimation direction={"Y"} repeat={true} styles={""} speed={0} level={0} to={0} >
                    <Image width={500} height={500} className="mt-4 w-full lg:mt-10 rounded-lg" src={"/images/worker1.jpg"} alt="office content 2" />
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
                  <Image width={500} height={500}  className="w-full rounded-lg" src={"/images/projects/9.jpeg"} alt="content 1" />
                  </ViewDetectAnimation>
                  <ViewDetectAnimation direction={"Y"} styles={""} speed={0} level={0} to={0} repeat={true}>
                  <Image width={500} height={500} className="mt-4 w-full lg:mt-10 rounded-lg" src={"/images/projects/3.jpeg"} alt="content 2" />
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
