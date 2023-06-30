import ViewDetectAnimation from '../animationComponents/ViewDetectAnimation';
import { Link } from 'react-router-dom';


const FeatureCards = () => {

  const features = [
    {
      title: 'Expert Builders',
      description: 'Our team of experienced builders are skilled in a wide range of construction techniques, from traditional to cutting-edge.',
      icon: "worker5"
    },
    {
      title: 'Quality Materials',
      description: 'We use only the highest-quality materials in our projects, ensuring that our buildings are not only beautiful, but also built to last.',
      icon: "worker2"
    },
    {
      title: 'Custom Designs',
      description: 'We work closely with our clients to create custom designs that meet their unique needs and preferences, resulting in truly one-of-a-kind buildings.',
      icon: "site3"
    },
  ];

  return (
    <div className="container mx-auto border-8  md:bg-transparent  mt-14 ">
      <div className=" grid grid-cols-1 sm:grid-cols-3 gap-8 md:p-0 p-5">
        {features.map((item, index) => (
          <Link to="/development">
          <ViewDetectAnimation direction={"Y"} speed={500 * (index * 1)} level={15 * (index + 1)} styles={""} repeat={true} to={0}>
            <div key={index} className="overflow-hidden rounded-lg shadow transition md:hover:shadow-lg text-center  ">
              <img
                alt={item.title}
                src={`/images/${item.icon}`}
                className="   max-h-64 h-full w-full transition duration-500 hover:scale-105"
              />
              <div className="bg-white p-4 sm:p-6 rounded-xl">
                <ViewDetectAnimation direction={"Y"} level={-50} styles={""} speed={0} to={0} repeat={false}>
                  <h3 className="mt-0.5 md:text-lg text-md  text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-900">
                    {item.description}
                  </p>
                </ViewDetectAnimation>
              </div>
            </div>
          </ViewDetectAnimation>
          </Link>
        ))}
      </div>
    </div> 
  );
};

export default FeatureCards;

