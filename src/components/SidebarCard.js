import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { openMenu } from '../utilties/sideBarSlice';

const SidebarCard = () => {
 
  return (
    <div className='border-solid px-5 w-44 shadow-lg h-fit p-3 my-3'>
      <ul>
       <Link to={"/"}> <li className='font-bold my-2' >Home</li> </Link>
        <li className='font-bold my-2'>Home</li>
        <li className='font-bold my-2'>Home</li>
        <li className='font-bold my-2'>Home</li>
        <li className='font-bold my-2'>Home</li>
        <li className='font-bold my-2'>Home</li>


     </ul>
    </div>
  )
}

export default SidebarCard
