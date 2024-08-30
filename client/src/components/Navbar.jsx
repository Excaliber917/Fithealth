import { useState } from 'react';
import { FaBars, FaMoon, FaSun } from 'react-icons/fa'; // Import moon and sun icons
import { GiCrossMark } from "react-icons/gi";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { IoLogOutOutline } from "react-icons/io5";
import useLogout from '../hooks/useLogout';
import { useDarkMode } from '../context/DarkModeContext'; // Import the custom hook
import logo from '../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const {logout } = useLogout();
  const { user } = useAuthContext();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Dark mode toggle
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav className={` w-full p-4 flex justify-between items-center dark:text-white dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-700  bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 text-black transition-colors duration-300`}>


      {/* Logo */}
      <Link to="/" className="text-lg font-bold md:text-xl">
        <img src={logo} alt="Logo" className="h-12 w-auto md:h-10" />
      </Link>

      {/* Links */}
      <div className="hidden flex-1 items-center justify-center md:flex space-x-8">
        <Link to="/" className={`hover:text-gray-300 font-semibold ${location.pathname === "/" ? `border-b-2 ${isDarkMode ? 'border-white' : 'border-black'} rounded` : ``}`}>Home</Link>
        <Link to="/about" className={`hover:text-gray-300 font-semibold ${location.pathname === "/about" ? `border-b-2 ${isDarkMode ? 'border-white' : 'border-black'} rounded` : ``}`}>About</Link>
        <Link to="/contact" className={`hover:text-gray-300 font-semibold ${location.pathname === "/contact" ? `border-b-2 ${isDarkMode ? 'border-white' : 'border-black'} rounded` : ``}`}>Contact</Link>
      </div>

      {/* Dark Mode Toggle and User Info */}
      <div className="hidden md:flex items-center space-x-4">
        {/* Dark Mode Toggle Button */}
        <button onClick={toggleDarkMode} className="focus:outline-none">
          {isDarkMode ? <FaSun size={20} className="text-yellow-400" /> : <FaMoon size={20} className="text-gray-600" />}
        </button>

        {user ? (
          <>
            <Link to="/profile" className='font-semibold hover:text-gray-300'>{user.username}</Link>
            <img
              src={user.profilePic}
              alt="Profile"
              className="h-8 w-8 rounded-full border-2 border-gray-700"
            />
            <IoLogOutOutline size={25} title='logout' className='cursor-pointer' onClick={() => logout()} />
          </>
        ) : (
          <div className='md:flex items-center gap-2 hidden'>
            <button className='border-2 py-1 px-4 font-bold rounded hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white duration-200 cursor-pointer text-md' onClick={() => navigate("/login")}>Login</button>
            <button className='border-2 py-1 px-4 font-bold rounded hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white duration-200 cursor-pointer text-md' onClick={() => navigate("/signup")}>Sign up</button>
          </div>
        )}
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center">
        <FaBars onClick={toggleSidebar} className={`h-6 w-6 cursor-pointer ${isDarkMode ? 'text-gray-200' : 'text-gray-600'}`} />
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 z-20 h-full w-64 bg-gray-800 dark:bg-gray-900 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden shadow-lg`}
      >
        <button
          className={`absolute top-4 right-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-600'}`}
          onClick={toggleSidebar}
        >
          <GiCrossMark className="h-6 w-6 text-white cursor-pointer" />
        </button>
        <div className={`flex flex-col items-start pl-7 mt-16 space-y-8 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>

          {user ? (
            <div className="flex items-center gap-4 mb-3">
              <Link to="/profile" onClick={toggleSidebar} className="hover:text-gray-300 text-white text-4xl font-bold">{user.username}</Link>
              <img
                src={user.profilePic}
                alt="Profile"
                className="h-12 w-12 rounded-full border-2 border-gray-700"
              />
            </div>
          ) : (
            <div className='flex items-center gap-2'>
              <button className='border-2 py-2 px-4 font-bold text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white duration-200 cursor-pointer text-md' onClick={() => {
                navigate("/login");
                toggleSidebar();
              }}>Login</button>
              <button className='border-2 py-2 px-4 font-bold text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white duration-200 cursor-pointer text-md' onClick={() => {
                navigate("/signup");
                toggleSidebar();
              }}>Sign up</button>
            </div>
          )}

          <Link to="/" className={`text-xl text-white hover:text-gray-300 ${location.pathname === "/" ? `text-2xl font-bold` : ``}`} onClick={() => toggleSidebar()}>Home</Link>
          <Link to="/about" className={`text-xl text-white hover:text-gray-300 ${location.pathname === "/about" ? `text-2xl font-bold` : ``}`} onClick={() => toggleSidebar()}>About</Link>
          <Link to="/contact" className={`text-xl text-white hover:text-gray-300 ${location.pathname === "/contact" ? `text-2xl font-bold` : ``}`} onClick={() => toggleSidebar()}>Contact</Link>
          <div className='flex items-center gap-2'>
            <IoLogOutOutline size={35} title='logout' onClick={() => {
              logout();
              toggleSidebar();
            }} color='red' />
            <button onClick={toggleDarkMode} className="focus:outline-none">
              {isDarkMode ? <FaSun size={35} title='light mode'  onClick={()=>toggleSidebar()} className="text-yellow-400" /> : <FaMoon size={20} title=" dark mode" onClick={()=>toggleSidebar()} className="text-white" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
