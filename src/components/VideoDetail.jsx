import { useState,useEffect } from "react";
import {Link,useParams} from 'react-router-dom';
import ReactPlayer from "react-player";
import {Box,Typography,Stack} from '@mui/material';
import { CheckCircle } from "@mui/icons-material";

import { Videos} from "./"
import {fetchFromAPI}  from "../utils/fetchFromAPI";

const VideoDetail = () => {
    const [videoDetail,setVideoDetail] = useState();
    const [videos,setVideos] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
            .then((res)=>setVideoDetail(res.items[0]));

        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
            .then((data) => setVideos(data.items))  
    },[id]);

    if(!videoDetail?.snippet) return <div style={{color:"#fff"}}>Loading...</div>;
    
    const {
            snippet:{
                title, channelId, channelTitle
            },
            statistics:{
                viewCount,likeCount
            }} = videoDetail || {};

    return (
        <Box minHeight="95vh">
            <Stack direction={{xs:"column",md:"row"}}>
                <Box flex={1}>
                    <Box sx={{width:"100%",position:"sticky",top:"86px"}}>
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
                        <Typography sx={{color:"#fff",fontWeight:"bold",p:2} } variant="h5" >
                            {title}
                        </Typography>
                        <Stack 
                            direction="row" 
                            sx={{justifyContent:"space-between",color:"#fff",padding:"1px 2px",}}
                        >
                            <Link to={`/channel/${channelId}`}>
                                <Typography variant={{sm:"subtitle",md:"h6"}} sx={{color:"#fff", paddingLeft:"15px"}}>
                                    {channelTitle}
                                    <CheckCircle sx={{fontSize:"12px",color:"gray", ml:"5px"}}>
                                    </CheckCircle>
                                </Typography>
                            </Link>
                            <Stack direction="row" gap={20} alignItems="center">
                                <Typography variant="body1" sx={{opacity:0.7,color:"#fff"}}>
                                    {parseInt(viewCount).toLocaleString()} views
                                </Typography>
                                <Typography variant="body1" sx={{opacity:0.7,color:"#fff"}}>
                                    {parseInt(likeCount).toLocaleString()} likes
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
                <Box sx={{px:2,py:{md:1,xs:5},justifyContent:"center"}} >
                    <Videos videos={videos} direction="column" related={true}/>
                </Box>
            </Stack>
        </Box>
    )
}

export default VideoDetail