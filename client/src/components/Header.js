import React from 'react'
import Logo from './Logo'
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const user = useSelector(state => state?.user?.user)

  return (
    <header className='h-16 shadow-md bg-white'>
        <div className='h-full container mx-auto flex items-center px-10 justify-between'>
        <div className=''>
            <Link to={"/"}>
            <Logo w={90} h={50}/>
            </Link>
        </div>
        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
                <input type='text' placeholder='search product here...' className='w-full outline-none' />
                <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
                  <GrSearch />
                </div>
            </div>

        <div className='flex item-center gap-7'>
         <div className='text-3xl cursor-pointer'>
          {
            user?.profilepic ? (
              <img src={ user?.profilepic } className='w-10 h-10 rounded-full' alt={user?.name}/>
            ):(
              <FaRegCircleUser/>
            )
          }
          
          </div>
          <div className='text-2xl relative'>
         <span><FaCartShopping/></span>
         <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
          <p className='text-sm'>0</p>
          </div> 
          </div>

        <div>
          <Link to={"/login"} className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'>Login</Link>
        </div>



          </div>
          </div>
    </header>
  )
}

export default Header
