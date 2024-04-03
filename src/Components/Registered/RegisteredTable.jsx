import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import './RegisteredTable.css';

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

function createData(registerdid, name, pdistrict, ptown, date,action) {
  return { registerdid, name, pdistrict, ptown, date,action };
}

const rows = [
  createData('2001N','Pramuditha','Hambanthota','Beliatta','3/3/2024','View Details'),
  createData('2002N','Rajapaksha','Matara','Rahula','2/3/2024','View Details'),
  createData('2003N','Rajapaksha','Matara','Rahula','2/3/2024','View Details'),
  createData('2004N','Rajapaksha','Matara','Rahula','2/3/2024','View Details'),
  createData('2005N','Rajapaksha','Matara','Rahula','2/3/2024','View Details'),
  createData('2006N','Rajapaksha','Matara','Rahula','2/3/2024','View Details'),
  createData('2007N','Rajapaksha','Matara','Rahula','2/3/2024','View Details'),
  createData('2008N','Rajapaksha','Matara','Rahula','2/3/2024','View Details'),
  createData('2009N','Rajapaksha','Matara','Rahula','2/3/2024','View Details'),
  createData('2010N','Rajapaksha','Matara','Rahula','2/3/2024','View Details'),
  createData('2011N','Rajapaksha','Matara','Rahula','2/3/2024','View Details'),
  createData('2012N','Rajapaksha','Matara','Rahula','2/3/2024','View Details'),
  createData('2013N','Rajapaksha','Matara','Rahula','2/3/2024','View Details'),
  createData('2014N','Rajapaksha','Matara','Rahula','2/3/2024','View Details'),
  createData('2015N','Rajapaksha','Matara','Rahula','2/3/2024','View Details'),
  createData('2016N','Rajapaksha','Matara','Rahula','2/3/2024','View Details'),
  createData('2017N','Rajapaksha','Matara','Rahula','2/3/2024','View Details'),
  createData('2018N','Rajapaksha','Matara','Rahula','2/3/2024','View Details'),
  createData('2019N','Rajapaksha','Matara','Rahula','2/3/2024','View Details'),
  createData('2020N','Rajapaksha','Matara','Rahula','2/3/2024','View Details'),
 
];




export default function RegisteredTable() {
  return (
        <Box style={{paddingTop:'20px', marginLeft:'20px'}} >
        <Box style = {{display:'flex', justifyContent:'center'}}>
      <TableContainerStyled sx={{ height: '100%' , overflowX: 'auto'}}>
        <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 100 }}>
          <TableHead >
          <TableRow> 
          <StyledTableCell >RegisteredID</StyledTableCell>
          <StyledTableCell >Person Name</StyledTableCell>
          <StyledTableCell >Person District</StyledTableCell>
          <StyledTableCell >Person HomeTown</StyledTableCell>
          <StyledTableCell >Register Date</StyledTableCell>
          <StyledTableCell >Action</StyledTableCell>
          </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.registerdid} >
                <TableCell>{row.registerdid}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.pdistrict}</TableCell>
                <TableCell>{row.ptown}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>
                  
                  <a
                    href={`/RegisteredPerson/${row.registerdid}`}
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