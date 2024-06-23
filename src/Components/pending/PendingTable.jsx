import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import "./PendingTable.css";
import axios from "axios";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../Constants";
import FeedbackIcon from '@mui/icons-material/Feedback';
import { Typography } from "@mui/material";
// import { Typography } from '@mui/material';

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
    padding: 8,
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

export default function PendingTable() {
  const navigate = useNavigate();
  const [rows, setRows] = React.useState([]);
  // const [isError,setIsError]=React.useState(false);

  useEffect(() => {
    getpendingOrderDetails();
  }, []);

  const getpendingOrderDetails = async () => {
    try {
      const result = await axios.get(
        `${BACKEND_URL}/orders/pendingorderDetails`
      );
      console.log(result);

      console.log(result.data.message[0]);
    if (Array.isArray(result.data.message)) {
      setRows(result.data.message);
    } else {
      setRows([]);
      console.error("Expected result", result.data.message);
    }
  } catch (error) {
    setRows([]);
    console.error("Failed to fetch order details", error);
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
                <StyledTableCell>OrderID</StyledTableCell>
                <StyledTableCell>Customer Name</StyledTableCell>
                <StyledTableCell>Pickup District</StyledTableCell>
                <StyledTableCell>Pickup HomeTown</StyledTableCell>
                <StyledTableCell>Action</StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.length > 0 ? (
                rows.map((row) => (
                  <StyledTableRow key={row.Order_id}>
                    <StyledTableCell>{row.Order_id}</StyledTableCell>
                    <StyledTableCell>{row.FirstName}</StyledTableCell>
                    <StyledTableCell>{row.Pickup_District}</StyledTableCell>
                    <StyledTableCell>{row.Pickup_City}</StyledTableCell>
                    <StyledTableCell>
                      <Button
                        className="hover-link red-button"
                        onClick={() =>
                          navigate(`/Pendingorder/${row.Order_id}`, {
                            state: { orderId: row.Order_id },
                          })
                        }
                      >
                        View Order
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))
              ):(
                <StyledTableRow>
                    <StyledTableCell colSpan={5}>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center',mt:2 }}>
                          <FeedbackIcon sx={{ mr: 3, color:"red" }} />
                          <Typography sx={{ color: "red", fontSize: 20 }}>
                              No orders in Pending Order List.
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
