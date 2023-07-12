import policies from "../../../data/policies.json"
import ViewDetectAnimation from "../../../components/animationComponents/viewDetectAnimation/ViewDetectAnimation";
import Footer from "../../../components/structuralComponents/footer/Footer";
import PolicyCLientComponent from "./policy";

function Policy() {
  const policiesValues = Object.values(policies)

  return (
    <div>
    <PolicyCLientComponent/>
      <div  
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

        <section className="overflow-hidden mt-10 sm:grid sm:grid-cols-2">
          <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <ViewDetectAnimation direction={"Y"} level={50} styles={""} speed={0} to={0} repeat={false}>
                <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                  {policiesValues[1].title}
                </h2>
              </ViewDetectAnimation>
              <ViewDetectAnimation direction={"Y"} level={50} styles={""} speed={0} to={0} repeat={false}>
                <p className="hidden text-gray-500 md:mt-4 md:block">
                  {policiesValues[1].description1}
                </p>
              </ViewDetectAnimation>
              <ViewDetectAnimation direction={"Y"} level={50} styles={""} speed={0} to={0} repeat={false}>
                <p className="hidden text-gray-500 md:mt-4 md:block">
                  {policiesValues[1].description2}
                </p>
              </ViewDetectAnimation>
            </div>
          </div>
          <ViewDetectAnimation direction={"Y"} level={20} styles={""} speed={500} to={0} repeat={true}>
            <img alt="policy" src={"/images/policy.jpg"} className="h-56 w-full object-cover sm:h-full" />
          </ViewDetectAnimation>
        </section>
      </div>

      <div className="container mx-auto mt-10">
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="-my-8 divide-y-2 divide-gray-100">
              {policiesValues.map((item, index) => (
                index >= 2 && index < policiesValues.length - 4 &&
                <div key={index} className="py-8 flex flex-wrap md:flex-nowrap">
                  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <ViewDetectAnimation direction={"Y"} level={10} speed={500} styles={""} to={0} repeat={false}>
                      <span className="font-semibold title-font text-gray-700">{item.title}</span>
                    </ViewDetectAnimation>
                  </div>
                  <div className="md:flex-grow">
                    <ViewDetectAnimation direction={"Y"} speed={100} styles={""} level={0} to={0} repeat={false}>
                      <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{item.description1}</h2>
                    </ViewDetectAnimation>
                    <ViewDetectAnimation direction={"Y"} speed={100} styles={""} level={0} to={0} repeat={false}>
                      <p className="leading-relaxed">{item.description2}</p>
                    </ViewDetectAnimation>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="container mx-auto m-20">
        <section className="bg-white ">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="grid grid-cols-2 gap-4 mt-8">
              <ViewDetectAnimation direction={"X"} level={-10} speed={500} styles={""} to={0} repeat={true}>
                <img className="w-full rounded-lg" src={"/images/worker1.jpg"} alt="content 1" />
              </ViewDetectAnimation>
             
                <img className="mt-4 w-full lg:mt-10 rounded-lg" src={"/images/client.jpg"} alt="content 2" />
           
            </div>
            <div className="font-light text-gray-500 sm:text-lg ">
            <ViewDetectAnimation direction={"X"} speed={500} styles={""} level={10} to={0} repeat={false}>
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">{policies[5].title}</h2>
                </ViewDetectAnimation>
              <ViewDetectAnimation direction={"Y"} speed={1000} styles={""} level={10} to={0} repeat={false}>
                <p className="mb-4">{policies[5].description1}.</p>
              </ViewDetectAnimation>
              <ViewDetectAnimation direction={"Y"} speed={1000} styles={""} level={20} to={0} repeat={false}>
                <p>{policies[5].description2}</p>
              </ViewDetectAnimation>
            </div>
          </div>
        </section>
      </div>

      <div className="container mx-auto">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <ViewDetectAnimation direction={"X"} level={10} styles={"sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5"} speed={500} to={0} repeat={false}>
              <h2 className="">{policies[6].title}</h2>
            </ViewDetectAnimation>
            <div className="md:w-3/5 md:pl-6">
              <ViewDetectAnimation direction={"Y"} speed={100} styles={""} level={0} to={0} repeat={false}>
                <p className="leading-relaxed text-base">{policies[6].description1}</p>
              </ViewDetectAnimation>
              <div className="flex md:mt-4 mt-6">
                <ViewDetectAnimation direction={"Y"} speed={100} styles={""} level={0} to={0} repeat={false}>
                  <p className="leading-relaxed text-base">{policies[6].description2}</p>
                </ViewDetectAnimation>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="flex flex-col-reverse mt-20">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Policy;