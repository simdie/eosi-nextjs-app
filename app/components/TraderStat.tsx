// import React from 'react'
import {TbChartCandle} from 'react-icons/tb';
import {FaArrowUp} from 'react-icons/fa';

export default function TraderStat() {
  return (
    <div className="flex flex-col sm:space-x-6 sm:flex-row justify-start items-center mx-4 max-w-7xl  sm:mx-auto my-28 ">

        <div className=" flex flex-row content-start  justify-between pt-7 w-full mb-8 px-6 sm:mb-0  sm:w-1/3 rounded-lg h-60 bg-gray-100  shadow-inner drop-shadow-xl ">
            <div className="space-y-5">
                <p className="">NightRaiderPRO TRADER</p>
                <p className="font-semibold text-sm">DEX Platforms</p>
                <div className='flex flex-row space-x-2'>
                    <img src="dex1.png" alt="" />
                    <img src="dex2.png" alt="" />
                    <img src="dex3.png" alt="" />
                    <img src="dex4.png" alt="" />
                    <img src="dex5.png" alt="" />
                </div>
                
                <p className="text-sm">Last month profit</p>
                <div className="flex space-x-2">
                    <FaArrowUp className="text-green-500" />
                    <p className="text-sm">123.24%</p>
                </div>
               
            </div>
            


            <div className="flex flex-col space-y-5 ">
                <div className="flex flex-row justify-end space-x-2">
                    <img src="usdt-logo.png" alt="" />
                    <p className="text-sm">USDT</p>
                </div>
               

                <div className="flex justify-end items-center space-x-2">
                    <TbChartCandle />
                    <p className="text-sm">30 days</p>
                </div>
               

                <div className="pt-16">
                    <button className="bg-pink-200 px-5 py-2 border rounded-lg text-sm text-green-600 hover:translate-x-0.5 duration-700">Join to copy trade</button>
                </div>
            </div>
            



        </div>






        <div className=" flex flex-row content-start  justify-between pt-7 w-full mb-8 px-6 sm:mb-0  sm:w-1/3 rounded-lg h-60 bg-gray-100  shadow-inner drop-shadow-xl ">
            <div className="space-y-5">
                <p className="">WavePRO TRADER</p>
                <p className="font-semibold text-sm">DEX Platforms</p>
                <div className='flex flex-row space-x-2'>
                    <img src="dex1.png" alt="" />
                    <img src="dex2.png" alt="" />
                    <img src="dex3.png" alt="" />
                    <img src="dex4.png" alt="" />
                    <img src="dex5.png" alt="" />
                </div>
                
                <p className="text-sm">Last month profit</p>
                <div className="flex space-x-2">
                    <FaArrowUp className="text-green-500" />
                    <p className="text-sm">48.87%</p>
                </div>
               
            </div>
            


            <div className="flex flex-col space-y-5 ">
                <div className="flex flex-row justify-end space-x-2">
                    <img src="usdt-logo.png" alt="" />
                    <p className="text-sm">USDT</p>
                </div>
               

                <div className="flex justify-end items-center space-x-2">
                    <TbChartCandle />
                    <p className="text-sm">35 days</p>
                </div>
               

                <div className="pt-16">
                    <button className="bg-pink-200 px-5 py-2 border rounded-lg text-sm text-green-600 hover:translate-x-0.5 duration-700">Join to copy trade</button>
                </div>
            </div>
            



        </div>




        <div className=" flex flex-row content-start  justify-between pt-7 w-full mb-8 px-6 sm:mb-0  sm:w-1/3 rounded-lg h-60 bg-gray-100  shadow-inner drop-shadow-xl ">
            <div className="space-y-5">
                <p className="">danku_zone PRO TRADER</p>
                <p className="font-semibold text-sm">DEX Platforms</p>
                <div className='flex flex-row space-x-2'>
                    <img src="dex1.png" alt="" />
                    <img src="dex2.png" alt="" />
                    <img src="dex3.png" alt="" />
                    <img src="dex4.png" alt="" />
                    <img src="dex5.png" alt="" />
                </div>
                
                <p className="text-sm">Last month profit</p>
                <div className="flex space-x-2">
                    <FaArrowUp className="text-green-500" />
                    <p className="text-sm">85.03%</p>
                </div>
               
            </div>
            


            <div className="flex flex-col space-y-5 ">
                <div className="flex flex-row justify-end space-x-2">
                    <img src="usdt-logo.png" alt="" />
                    <p className="text-sm">USDT</p>
                </div>
               

                <div className="flex justify-end items-center space-x-2">
                    <TbChartCandle />
                    <p className="text-sm">27 days</p>
                </div>
               

                <div className="pt-16">
                    <button className="bg-pink-200 px-5 py-2 border rounded-lg text-sm text-green-600 hover:translate-x-0.5 duration-700">Join to copy trade</button>
                </div>
            </div>
            



        </div>

    </div>
  )
}
