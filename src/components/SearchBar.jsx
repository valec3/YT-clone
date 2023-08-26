import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { Paper,IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'


const SearchBar = () => {
    const handleSubmit=()=>{
        console.log("submit")
    }
    return (
        <Paper
            component="form"
            sx={{ borderRadius:"20px", border:"1px solid #e3e3e3",paddingLeft:"2px",boxShadow:"none",mr:{sm:5}}}
            onSubmit={handleSubmit}
        >
            <input 
                type="text" 
                className='search-bar w-100' 
                placeholder='Buscar...' 
                onChange={()=>{}}
            />
            <IconButton type='submit' sx={{p:"10px",color:"red"}}>
                <Search/>
            </IconButton>
        </Paper>
    )
}

export default SearchBar