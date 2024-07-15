import React from "react";
import {Typography,Box,Divider,ListItem,ListItemText,List} from "@mui/material"

const Sidebar=()=>{

return(
<Box style={{width:'250px',height:'80vh',backgroundColor:'#F5F9FF'}}>


<div style={webStyles.toolbar} > 
{/* <IconButton className={classes.menuButton}>
    <MenuIcon />
    </IconButton>*/}
    </div>
    <Divider />
    <List>
    <ListItem >
    {/*<ListItemIcon>
        <DashboardIcon />
        </ListItemIcon>*/}
        <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem >
        {/* <ListItemIcon>
            <FolderIcon />
            </ListItemIcon>*/}
            <ListItemText primary="All Invoices" />
            </ListItem>
            </List>
            <Box >
            <Typography variant="body2" color="textSecondary">
            Copyright © 2023
            </Typography>
            </Box>
            </Box>
        )
        
    }
    
const webStyles={


    
}
export default Sidebar;