import React, { useState } from 'react';
import logo from '../assets/logo.png';
import moon from '../assets/icon-moon.svg';
import sun from '../assets/icon-sun.svg';

import useDarkMode from '../hooks/useDarkMode';
import usseDarkMode from '../hooks/useDarkMode';
import { motion } from 'framer-motion';

function Header() {
  const [colorTheme, setTheme] = useDarkMode();
  const [darkSide, setDarkSide] = useState(
    colorTheme === 'light' ? true : false
  );

  const toggleDarkMode = () => {
    setTheme(colorTheme);
    setDarkSide((state) => !state);
  };
  return (
    <div className="lg:hidden h-[80px] z-50 duration-300 ease-in-out p-4 dark:bg-[#1e2139] bg-[#373b53] flex items-center justify-end">
      {/* Logo Image */}
      <img src={logo} alt="logo" className="h-[80px] absolute top-0 left-0" />

      {/* Right Side */}
      <div className="flex items-center">
        {/* Dark Mode Button */}

        {colorTheme === 'light' ? (
          <motion.img onClick={toggleDarkMode} src={moon} className="cursor-pointer ml-8 h-6" />
        ) : (
          <motion.img onClick={toggleDarkMode} src={sun} className="cursor-pointer ml-8 h-6" />
        )}
      </div>
    </div>
  );
}

export default Header;
