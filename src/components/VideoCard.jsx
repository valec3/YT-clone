import {Link} from 'react-router-dom';
import { Typography,Card,CardContent,CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';


import {demoThumbnailUrl,demoVideoUrl,demoChannelUrl, demoChannelTitle,demoVideoTitle } from '../utils/constants'

const VideoCard = ({video}) => {
    const {id:{videoId},snippet} = video
    return (
        <Card sx={{width:{md:"320px",xs:"100%"},boxShadow:"none",borderRadius:0}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia 
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{width:358,height:180}}
                />
            </Link>
            <CardContent sx={{background:"#1e1e1e",height:106}}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant='subtitle1' fontWeight="bold" color="#fff">
                        {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/video/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography 
                        variant='subtitle2' fontWeight="bold" color="gray" sx={{display:"flex",alignItems:"center"}}
                    >
                        {snippet?.channelTitle|| demoChannelTitle}
                        <CheckCircle sx={{fontSize:14,color:"#gray",ml:"7px"}}/>
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard