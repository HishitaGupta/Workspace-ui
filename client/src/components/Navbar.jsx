import React, { useState } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
// import { useAuth } from '../AuthContext'; // Import the useAuth hook
// import logo from "../assets/logo.png";
import { IoIosArrowBack, IoIosArrowForward, IoMdCall } from 'react-icons/io';
import { RiMenu5Fill } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';
// import InteractiveButton from './Button';
// import { Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Button from './Button';

const Navbar = ({ z }) => {
    // const { isLoggedIn, setIsLoggedIn } = useAuth(); // Access authentication state and setter
    const [menuVisible, setMenuVisible] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const navigate = useNavigate();
    const location = useLocation(); // Get current location (page)

    // // Handle login button
    // const handleLogin = () => {
    //     setIsLoggedIn(true); // Set login state
    //     navigate('/auth');
    // };

    // // Handle logout button
    // const handleLogout = () => {
    //     setIsLoggedIn(false); // Set logout state
    //     setDropdownVisible(false); // Close dropdown
    //     localStorage.removeItem("token")
    //     navigate('/auth'); // Redirect to home page
    // };

    // Toggle mobile menu
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    // Check if the current page is home
    const isHomePage = location.pathname === '/';

    return (
        <nav className="fixed flex top-0 left-0 items-center justify-between text-white pt-2 px-4 sm:px-[5vw] md:px-[4vw] lg:px-[4vw] lg:py-2 py-2 w-full font-heading mb-4 bg-black/60 backdrop-blur-lg border border-black/10 shadow-sm
                       transition duration-300 ease-in-out poppins" style={{ zIndex: z }} >
            {/* /* Logo * */}
            <Link to="/" className="">
                {/* <img
                                src={logo}
                                alt="Logo"
                                className="w-16 sm:w-16 lg:w-24"
                            /> */}
                <h2 className="text-xl sm:text-xl lg:text-2xl font-medium text-white">Finspace</h2>

            </Link>

            {/* Desktop Menu */}
            {location.pathname !== "/auth" && (


                <ul className="hidden md:flex gap-8 text-[15px] text-darkGray font-normal ">
                    {/* <a href='#home' className="hover:text-gray-400 transition font-body">Home</a> */}
                    <HashLink
                        to="/"
                        className="relative hover:text-gray-400 transition after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:rounded-full after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Home
                    </HashLink>
                    <div className='relative group'>
                        <HashLink
                            to="/about"
                            className="relative font-body hover:text-gray-400 transition after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:rounded-full after:bg-white after:transition-all after:duration-300 hover:after:w-full "
                        >
                            About
                        </HashLink>
                        <div className='hidden group-hover:flex group-hover:absolute w-[40vw] h-[28vh] group-hover:top-8 group-hover:bg-lightSeaGreen/80 backdrop-blur-lg border border-white/30 z-200 rounded-lg items-center p-6 justify-center font-heading text-white gap-4'>
                            <HashLink className=' p-2 rounded-lg bg-primary group-hover:flex justify-center items-center flex-col gap-2 w-full hover:scale-105 transition-transform ease-in-out duration-300' to="/#process">
                               
                                    <img src="https://www.inkonit.com/wp-content/uploads/2015/11/photodune-4791424-the-complexity-of-the-processes-m-1280x1280.jpg" alt="" className='object-cover object-center rounded-lg w-20 h-20' />
                                    <h2>Process</h2>
                              
                            </HashLink>
                            <HashLink className='w-full p-2 rounded-lg bg-primary group-hover:flex justify-center items-center flex-col gap-2 hover:scale-105 transition-transform ease-in-out duration-300' to="/#us">
                               
                                    <img src="https://educloud.app/lms/src/why-educloud/questions_answered_v2_illus.png " alt="" className='object-cover object-center rounded-lg w-20 h-20 bg-white' />
                                    <h2>Why Us?</h2>
                              
                            </HashLink>
                            <HashLink className='w-full p-2 rounded-lg bg-primary group-hover:flex justify-center items-center flex-col gap-2 hover:scale-105 transition-transform ease-in-out duration-300' to="/#achievements">
                               
                                    <img src="https://static.vecteezy.com/system/resources/previews/021/072/458/original/team-success-business-team-celebrating-victory-winners-with-golden-trophy-cup-successful-teamwork-achievement-celebration-illustration-vector.jpg" alt="" className='object-cover object-center rounded-lg w-20 h-20' />
                                    <h2>Achievements</h2>
                              
                            </HashLink>
                            <HashLink className='w-full p-2 rounded-lg bg-primary group-hover:flex justify-center items-center flex-col gap-2 hover:scale-105 transition-transform ease-in-out duration-300' to="/#partners">
                               
                                    <img src="https://th.bing.com/th/id/OIP.OxlGxX46-VAyeYE4HLVkrQHaE7?w=290&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className='object-cover object-center rounded-lg w-20 h-20' />
                                    <h2>Partners</h2>
                              
                            </HashLink>

                        </div>
                    </div>
                    {/* <HashLink
                        to="/#process"
                        className="relative font-body hover:text-gray-400 transition after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:rounded-full after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Process
                    </HashLink>
                    <HashLink
                        href="/#us"
                        className="relative font-body hover:text-gray-400 transition after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:rounded-full after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Why us ?
                    </HashLink>
                    <HashLink
                        to="/#achievements"
                        className="relative font-body hover:text-gray-400 transition after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:rounded-full after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Achievements
                    </HashLink>
                    <HashLink
                        to="/#partners"
                        className="relative font-body hover:text-gray-400 transition after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:rounded-full after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Partners
                    </HashLink> */}

                    <HashLink
                        to="/apply-form"
                        className="relative font-body hover:text-gray-400 transition after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:rounded-full after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Career
                    </HashLink>

                    <HashLink
                        to="/contact"
                        className="relative font-body hover:text-gray-400 transition after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:rounded-full after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Contact Us
                    </HashLink>

                </ul>

            )
            }





            {location.pathname !== "/auth" && (
                <div className="hidden lg:flex items-center gap-4 ">
                    <a href="tel:+918981323486">
                <Button
                    className=""
                    onClick={toggleMenu}
                    
                >
                    Call Now
                </Button>
                </a>

                    <div className="flex items-center gap-4">
                        {/* {!isLoggedIn ? (
                            <button
                                className="px-8 py-2 transition font-body hidden md:flex gap-8 text-md bg-black text-white rounded-md hover:bg-darkGray hover:text-white"
                                onClick={() => {
                                    // toggleMenu();
                                    handleLogin();
                                }}
                            >
                                Login
                            </button>
                        ) : (
                            <button
                                className="px-8 py-2 transition font-body hidden md:flex gap-8 text-md bg-black text-white rounded-md hover:bg-darkGray hover:text-white"
                                onClick={() => {
                                    // toggleMenu();
                                    handleLogout();
                                }}
                            >
                                Logout
                            </button>
                        )} */}
                        {/* <RiMenu5Fill
                    className="text-xl text-black cursor-pointer block  md:hidden "
                    onClick={toggleMenu}
                /> */}
                    </div>
                </div>)}
            {
                menuVisible && (
                    <div className="fixed inset-0 "></div>
                )
            }

            {/* Mobile Menu */}
            {
                menuVisible && (
                    <div className="fixed top-0 right-0 w-4/5 h-screen text-darkGray font-heading flex flex-col items-center gap-0 transition-all justify-start border border-white ease-in-out overflow-hidden bg-black/50 backdrop-blur-lg duration-300 z-999" >
                        <div
                            onClick={toggleMenu}
                            className="flex items-center text-lg hover:text-gray-400 py-2 pl-6 border-b border-primary w-full text-left "
                        >
                            <IoIosArrowBack className="text-primary" />
                            <p>Back</p>
                        </div>

                        {/* <a
                        href="/about"
                        className="text-lg hover:text-gray-400 py-2 pl-6 border-b border-primary w-full text-left"
                        onClick={toggleMenu}
                    >
                        About Us
                    </a> */}

                        <HashLink
                            to="/"
                            className="text-lg hover:text-gray-400 py-2 pl-6 border-b border-primary w-full text-left"
                            onClick={toggleMenu}
                        >
                            Home
                        </HashLink>
                        <HashLink
                            to="/#about"
                            className="text-lg hover:text-gray-400 py-2 pl-6 border-b border-primary w-full text-left"
                            onClick={toggleMenu}
                        >
                            About
                        </HashLink>
                        <HashLink
                            to="/#process"
                            className="text-lg hover:text-gray-400 py-2 pl-6 border-b border-primary w-full text-left"
                            onClick={toggleMenu}
                        >
                            Process
                        </HashLink>
                        <HashLink
                            href="/#us"
                            className="text-lg hover:text-gray-400 py-2 pl-6 border-b border-primary w-full text-left"
                            onClick={toggleMenu}
                        >
                            Why us ?
                        </HashLink>
                        <HashLink
                            to="/#achievements"
                            className="text-lg hover:text-gray-400 py-2 pl-6 border-b border-primary w-full text-left"
                            onClick={toggleMenu}
                        >
                            Achievements
                        </HashLink>
                        <HashLink
                            to="/#partners"
                            className="text-lg hover:text-gray-400 py-2 pl-6 border-b border-primary w-full text-left"
                            onClick={toggleMenu}
                        >
                            Partners
                        </HashLink>

                        <HashLink
                            to="/apply-form"
                            className="text-lg hover:text-gray-400 py-2 pl-6 border-b border-primary w-full text-left"
                            onClick={toggleMenu}
                        >
                            Career
                        </HashLink>

                        <HashLink
                            to="/contact"
                            className="text-lg hover:text-gray-400 py-2 pl-6 border-b border-primary w-full text-left"
                            onClick={toggleMenu}
                        >
                            Contact Us
                        </HashLink>

                        {/* {!isLoggedIn ? (
                            <button
                                className="text-lg hover:text-gray-400 py-2 pl-6 border-b w-full text-left"
                                onClick={() => {
                                    toggleMenu();
                                    handleLogin();
                                }}
                            >
                                Login
                            </button>
                        ) : (
                            <button
                                className="text-lg hover:text-gray-400 py-2 pl-6 border-b w-full text-left"
                                onClick={() => {
                                    toggleMenu();
                                    handleLogout();
                                }}
                            >
                                Logout
                            </button>
                        )} */}

                    </div>
                )
            }
            <RiMenu5Fill
                className="text-xl text-white cursor-pointer block md:hidden"
                onClick={toggleMenu}
            />
        </nav >
    );
};

export default Navbar;