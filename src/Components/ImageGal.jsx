import React from 'react';

const ImageGal = ({ curimg, setCurimg }) => {


    return (
        <div className="fixed top-[40] left-0 w-[50%] py-4 pl-2 h-[100vh] overflow-hidden">
            <div className="flex sm:flex-col md:flex-row gap-4">
                <div>
                    <ul className="flex md:flex-col overflow-x-auto md:overflow-x-visible">
                        {['bike1.png', 'bike2.png', 'bike3.png', 'bikedesc.png'].map((img, index) => (
                            <li
                                key={index}
                                className={`w-[77px] rounded-xl flex items-center p-1 h-[77px] mb-4 border-2 shadow-md cursor-pointer ${index === 0 ? 'border-primary dark:border-white' : ''}`}
                            >
                                <img
                                    src={`/img/${img.trim()}`}
                                    alt={`Bike image ${index + 1}`}
                                    onClick={() => setCurimg(`/img/${img}`)}
                                    onMouseEnter={() => setCurimg(`/img/${img}`)}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1">
                    <div className="h-[350px]">
                        <img className="h-[100%] m-auto" src={curimg} alt="Bike Image" />
                    </div>
                    <div className="mt-5 flex flex-col gap-2 w-[75%] m-auto">
                        <div className="flex gap-10">
                            <button className="btn-primary">Buy Now</button>
                            <button className="btn-primary">Book</button>
                        </div>
                        <p className="w-full text-center rounded-lg border-custom text-2xl font-bold border-4 border-dashed p-2">
                            EMI @ ₹5,000
                        </p>
                        <div className="flex gap-10">
                            <button className="btn-secondary">Contact us to learn more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageGal;
