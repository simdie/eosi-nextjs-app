import Image from "next/image";
import funder1 from "public/funder1.png"
import funder2 from "public/funder2.png"
import funder3 from "public/funder3.png"
import funder4 from "public/funder4.png"
import funder5 from "public/funder5.png"
import funder6 from "public/funder6.png"

export default function EosiTeamsection11() {
  return (
    <div className="  flex flex-col w-full justify-between items-center pb-24 px-28">

       


        <h1 className="text-5xl text-zinc-500 sm:text-6xl  tracking-wide leading-7 pb-12">EOSI FINANCE TEAM</h1>

        <div className='flex flex-col'>

          <p className='text-2xl font-semibold text-gray-700 leading-8 pb-6'>EOSI Finance was founded by experienced quant traders, programmers, mathematicians and DeFi lovers with years of expereince in decentralised finance, forex, equity, stocks, binary options and the business fields as well. </p>

           <p className='text-2xl font-semibold text-gray-700 leading-8' > At EOSI Finance, we vouch for honesty, reliability, commitment, flexibility, innovation, diversity and leadership.</p>

        </div>

        <div className='flex flex-row items-center justify-center  w-10/12 py-12'>

            <div className='flex flex-col items-center justify-center w-4/12'>
                <Image src={funder1} alt="Founder1" />
                <p className='text-lg font-semibold pt-3'>Alexvy</p>
                <p>COO Co-Founder</p>
            </div>

            <div className='flex flex-col items-center justify-center w-4/12'>
                <Image src={funder2} alt="" />
                <p className='text-lg font-semibold pt-3'>Dennish</p>
                <p>CEO Founder</p>
            </div>

            <div className='flex flex-col items-center justify-center w-4/12'>
                <Image src={funder3} alt="" />
                <p className='text-lg font-semibold pt-3'>Olick</p>
                <p>Quat Trader/Pro-Trader's Supervisor</p>
            </div>
        </div>


        <div className='flex flex-row items-center justify-center w-10/12 py-6'>

            <div className='flex flex-col items-center justify-center w-4/12'>
                <Image src={funder4} alt="" />
                <p className='text-lg font-semibold pt-3'>Web3easter</p>
                <p>Smart Contract Developer</p>
            </div>

            <div className='flex flex-col items-center justify-center w-4/12'>
                
                <Image src={funder5} alt="" />
                <p className='text-lg font-semibold pt-3'>Veronika</p>
                <p>Representatives Co-ordinator</p>
            </div>

            <div className='flex flex-col items-center justify-center w-4/12'>
                {/* <img src="funder6.png" alt="" /> */}
                <Image src={funder6} alt="" />
                <p className='text-lg font-semibold pt-3'>Tevis</p>
                <p>Full-Stack Web Developer</p>
            </div>
        </div>

        
    </div>
  )
}
