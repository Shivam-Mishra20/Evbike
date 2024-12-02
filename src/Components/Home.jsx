import { useState } from 'react';

import '../App.css';
import ImageGal from './ImageGal';
import BikeDetails from './BikeDetails';
import ThemeToggle from './ThemeToggle';

const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [curimg, setCurimg] = useState('/img/bike1.png');

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <div className={`p-1 ${isDarkMode ? 'bg-gray-800' : ''}`}>
            <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            <div className="text-black min-h-screen w-full  flex flex-col md:flex-row items-start">
                <ImageGal curimg={curimg} setCurimg={setCurimg} />
                <BikeDetails curimg={curimg} />
            </div>
        </div>
    );
};

export default Home;
