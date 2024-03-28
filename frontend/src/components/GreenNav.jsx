import React from 'react'
import { Link } from 'react-router-dom'

const GreenNav = () => {
  return (
    <header className=' bg-green-50 py-4 px-10'>
        <nav>
            <div className='flex items-center space-x-5 lg:space-x-12'>
                <Link className=' font-[montserrat] text-white'>
                    Personal Info
                </Link>
                <Link className=' font-[montserrat] text-white'> 
                    Order History
                </Link>
                <Link className=' font-[montserrat] text-white'>
                    Logout
                </Link>
        
            </div> 
        </nav> 
    </header>
    

    
  )
}

export default GreenNav