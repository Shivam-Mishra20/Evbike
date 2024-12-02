import React from 'react';

const ThemeToggle = ({ isDarkMode, toggleTheme }) => (
    <div className="w-full text-right pt-3 px-2 ">
        <button
            onClick={toggleTheme}
            className="p-2 h-[50px] w-[50px] text-center rounded-full bg-white text-black shadow"
        >
            {isDarkMode ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-sun"
                >
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.36-7.36L16.95 5.05M7.05 16.95l-1.41 1.41M16.36 16.36l1.41 1.41M7.05 7.05L5.64 5.64" />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="black"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-moon"
                >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
            )}
        </button>
    </div>
);

export default ThemeToggle;
