import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
//import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './PendingTable.css';

const StyledTableCell = styled(TableCell)(( ) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#b2dfdb',
    color: 'black',
    fontWeight: 750,
    fontSize: '1rem',
    top: 0,
    zIndex: 1,
    overflowX: 'auto',
    height:'0px'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,

  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor:'#D9D9D9',
  },
  // hover effect
  '&:hover': {
    backgroundColor: '#E4A6A6',
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
  overflowY: 'auto',
  maxWidth: '100%'  // Allow vertical scrolling
});

function createData(id, name, pdistrict, ptown, date,action) {
  return { id, name, pdistrict, ptown, date,action };
}

const rows = [
  createData('2141N','Rajapaksha','Matara','Rahula','2/3/2024','View Order'),
  createData('2141N','Rajapaksha','Matara','Rahula','2/3/2024','View Order'),
  createData('2141N','Rajapaksha','Matara','Rahula','2/3/2024','View Order'),
  createData('2142N','Rajapaksha','Matara','Rahula','2/3/2024','View Order'),
  createData('2141N','Rajapaksha','Matara','Rahula','2/3/2024','View Order'),
  createData('2141N','Rajapaksha','Matara','Rahula','2/3/2024','View Order'),
  createData('2141N','Rajapaksha','Matara','Rahula','2/3/2024','View Order'),
  createData('2141N','Rajapaksha','Matara','Rahula','2/3/2024','View Order'),
  createData('2141N','Rajapaksha','Matara','Rahula','2/3/2024','View Order'),
  createData('2141N','Rajapaksha','Matara','Rahula','2/3/2024','View Order'),
  createData('2141N','Rajapaksha','Matara','Rahula','2/3/2024','View Order'),
  createData('2141N','Rajapaksha','Matara','Rahula','2/3/2024','View Order'),
  createData('2141N','Rajapaksha','Matara','Rahula','2/3/2024','View Order'),
  createData('2141N','Rajapaksha','Matara','Rahula','2/3/2024','View Order'),
  createData('2141N','Rajapaksha','Matara','Rahula','2/3/2024','View Order'),
  createData('2141N','Rajapaksha','Matara','Rahula','2/3/2024','View Order'),
];




export default function PendingTable() {
  return (
        <Box style={{paddingTop:'20px', marginLeft:'20px'}} >
        <Box style = {{display:'flex', justifyContent:'center'}}>
      <TableContainerStyled sx={{ height: '100%' , overflowX: 'auto'}}>
        <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 100 }}>
          <TableHead >
          <TableRow>
          <StyledTableCell >OrderID</StyledTableCell>
          <StyledTableCell >Customer Name</StyledTableCell>
          <StyledTableCell >Pickup District</StyledTableCell>
          <StyledTableCell >Pickup<br/>HomeTown</StyledTableCell>
          <StyledTableCell >Date</StyledTableCell>
          <StyledTableCell >Action</StyledTableCell>
          </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.id} >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.pdistrict}</TableCell>
                <TableCell>{row.ptown}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>
                  
                  <a
                    href={`/order/${row.id}`}
                    className="hover-link"
                  >
                    {row.action}
                  </a>

                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
          
        </Table>
      </TableContainerStyled>
      </Box>
    </Box>
  );
}