import {Box, Grid, Paper, Typography,Button,TextField} from "@mui/material"
import FileUploadIcon from '@mui/icons-material/FileUpload';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { documentadd ,attachfile,searchicon} from "./assets";


const Dashboard=()=>{


    return(
<div>

<Grid sx={12} sm={6}> 
<Topbar/>
<Box display={"flex"}>
<Sidebar/>


<Grid container  style={{ backgroundColor: '#F5F5F5' }}>
      <Grid item xs={12} sm={6} md={6}>
        <Paper elevation={3} style={{ borderRadius: '15px',  padding: '50px', margin: '20px',backgroundColor:'#F5F9FF' }}>
          <Box display={"flex"} alignItems="center">
            <img src={documentadd} alt="adddocument" />
            <Typography>Add Invoice</Typography>
          </Box>
          <Box border="2px dashed " borderRadius='20px'borderColor={"#B8CCF2"} backgroundColor={'#ffffff'} padding={"10px"} marginTop="20px">
            <Box textAlign={'center'}>
              <img src={attachfile} alt="attach file" />
            </Box>
            <Box>
              <Typography>Drop invoice here or Choose file from your device</Typography>
            </Box>
            <Box display={'flex'} justifyContent={"center"}>
              <Button
                component="label"
                variant="contained"
                startIcon={<FileUploadIcon />}
              >
                Upload file
                <input type="file" hidden />
              </Button>
            </Box>
            <Box textAlign={"center"} marginTop="10px">
              <Typography>Upload pdf or docx file</Typography>
              </Box>
              
              </Box>
            <Box>
            <label>Invoice Number</label>
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
                placeholder="Invoice Number here..."
                // value={password}
                InputProps={{
                  disableUnderline: true,
    
                  style: {
                    border: "none",
                    height: "",
                  },
                }}
                InputLabelProps={{
                  shrink: false,
                }}
    
                // onChange={(e) => this.setEmail(e.target.value)}
              />
            </Box>
            </Box>
            <Box>
            
            <label>Invoice Detail</label>
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
                placeholder="Write Detail here..."
                // value={password}
                InputProps={{
                  disableUnderline: true,
    
                  style: {
                    border: "none",
                    height: "",
                  },
                }}
                InputLabelProps={{
                  shrink: false,
                }}
    
                // onChange={(e) => this.setEmail(e.target.value)}
              />
            </Box>
            </Box>
            <Box>
            <label>Invoice Amount</label>
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
                placeholder="Amount..."
                // value={password}
                InputProps={{
                  disableUnderline: true,
    
                  style: {
                    border: "none",
                    height: "",
                  },
                }}
                InputLabelProps={{
                  shrink: false,
                }}
    
                // onChange={(e) => this.setEmail(e.target.value)}
              />
            </Box>
            
            </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Paper elevation={3} style={{ borderRadius: '25px', height: '350px', width: '400px', padding: '50px', margin: '20px',backgroundColor:'#F5F9FF' }}>
         <Box textAlign={'center'} justifyContent={"center"}>
         <Typography>
         Summary
         </Typography>
         <hr/>
         </Box>
         <Box
         style={{
           display: "flex",
           flexDirection: "row",
           alignItems: "center",
           border: "1px solid #C5CBC9",
           height: "16px",
           padding: "10px",
           borderRadius: "28px",
           width:'112px'
         }}
       >
         <TextField
           placeholder="Search..."
           // value={password}
           InputProps={{
             disableUnderline: true,
            
             style: {
               border: "none",
               height: ""
             },
           }}
           InputLabelProps={{
             shrink: false,
           }}
           sx={{
            "& fieldset": { border: 'none' },
          }}
           // onChange={(e) => this.setEmail(e.target.value)}
         />
         <img src={searchicon} alt="searchicon"/>
       </Box>


       <Box display={'flex'} justifyContent={'space-evenly'} > 
       <Typography>Invoice  Details </Typography>
       <Typography>Submission Date </Typography>
       <Typography>Amount </Typography>
       <Typography display={'none'}>Invoice  Details </Typography>
       </Box>

       <Box display={'flex'}>
       <Box display={'flex'} flexDirection={'column'} justifyContent={"space-between"}>
       <Typography>iPhone 14</Typography>
       <Typography>Invoice #1122</Typography>
       </Box>
       <Typography>Tue, 11 Apr. 2023</Typography>
       <Typography>₹ 70,000</Typography>
       <MoreVertIcon/>
       </Box>
       
       <Box display={'flex'}>
       <Box display={'flex'} flexDirection={'column'} justifyContent={"space-between"}>
       <Typography>iPhone 14</Typography>
       <Typography>Invoice #1122</Typography>
       </Box>
       <Typography>Tue, 11 Apr. 2023</Typography>
       <Typography>₹ 70,000</Typography>
       <MoreVertIcon/>
       </Box> <Box display={'flex'}>
       <Box display={'flex'} flexDirection={'column'} justifyContent={"space-between"}>
       <Typography>iPhone 14</Typography>
       <Typography>Invoice #1122</Typography>
       </Box>
       <Typography>Tue, 11 Apr. 2023</Typography>
       <Typography>₹ 70,000</Typography>
       <MoreVertIcon/>
       </Box> <Box display={'flex'}>
       <Box display={'flex'} flexDirection={'column'} justifyContent={"space-between"}>
       <Typography>iPhone 14</Typography>
       <Typography>Invoice #1122</Typography>
       </Box>
       <Typography>Tue, 11 Apr. 2023</Typography>
       <Typography>₹ 70,000</Typography>
       <MoreVertIcon/>
       </Box> <Box display={'flex'}>
       <Box display={'flex'} flexDirection={'column'} justifyContent={"space-between"}>
       <Typography>iPhone 14</Typography>
       <Typography>Invoice #1122</Typography>
       </Box>
       <Typography>Tue, 11 Apr. 2023</Typography>
       <Typography>₹ 70,000</Typography>
       <MoreVertIcon/>
       </Box> <Box display={'flex'}>
       <Box display={'flex'} flexDirection={'column'} justifyContent={"space-between"}>
       <Typography>iPhone 14</Typography>
       <Typography>Invoice #1122</Typography>
       </Box>
       <Typography>Tue, 11 Apr. 2023</Typography>
       <Typography>₹ 70,000</Typography>
       <MoreVertIcon/>
       </Box>

        </Paper>
      </Grid>
    </Grid>

</Box>
</Grid>


</div>
)
}
export default Dashboard
// 19-54