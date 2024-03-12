import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useAppStore } from "../../appStore";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddchartIcon from "@mui/icons-material/Addchart";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import PersonIcon from "@mui/icons-material/Person";
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";
import ArticleIcon from "@mui/icons-material/Article";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidenav() {
  const theme = useTheme();
  const open = useAppStore((state) => state.dopen);
  const navigate = useNavigate();
  const [open1, setOpen1] = React.useState(true);
  const [open2, setOpen2] = React.useState(false);

  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* methennta box eka daanne  paaath krnna*/}
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
        >
          <ListItemButton onClick={()=>navigate("/dashboard")}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton onClick={handleClick1}>
            <ListItemIcon>
              <AutoAwesomeMotionIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
            {open1 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate("/createorder")}>
                <ListItemIcon>
                  <AddShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Create New" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate("/pending")} >
                <ListItemIcon>
                  <AddchartIcon />
                </ListItemIcon>
                <ListItemText primary="Pending" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate("/progress")}>
                <ListItemIcon>
                  <AutorenewIcon />
                </ListItemIcon>
                <ListItemText primary="In Progress"  />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate("/complete")}>
                <ListItemIcon>
                  <TaskAltRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Complete" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate("/track")}>
                <ListItemIcon>
                  <ModeOfTravelIcon />
                </ListItemIcon>
                <ListItemText primary="Track Order" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={()=>navigate("/administrator")}>
            <ListItemIcon>
              <SupervisorAccountIcon />
            </ListItemIcon>
            <ListItemText primary="Administrators" />
          </ListItemButton>
          <ListItemButton onClick={handleClick2}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Courier Person" />
            {open2 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate("/registered")}>
                <ListItemIcon>
                  <HowToRegRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Registered" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate("/applicant")}>
                <ListItemIcon>
                  <ArticleIcon />
                </ListItemIcon>
                <ListItemText primary="Applicant" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={()=>navigate("/account")}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Account Setting" />
          </ListItemButton>
          <ListItemButton sx={{bgcolor:"#616161",m:1,mt:2,py:0.8, borderRadius:3,color:"white",":hover":{
            bgcolor:"#9e9e9e",
            color:"black"
          }}}>
            <ListItemIcon>
              <LogoutIcon sx={{color:"white"}}/>
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItemButton>
        </List>

        {/* <Divider />  yata ira*/}
      </Drawer>
    </Box>
  );
}
