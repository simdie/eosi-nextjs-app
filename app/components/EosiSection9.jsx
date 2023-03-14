import Image from "next/image"
import section9Box1 from "public/section9-box1.png"
import section9Box2 from "public/section9-box2.png"
import section9Box3 from "public/section9-box3.png"
import section9Box4 from "public/section9-box4.png"

export default function EosiSection9() {
  return (
    <div className="  flex flex-row w-full justify-between items-center pt-24 pb-40 bg-black sm:mx- px-20">

        <div className="flex flex-col items-center justify-center w-full  ">
            <h1 className="text-3xl  text-white pb-24 pr-32 leading-10">
                EOSI Finance was founded by experienced quant traders, programmers, mathematicians and DeFi lovers 
            </h1>

            <p className="text-xl text-white leading-9 pr-32">
            EOSI Finance equips every crypto lover and DeFi ethuansist with varying and effective arms for maximum profit amidst their crypto trading level with the world best trusted AI technologies. 
            </p>

        </div>


        <div className="flex flex-row items-center justify-between w-full  relative">

           <div className="flex flex-col space-y-28"> 
            <div className="text-2xl font-semi-bold text-white">
                    <Image src={section9Box1} alt="" />
                </div>

                <div className="text-2xl font-semi-bold text-white">
                <Image src={section9Box2} alt="" />
                </div>
           </div>

           <div className="flex flex-col pt-36 absolute left-80 space-y-20"> 
                <div className="text-2xl font-semi-bold text-white ">
                <Image src={section9Box3} alt="" />
                </div>

                <div className="text-2xl font-semi-bold text-white ">
                <Image src={section9Box4} alt="" />
                </div>
           </div>


          

        </div>



        
    </div>
  )
}
