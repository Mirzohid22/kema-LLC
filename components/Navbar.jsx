import { useState } from 'react';
import { BiMenu, BiX, BiSolidShip } from "react-icons/bi"
import { useTheme } from 'next-themes';


function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const { theme, setTheme } = useTheme();

    const handleScroll = (name) => {
        setNavbar(prev => !prev)
        document.getElementById(name).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    }
    return (
        <div className='transition'>
            <nav className="dark:bg-black dark:text-white fixed top-0 left-0 right-0 z-10 w-full bg-white drop-shadow-md dark:drop-shadow-md dark:shadow-md">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <div className='flex-left'>
                                <div className='flex justify-center items-center py-5'><BiSolidShip className='animate__animated animate__zoomInDown' size={'40px'} /><span className='font-bold text-2xl ml-1'>KEMA</span></div>
                            </div>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <BiX size={30} className='focus:border-none active:border-none' />
                                    ) : (
                                        <BiMenu size={30} className='focus:border-none active:border-none' />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                                }`}
                        >
                            <ul className="items-center justify-center h-screen md:h-auto md:flex ">
                                <li
                                    onClick={() => handleScroll("about")}
                                    className="py-6 text-xl text-center text-black dark:text-purple-600  border-b-2 border-purple-900 md:px-6 md:border-b-0 hover:bg-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                                    <p className='hover:cursor-pointer'>
                                        About
                                    </p>
                                </li>
                                <li
                                    onClick={() => handleScroll("team")}
                                    className="px-6 py-6 text-xl text-center text-black border-b-2 dark:text-purple-600 border-purple-900 md:border-b-0 hover:bg-purple-600 md:hover:text-purple-600 md:hover:bg-transparent">
                                    <p className='hover:cursor-pointer'>
                                        Team
                                    </p>
                                </li>
                                <li
                                    onClick={() => handleScroll("blog")}
                                    className="px-6 py-6 text-xl text-center text-black border-b-2 dark:text-purple-600 border-purple-900 md:border-b-0 hover:bg-purple-600 md:hover:text-purple-600 md:hover:bg-transparent">
                                    <p className='hover:cursor-pointer'>
                                        Blogs
                                    </p>
                                </li>
                                <li
                                    onClick={() => handleScroll("contact")}
                                    className="px-6 py-6 text-xl text-center text-black border-b-2 dark:text-purple-600 border-purple-900 md:border-b-0 hover:bg-purple-600 md:hover:text-purple-600 md:hover:bg-transparent">
                                    <p className='hover:cursor-pointer'>
                                        Contact
                                    </p>
                                </li>
                                <button
                                    className="animate__animated animate__headShake flex px-6 py-3 my-2 text-xl text-center text-white bg-gradient-to-r from-blue-400 to-purple-600 rounded-full shadow-xl hover:opacity-90 align-center hover:cursor-pointer active:opacity-80 active:scale-95 transition"
                                    onClick={() => handleScroll("ariza")}
                                >
                                    <p
                                        className='inline-block w-full h-full align-middle rounded-full'
                                    >
                                        Ariza qoldirish
                                    </p>
                                </button>
                                <div class="m-3 transition">
                                    <div class="relative inline-block w-10 mr-2 align-middle select-none">
                                        <label for="Blue" class="h-6 relative w-12 overflow-hidden bg-gray-300 dark:bg-gray-800 rounded-full cursor-pointer box-border flex align-center justify-between">
                                            <span className='block'>☀️</span>
                                            <input
                                                class="bg-gradient-to-r from-blue-400 to-purple-600 outline-none focus:outline-none right-6 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full border-4 appearance-none cursor-pointer"
                                                onChange={() => { setTheme(theme === "dark" ? "light" : "dark") }}
                                                type="checkbox"
                                                name="toggle"
                                                id="Blue"
                                                value={theme === "dark" ? "light" : "dark"}
                                            />
                                            <span className='block'>🌙</span>
                                        </label>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav >
        </div >
    );
}

export default NavBar;