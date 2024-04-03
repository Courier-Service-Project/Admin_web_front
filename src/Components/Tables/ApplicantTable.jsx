import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';

const StyledTableCell = styled(TableCell)(( ) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#b2dfdb',
    color: '#212121',
    fontWeight: 800,
    fontSize: '1rem',
    top: 0,
    zIndex: 1,
    overflowX: 'auto',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme, isSelected }) => ({
  backgroundColor: isSelected ? '#E4A6A6' : 'transparent',
  '&:nth-of-type(even)': {
    backgroundColor: isSelected ? '#E4A6A6' : theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const TableContainerStyled = styled(TableContainer)({
  maxHeight: '600px', // Set a fixed height for the table container
  overflowY: 'auto',
  maxWidth: '100%',  // Allow vertical scrolling
});

function createData(ID_Num, Name, District, Home_Town, Vehicle , Action) {
  return { ID_Num, Name, District, Home_Town, Vehicle , Action};
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

function ApplocontList() {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (row) => {
    setSelectedRow(row.ID_Num);
  };
  

  return (
    <Box style={{ margin: '30px', marginTop: '20px', marginLeft: '25px', marginBottom: '10px' }}>
      <Box style={{ display: 'flex', justifyContent: 'center' }}>
        <TableContainerStyled sx={{ height: '100%', overflowX: 'auto' }}>
          <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 100 }}>
            <TableHead>
              <TableRow>
                <StyledTableCell>ID Num</StyledTableCell>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>District</StyledTableCell>
                <StyledTableCell>Home Town</StyledTableCell>
                <StyledTableCell>Vehicle</StyledTableCell>
                <StyledTableCell>Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow
                  key={row.ID_Num}
                  isSelected={selectedRow === row.ID_Num}
                  onClick={() => handleRowClick(row)}
                >
                  <TableCell>{row.ID_Num}</TableCell>
                  <TableCell>{row.Name}</TableCell>
                  <TableCell>{row.District}</TableCell>
                  <TableCell>{row.Home_Town}</TableCell>
                  <TableCell>{row.Vehicle}</TableCell>
                  <TableCell>
                    <a href={`/applicant/${row.ID_Num}`} style={{ color: "red", textDecoration: 'none' }}>{row.Action}</a>
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

export default ApplocontList;
