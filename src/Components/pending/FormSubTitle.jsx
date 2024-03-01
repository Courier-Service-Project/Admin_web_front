import React from 'react'
import {Typography} from '@mui/material'

export default function FormSubTitle(props) {
  return (
    <Typography sx={{marginTop:2}} variant="h6" gutterBottom>
                {props.subTitle}
    </Typography>   
  )
}
