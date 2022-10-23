import { Box, Container, Rating, Typography } from "@mui/material";
import React from "react";

const Review = () => {
  return (
    <Container>
      <Box my={4}>
        <Box textAlign='center' sx={{ margin: { xs: 5, sm: 10 } }}>
          <Typography variant='h3' id='review'>
            CUSTOMER REVIEW
          </Typography>
        </Box>

        <Box textAlign='center' my={4}>
          <Typography variant='h5'>
            "Great shipping and fast." - Andy
          </Typography>
          <Rating size='large' name='read-only' value={5} readOnly />
        </Box>
        <Box textAlign='center' my={4}>
          <Typography variant='h5'>
            "My daughter is so in love with this" -Ellissa
          </Typography>
          <Rating size='large' name='read-only' value={5} readOnly />
        </Box>
        <Box textAlign='center' my={4}>
          <Typography variant='h5'>
            "Item came in perfect condition! And I'm beyond excited to finally
            own this figure!" -Nicholas
          </Typography>
          <Rating size='large' name='read-only' value={5} readOnly />
        </Box>
        <Box textAlign='center' my={4}>
          <Typography variant='h5'>
            "Packaging was amazing and the detail was amazing. Definitely buying
            it again" -Stacy
          </Typography>
          <Rating size='large' name='read-only' value={5} readOnly />
        </Box>
      </Box>
    </Container>
  );
};

export default Review;
