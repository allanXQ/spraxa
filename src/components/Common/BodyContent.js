import { Typography, styled } from '@mui/material'
import React from 'react'


const NormalText = ({text, sx}) => {
  const styled = {
    fontSize:'16px',
    lineHeight:"24px",
    color :'#616161',
    ...sx
  }
  return (
    <Typography sx={styled}>
        {text}
    </Typography>
  )
}

export default NormalText