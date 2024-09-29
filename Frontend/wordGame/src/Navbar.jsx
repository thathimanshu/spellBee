import { useState } from 'react';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleMode() {
    let html = document.querySelector('html');

    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      setDarkMode(false); // Light mode
    } else {
      html.classList.add('dark');
      setDarkMode(true); // Dark mode
    }
  }

  return (
    <div className="w-screen bg-themeColor dark:bg-themeColorDark flex justify-center px-2 sm:px-0">
      <div className="w-full sm:w-[420px] flex justify-between">
        <div className='flex items-center'>
            <img src='owl.png' className='h-[32px]'></img>
        </div>

        <div>
          <span className="material-symbols-outlined font-light text-4xl ml-4 cursor-pointer">
            trophy
          </span>
          <span onClick={toggleMode} className="material-symbols-outlined font-light text-4xl ml-4 cursor-pointer">
            {darkMode ? 'light_mode' : 'dark_mode'}
          </span>
          <span className="material-symbols-outlined font-light text-4xl ml-4 cursor-pointer">
            help
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
