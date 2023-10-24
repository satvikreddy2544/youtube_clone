import React from 'react'
import { LOGO } from './ImageLinks'
import { Link } from 'react-router-dom';
const VideoCard = ({video}) => {

  const {snippet,statistics,id} = video;
  const {channelTitle,title,thumbnails} = snippet;
  return (
  <Link to={"/watch?v=" + id}>  <div className='w-[280px] mt-2 shadow-lg p-3' >
      <div >
        <img src={thumbnails.medium.url}  className='rounded-lg'/>
      </div>
     <div className='mx-2'>
        <h1 className='font-bold'>{title}</h1>
        <h1 className='font-medium'>{channelTitle}</h1>
        <h1 className='font-medium'>{statistics.viewCount/1000}K views</h1>
     </div>
    </div> </Link>
  )
}

export default VideoCard;
