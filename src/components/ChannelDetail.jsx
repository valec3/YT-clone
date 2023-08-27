import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import {Videos,ChannelCard} from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";


const ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState();
    const [videos, setVideos] = useState(null)

    const {id} = useParams() // id is the channel id-> example: UC_x5XG1OV2P6uZZ5FSM9Ttw
    console.log(id)
    useEffect(() => {
        // Recuperar los datos del canal
        fetchFromAPI(`channels?part=snippet&id=${id}`)
        .then(res => setChannelDetail(res?.items[0]))

        // Recuperar los videos del canal
        fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`)
        .then(data => setVideos(data?.items))
    },[id])
    console.log(videos)
    return (
        <Box
            minHeight={"95vh"}
        >
            <Box>
                <div style={{height:'300px',background: 'linear-gradient(40deg, rgba(0,240,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',zIndex: 10,}}/>
                <ChannelCard channelDetail={channelDetail} marginTop="-120px"/>
            </Box>
            <Box display={"flex"} p="2px" justifyContent={"center"}>
                {/* <Box sx={{mr:{sm:"100px"}}}/> */}
                <Videos videos={videos}/>
            </Box>
        </Box>
    )
}

export default ChannelDetail