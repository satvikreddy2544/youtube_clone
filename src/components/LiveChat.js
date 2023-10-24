import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addChat } from '../utilties/chatSlice';
import { generateRandomName, generateRandomSentence } from '../utilties/helper';


const LiveChart  = () => {

    const dispatch= useDispatch();
    // const [chatMessages,setChatMessages] = useState([]);
    const chatMessages = useSelector((store) => store.chat.messages);
    const [comment,setComment] =useState("");
    
   
    useEffect(()=>{

        const timer=  setInterval(()=>{
              console.log("API Polling");

              dispatch(addChat({
                name:generateRandomName(),
                message:generateRandomSentence()
              }))
          },2000)


  
          return () =>{
              clearInterval(timer);
          }
      }
      ,[])
  return (
    <div>
    <div className='w-full h-[450px] border border-black p-2 pl-5 ml-2 rounded-md bg-slate-50 flex  gap-2 overflow-y-scroll flex-col-reverse'>
      {
        chatMessages.map((chatMessage,index) =>{
            return <ChatMessage key={index} {...chatMessage} />
        })
      }
    </div>
    <div className='flex '>
    <input type='text' className='border border-black ml-2 w-full rounded-l-lg h-8 pl-4' value={comment} onChange={(e)=>setComment(e.target.value)}/>
    <button className='border border-black w-8 bg-green-300 rounded-r-sm' onClick={()=> {dispatch(addChat({
        name:"sathvik",
        message:comment
    }));
    setComment("")} }>add</button>
    </div>
    </div>
  )
}

export default LiveChart;
