import { Box, Container, Typography } from "@mui/material";
import React from "react";
import image from "../../src/image/robots-efficiently-sorting-hundreds-parcels-per-hour-3d-rendering.jpg";
const Contact = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          // width: "100%",
          backgroundSize: "cover",
          color: "white",
          height: { xs: "40vh", sm: "60vh" },
          backgroundPosition: "center",
        }}
        display='flex'
        justifyContent='center'
        alignItems='end'
      ></Box>
      <Container>
        <Box my={4} sx={{ padding: { xs: 0, s: 5 } }}>
          <Box textAlign='center' m={6} pt={5}>
            <Typography variant='h3' id='contact'>
              CONTACT
            </Typography>
          </Box>
          <Box textAlign='center'>
            <Box my={2}>
              <Typography variant='h5'>EMAIL</Typography>
              <Typography variant='h6'>
                paulnguyen@angelecommercellc.com
              </Typography>
            </Box>
            <Box my={2}>
              <Typography variant='h5'>PHONE</Typography>
              <Typography variant='h6'>617-372-3968</Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Contact;
