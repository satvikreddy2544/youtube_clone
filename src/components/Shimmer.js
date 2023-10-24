import React from 'react'

const Shimmer = () => {
    const myArray = Array.from({ length: 50 });

  return (
    <div className='flex flex-wrap gap-2' >
    {
     myArray.map((index)=> <div  key={index} className='w-[250px] h-[200px] shadow-lg  rounded-lg'></div>)
     
     
     
    }
    </div>
  )
}

export default Shimmer;
