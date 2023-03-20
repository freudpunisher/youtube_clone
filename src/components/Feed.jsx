import {useEffect,useState}from 'react'
import {Stack,Typography,Box} from '@mui/material';
import SideBar from './SideBar';
import Videos from './Videos';
import {fetchFromAPI} from '../utils/fetchFromApi'


function Feed() {
const [selectedCategory, setselectedCategory] = useState("New")
const [videos,setVideos]=useState()

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet & q=${selectedCategory} `).then((data=>{setVideos(data.items)}))
  },[selectedCategory])
  return (
    <Stack sx={{flexDirection:{
      sx:'column',md:'row'
    }}}>
      <Box sx={{height:{sx:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}>

<SideBar
selectedCategory={selectedCategory}
setselectedCategory={setselectedCategory}
/>

      <Typography className='copyright' sx={{color:'#fff',mt:1.5}}>
        copyright 2023 punisher
      </Typography>
      </Box>

<Box p={2} sx={{overflowY:'auto', height:'90vh',flex:2}}>
  <Typography variant='h4' fontWeight='bold' mb={2} mr={2} sx={{color:'white'}}>
     {selectedCategory} <span style={{color:'#F31503'}}>Video</span>
  </Typography>
  <Videos videos={videos}/>
</Box>


      </Stack>
  )
}

export default Feed