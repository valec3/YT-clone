
import {useState, useEffect} from 'react'
import {Box,Typography} from '@mui/material'
import {Videos} from './'
import { useParams } from 'react-router-dom'
import {fetchFromAPI} from '../utils/fetchFromAPI'

const Feed = () => {

    const [videos,setVideos] = useState([]);
    const {searchTerm} = useParams();
    useEffect(()=>{
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
            .then((response)=>setVideos(response.items))
    },[searchTerm])

    return (
        <Box sx={{p:2, overflowY:"auto",height:"90vh",flex:2}}>
                <Typography variant='h4' fontWeight={"bold"} mb="2px" sx={{
                    color:"#fff"
                }}>
                    Resultados para: <span style={{color:"#f31503"}}>{searchTerm}</span>
                </Typography>
                <Videos videos={videos}/>
        </Box>
    )
}

export default Feed