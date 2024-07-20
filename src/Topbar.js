import React from "react";
import {Box, Grid, Typography,Button} from "@mui/material"
import { useNavigate } from "react-router-dom";




const Topbar=()=>{

    const navigate=useNavigate();
const handleGoback=()=>{
    navigate(-1)


}

    return(

        <Grid xs={12} sm={6}>

<Box style={webStyles.header}>
 <Typography variant="h5">Dashboard</Typography>
 <Button variant="contained" onClick={handleGoback}>logout</Button>
 </Box>
 </Grid>
    )
}
const webStyles = {
    header: {
     display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height:'80px',
    width:'100%',
    backgroundColor:'#F5F9FF'    
    }
  };
export default Topbar;

