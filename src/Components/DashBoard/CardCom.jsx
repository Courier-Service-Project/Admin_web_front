import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Stack } from '@mui/material';
import Dash from '../../Pages/Dashboard/Dashboard.css';

export default function CardCom(props) {
  const cardStyles = {
    maxWidth: props.width,
    height: props.height,
    backgroundImage: props.gradient,
  };
  return (
    <div>
      <Card sx={cardStyles}>
        <Stack spacing={1} direction="row">
            <div style={{color:'aliceblue',marginLeft: '20px' , marginTop: '20px', marginRight:'20px'}}>
            {props.icon}
            </div>
            <div style ={{paddingLeft:props.pl , paddingRight:props.pr , paddingTop:props.pt, paddingBottom:props.pb }}>
                <span style={{fontSize: props.titlefs, fontWeight: props.titlefw, color:'aliceblue'}}>
                    {props.title}
                </span><br />
                <span style={{fontSize: props.subtitlefs, fontWeight: props.subtitlefw,color:'aliceblue'}}>
                    {props.text}
                </span>
            </div>
          </Stack>
    </Card>
    </div>
  )
}
