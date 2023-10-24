import { useState } from "react"

const useSingleVideo = (allVideos,id)=>{

    const [video,setVideo] = useState({});
    allVideos.map((video) =>{

        if( video.id == id ){
            setVideo(video);
        }
    })

    return video;


}

export default useSingleVideo;