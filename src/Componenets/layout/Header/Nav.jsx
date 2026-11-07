import { NavLink } from 'react-router'
import { FaUserGroup } from "react-icons/fa6";
import { FaRegPlayCircle } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

import { useState } from 'react';
import ModeToggle from '../../ui/ModeToggle';

export default function Nav() {
    const [show,setShow] = useState(false);
    const activeClasses = 'border-2 border-primary shadow-[0_0_6px_rgba(0,255,117,0.5),0_0_15px_rgba(0,255,117,0.3),0_0_30px_rgba(0,255,117,0.12)] transition-all duration-300 hover:shadow-[0_0_8px_rgba(0,255,117,0.7),0_0_20px_rgba(0,255,117,0.5),0_0_40px_rgba(0,255,117,0.25)]  text-primary';
    const linkClasses = ({isActive})=>`flex items-center gap-2 px-4 py-2  rounded-full  ${isActive?activeClasses : "text-[#CBD5E1]"}`
    function showMenu(){setShow(true)}
    function closeMenu(){setShow(false)}
    return (
        <>
            <nav className='border border-[#134E4A] rounded-full bg-[#061821] p-2  lg:block hidden'>
                <ul className='h-full flex items-center justify-center gap-2  '>
                    <li className=''>
                        <NavLink to="/characters" className={linkClasses} ><FaUserGroup/> Characters</NavLink>
                    </li>
                    <li className=''>
                        <NavLink to="/episodes" className={linkClasses} ><FaRegPlayCircle/> Episodes</NavLink>
                    </li>
                    <li className=''>
                        <NavLink to="/locations" className={linkClasses} ><CiLocationOn/> Locations</NavLink>
                    </li>
                </ul>
            </nav>
            <>
            <button className="lg:hidden flex justify-center items-center size-10 border border-[#134E4A] rounded-full bg-[#061821] text-white" onClick={showMenu}><RxHamburgerMenu/></button>
                {
                        <nav className={`h-screen border  lg:hidden absolute ${show ? 'right-0' : '-right-full'} transition-all duration-300 top-0 w-[80%] max-w-xs bg-[#071923] p-2`}>
                            <div className='flex justify-end gap-2'>
                                <ModeToggle/>
                                <button onClick={closeMenu} className='flex justify-center items-center size-10 border border-[#134E4A] rounded-xl bg-[#0B202A] text-white'><IoMdClose/></button>
                            </div>
                            <ul className='h-full flex flex-col items-start justify-center gap-2 text-sm '>
                                <li className='w-full'>
                                    <NavLink to="/characters" className={linkClasses} ><span className='flex justify-center items-center size-10 rounded-xl bg-[#0B202A]'><FaUserGroup /></span> Characters</NavLink>
                                </li>
                                <li className='w-full'>
                                    <NavLink to="/episodes" className={linkClasses} ><span className='flex justify-center items-center size-10 rounded-xl bg-[#0B202A]'><FaRegPlayCircle/></span> Episodes</NavLink>
                                </li>
                                <li className='w-full'>
                                    <NavLink to="/locations" className={linkClasses} ><span className='flex justify-center items-center size-10 rounded-xl bg-[#0B202A]'><CiLocationOn/></span> Locations</NavLink>
                                </li>
                            </ul>
                        </nav>

                }
            </>
        </>
    )
}
