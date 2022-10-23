import { Box, Typography } from "@mui/material";
import React from "react";
import bgimage from "../image/image.png";
const Hero = () => {
  return (
    <Box>
      <Box
        p={4}
        height={400}
        sx={{
          backgroundImage: `url(${bgimage})`,
          backgroundRepeat: "no-repeat",
          // width: "100%",
          backgroundSize: "cover",
          color: "white",
          height: "50vh",
          backgroundPosition: "center",
        }}
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Box
          px={3}
          sx={{
            backgroundColor: "rgb(0,0,0,0.5)",
            display: "inline-block",
            borderRadius: 4,
          }}
          textAlign='center'
        >
          <Typography
            variant='h2'
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            ANGEL ECOMMERCE LLC
          </Typography>
          <Typography
            variant='h4'
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            ANGEL ECOMMERCE LLC
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
