import Image from "next/image"
import secure from "public/secure.png"
import cloudbased from "public/cloudbased.png"
import encrypted from "public/encrypted.png"

export default function FundsProperties() {
  return (
    <div className="flex flex-col w-full items-center bg-white py-24">

        {/* <div className="my-32"></div> */}


        {/* your funds are safe section */}


        <div className="font-semibold text-4xl pb-24">
        Your funds and properties are safe.

        </div>




        <div className="flex flex-row items-center justify-center w-full">

        <div className="flex flex-col items-center w-1/3 h-40 space-y-5 ">
            
            <Image src={secure} alt="" />
            <div className="flex flex-col items-center justify-center">
                <p className="font-bold text-lg py-4">Secure</p>
                <p className="text-center px-16">Your funds lie safely on-chain for maximum interoperability. EOSI Finance will never touch them directly or indirectly.</p>
            </div>
        </div>

        <div className="flex flex-col items-center w-1/3 h-40 space-y-5">
            
            <Image src={cloudbased} alt="" />
            <div className="flex flex-col items-center justify-center">
                <p className="font-bold text-lg py-4">Cloud-Based</p>
                <p className="text-center px-16">Our AI powered algorithms and smart contracts run reliably 24/7 and never miss a trade once placed by our pro-traders. EOSI Finance eliminates the need to trade by yourself whether you are an experienced trader or not. </p>
            </div>
        </div>

        

        <div className="flex flex-col items-center w-1/3 h-40 space-y-5">
            
            <Image src={encrypted} alt="" />
            <div className="flex flex-col items-center justify-center">
                <p className="font-bold text-lg py-4">Encrypted</p>
                <p className="text-center px-16">All the trades on our platform are encrypted as they are on-chain and interacts with a public-private smart contract. So no possibility of any bot frontrunning any of our trades.</p>
            </div>
        </div>
        

        </div>

        <div className="my-20"></div>

    </div>
  )
}
