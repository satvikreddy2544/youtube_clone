import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom'
import { closeMenu, toggleSideBar } from '../utilties/sideBarSlice';
import useSingleVideo from '../utilties/useSingleVideo';
import useAllVideos from '../utilties/useAllVideos';
import CommentsContainer from './CommentsContainer';
import LiveChart from './LiveChat';

const VideoPage = () => {

const [video,setVideo] = useState({});
const dispatch=useDispatch();
useEffect(()=>{
    console.log("use effect in video page");
    dispatch(closeMenu());
}
,[])

const [params]= useSearchParams();
console.log(params.get("v"));
const id=params.get("v");

const allVideos = useAllVideos();
let myVideo=null;
allVideos.map((video) =>{
    if(video.id == id) {
        myVideo = video;
        
    }
})
// const {id} = video;

console.log(myVideo)



  return (
    <div >
    <div className='flex m-5 w-[1400px] '>
    <div >
      <iframe width="900px" height="450" src={"https://www.youtube.com/embed/" + id }title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>
    </div >
    <div className='w-full'>
    <LiveChart/>
    </div>
    </div>
    <div className='m-3 px-2 font-bold'>
      <CommentsContainer/>
    </div>
    </div>
    
  )
};

export default VideoPage;
