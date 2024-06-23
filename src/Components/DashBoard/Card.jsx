import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import CardCom from "./CardCom";
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";
import ArticleIcon from "@mui/icons-material/Article";
import AddchartIcon from "@mui/icons-material/Addchart";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import BarChart from '../../Charts/BarChart';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { PieChart } from '../../Charts/PieChart';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { BACKEND_URL } from '../../Constants';
import RetryModal from '../Alert/RetryModal';


export default function BasicGrid() {
    const [orderCount, setOrderCount] = useState({});
    const [regPerCount,setRegPerCount] = useState({});
    const [error, setError] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        fetchOrderCount();
        perCount();
    }, []);

    const fetchOrderCount = async () => {
        try {
            const result = await axios.get(`${BACKEND_URL}/orders/orderCounts`);

            setOrderCount(result.data.message);
        } catch (error) {
            setError("Network error. Please try again.");
            setOpen(true);
        }
    };

    const perCount = async () => {
        try {

            const result = await axios.get(`${BACKEND_URL}/admin/peronCount`);
            setRegPerCount(result.data);

            console.log(result);
            // const reg = regPerCount.data;
            // console.log("reg:" ,reg)
        } catch (error) {
            setError("Network error. Please try again.");
            setOpen(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleTryAgain = () => {
        window.location.reload();
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    <Stack spacing={2} direction={'row'}>
                        <Grid item xs={12} md={4}>
                            <CardCom 
                                title={orderCount.pendingCount} 
                                text="Pending Orders" 
                                width="100%" 
                                height="145px" 
                                titlefw="1500"
                                titlefs="30px" subtitlefs="20px"
                                pl="10px" pr="10px" pt="10px" pb="10px" 
                                gradient="linear-gradient(158deg, rgba(1, 36, 24, 1) 0%, rgba(16, 196, 134, 1) 100%)"
                                icon={<AddchartIcon />} 
                                linkTo="/pending" 
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <CardCom 
                                title={orderCount.ondiliveryCount} 
                                text="In progress" 
                                width="100%" 
                                height="145px"
                                titlefw="1500"
                                titlefs="30px" subtitlefs="20px"
                                pl="10px" pr="10px" pt="10px" pb="10px"
                                gradient="linear-gradient(158deg, rgba(24, 28, 28, 1) 0%, rgba(79, 89, 89, 1) 100%)"
                                icon={<AutorenewIcon />} 
                                linkTo="/progress" 
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <CardCom 
                                title={orderCount.completeCount} 
                                text="Completed Orders" 
                                width="100%" 
                                height="145px" 
                                titlefw="1500"
                                titlefs="30px" subtitlefs="20px"
                                pl="10px" pr="10px" pt="10px" pb="10px"
                                gradient="linear-gradient(158deg, rgba(18, 48, 48, 1) 0%, rgba(51, 145, 145, 1) 100%)"
                                icon={<TaskAltRoundedIcon />} 
                                linkTo="/complete" 
                            />
                        </Grid>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack spacing={2}>
                        <Grid item xs={12}>
                            <CardCom 
                                title={regPerCount.reg} 
                                text="Registered Courier persons" 
                                width="100%" 
                                titlefw="1000"
                                titlesize="30px" subtitlefs="20px"
                                pl="10px" pr="10px" pt="10px" pb="10px"
                                gradient="linear-gradient(158deg, rgba(5, 71, 39, 1) 0%, rgba(17, 128, 74, 1) 100%)"
                                icon={<HowToRegRoundedIcon />} 
                                linkTo="/registered" 
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <CardCom 
                                title={regPerCount.app}
                                text="Applicants" 
                                width="100%" 
                                titlefw="1000"
                                titlesize="30px" subtitlefs="20px"
                                pl="10px" pr="10px" pt="10px" pb="10px"
                                gradient="linear-gradient(158deg, rgba(5, 33, 29, 1) 0%, rgba(63, 145, 134, 1) 100%)" 
                                icon={<ArticleIcon />} 
                                linkTo="/applicant" 
                            />
                        </Grid>
                    </Stack>
                </Grid>
                <Box height={20} />
                <Grid item xs={12} md={8}>
                    <Card sx={{ height: 60 + "vh" }}>
                        <CardContent>
                            <BarChart />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ height: 60 + "vh" }}>
                        <CardContent>
                            <PieChart />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            
            <RetryModal
                open={open}
                onClose={handleClose}
                error={error}
                onclick1={handleTryAgain}
            />
        </Box>
    );
}
