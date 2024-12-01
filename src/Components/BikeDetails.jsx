import React from 'react'
import Accordian from './Accordian'
import { Star } from 'lucide-react'
import { bikeData } from './BikeData'

const BikeDetails = () => {
    return (


        <div className="flex-1 ml-[50%] sticky top-0 overflow-y-auto dark:text-white w-[50%] flex flex-col items-start justify-between">
            <div>
                <h1 className="text-6xl font-bold mb-1">P-Sport</h1>
                <p className="text-custom   text-lg font-bold">
                    <span className="text-black  dark:text-white">By</span> Power Electric Vehicles
                </p>
                <div className="flex items-center gap-2 mt-2">
                    <Star className="w-5 h-5 fill-[#00FFFF] text-[#00FFFF]" />
                    <span className="text-xl font-extrabold">4.2</span>
                </div>
            </div>

            <h2 className="text-lg mb-2 font-extrabold">Description</h2>
            <div className="mt-1">
                <div className="flex items-start">
                    <p className="flex-1 p-2 border-custom">Variant: <span className="font-bold">EV</span></p>
                    <p className="flex-1 p-2 border-custom">City: <span className="font-bold">Delhi</span></p>
                </div>
                <div className="flex-1 flex gap-4 justify-center items-center p-2 border-custom font-bold text-center">
                    <p className="text-2xl">Price:</p>
                    <p className="text-4xl text-custom">₹ 179,999</p>
                    <del className="text-gray-600 dark:text-gray-400 text-xl">₹ 199,999</del>
                </div>
            </div>

            <h2 className="text-xl text-start font-bold my-2">Highlights</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[{ label: 'Range', value: '150 km' }, { label: 'Top Speed', value: '85km/h' }, { label: 'Charging', value: '4 hours' }, { label: 'Power', value: '3 kW' }].map((item, index) => (
                    <div key={index} className="bg-custom text-nowrap py-2 px-12 rounded-sm">
                        <p className="text-black text-sm font-extrabold">{item.label}</p>
                        <p className="text-xl text-black font-bold">{item.value}</p>
                    </div>
                ))}
            </div>

            {bikeData.map((item, index) => (
                <Accordian key={index} title={item.title} content={item.content} />
            ))}
        </div>

    )
}

export default BikeDetails