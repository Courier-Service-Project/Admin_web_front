import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Stack } from '@mui/material';
import Dash from '../../Pages/Dashboard/Dashboard.css';
export default function CardCom(props) {
  return (
    <div>
      <Card sx={{  maxWidth: props.width, height: props.height }}>
        <Stack spacing={1} direction="row">
            <div className='iconStyle'>
            {props.icon}
            </div>
            <div className='paddingAll'>
                <span className='title'>
                    {props.title}
                </span><br />
                <span className='subtitle'>
                    {props.text}
                </span>
            </div>
          </Stack>
    </Card>
    </div>
  )
}
