import React from 'react'
import { useNavigate } from 'react-router-dom'
const Section1 = () => {
        const navigate = useNavigate()
  return (



    <div className='bg-[#F8FAFB] w-full mt-4 h-[650px] '>
<div className='flex items-center justify-center flex-col gap-12 md:gap-16 sm:gap-16 px-6 py-20'>
    <h1 className='text-center text-[50px] lg:text-[65px] font-[600] leading-15 lg:leading-18 mt-6'>Smart Bus Tracking for Modern<br /> Schools</h1>
    <h5 className='text-center opacity-50 text-[15px] font-[400] tracking-[0.6px]'>Real-time tracking, automated notification and seamless coordination <br />between students, drivers and administrators.</h5>
    <div className='flex items-center gap-10'>
        <button className='bg-[#2B5FD2] text-white px-5.5 py-3 rounded-[5px] mt-3 active:scale-90'>Get Started</button>
        <button className='text-[#2B5FD2] px-5 py-3 hover:shadow-[1px_1px_10px_#2B5FD2] rounded-[5px] active:scale-90' onClick={()=>navigate("/login")}>Sign in</button>
    </div>
</div>
    </div>
  )
}

export default Section1