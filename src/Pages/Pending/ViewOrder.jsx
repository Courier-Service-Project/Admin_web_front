import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AppsIcon from "@mui/icons-material/Apps";
import { CircularProgress, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Sidenav from "../../Components/Structure/Sidenav";
import Navbar from "../../Components/Structure/Navbar";
import axios from "axios";
import { Card, CardContent, Divider, Button } from "@mui/material";
import FormSubTitle from "../../Components/pending/FormSubTitle";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../Constants";
import Pendingalert from "../../Components/pending/Pendingalert";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

export default function ViewOrder() {
  const [viewOrderData, setViewOrderData] = useState(null);
  const [edit,setEdit] = useState(true);
  const [save,setSave] = useState(true);
  const { orderNo } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { orderId } = location.state || {};

  const [fromData, setFormData] = React.useState({
    OrderID:"",
    S_fname: "",
    S_lname: "",
    S_city: "",
    S_telephone: "",

    R_province:"",
    R_district: "",
    R_streetNo: "",
    R_street: "",
    R_HomeTown: "",
    R_telephone: "",
  
    P_streetNo: "",
    P_street: "",
    P_homeTown: "",
    P_district: "",
    p_ordertype:"",
    // P_VehicalType: "",
    // P_telephone: "",
    // P_paymentMethod: "",
    // P_specialNote: "",
    // P_homeTown: "",
    // P_imergency: "",
    // P_branch: "",
    // P_distanceCost: "",
    
  });


  const handleConfirmdata = async () => {
    await confirmData(viewOrderData.Order_id);
    navigate("/pending");
  };
  const confirmData = async (orderId) => {
    try {
      const result = await axios.patch(
        `${BACKEND_URL}/orders/updatependingorderdetails/${orderId}`
      );
      console.log(result);
    } catch (error) {
      console.error("Error confirming order:", error);
    }
  };

  const handledeleteOrder = async () => {
    await deleteOrder(viewOrderData.Order_id);
    navigate("/pending");
  };
  const deleteOrder = async (orderId) => {
    try {
      const result = await axios.delete(
        `${BACKEND_URL}/orders/deletependingorderdetails/${orderId}`
      );
      console.log(result);
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  const handlEditdata = async () => {
    setEdit(false)
    setSave(false)
  };

  const sendSave = async () => {
    //  console.log("Receiver city"+fromData.R_HomeTown)
    axios
      .post(`${BACKEND_URL}/orders/editpendingorderdetails`,{
        OrID:fromData.OrderID,
        customerid:fromData.cusID,
        reciverid:fromData.recID,
        sfname: fromData.S_fname,
        slname: fromData.S_lname,
        scity: fromData.S_city,
        stelephone: fromData.S_telephone,
       
        rprovince: fromData.R_province,
        rdistric: fromData.R_district,
        rstreetNo: fromData.R_streetNo,
        rstreet: fromData.R_street,
        rhometown: fromData.R_HomeTown,
        rtelephone: fromData.R_telephone,
        rfname: fromData.R_lname,
        rlname: fromData.R_fname,

        pstreetNo: fromData.P_streetNo,
        pstreet: fromData.P_street,
        phometown: fromData.P_homeTown,
        pdistrict: fromData.P_district,
        potype:fromData.p_ordertype,

        // sstreet: fromData.S_street,
        // sstreetNo: fromData.S_streestNo,
        // pvehicaltype: fromData.P_VehicalType,
        // ptelephone: fromData.P_telephone,
        // ppaymentmethod: fromData.P_paymentMethod,
        // pspecialnote: fromData.P_specialNote,
        // pimergency: fromData.P_imergency,
        // pdistancecost: fromData.P_distanceCost,
        // pbranch: fromData.P_branch,
        // padminID:ID
        
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      navigate("/Pending");
  };


  const fetchOrderById = async (orderId) => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/orders/pendingorderdetailsbyid/${orderId}`
      );
      setViewOrderData(response.data.message[0]);
      console.log(response.data.message[0])
      setFormData({
        ...fromData,

        OrderID:response.data.message[0].Order_id,
        cusID:response.data.message[0].cus_id,
        S_fname:response.data.message[0].CustomerFirstName,
        S_lname:response.data.message[0].CustomerLastName,
        S_city:response.data.message[0].Customercity,
        S_telephone:response.data.message[0].Customermobile,
       
        recID:response.data.message[0].recieverId,
        R_province:response.data.message[0].DiliveryProvince,
        R_district:response.data.message[0].DiliveryDistrict,
        R_streetNo:response.data.message[0].StreetNo,
        R_street:response.data.message[0].Street,
        R_HomeTown:response.data.message[0].City,
        R_telephone:response.data.message[0].mobile,

        P_streetNo:response.data.message[0].Pickup_StreetNo,
        P_street:response.data.message[0].Pickup_Street,
        P_homeTown:response.data.message[0].Pickup_City,
        P_district:response.data.message[0].Pickup_District,
        p_ordertype:response.data.message[0].Emmergency,
        
      })
    
    } catch (error) {
      console.error("Error fetching order details:", error);
    }
  };

  


  useEffect(() => {
    if (orderId) {
      fetchOrderById(orderId);
    }
  }, [orderId]);

  return (
    <React.Fragment>
      <Box sx={{ bgcolor: "#e0f2f1", minHeight: "100vh" }}>
        <Navbar />
        <Box height={75} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, m: 3, bgcolor: "white", boxShadow: 1 }}
          >
            <Box sx={{ mx: 4 }}>
              <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>
                  <div>
                    <AppsIcon sx={{ mr: 3 }} />
                    OrderID - {fromData.OrderID}
                  </div>
              </Typography>
            </Box>
            <Box sx={{ ml: 4, mr: 4, mt: 5, mb: 5 }}>
              <Card
                sx={{
                  boxShadow:1,
                  border: "1px solid grey",
                }}
              >
                <CardContent>
                  <Box component="form" sx={{ m: 4 }}>
                    <FormSubTitle subTitle="Sender Details" />
                    <Divider sx={{ marginBottom: 1, border: 1 }} />
                    <Grid container spacing={1} sx={{ mt: 3 }}>
                      

                      <Grid item xs={12} md={6}>
                        <TextField
                          id="outlined-basic"
                          label="First Name"
                          size="small"
                          InputProps={{
                            readOnly: edit,
                          }}
                          name="S_fname"
                          fullWidth
                          variant="outlined"
                          value={fromData.S_fname}
                          onChange={(event) =>
                            setFormData({
                              ...fromData,
                              S_fname: event.target.value,
                            })
                          }
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          id="outlined-basic"
                          label="Last Name"
                          size="small"
                          InputProps={{
                            readOnly: edit,
                          }}
                          name="S_lname"
                          fullWidth
                          variant="outlined"
                          value={fromData.S_lname}
                          onChange={(event) =>
                            setFormData({
                              ...fromData,
                              S_lname: event.target.value,
                            })
                          }
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          id="outlined-basic"
                          label="City"
                          size="small"
                          InputProps={{
                            readOnly: edit,
                          }}
                          name="S_city"
                          fullWidth
                          variant="outlined"
                          value={fromData.S_city}
                          onChange={(event) =>
                            setFormData({
                              ...fromData,
                              S_city: event.target.value,
                            })
                          }
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          id="outlined-basic"
                          label="Telephone"
                          size="small"
                          InputProps={{
                            readOnly: edit,
                          }}
                          name="S_telephone"
                          fullWidth
                          variant="outlined"
                          value={fromData.S_telephone}
                          onChange={(event) =>
                            setFormData({
                              ...fromData,
                              S_telephone: event.target.value,
                            })
                          }
                        />
                      </Grid>
                    </Grid>

                    <FormSubTitle subTitle="Receiver Details" />
                    <Divider sx={{ marginBottom: 1, border: 1 }} />
                    <Grid container spacing={1} sx={{ mt: 3 }}>

                      
                    <Grid item xs={12} md={6}>
                        <TextField
                          id="outlined-basic"
                          label="Province"
                          size="small"
                          InputProps={{
                            readOnly: edit,
                          }}
                          name="R_province"
                          fullWidth
                          variant="outlined"
                          value={fromData.R_province}
                          onChange={(event) =>
                            setFormData({
                              ...fromData,
                              R_province: event.target.value,
                            })
                          }
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          id="outlined-basic"
                          label="District"
                          size="small"
                          InputProps={{
                            readOnly: edit,
                          }}
                          name="R_district"
                          fullWidth
                          variant="outlined"
                          value={fromData.R_district}
                          onChange={(event) =>
                            setFormData({
                              ...fromData,
                              R_district: event.target.value,
                            })
                          }
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          id="outlined-basic"
                          label="Street NO"
                          size="small"
                          InputProps={{
                            readOnly: edit,
                          }}
                          name="R_streetNo"
                          fullWidth
                          variant="outlined"
                          value={fromData.R_streetNo}
                          onChange={(event) =>
                            setFormData({
                              ...fromData,
                              R_streetNo: event.target.value,
                            })
                          }
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          id="outlined-basic"
                          label="Street"
                          size="small"
                          InputProps={{
                            readOnly: edit,
                          }}
                          name="R_street"
                          fullWidth
                          variant="outlined"
                          value={fromData.R_street}
                          onChange={(event) =>
                            setFormData({
                              ...fromData,
                              R_street: event.target.value,
                            })
                          }
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          id="outlined-basic"
                          label="City"
                          size="small"
                          InputProps={{
                            readOnly: edit,
                          }}
                          name="R_HomeTown"
                          fullWidth
                          variant="outlined"
                          value={fromData.R_HomeTown}
                          onChange={(event) =>
                            setFormData({
                              ...fromData,
                              R_HomeTown: event.target.value,
                            })
                          }
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          id="outlined-basic"
                          label="Telephone"
                          size="small"
                          InputProps={{
                            readOnly: edit,
                          }}
                          name="R_telephone"
                          fullWidth
                          variant="outlined"
                          value={fromData.R_telephone}
                          onChange={(event) =>
                            setFormData({
                              ...fromData,
                              R_telephone: event.target.value,
                            })
                          }
                        />
                      </Grid>
                    </Grid>

                    <FormSubTitle subTitle="Pickup Details" />
                    <Divider sx={{ marginBottom: 1, border: 1 }} />
                    <Grid container spacing={1} sx={{ mt: 3 }}>

                    <Grid item xs={12} md={6}>
                        <TextField
                          id="outlined-basic"
                          label="Street No"
                          size="small"
                          InputProps={{
                            readOnly: edit,
                          }}
                          name="P_streetNo"
                          fullWidth
                          variant="outlined"
                          value={fromData.P_streetNo}
                          onChange={(event) =>
                            setFormData({
                              ...fromData,
                              P_streetNo: event.target.value,
                            })
                          }
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          id="outlined-basic"
                          label="Street"
                          size="small"
                          InputProps={{
                            readOnly: edit,
                          }}
                          name="P_street"
                          fullWidth
                          variant="outlined"
                          value={fromData.P_street}
                          onChange={(event) =>
                            setFormData({
                              ...fromData,
                              P_street: event.target.value,
                            })
                          }
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          id="outlined-basic"
                          label="City"
                          size="small"
                          InputProps={{
                            readOnly: edit,
                          }}
                          name="P_homeTown"
                          fullWidth
                          variant="outlined"
                          value={fromData.P_homeTown}
                          onChange={(event) =>
                            setFormData({
                              ...fromData,
                              P_homeTown: event.target.value,
                            })
                          }
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          id="outlined-basic"
                          label="District"
                          size="small"
                          InputProps={{
                            readOnly: edit,
                          }}
                          name="P_district"
                          fullWidth
                          variant="outlined"
                          value={fromData.P_district}
                          onChange={(event) =>
                            setFormData({
                              ...fromData,
                              P_district: event.target.value,
                            })
                          }
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          id="outlined-basic"
                          label="Order_type"
                          size="small"
                          InputProps={{
                            readOnly: edit,
                          }}
                          name="p_ordertype"
                          fullWidth
                          variant="outlined"
                          value={fromData.p_ordertype}
                          onChange={(event) =>
                            setFormData({
                              ...fromData,
                              p_ordertype: event.target.value,
                            })
                          }
                        />
                      </Grid>
                    </Grid>

                    <Grid container spacing={1} sx={{ mt: 3 }}>

                    <Grid
                        item
                        xs={12}
                        md={4}
                        style={{ margin: "0 auto", padding: "0 20px" }}
                      >
                        <Pendingalert
                          color="#bdbdbd"
                          Icon = {<DeleteIcon/>}
                          button="Delete Order"
                          title="Delete Order"
                          text="Are you sure you want to delete this order?"
                          buttonName1="Cancel"
                          buttonName2="Delete"
                          bcolor="#bdbdbd"
                          onClick1={handledeleteOrder}
                        />
                      </Grid>

                      <Grid
                        item
                        xs={12}
                        md={4}
                        style={{ margin: "0 auto", padding: "0 20px" }}
                      >
                        {save? (<Button
                          fullWidth
                          size="large"
                          style={{backgroundColor:"#00acc1"}}
                          sx={{ margin: "30px 0 10px 0", borderRadius: "50px",gap:'15px'}}
                          variant="contained"
                          onClick={handlEditdata}
                        >
                          <EditIcon/>
                          Edit Order
                        </Button>
                        ):(
                        
                          <Pendingalert
                          color= "#0288d1"
                          Icon={<SaveIcon/>}
                          button=" Save Edit"
                          title="Save Order"
                          text="Are you sure save this changes ?"
                          buttonName1="Cancel"
                          buttonName2="Save"
                          bcolor="0288d1"
                          onClick1={sendSave}
                        />
                        
                       
                        // <Button
                        //   fullWidth
                        //   size="large"
                        //   style={{backgroundColor:"#0288d1"}}
                        //   sx={{ margin: "30px 0 10px 0", borderRadius: "50px", gap:"15px" }}
                        //   variant="contained"
                        //   onClick={sendSave}
                        // >
                        //   <SaveIcon/>
                        //   Save Edit
                        // </Button>
                  
                      )}
                      
                      </Grid>

                      <Grid
                        item
                        xs={12}
                        md={4}
                        style={{ margin: "0 auto", padding: "0 20px" }}
                      >
                        <Pendingalert
                          color="#4caf50"
                          Icon = {<CheckCircleIcon/>}
                          button="Confirm Order"
                          title="Confirm Order"
                          text="Are you sure you want to confirm this order?"
                          buttonName1="Cancel"
                          buttonName2="Confirm"
                          bcolor="#4caf50"
                          onClick1={handleConfirmdata}
                        />
                      </Grid>

                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}
