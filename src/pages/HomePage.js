import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Posts } from '../components/Posts'
import './css/Homepage.css'
export const HomePage = () => {
    const [buttonClicked,setActiveContainer] = useState(null);
    const [originalOpacity,setOpacity] = useState();
    const handleContainerView = (tab)=>{
        setActiveContainer(tab);
    }
    const handleOpacity = (num)=>{
      setOpacity(num);
    }
  return (
    <div className='post-container'>
        <Navbar activeTab={buttonClicked} opaque={originalOpacity} makeOpaque={handleOpacity} onTabClick={handleContainerView}/>
        <Posts activeTab={buttonClicked} opaque={originalOpacity} makeOpaque={handleOpacity} onTabClick={handleContainerView}/>
    </div>
  )
}
