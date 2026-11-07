import React, { useState } from 'react'
import { IoMoonOutline,IoSunnyOutline  } from "react-icons/io5";

export default function ModeToggle() {
    const [mode,setMode] = useState(false);  
    function toggleMode(){
        //false is dark mode 
        setMode(!mode);

    }
    return (
        <button onClick={toggleMode} className='flex size-10 cursor-pointer ml-auto   justify-center items-center border border-[#134E4A] lg:rounded-full rounded-xl bg-[#0B202A] text-white '>{mode ? <IoSunnyOutline />: <IoMoonOutline/>}</button>
    )
}
