import { Stack,Box } from "@mui/material"
import {VideoCard,ChannelCard} from "./"
import { v4 as uuidv4 } from 'uuid';

const Videos = ({videos,direction,related}) => {

    // Check if videos is not null
    if(!videos?.length) return <div style={{color:"#fff"}}>Loading...</div>;

    return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="space-evenly" gap="10px">
        {
            videos.map((video,index)=>(
                <Box key={uuidv4()} sx={{width:{xs:"100%",sm:"358px",md:"320px",},boxShadow:"none",borderRadius:0}}>
                    {video.id.videoId && <VideoCard video={video} related={related}/>}
                    {video.id.channelId && <ChannelCard channelDetail={video}/>}
                </Box>
            )) 
        }
    </Stack>     
    )
}

export default Videos