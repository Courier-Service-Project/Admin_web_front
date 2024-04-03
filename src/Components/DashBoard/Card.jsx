import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import CardCom from "./CardCom"
import Dash from '../../Pages/Dashboard/Dashboard.css'
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";
import ArticleIcon from "@mui/icons-material/Article";
import AddchartIcon from "@mui/icons-material/Addchart";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import { Style } from '@mui/icons-material';
import { red } from '@mui/material/colors';
import BarChart from '../../Charts/BarChart';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { PieChart } from '../../Charts/PieChart';
export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
        <Stack spacing={2} direction={'row'} >
            <Grid item xs={4}> 
                <CardCom 
                    title="40" 
                    text="Pending Orders" 
                    width ="100%" 
                    height="145px" 
                    titlefw="1500"
                    titlefs="30px" subtitlefs="20px"
                    pl="10px" pr="10px" pt="10px" pb="10px" 
                    gradient="linear-gradient(158deg, rgba(139, 0, 0, 1) 0%, rgba(255, 20, 147, 1) 100%)"
                    icon =< AddchartIcon/>/>
            </Grid>
            <Grid item xs={4}> 
                <CardCom 
                    title="20" 
                    text="In progress" 
                    width =" 100%" 
                    height="145px"
                    titlefw="1500"
                    titlefs="30px" subtitlefs="20px"
                    pl="10px" pr="10px" pt="10px" pb="10px"
                    gradient="linear-gradient(158deg, rgba(64, 0, 64, 1) 0%, rgba(128, 0, 128, 1) 100%)"
                    icon =< AutorenewIcon/> Style={{color: "white"}}/>
            </Grid>
            <Grid item xs={4}> 
                <CardCom 
                    title="200" 
                    text="Completed Orders" 
                    width ="100%" 
                    height="145px" 
                    titlefw="1500"
                    titlefs="30px" subtitlefs="20px"
                    pl="10px" pr="10px" pt="10px" pb="10px"
                    gradient="linear-gradient(158deg, rgba(153, 102, 0, 1) 0%, rgba(204, 153, 0, 1) 100%)"
                    icon=< TaskAltRoundedIcon/> />
            </Grid>
    </Stack>
        </Grid>
        <Grid item xs={4}>
        <Stack spacing={2}>
        <Grid item xs={12}>
            <CardCom 
                title="200" 
                text="Registerd Courier persons" 
                width ="100%" 
                titlefw="1000"
                titlesize="30px" subtitlefs="20px"
                pl="10px" pr="10px" pt="10px" pb="10px"
                gradient="linear-gradient(158deg, rgba(139, 0, 0, 1) 0%, rgba(255, 20, 147, 1) 100%)"
                icon=< HowToRegRoundedIcon  /> /> </Grid>
        <Grid item xs={12}>
            <CardCom 
                title="150" 
                text="Applicants" 
                width =" 100%"
                titlefw="1000"
                titlesize="30px" subtitlefs="20px"
                pl="10px" pr="10px" pt="10px" pb="10px"
                gradient="linear-gradient(158deg, rgba(64, 0, 64, 1) 0%, rgba(128, 0, 128, 1) 100%)" 
                icon =<ArticleIcon /> /></Grid>
        </Stack>
        </Grid>
        <Box height={20}/>
        <Grid item xs={8}>
            <Card sx = {{height:60 + "vh"}}>
                <CardContent>
                    <BarChart />
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={4}>
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