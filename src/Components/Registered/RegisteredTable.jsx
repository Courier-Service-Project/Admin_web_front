import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import "./RegisteredTable.css";
import axios from "axios";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../Constants";
import FeedbackIcon from "@mui/icons-material/Feedback";
import { Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

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
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: "#D9D9D9",
  },
  // hover effect
  "&:hover": {
    backgroundColor: "#ffebee",
  },
  // blue left border on hover
  "&:hover td:nth-child(1)": {
    borderLeft: "5px solid red",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const TableContainerStyled = styled(TableContainer)({
  maxHeight: "475px", // Set a fixed height for the table container
  overflowY: "auto",
  maxWidth: "100%", // Allow vertical scrolling
});

export default function RegisteredTable() {
  const navigate = useNavigate();

  useEffect(() => {
    getRegisterdpersonDetails();
  }, []);

  const [rows, setRows] = React.useState([]);

  const getRegisterdpersonDetails = async () => {
    try {
      const results = await axios.get(
        `${BACKEND_URL}/branchuser/RegisterdpersonDetails`
      );
      console.log(results);
      if (Array.isArray(results.data.message)) {
        setRows(results.data.message);
      } else {
        setRows([]);
        console.error("Expected result.data", results.data.message);
      }
      // console.log(results.data.message[0]);
      // setRows(results.data.message);
    } catch (error) {
      setRows([]);
      console.error("Failed to fetch order details", error);
    }
  };

  return (
    <Box style={{ paddingTop: "20px", marginLeft: "20px", overflowX: "auto" }}>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <TableContainerStyled sx={{ height: "100%", overflowX: "auto" }}>
          <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 100 }}>
            <TableHead>
              <TableRow>
                <StyledTableCell>RegisteredID</StyledTableCell>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>City</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>BranchLocation</StyledTableCell>
                <StyledTableCell>Action</StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.length > 0 ? (
                rows.map((row) => (
                  <StyledTableRow key={row.BranchUser_id}>
                    <StyledTableCell>{row.BranchUser_id}</StyledTableCell>
                    <StyledTableCell>{row.FirstName}</StyledTableCell>
                    <StyledTableCell>{row.City}</StyledTableCell>
                    <StyledTableCell>{row.Email}</StyledTableCell>
                    <StyledTableCell>{row.branchLocation}</StyledTableCell>
                    <StyledTableCell>
                      <Button
                        sx={{ gap: "5px" }}
                        className="hover-link red-button"
                        onClick={() =>
                          navigate(`/RegisteredPerson/${row.BranchUser_id}`, {
                            state: { orderId: row.BranchUser_id },
                          })
                        }
                      >
                        View Order
                        <VisibilityIcon
                          style={{ fontSize: 20, color: "#e57373" }}
                        />
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))
              ) : (
                <StyledTableRow>
                  <StyledTableCell colSpan={5}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mt: 2,
                      }}
                    >
                      <FeedbackIcon sx={{ mr: 3, color: "red" }} />
                      <Typography sx={{ color: "red", fontSize: 20 }}>
                        No Details in Registerd List.
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
