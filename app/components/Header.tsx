import MenuItem from "./MenuItem";
import { AiOutlineHome } from 'react-icons/ai';
import {GoThreeBars} from 'react-icons/go';
import Link from "next/link";


export default function Header() {
  return (
    <div className="flex justify-between mx-5 max-w-6xl  sm:mx-auto items-center  my-8">

        <div>
            <Link href="/">
                <h2 className="text-2xl" > <span className="font-bold bg-amber-500 py-1 px-3 rounded-lg text-[#4C205B]">EOSI</span><span className="text-2xl text-violet-900 font-semibold" > Finance</span> </h2>
            </Link>
        </div>

        <div className=" flex flex-row ">
            <MenuItem title="Home" address="/" />
            <MenuItem title="Products" address="/" />
            <MenuItem title="Roadmap" address="/" />
            <MenuItem title="Team" address="/" />
            <MenuItem title="Blog" address="/" />
            <MenuItem title="Litepaper" address="/" />
            
            <div className="flex flex-row space-x-4 md:ml-20">
                <Link href="/login" className="hover:translate-x-0.5 duration-700 ">
                    <h2 className="text-sm" > <span className="hidden md:inline font-base bg-slate-300 py-3 px-6 rounded-lg hover:bg-gray-800 hover:text-white duration-700">Login</span></h2>
                </Link>
                <Link href="/signup" className="hover:translate-x-0.5 duration-700">
                    <h2 className="text-sm" > <span className=" hidden md:inline font-base bg-[#4C205B] py-3 px-6 rounded-lg text-gray-100 ">Signup</span></h2>
                </Link>
            </div>
            
            <Link href="/login">
                <div className="text-3xl sm:hidden mx-4 hover:text-amber-600 text-[#4C205B]">
                    <GoThreeBars />
                </div>
            </Link>
            
            
            
           

        </div>

        
    </div>
  )
}
