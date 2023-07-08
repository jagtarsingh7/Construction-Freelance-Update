import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../../../context/MyContext';
function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(true);
    const {setSubHead } = useContext(MyContext)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    const toggleSubMenu = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    }

    return (
        <header className=" ">
            <nav className="  bg-transparent px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img src={`${"/images/logo.png"}`} className="mr-3 h-6 sm:h-9" alt="Virdicon Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap ">VIRDICON</span>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <button data-collapse-toggle="mobile-menu-2" onClick={toggleMenu} className="inline-flex items-center p-2 ml-1 text-sm text-black rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 id=mobile-menu-2 `}>
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li onClick={() => setIsSubMenuOpen(true)} >
                                <Link to="/" className="relative block py-2 pr-4 pl-3  rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 " aria-current="page">Home</Link>
                            </li>
                            <li>
                                <div className='flex '>
                                    <Link to="/services" onClick={() => setSubHead(0)} state={{ from: 0 }} className="block  py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Services</Link>
                                    <div className='relative'>
                                        <button
                                            className="h-full p-2 text-black hover:bg-gray-50 hover:text-gray-700 "
                                            onClick={toggleSubMenu}>
                                            <span className="sr-only">Menu</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
                                            </svg>
                                        </button>
                                        <div
                                            className={`${isSubMenuOpen ? 'hidden' : 'block'} absolute z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg`}
                                            role="menu">
                                            <div className="p-2" >
                                                <Link to="/services" onClick={() => {
                                                    setSubHead(1.4)
                                                    setIsSubMenuOpen(true)
                                                }}
                                                    className="block rounded-lg px-4 py-2 text-sm text-black hover:bg-gray-50 hover:text-gray-700"
                                                    role="menuitem">
                                                    Building Engineering
                                                </Link>
                                                <Link to="/services" onClick={() => {
                                                    setSubHead(2.4)
                                                    setIsSubMenuOpen(true)
                                                }}
                                                    className="block rounded-lg px-4 py-2 text-sm text-black hover:bg-gray-50 hover:text-gray-700">
                                                    Civil Engineering
                                                </Link>
                                                <Link to="/services" onClick={() => {
                                                    setSubHead(3.4)
                                                    setIsSubMenuOpen(true)
                                                }}
                                                    className="block rounded-lg px-4 py-2 text-sm text-black hover:bg-gray-50 hover:text-gray-700"
                                                    role="menuitem">
                                                    Electrical Installations
                                                </Link>
                                                <Link to="/services" onClick={() => {
                                                    setSubHead(4.4)
                                                    setIsSubMenuOpen(true)
                                                }}
                                                    className="block rounded-lg px-4 py-2 text-sm text-black hover:bg-gray-50 hover:text-gray-700"
                                                    role="menuitem">
                                                    Plumbing Installations
                                                </Link>
                                                <Link to="/services" onClick={() => {
                                                    setSubHead(5.4)
                                                    setIsSubMenuOpen(true)
                                                }}
                                                    className="block rounded-lg px-4 py-2 text-sm text-black hover:bg-gray-50 hover:text-gray-700"
                                                    role="menuitem"
                                                >
                                                    Landscaping
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li onClick={() => setIsSubMenuOpen(true)}>
                                <Link to="/development" className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 text-black">Development</Link>
                            </li>
                            <li onClick={() => setIsSubMenuOpen(true)} >
                                <Link to="/policy" className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  text-black">Safety and Compliance</Link>
                            </li>
                            <li onClick={() => setIsSubMenuOpen(true)} >
                                <Link to="/projects" className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  text-black">Projects</Link>
                            </li>
                            <li onClick={() => setIsSubMenuOpen(true)}>
                                <Link to="/about" className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  text-black">Company</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;