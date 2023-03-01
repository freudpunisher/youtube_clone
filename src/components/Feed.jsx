import React from 'react'
import {Stack,Typography,Box} from '@mui/material';
import SideBar from './SideBar';


function Feed() {
  return (
    <Stack sx={{flexDirection:{
      sx:'column',md:'row'
    }}}>
      <Box sx={{height:{sx:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}>
<SideBar/>
      <Typography className='copyright' sx={{color:'#fff',mt:1.5}}>
        copyright 2023 punisher
      </Typography>
      </Box>



      </Stack>
  )
}

export default Feed