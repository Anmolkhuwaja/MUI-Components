import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import Logo from "../images/Illustration.png";
import dots from "../images/Dot.png";

const Hero = () => {
  return (
    <>
    <Box className="d-flex justify-content-evenly pb-5 align-items-center" sx={{backgroundColor:"#f5f7fa"}}>
        <Box className="mt-5">
            <Typography variant="h3" sx={{color:"#4d4d4d"}}>
            {"Lessons and insights"}
            </Typography>
            <Typography variant="h3" className='mt-1' sx={{color:"#4caf4f"}}>
            {"from 8 years"}
            </Typography>
            <Typography className='mt-3' sx={{color:"#717171"}}>
                {"Where to grow your business as a photographer: site or social media?"}
            </Typography><br></br>
            <Button variant="contained" sx={{ backgroundColor: "#4caf4f" }} className="fw-bolder me-5 mt-2">Register</Button>
        </Box>
        <Box>
        <img src={Logo} className="img-fluid ms-5 mt-5"  />
        </Box>
    </Box>
   <Box className="text-center pb-3" sx={{backgroundColor: "#f5f7fa"}}>
   <img src={dots} className='img-fluid' alt="" />
   </Box>
   </>
  )
}

export default Hero;