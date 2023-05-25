import { Typography } from '@mui/material'
import React from 'react'

const SectionHeader = ({title,subtitle}) => {
  return (
    <Typography variant='h4' style={{fontWeight:'bold'}}>{title}</Typography>
  )
}

export {SectionHeader}