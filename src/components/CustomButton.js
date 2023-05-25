import { Button } from '@mui/material'
import React from 'react'

const CustomButton = ({text,onClick}) => {
  const style = {
    // backgroundColor:'#09aff4',
    borderRadius: '0px 15px 0px 15px',
    width: '0.5rem 1.25rem',
    border:'2px solid #09aff4',
    color:'#09aff4',
    fontWeight:'bolder',
    fontSize:'1rem',
    padding:'10px 20px',
    maxWidth:'200px',
    '&:hover': {
      backgroundColor: '#09aff4',
      color: 'white',
    },
  }
  return (
    <Button  sx={style} className='CustomButtom' onClick={onClick}>{text}</Button>
  )
}

export default CustomButton