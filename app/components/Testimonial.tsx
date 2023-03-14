import Image from "next/image"
import testtimonialimage1 from "public/testimonia-image1.png"
import testtimonialimage2 from "public/testimonia-image2.png"

export default function Testimonial() {
  return (
    <div className="flex flex-row my-32 space-x-20  justify-between items-center mx-4 max-w-7xl  sm:mx-auto   ">
        <div className="w-6/12  rounded-lg border  shadow-lg p-12 shadow-slate-400 h-80 bg-white hover:translate-x-2 duration-700">
            <p className="text-lg leading-8 italic ">
            &quot;Open source software and research ecosystem seem to be flourishing and encouraging more investment in innovation. ARKInvest applauds the innovation evolving on and around the Ethereum.&quot;
            </p>
            <div className=" pt-14 flex flex-row items-start space-x-3">
                <Image src={testtimonialimage1} alt="" />

                <div className="space-y-1">
                    <p className="text-lg font-semibold ">Cathie Wood</p>
                    <p className="text-lg text-slate-500">CEO</p>
                </div>
                
            </div>
        </div>



        <div className="w-6/12  rounded-lg border  shadow-lg p-12 shadow-slate-400 h-80 bg-white hover:translate-x-2 duration-700">
            <p className="text-lg leading-8 italic ">
            &quot;A huge breakthrough! Their focus on great products and regulatory engagement will be a good formula for product development in Web3.&quot;
            </p>
            <div className=" pt-20 flex flex-row items-start space-x-3">
                <Image src={testtimonialimage2} alt="" />

                <div className="space-y-1">
                    <p className="text-lg font-semibold ">Xlad Dankennedy</p>
                    <p className="text-lg text-slate-500">Co-Founder</p>
                </div>
                
            </div>
        </div>

        

    </div>
  )
}
