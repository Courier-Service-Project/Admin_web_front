import React from 'react'
import {Typography} from '@mui/material'

export default function FormSubTitle(props) {
  return (
    <Typography sx={{marginTop:4}} variant="h5" gutterBottom>
                {props.subTitle}
    </Typography>   
  )
}
