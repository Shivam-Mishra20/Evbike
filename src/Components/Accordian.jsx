import { CircleChevronDown } from 'lucide-react';
import { useState } from 'react';

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full px-4 py-2   dark:bg-[#1F2937] border-dotted border-2 border-cyan-400 mt-4">
            <div
                className="flex justify-between  max-h-[45px] items-center cursor-pointer"
                onClick={toggleAccordion}
            >
                <h2 className="text-lg font-bold">{title}</h2>
                <span className={`${isOpen ? "rotate-180" : "rotate-0"}  transition-all ease-out duration-300 `}>
                    <CircleChevronDown fill='black   ' className="w-6 h-6 text-white fill-black dark:fill-white dark:text-black" />
                </span>
            </div>
            {isOpen && (
                <div className="mt-2">
                    <ul>
                        {content.map((item, index) => (
                            <li
                                key={index}
                                className={` grid grid-cols-2  rounded-sm      px-4 py-2 ${index % 2 === 1 ? " text-black dark:text-white " : "bg-[#CFFAFE] dark:text-black"
                                    }`}
                            >
                                <div className="  text-md  ">• {item.label}</div>
                                <div className="text-lg    font-bold">{item.value}</div>
                            </li>


                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Accordion;
