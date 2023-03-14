import Image from "next/image"
import banner1 from "public/banner1.png"
import innerBanner2 from "public/inner-banner2.png"
import eosiBanner from "public/eosi-roadmap.png"

export default function BannerSection10() {
  return (
    <div className="  flex flex-col w-full justify-between items-center ">

        <div className=" flex flex-row items-center justify-center w-full  bg-yellow-400">
            <Image className="relative w-full" src={banner1} alt="" />
            <Image className="absolute" src={innerBanner2} alt="" />

        </div>

        <div className="flex items-center justify-center w-full py-32">
            <Image src={eosiBanner} alt="" />
        </div>
    </div>
  )
}
