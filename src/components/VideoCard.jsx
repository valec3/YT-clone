import {Link} from 'react-router-dom';
import { Typography,Card,CardContent,CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';


import {demoThumbnailUrl,demoVideoUrl,demoChannelUrl, demoChannelTitle,demoVideoTitle } from '../utils/constants'

const VideoCard = ({video,related}) => {
    const {id:{videoId},snippet} = video;
    const videoImg = snippet?.thumbnails?.high?.url || demoThumbnailUrl;
    // Fix the issue of related videos url, example: https =>//i.ytimg.com/vi/SlPhMPnQ58k/hqdefault.jpg
    const linkVideoImg = related ? videoImg.slice(8) : videoImg;
    
    return (
        <Card sx={{width:{xs:"100%",sm:"358px",md:"320px",},boxShadow:"none",borderRadius:0}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia 
                    image={linkVideoImg}
                    alt={snippet?.title}
                    sx={{width:{xs:"100%",sm:"358px",md:"320px",},height:180}}
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