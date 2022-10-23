import { Box, Container, Typography } from "@mui/material";
import React from "react";
import bgimage from "../image/amazonfullfillmentcenter.jpg";

const About = () => {
  return (
    <Box textAlign='center'>
      <Container>
        <Box my={4} sx={{ padding: { xs: 0, s: 5 } }}>
          <Box textAlign='center' m={5}>
            <Typography variant='h3' id='about'>
              ABOUT
            </Typography>
          </Box>
          <Box m={4} mx='auto' textAlign='left'>
            <Typography variant='h5' sx={{ p: 2 }}>
              Angel Ecommerce LLC is an online business that offers a variety of
              quality products to your doorsteps. Our dedicated team has the
              highest expectations to ensure fast product delivery and an
              unparalleled customer experience.
            </Typography>
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          backgroundImage: `url(${bgimage})`,
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
        <Box
          sx={{
            display: { s: "none", md: "block" },
          }}
          m={4}
          mx='auto'
          textAlign='left'
        >
          <Typography variant='h5' sx={{ p: 2 }}>
            Our team receives new products from our distribution/brand partners,
            stores the product in our local retail workspace, and manages
            outgoing shipments to Amazon and directly to consumers. We utilize
            Fulfilled by Amazon (FBA) to ensure premier access to products,
            customer service, and product return service.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
