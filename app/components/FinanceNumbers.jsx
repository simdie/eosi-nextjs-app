

export default function FinanceNumbers() {
  return (
    <div className="justify-center  flex flex-col w-full items-center py-24 mx-4 bg-black sm:mx-auto">

        <div className="flex flex-row items-start w-full px-24">

            <p className="font-semibold text-3xl text-indigo-400">EOSI Finance in numbers</p>

        </div>

       
        <div className="flex flex-row items-center mx-4 w-full">

            <div className=" flex flex-row w-full items-center justify-center pt-16 space-x-4">

                <img src="divide.png" alt="" />

                <div>

                <div className="flex flex-col items-center justify-center  pb-2 space-y-4  ">
                    <p className="text-lg text-gray-200 px-4 ">Active Users</p>
                    <p className="text-5xl font-semibold text-indigo-400 px-4">2586</p>
                    
                </div>

                </div>

            </div>

            <div className=" flex flex-row w-full items-center justify-center pt-16 space-x-4">

                <img src="divide.png" alt="" />

                <div>

                    <div className="flex flex-col items-center   pb-2 space-y-4  ">
                        <p className="text-lg text-gray-200 px-4 ">Active Pro-Traders </p>
                        <p className="text-5xl font-semibold text-indigo-400 px-4">18 </p>
                        
                    </div>

                </div>

            </div>


            <div className="flex flex-row w-full items-center justify-center pt-16 space-x-4">

                <img src="divide.png" alt="" />

                <div>

                    <div className="flex flex-col items-center   pb-2 space-y-4  ">
                        <p className="text-lg text-gray-200 px-4 ">Total Value Traded</p>
                        <p className="text-5xl font-semibold text-indigo-400 px-4">~ $2,047,698</p>
                        
                    </div>

                </div>

            </div>

            <div className=" flex flex-row w-full items-center justify-center pt-16 space-x-4">

                <img src="divide.png" alt="" />

                <div>

                    <div className="flex flex-col items-center justify-between  pb-2 space-y-4  ">
                        <p className="text-lg text-gray-200 px-4 ">DEX Platforms </p>
                        <p className="text-5xl font-semibold text-indigo-400 px-4">13 </p>
                        
                    </div>

                </div>

            </div>


         </div>
       
       
        
    </div>
  )
}
