import { Stack,Box } from "@mui/material"
import {VideoCard,ChannelCard} from "./"

const Videos = ({videos}) => {
    return (
    <Stack direction="row" flexWrap="wrap" justifyContent="center" gap="10px">
        {
            videos.map((video,index)=>(
                <Box key={video.id.videoId} sx={{width:{md:"320px",sm:"280px",xs:"100%"},boxShadow:"none",borderRadius:0}}>
                    {video.id.videoId && <VideoCard video={video}/>}
                    {video.id.channelId && <ChannelCard channelDetail={video}/>}
                </Box>
            )) 
        }
    </Stack>     
    )
}

export default Videos