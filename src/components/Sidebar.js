import React from 'react'
import SidebarCard from './SidebarCard'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSideBar } from '../utilties/sideBarSlice';
import SmallSidebar from './SmallSidebar';

const Sidebar = () => {

 
  const isOpenSidebar= useSelector((store) => store.sidebar.isMenuOpen);
  // dispatch( toggleSideBar());
  console.log(isOpenSidebar);

  if(!isOpenSidebar) return null;
  return (
    
    <div className=' bg-white'>
      
      <SidebarCard/>
      <SidebarCard/>
      <SidebarCard/>
      <SidebarCard/>
    </div>
    
  )
}

export default Sidebar
