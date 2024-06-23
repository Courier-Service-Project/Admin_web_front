import React, { useEffect,useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import './ApplicantTable.css';
import { useNavigate } from 'react-router-dom';
import { Button,Typography } from '@mui/material';
import axios from 'axios';
import { BACKEND_URL } from '../../Constants';
import FeedbackIcon from "@mui/icons-material/Feedback";
import { Padding } from '@mui/icons-material';


const StyledTableCell = styled(TableCell)(( ) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#b2dfdb',
    color: 'black',
    fontWeight: 750,
    fontSize: '1rem',
    top: 0,
    zIndex: 1,
    overflowX: 'auto',
    height:'60px'
    
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    Padding:8,

  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor:'#D9D9D9',
  },
  // hover effect
  '&:hover': {
    backgroundColor: '#ffcdd2',
  },
  // blue left border on hover
  '&:hover td:nth-child(1)': {
    borderLeft: '5px solid red',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },

}));

const TableContainerStyled = styled(TableContainer)({
  maxHeight : '475px', // Set a fixed height for the table container
  overflowY: 'scroll',
  maxWidth: '100%'  // Allow vertical scrolling
});

export default function ApplicantTable() {
  const navigate = useNavigate();
  const [rows,SetRows] = useState([])
  useEffect(() =>{
    getApplicantDetails();
  },[]);

  const getApplicantDetails = async () =>{
    try{
      const result = await axios.get(`${BACKEND_URL}/admin/applicantDetails`);
      if(Array.isArray(result.data.message)){ 
      //console.log(result.data.message[0]);
      SetRows(result.data.message)
      }else{
        SetRows([]);
        console.error("Expected result.data",result.data.message);
      }
    }
    catch(error){
      SetRows([]);
        console.error("Failed to fetch order details",error);
    }
  };
  return (
        <Box style={{paddingTop:'20px', marginLeft:'20px'}} >
        <Box style = {{display:'flex', justifyContent:'center'}}>
      <TableContainerStyled sx={{ height: '100%' , overflowX: 'auto'}}>
        <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 100 }}>
          <TableHead >
          <TableRow> 
          <StyledTableCell >Applicant ID</StyledTableCell>
          <StyledTableCell >Name</StyledTableCell>
          <StyledTableCell >City</StyledTableCell>
          <StyledTableCell >Branch</StyledTableCell>
          <StyledTableCell >Vehicle</StyledTableCell>
          <StyledTableCell >Action</StyledTableCell>
          </TableRow>
          </TableHead>

          <TableBody>
            {rows.length>0 ?(
            rows.map((row) => (
              <StyledTableRow key={row.id} >
                <StyledTableCell>{row.id}</StyledTableCell>
                <StyledTableCell>{row.FirstName}</StyledTableCell>
                <StyledTableCell>{row.City}</StyledTableCell>
                <StyledTableCell>{row.BranchLocation}</StyledTableCell>
                <StyledTableCell>{row.Vehice_Type}</StyledTableCell>
                <StyledTableCell>
                  <Button
                    className="hover-link red-button"
                    onClick={() => 
                      navigate(`/ApplicantPerson/${row.id}`,{
                        state: {applicantid:row.id},
                      })
                    }
                  >View
                  </Button>
                  </StyledTableCell>
              </StyledTableRow>
            ))
          ):(
            <StyledTableRow>
                    <StyledTableCell colSpan={6}>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center',mt:0 }}>
                          <FeedbackIcon sx={{ mr: 3, color:"red" }} />
                          <Typography sx={{ color: "red", fontSize: 20 }}>
                              No orders in Applicant List.
                          </Typography>
                        </Box>
                    </StyledTableCell>
                  </StyledTableRow>
          )}
          </TableBody>
          
        </Table>
      </TableContainerStyled>
      </Box>
    </Box>
  );
}