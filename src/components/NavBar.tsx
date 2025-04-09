import React from 'react'
import Image from 'next/image'

function Navbar() {
  return (
    <div className='flex justify-between px-5 py-5 items-center'>
       <div className='flex items-center gap-5'>
       <Image
        src="/assets/images/logo.svg"
        width={45}
        height={45}
        alt="Picture of the author"
         />
         <div className="font-roboto-condensed text-2xl font-bold text-[#2d172f]">
            CHATmosphere
         </div>
       </div>

       <div className='flex gap-5 items-center'>
        <button className="border-1 border-solid">Sign Up</button>
        <button>Log In</button>
       </div>
    </div>
  )
}

export default Navbar