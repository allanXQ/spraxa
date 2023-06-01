import { ArrowUpward } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React, { useState } from 'react'

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false)

    
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <IconButton sx={{
        display: visible ? 'inline' : 'none',
        position:'fixed',
        bottom:'20px',
        right:'20px',
        zIndex:'99',
        backgroundColor:'#50d8af',
        '&:hover':{
            backgroundColor:'#50d8af',
            width:'55px',
            height:'55px'
        },
        color:'white',
        borderRadius:'50%',
        width:'50px',
        height:'50px',
        boxShadow:'0 0 10px rgba(0,0,0,0.5)'
    }} onClick={scrollToTop}>
        <ArrowUpward/>
    </IconButton>
  )
}

export default ScrollToTop