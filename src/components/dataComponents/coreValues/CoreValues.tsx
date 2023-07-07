import values from "../../../data/coreValues.json"
import ViewDetectAnimation from "../../animationComponents/viewDetectAnimation/ViewDetectAnimation";

function CoreValues() {

  return (
    <div className="bg-white flex flex-col items-center justify-end md:mt-0 mt-5">
      <div className="max-w-5xl flex flex-col items-center  mt-10 ">
        <ViewDetectAnimation direction={"X"} level={-20} speed={500} styles={"border-b-2 mx-auto  font-extrabold md:text-4xl text-3xl mb-4 text-yellow-300 font-serif"} to={0} repeat={false}>
          <h1 > Background</h1>
        </ViewDetectAnimation>
        <ViewDetectAnimation direction={"Y"}  styles={""} speed={0} level={0} to={0} repeat={false}>
          <p className="md:text-base text-sm text-gray-700 text-center leading-relaxed mb-8 px-5 ">
            Established in 2012, VIRDICON Ltd (parent company-Rattansons Building Contractors Ltd)
            is a distinct organisation that strives to offer exceptional services and solutions within the construction sector.
            Rattansons Building Contractors Ltd has always embraced changes within the industry and thrived on innovation, continuous improvement,
            best practice, and has developed VIRDICON Ltd into a dynamic and forward-thinking company.
          </p>
        </ViewDetectAnimation>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-9 md:p-10 ">
        {values.map((service, index) => (
          <>
            <ViewDetectAnimation direction={"Y"} styles="hidden md:flex" speed={0} level={0} to={0} repeat={false}>
              <div key={index} className="p-8 bg-white shadow-lg hover:shadow-xl rounded-xl">
                <h3 className="text-xl font-semibold mb-2 text-yellow-300">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </ViewDetectAnimation>
            <ViewDetectAnimation direction={"Y"} styles="md:hidden block bg-white" speed={0} level={0} to={0} repeat={false} >
           
                <div className="space-y-4">
                  <details className="group [&_summary::-webkit-details-marker]:hidden" >
                    <summary
                      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg  p-4 text-gray-900"
                    >
                      <h2 className="font-medium ">
                        {service.title}
                      </h2>

                      <svg
                        className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>

                    <p className="mt-4 px-4 leading-relaxed text-gray-700 bg-white">
                      {service.description}
                    </p>
                  </details>
                </div>
            </ViewDetectAnimation>
          </>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;

