import { CircleChevronDown } from 'lucide-react';
import { useState } from 'react';

const Accordian = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="  w-full px-4 py-2 border-dotted border-2 border-cyan-400 mt-4">
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={toggleAccordion}
            >
                <h2 className="text-lg  font-bold mb-2">{title}</h2>
                <span className={isOpen ? "rotate-180" : "rotate-0"}>
                    <CircleChevronDown className="`w-6 h-6 fill-black text-white  dark:fill-white dark:text-black `" />
                </span>

            </div>
            {isOpen && (
                <div className="p-4 text-black mt-2">
                    <ul className="space-y-4">
                        {content.map((item, index) => (
                            <li key={index} className={`flex justify-between p-2 ${index % 2 === 1 ? "bg-[#CFFAFE]" : ""}`}
                            >
                                <span className=' text-lg  font- bold'>• {item.label}</span>
                                <span className="font-bold">{item.value}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Accordian;
