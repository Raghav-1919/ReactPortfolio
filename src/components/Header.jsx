import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
    <div className='fixed w-full flex items-center justify-end z-10 px-12 py-16'>
        <button className='bg-black border-4 text-l hover:bg-gray-500  px-8 py-3 rounded-full'>Hire me</button>
        <i className="ri-more-2-line text-3xl ml-3 text-black"></i>
    </div>
  )
}

export default Header