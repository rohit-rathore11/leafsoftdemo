import React, { useState } from "react";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { dashbotimg } from "./assets";
import { useNavigate } from "react-router-dom";

const Login = () => {

const [password,setPassword]=useState();
const navigate=useNavigate()

const navigateTodashbord=()=>{
navigate('/Dashboard')



}
  return (
    <Grid style={webStyles.root} xs={12} sm={6}>
      <Box border={1}>
        <Box style={webStyles.formimage}>
          <img src={dashbotimg} alt="dashboardimage" />
        </Box>
        <Box>
          <Typography
            style={{ display: "flex", justifyContent: "center", color: "blue" }}
          >
            Login
          </Typography>
        </Box>
        <label>Username</label>
        <Box
          style={{
            border: "1px solid #C5CBC9",
            height: "56px",
            padding: "10px, 24px, 10px, 24px",
            borderRadius: "8px",
            marginBottom: "16px",
          }}
        >
          <TextField
            placeholder="Enter your username..."
            // value={email}
            InputProps={{
              disableUnderline: true,

              style: {
                border: "none",
                height: "",
                width: "415px",
              },
            }}
            InputLabelProps={{
              shrink: false,
            }}

            // onChange={(e) => this.setEmail(e.target.value)}
          />
        </Box>

        <label>Password</label>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            border: "1px solid #C5CBC9",
            height: "56px",
            padding: "10px, 24px, 10px, 24px",
            borderRadius: "8px",
            marginBottom: "16px",
          }}
        >
          <TextField
            placeholder="Enter your username..."
            // value={password}
            InputProps={{
              disableUnderline: true,

              style: {
                border: "none",
                height: "",
                width: "415px",
              },
            }}
            InputLabelProps={{
              shrink: false,
            }}

            // onChange={(e) => this.setEmail(e.target.value)}
          />
        </Box>

        <Box style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" onClick={navigateTodashbord} >Login</Button>
        </Box>
      </Box>
    </Grid>
  );
};
const webStyles = {
  root: {
    flexGrow: 1,
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formimage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  gradientText: {
    background: "linear-gradient(to right,#0066FF, #E8CC17)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textAlign: "center",
    fontFamily: "Georgia",
    fontWeight: 700,
    fontSize: "96px",
  },
  button: {
    background: "linear-gradient(to right, #0e88b3, #65a695, #95ab66)",
    color: "white",
  },
  footer: {
    textAlign: "center",
    width: "100%",
  },
  appBar: {
    background: "#fff",
    color: "#000",
    boxShadow: "none",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  menuItem: {
    fontFamily: "Open Sans",
    cursor: "pointer",
    margin: "2px",
    fontWeight: 600,
    fontSize: "18px",
    color: "#000000",
  },
  logo: {
    textAlign: "center",
    flexGrow: 1,
  },
};
export default Login;
