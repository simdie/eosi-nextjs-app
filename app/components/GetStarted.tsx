import Image from "next/image"
import getstarted1 from "public/getstarted1.png"
import getstarted2 from "public/getstarted2.png"
import getstarted3 from "public/getstarted3.png"


export default function GetStarted() {
  return (
    <div className="flex flex-col sm:space-x-6  justify-start items-center mx-4 max-w-7xl  sm:mx-auto my-8 ">
        <div className="font-semibold text-4xl pb-20">
            Get Started in 3 Easy Steps

        </div>


        <div className="flex flex-row items-center justify-center w-full">

            <div className="flex flex-col items-center w-1/3 h-40 space-y-5">
                
                <Image src={getstarted1} alt="" />
                <div className="flex flex-col items-center justify-center">
                    <p className="font-bold text-lg">1. Sign Up for Free</p>
                    <p className="text-center px-12">We have different categories of pro-traders to suit your needs.</p>
                </div>
            </div>

            

            <div className="flex flex-col items-center w-1/3 h-40 space-y-5">
                
                <Image src={getstarted2} alt="" />
                <div className="flex flex-col items-center justify-center">
                    <p className="font-bold text-lg">2. Trade with your Web3 Wallet</p>
                    <p className="text-center px-12">Connect your existing web3 wallets like Metamask, Trustwallet, SafePal etc and approve the amount you want to trade with.</p>
                </div>
            </div>

           

            <div className="flex flex-col items-center w-1/3 h-40 space-y-5">
                
                <Image src={getstarted3} alt="" />
                <div className="flex flex-col items-center justify-center">
                    <p className="font-bold text-lg">3. Start investing Today</p>
                    <p className="text-center px-12">Choose from a wide seletion of our doxxed pro-traders or allow EOSI Finance AI to select pro-traders according to your risk level.</p>
                </div>
            </div>
            

        </div>

        <div className="my-20"></div>

    
        <button  className=" font-base bg-[#4C205B] py-5 px-16 rounded-lg text-gray-100 hover:translate-x-0.5 duration-700">Get Started</button>


        {/* division div */}

        <div className="my-12"></div>
     
        
        
    </div>
  )
}
