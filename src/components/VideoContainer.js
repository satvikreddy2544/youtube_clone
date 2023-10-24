import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEO_API } from "../utilties/constants";
import useAllVideos from "../utilties/useAllVideos";
import Shimmer from "./Shimmer";

const VideoContainer = () => {

  
  const allVideos = useAllVideos();
  console.log(allVideos)
  
  if (allVideos == 0) return <Shimmer/>
  return (
    <div className="flex gap-6 flex-wrap mx-2  ">
      {
       allVideos.map((video) =>{
        return <VideoCard key={video.id} video={video}  />
      })
     } 
      
    </div>
  );
};

export default VideoContainer;
