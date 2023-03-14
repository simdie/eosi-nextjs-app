

export default function HeroBody() {
  return (
    <div className="flex flex-col justify-start mx-5 max-w-6xl  sm:mx-auto my-36">
        <div className=" flex items-center justify-center w-full sm:w-3/4 ">
            <h1>
                <span className="text-5xl sm:text-6xl text-amber-500 tracking-wide leading-tight  ">Automate </span>
                <span className="text-5xl sm:text-6xl text-black tracking-wide leading-tight ">your crypto trading and investing with the best AI powered technologies</span>
            </h1>
        </div>

        <div className="text-left text-2xl py-10">
            Unleash the Power of Crypto Trading with EOSI Finance. Copy Top Pro-Traders with Ease in just a few clicks
        </div>

        <div className="flex flex-row space-x-8">
            <button  className="  font-base bg-[#4C205B] py-5 px-16 rounded-lg text-gray-100 hover:translate-x-0.5 duration-700">Try it for free</button>
            <button className="  font-base bg-slate-300 py-5 px-12 rounded-lg text-amber-600 hover:translate-x-0.5 duration-700 hover:bg-gray-800 hover:text-white ">Read the Litepaper</button>
        </div>
    </div>
  )
}
