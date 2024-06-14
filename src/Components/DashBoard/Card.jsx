import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import CardCom from "./CardCom"
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";
import ArticleIcon from "@mui/icons-material/Article";
import AddchartIcon from "@mui/icons-material/Addchart";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import BarChart from '../../Charts/BarChart';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { PieChart } from '../../Charts/PieChart';
import { useActionData } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function BasicGrid() {
    const [orderCount, setOrderCount] = useState([]);
    useEffect(()=>{
        fetchOrderCount();
    },[])

    const fetchOrderCount = async () => {

        const result = await axios.get(`http://192.168.117.94:9000/api/web/orders/orderCounts`);
        setOrderCount(result.data.message);
        console.log(result);

    }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
        <Stack spacing={2} direction={'row'} >
            <Grid item xs={12} md={4}> 
                <CardCom 
                    title={orderCount.pendingCount}
                    text="Pending Orders" 
                    width ="100%" 
                    height="145px" 
                    titlefw="1500"
                    titlefs="30px" subtitlefs="20px"
                    pl="10px" pr="10px" pt="10px" pb="10px" 
                    gradient="linear-gradient(158deg, rgba(1, 3, 24, 1) 0%, rgba(16, 196, 134, 1) 100%)"
                    icon ={< AddchartIcon/>}
                    linkTo="/pending"/>
            </Grid>
            <Grid item xs={12} md={4}> 
                <CardCom 
                    title={orderCount.inProgressCount}
                    text="In progress" 
                    width =" 100%" 
                    height="145px"
                    titlefw="1500"
                    titlefs="30px" subtitlefs="20px"
                    pl="10px" pr="10px" pt="10px" pb="10px"
                    gradient="linear-gradient(158deg, rgba(24, 28, 28, 1) 0%, rgba(79, 89, 89, 1) 100%)"
                    icon ={< AutorenewIcon/>} 
                    linkTo="/progress"/>
            </Grid>
            <Grid item xs={12} md={4}> 
                <CardCom 
                    title={orderCount.completeCount}
                    text="Completed Orders" 
                    width ="100%" 
                    height="145px" 
                    titlefw="1500"
                    titlefs="30px" subtitlefs="20px"
                    pl="10px" pr="10px" pt="10px" pb="10px"
                    gradient="linear-gradient(158deg, rgba(18, 48, 48, 1) 0%, rgba(51, 145, 145, 1) 100%)"
                    icon={< TaskAltRoundedIcon/>} 
                    linkTo="/complete"/>
            </Grid>
    </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
        <Stack spacing={2}>
        <Grid item xs={12}>
            <CardCom 
                title="200" 
                text="Registerd Courier persons" 
                width ="100%" 
                titlefw="1000"
                titlesize="30px" subtitlefs="20px"
                pl="10px" pr="10px" pt="10px" pb="10px"
                gradient="linear-gradient(158deg, rgba(5, 71, 39, 1) 0%, rgba(17, 128, 74, 1) 100%)"
                icon={< HowToRegRoundedIcon  />}
                linkTo="/registered" /> 
        </Grid>
        <Grid item xs={12}>
            <CardCom 
                title="150" 
                text="Applicants" 
                width =" 100%"
                titlefw="1000"
                titlesize="30px" subtitlefs="20px"
                pl="10px" pr="10px" pt="10px" pb="10px"
                gradient="linear-gradient(158deg, rgba(5, 33, 29, 1) 0%, rgba(63, 145, 134, 1) 100%)" 
                icon ={<ArticleIcon />} 
                linkTo="/applicant"/>
        </Grid>


        </Stack>
        </Grid>
        <Box height={20}/>
        <Grid item xs={12} md={8}>
            <Card sx = {{height:60 + "vh"}}>
                <CardContent>
                    <BarChart />
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12} md={4}>
            <Card sx = {{height:60 + "vh"}}>
                <CardContent>
                    <PieChart />
                </CardContent>
            </Card>
        </Grid>
      </Grid>
    </Box>
  );
}