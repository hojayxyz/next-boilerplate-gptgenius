'use client';

import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { useState } from 'react';

const themes = ['winter', 'dracula'];

const ThemeToggle = () => {
  const [theme, setTheme] = useState('winter');

  const toggleTheme = () => {
    const newTheme = theme === 'winter' ? 'dracula' : 'winter';
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme} className="btn btn-outline btn-sm">
      {theme === 'winter' ? <BsMoonFill /> : <BsSunFill />}
    </button>
  );
};
export default ThemeToggle;
