import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import './ApplicantTable.css';

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
  overflowY: 'auto',
  maxWidth: '100%'  // Allow vertical scrolling
});

function createData(applicantid, name, pdistrict, ptown, vehicle,action) {
  return { applicantid, name, pdistrict, ptown, vehicle,action };
}

const rows = [
    createData('2141N', 'Rajapaksha', 'Matara', 'Rahula', 'Bike','Details'),
    createData('2142N', 'Rajapaksha', 'Matara', 'Rahula', 'Bike','Details'),
    createData('2143N', 'Rajapaksha', 'Matara', 'Rahula', 'Bike','Details'),
    createData('2144N', 'Rajapaksha', 'Matara', 'Rahula', 'Bike','Details'),
    createData('2145N', 'Rajapaksha', 'Matara', 'Rahula', 'Bike','Details'),
    createData('2146N', 'Rajapaksha', 'Matara', 'Rahula', 'Bike','Details'),
    createData('2147N', 'Rajapaksha', 'Matara', 'Rahula', 'Bike','Details'),
    createData('2148N', 'Rajapaksha', 'Matara', 'Rahula', 'Bike','Details'),
    createData('2149N', 'Rajapaksha', 'Matara', 'Rahula', 'Bike','Details'),
    createData('2150N', 'Rajapaksha', 'Matara', 'Rahula', 'Bike','Details'),
    createData('2151N', 'Rajapaksha', 'Matara', 'Rahula', 'Bike','Details'),
    createData('2152N', 'Rajapaksha', 'Matara', 'Rahula', 'Bike','Details'),
    createData('2153N', 'Rajapaksha', 'Matara', 'Rahula', 'Bike','Details'),
    createData('2154N', 'Rajapaksha', 'Matara', 'Rahula', 'Bike','Details'),
];




export default function ApplicantTable() {
  return (
        <Box style={{paddingTop:'20px', marginLeft:'20px'}} >
        <Box style = {{display:'flex', justifyContent:'center'}}>
      <TableContainerStyled sx={{ height: '100%' , overflowX: 'auto'}}>
        <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 100 }}>
          <TableHead >
          <TableRow> 
          <StyledTableCell >Applicant ID</StyledTableCell>
          <StyledTableCell >Name</StyledTableCell>
          <StyledTableCell >District</StyledTableCell>
          <StyledTableCell >HomeTown</StyledTableCell>
          <StyledTableCell >Vehicle</StyledTableCell>
          <StyledTableCell >Action</StyledTableCell>
          </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.applicantid} >
                <TableCell>{row.applicantid}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.pdistrict}</TableCell>
                <TableCell>{row.ptown}</TableCell>
                <TableCell>{row.vehicle}</TableCell>
                <TableCell>
                  
                  <a
                    href={`/ApplicantPerson/${row.applicantid}`}
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