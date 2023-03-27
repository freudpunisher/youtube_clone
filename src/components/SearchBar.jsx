import{useState}from 'react'
import {Paper, IconButton} from '@mui/material'
import {Search} from '@mui/icons-material'
import {useNavigate} from 'react-router-dom'

const SearchBar = () => {
  const [searchTerm, setsearchTerm] = useState('')
  const navigate=useNavigate()
  const submitHandle=(e)=>{
e.preventDefault();
navigate(`/search/${searchTerm}`)
setsearchTerm('')
  }
  
  
  return(
    
      <Paper 
      component='form'
      onSubmit={submitHandle}
      sx={{
          borderRadius:20,
          border:'1px solid #e3e3e3',
          pl:2,
          boxShadow:'none',
          mr:{sm:5}
      }}
      >
         <input
         className='search-bar'
         placeholder='search...'
         value={searchTerm}
         onChange={(e)=>setsearchTerm(e.target.value)}
         />
         <IconButton type='submit' sx={{p:'10px',color:'red'}}>
          <Search/>
         </IconButton>
  
       </Paper>
    )
}



export default SearchBar