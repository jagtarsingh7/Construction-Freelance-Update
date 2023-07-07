import members from "../data/members.json"
import { useRef } from "react";
import company from "../data/companyInfo.json";
import ViewDetectAnimation from '../components/animationComponents/viewDetectAnimation/ViewDetectAnimation';
import QuoteForm from '../components/dataComponents/quoteForm/QuoteForm';
import Footer from '../components/structuralComponents/footer/Footer';
import ScrollButton from '../components/structuralComponents/scrollButton/ScrollButton';
import Banner from "../components/structuralComponents/banner/Banner";

function About() {
  const membersValues = Object.values(members)
  const target = useRef<HTMLDivElement>(null!)
  return (
    <div className="bg-white">
      <Banner
        parallaxEffect={false} heading={"About the Company"} subHeading={"Building the Future with Engineering"} direction1={""} direction2={""} speed1={0} speed2={0} level1={0} level2={0}
        customCss1={"underline text-white text-center md:border-8 border-4 lg:px-48 lg:p-24 md:p-14 p-6 hover:shadow-2xl shadow-inner  border-black z-20 bg-gray-100 bg-opacity-10   lg:text-7xl md:text-5xl  text-2xl font-serif "} customCss2={"mt-24 text-white text-center md:text-3xl text-xl underline font-serif"}
        customCssOuter={"flex flex-col justify-center items-center z-10 h-screen"} backgroundImageName={"service3.jpg"} extraLayer={false} >
        <ScrollButton to={1} target={target} parallaxEffect={false} customCss={null} ></ScrollButton>
      </Banner>

      <div ref={target} className="container my-24 mx-auto md:px-6">
        <section className="mb-32">
          <ViewDetectAnimation direction={"Y"} speed={1000} styles={''} level={0} to={0} repeat={false}>
            <h1 className="mb-4 text-3xl font-bold">
              {company.title}
            </h1>
          </ViewDetectAnimation>
          <ViewDetectAnimation direction={"Y"} speed={1000} styles={''} level={0} to={0} repeat={false}>
            <p className="mb-6">
              {company.description1}
            </p>
          </ViewDetectAnimation>
          <ViewDetectAnimation direction={"Y"} speed={1000} styles={''} level={0} to={0} repeat={false}>
            <p className="mb-6">
              <strong> {company.description2}</strong>
            </p>
          </ViewDetectAnimation>
          <ViewDetectAnimation direction={"Y"} speed={1000} styles={''} level={0} to={0} repeat={false}>
            <p className="mb-6">
              {company.description3}
            </p>
          </ViewDetectAnimation>
          <ViewDetectAnimation direction={"Y"} speed={1000} styles={''} level={0} to={0} repeat={false}>
            <p
              className="mb-6 rounded border-l-4 border-neutral-800 bg-neutral-100 p-2 dark:border-neutral-200 dark:bg-neutral-700">
              <strong>Note:</strong>{company.description3}
            </p>
          </ViewDetectAnimation>
          <ViewDetectAnimation direction={"Y"} speed={1000} styles={''} level={0} to={0} repeat={false}>
            <p className="mb-6">
              {company.description4}
            </p>
          </ViewDetectAnimation>
          <ViewDetectAnimation direction={"Y"} speed={1000} styles={''} level={0} to={0} repeat={false}>
            <img src={"/images/service3.jpg"}
              className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" />
          </ViewDetectAnimation>
          <ViewDetectAnimation direction={"Y"} speed={1000} styles={''} level={0} to={0} repeat={false}>
            <ul className="mb-6 list-inside list-disc">
              <li>{company.description6}</li>
              <li>{company.description7}</li>
            </ul>
          </ViewDetectAnimation>
          <ViewDetectAnimation direction={"Y"} speed={1000} styles={''} level={0} to={0} repeat={false}>
            <p>
              {company.description8}
            </p>
          </ViewDetectAnimation>
        </section>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className='flex flex-col text-center w-full mb-20'>
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
            <ViewDetectAnimation direction={"Y"} speed={1000} styles={''} level={0} to={0} repeat={false}>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{company.description10}</p>
            </ViewDetectAnimation>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <ViewDetectAnimation direction={"Y"} speed={1000} styles={''} level={0} to={0} repeat={false}>
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">{membersValues[0].name}</h2>
                <p className="leading-relaxed text-base">{membersValues[0].designation}</p>
                <p className="leading-relaxed text-base">{membersValues[0].phone}</p>
              </ViewDetectAnimation>
              <span className=" mt-2 inline-flex">
                <a className="text-gray-500">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <ViewDetectAnimation direction={"Y"} speed={1000} styles={''} level={0} to={0} repeat={false}>
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">{membersValues[2].name}</h2>
                <p className="leading-relaxed text-base">{membersValues[2].designation}</p>
                <p className="leading-relaxed text-base">{membersValues[2].phone}</p>
              </ViewDetectAnimation>
              <span className=" mt-2 inline-flex">
                <a className="text-gray-500">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <ViewDetectAnimation direction={"Y"} speed={1000} styles={''} level={0} to={0} repeat={false}>
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">{membersValues[1].name}</h2>
                <p className="leading-relaxed text-base">{membersValues[1].designation}</p>
                <p className="leading-relaxed text-base">{membersValues[1].phone}</p>
              </ViewDetectAnimation>
              <span className=" mt-2 inline-flex">
                <a className="text-gray-500">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
      <div>
        <QuoteForm></QuoteForm>
      </div>
      <div className="flex -z-50 flex-col-reverse my-auto ">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default About;
