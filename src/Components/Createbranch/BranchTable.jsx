import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import axios from "axios";
import { BACKEND_URL } from "../../Constants";
import FeedbackIcon from '@mui/icons-material/Feedback';
import { Typography } from "@mui/material";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#b2dfdb",
    color: "black",
    fontWeight: 750,
    fontSize: "1rem",
    top: 0,
    zIndex: 1,
    overflowX: "auto",
    height: "60px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    // backgroundColor:"red"
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: "#D9D9D9",
  },
  "&:hover": {
    backgroundColor: "#ffebee",
  },
  "&:hover td:nth-child(1)": {
    borderLeft: "5px solid red",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const TableContainerStyled = styled(TableContainer)({
  maxHeight: "475px",
  overflowY: "scroll",
  maxWidth: "100%",
});

export default function BranchTable() {

  useEffect(() => {
    getBranchDetails();
  }, []);

  const [rows, setRows] = React.useState([]);
 

  const getBranchDetails = async () => {
    try {
      const result = await axios.get(
        `${BACKEND_URL}/branch/branchDetails`
      );
      console.log(result);
      if(Array.isArray(result.data.message)){
        setRows(result.data.message);
      }else{
        setRows([]);
        console.error("Expected result.data", result.data.message);
      }
    } catch (error) {
      setRows([]);
      console.error("Failed to fetch order details",error);
    }
  };

  return (
    <Box style={{ paddingTop: "20px", marginLeft: "20px" , overflowX: "auto"}}>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        {/* {
            isError==true&&<Typography>Network Error</Typography>
          } */}
        <TableContainerStyled sx={{ height: "100%", overflowX: "auto" }}>
          <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 100 }}>
            <TableHead>
              <TableRow>
                <StyledTableCell>Location</StyledTableCell>
                <StyledTableCell>District</StyledTableCell>
                <StyledTableCell>Province</StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.length>0 ?(
                rows.map((row) => (
                  <StyledTableRow key={row.branchLocation}>
                    <StyledTableCell>{row.branchLocation}</StyledTableCell>
                    <StyledTableCell>{row.branchDistrict}</StyledTableCell>
                    <StyledTableCell>{row.branchProvince}</StyledTableCell>
                  </StyledTableRow>
                ))
              ):(
                <StyledTableRow>
                    <StyledTableCell colSpan={3}>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center',mt:2 }}>
                          <FeedbackIcon sx={{ mr: 3, color:"red" }} />
                          <Typography sx={{ color: "red", fontSize: 20 }}>
                              No Details in Branch List.
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
