import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { openMenu } from '../utilties/sideBarSlice'

const Body = () => {
  const dispatch = useDispatch();
  dispatch(openMenu())
 

  return (
    <div className='flex w-screen'>
        <Sidebar />
        <Outlet/>
    </div>
  )
}

export default Body
