import React from 'react';
import Accordian from './Accordian';
import { Star } from 'lucide-react';
import { bikeData } from './BikeData';

const BikeDetails = () => {
    return (
        <div className="w-full md:w-[50%]  p-12 md:p-1  mt-2  md:my-1 dark:text-white flex flex-col md:items-start justify-between">

            <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-1">P-Sport</h1>
                <p className="text-custom text-lg font-semibold">
                    <span className="text-black dark:text-white">By</span>Power Electric Vehicles
                </p>
                <div className="flex items-center gap-2 mt-2">
                    <Star className="w-5 h-5 fill-[#00FFFF] text-[#00FFFF]" />
                    <span className="text-xl font-extrabold">4.2</span>
                </div>
            </div>


            <div className=' mt-3'>
                <h2 className="text-xl my-2 font-extrabold">Description</h2>
                <div className="mt-1">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center">
                        <p className="flex-1 w-full lg:w-auto p-2 border-custom text-start">
                            Variant: <span className="font-bold">EV</span>
                        </p>
                        <p className="flex-1 w-full lg:w-auto p-2 border-custom text-start">
                            City: <span className="font-bold">Delhi</span>
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-between items-start lg:items-center p-2 border-custom font-bold text-start lg:text-center">
                        <p className="text-2xl">Price:</p>
                        <p className="text-xl md:text-3xl text-custom">₹ 179,999</p>
                        <del className="text-gray-600 dark:text-gray-400 text-xl">₹ 199,999</del>
                    </div>
                </div>

            </div>




            <h2 className="text-xl text-start font-bold my-2">Highlights</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
                {[
                    { label: 'Range', value: '150 km' },
                    { label: 'Top Speed', value: '85km/h' },
                    { label: 'Charging', value: '4 hours' },
                    { label: 'Power', value: '3 kW' },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="bg-custom text-start py-2 px-2 rounded-sm w-full"
                    >
                        <p className="text-black text-start text-sm font-extrabold">
                            {item.label}
                        </p>
                        <p className=" text-sm lg:text-xl text-start text-black font-bold">
                            {item.value}
                        </p>
                    </div>
                ))}
            </div>

            {/* Accordion Section */}
            {bikeData.map((item, index) => (
                <Accordian key={index} title={item.title} content={item.content} />
            ))}
        </div>
    );
};

export default BikeDetails;
