import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Container>
      <Box textAlign='center' pt={6} m={6}>
        <Typography variant='h6'>
          Amazon Ecommerce LLC &#169; 2020. All Right Reserved.
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
