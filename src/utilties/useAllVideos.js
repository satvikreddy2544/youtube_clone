import { useEffect, useState } from "react"
import { YOUTUBE_VIDEO_API } from "./constants";
const useAllVideos=()=>{

    const [allVideos,setAllvideos] = useState([]);
  useEffect(()=>{
    getVideos();
  }
  ,[])

  const getVideos = async ()=>{

    const data= await fetch(YOUTUBE_VIDEO_API);
    const videos = await data.json();
    setAllvideos(videos.items);

  }

  return allVideos;
    
}

export default useAllVideos;