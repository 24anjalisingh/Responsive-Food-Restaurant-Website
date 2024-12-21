import React from 'react';
import Layout from '../components/Layout';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml:10, "& h4": {fontWeight:'bold', mb: 2 }}}>
        <Typography variant='h4'>
        Contact Our Resturant
        </Typography>
        <p>
        If you have any questions or need assistance, 
        feel free to reach out to us through the contact details below.
        </p>
      </Box>
      <Box sx={{ m: 3, width:"600px", ml:10, "@media (max-width:600px)":{
        width:'300px',
      }}}>
        <TableContainer component={Paper}>
          <Table aria-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black', color:'white'}}align='center'>
                  Contact details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{color:"red", pt: 1}}/> 1800 000 000 (Toll Free Number)
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                <EmailIcon sx={{color:"skyblue", pt: 1}}/> pritisingh24062001@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                <CallIcon sx={{color:"Green", pt: 1}}/> +91 090990909 (Contact us)
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;