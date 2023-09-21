import { useState } from "react";
import logo from "../assets/tv.png";
import { IoSearch } from "react-icons/io5";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex justify-between items-center px-4 py-3 md:px-10 lg:px-20">
            {/* Icon */}
            <div className="flex items-center">
                <div>
                    <img className="w-12" src={logo} alt="MovieBoxIcon" />
                </div>
                <div>
                    <h1 className="text-white font-bold text-2xl ml-2 hidden md:block">MovieBox</h1>
                </div>
            </div>

            {/* Search */}
            <form className="w-[50%] ml-4 hidden md:flex">
                <div className="relative w-full">
                    <input
                        id="suffix"
                        className="w-full px-2 py-1 border-gray-300 border-solid border-2 rounded-md bg-transparent text-white"
                        type="text"
                        placeholder="What do you want to watch?"
                    />
                    <div>
                        <button
                            type="submit"
                            className="absolute inset-0 left-auto p-3 cursor-pointer"
                        >
                            <IoSearch className="text-gray-200" />
                        </button>
                    </div>
                </div>
            </form>

            {/* Menu */}
            <div className="flex items-center">
                <h1 className="text-white font-bold text-base my-1 mx-4 hidden md:block">Sign In</h1>
                <div className="flex items-center bg-red-500 rounded-full p-3 md:hidden">
                    <button
                        className="text-white focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
