import React from 'react';

const ImageGal = ({ curimg, setCurimg }) => {
    return (
        <div className="  relative lg:sticky lg:top-0 lg:left-0 w-full md:w-[50%] py-1 pl-2 h-[100vh] overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-2  lg:gap-4">
                {/* Sidebar mini images */}
                <div className="w-full  lg:w-auto overflow-x-hidden lg:overflow-visible">
                    <ul className="flex  lg:flex-col p-2 gap-2 lg:gap-4">
                        {['bike1.png', 'bike2.png', 'bike3.png', 'bikedesc.png'].map((img, index) => (
                            <li
                                key={index}
                                className={`w-[77px] h-[77px] rounded-xl flex items-center justify-center p-2 border-2 shadow-white dark:shadow-current cursor-pointer transition-transform duration-300 ease-in-out hover:shadow-2xl hover:scale-105 ${curimg === `/img/${img}` ? 'border-[#00FFFF]' : 'border-gray-300'
                                    }`}
                                onClick={() => setCurimg(`/img/${img}`)}
                                onMouseEnter={() => setCurimg(`/img/${img}`)}
                            >
                                <img
                                    src={`/img/${img.trim()}`}
                                    alt={`Bike image ${index + 1}`}
                                    className="w-full h-full object-contain"
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Main content */}
                <div className="flex-1">
                    {/* Image Display */}
                    <div className="h-[300px] md:h-[350px]">
                        <img className="h-full w-full object-contain m-auto" src={curimg} alt="Bike Image" />
                    </div>

                    {/* Actions Section */}
                    <div className="mt-5 flex flex-col gap-4 w-[90%] md:w-[75%] m-auto">
                        <div className="flex gap-4 justify-center">
                            <button className="btn-primary">Buy Now</button>
                            <button className="btn-primary">Book</button>
                        </div>
                        <p className="w-full text-center rounded-lg border-custom text-lg md:text-2xl font-bold border-dashed border-4 p-2">
                            EMI @ ₹5,000
                        </p>
                        <div className="flex  ">
                            <button className="btn-primary ">Contact us to learn more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageGal;
