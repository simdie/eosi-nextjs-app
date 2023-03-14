

export default function BannerSection10() {
  return (
    <div className="  flex flex-col w-full justify-between items-center ">

        <div className=" flex flex-row items-center justify-center w-full  bg-yellow-400">
            <img className="relative w-full" src="banner1.png" alt="" />
            <img className="absolute" src="inner-banner2.png" alt="" />

        </div>

        <div className="flex items-center justify-center w-full py-32">
            <img src="eosi-roadmap.png" alt="" />
        </div>
    </div>
  )
}
