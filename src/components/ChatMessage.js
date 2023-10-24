import React from 'react'
import { USER_ICON } from './ImageLinks'
const ChatMessage = ({name,message}) => {
  return (
    <div>
      <div className='flex gap-3 items-center'>
        <img src={USER_ICON} className='h-5' />
        <p className='font-light'>{name}</p>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default ChatMessage
