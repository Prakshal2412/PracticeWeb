import React, { useState } from 'react'
import DesktopNav from './DesktopNav';
import logo from "/Veegify/PracticeWeb/Frontend/src/assets/urbanLogo.png"

const Header = () => {
    const [hideLeft,setHideLeft] = useState("-left-[1000px]");
    const menuItems =["recipes","resources","about","contact"];

    const onOpen=()=>{
        setHideLeft("left-0");
    }
    const onClose=()=>{
        setHideLeft("left-[1000px]");
    }
  return (
    <div>
        <div className='max-[900px]:hidden'>
            <DesktopNav menuItems={menuItems} Logo={logo}/>
        </div>
        <div className='min-[900px]:hidden'>MobileView</div>
    </div>
  )
}

export default Header