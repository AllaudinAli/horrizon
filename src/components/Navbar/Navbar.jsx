import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontFamily: "Rajdhani, sans-serif",
            fontWeight: 1000,
            fontSize: "2rem",
            letterSpacing: "0.05em",
          }}
        >
          HorrizonAI
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
