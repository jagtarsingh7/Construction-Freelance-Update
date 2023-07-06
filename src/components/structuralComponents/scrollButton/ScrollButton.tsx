import { IScrollButtonProp } from "../../../Interface/Interfaces";

export default function ScrollButton(props: IScrollButtonProp) {
    const { to, page, parallaxEffect, target } = props

    const scroll = (offset: number) => {
        if (page && page.current) {
            page.current.scrollTo(offset)
        }
    }
    const handleScroll = () => {
        if (target && target.current) {
            target.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        parallaxEffect ? (<button
            onClick={() => scroll(to)}
            className="bg-white mt-24 shadow-xl text-black px-6 py-3 rounded-full font-bold hover:bg-gray-300 transition-colors duration-500 ease-in-out z-50"
        >
            Learn more
        </button>) : (<button
            onClick={() => handleScroll}
            className="bg-white mt-24 shadow-xl text-black px-6 py-3 rounded-full font-bold hover:bg-gray-300 transition-colors duration-500 ease-in-out z-50 "
        >
            Learn more
        </button>)
    )
}


