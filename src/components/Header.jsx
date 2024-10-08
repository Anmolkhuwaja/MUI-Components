import React from "react";
import Logo from "../images/Logo.png";
import {
  AppBar,
  Box,
  Button,
  Link,
  Toolbar,
} from "@mui/material";

const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#f5f7fa" }}>
          <Toolbar>
            <img src={Logo} className="img-fluid ms-5"  />
            <Box sx={{ flexGrow: 1 }} className="ms-3 ps-3">
              <Link href="#" underline="none" className="ms-5 ps-5 text-black fs-6">
                {'Home'}
              </Link>
              <Link href="#" underline="none" className="ms-4 ps-4 text-black fs-6">
                {'Services'}
              </Link>
              <Link href="#" underline="none" className="ms-4 ps-4 text-black fs-6">
                {'Feature'}
              </Link>
              <Link href="#" underline="none" className="ms-4 ps-4 text-black fs-6">
                {'Product'}
              </Link>
              <Link href="#" underline="none" className="ms-4 ps-4 text-black fs-6">
                {'Testimonial'}
              </Link>
              <Link href="#" underline="none" className="ms-4 ps-4 text-black fs-6">
                {'FAQ'}
              </Link>
            </Box>
            <Button variant="text" sx={{ color: "#4caf4f" }} className="fw-medium me-2">Login</Button>
            <Button variant="contained" sx={{ backgroundColor: "#4caf4f" }} className="fw-bolder me-5">Sign Up</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
