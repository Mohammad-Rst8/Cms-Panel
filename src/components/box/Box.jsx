import React from 'react'



export default function Box(props) {
  
  
  return (
    <div className='py-2 px-4 rounded-lg max-w-[27rem] flex items-center gap-4 shadow-md shadow-slate-900 '>
            <div>
               {props.icon}
            </div>
            <div className='flex items-center gap-3 mx-4 my-6 text-center flex-col'>
                <strong> {props.title}</strong>
                <strong>  {props.price.toLocaleString() ? props.price.toLocaleString() : props.price}</strong>
            </div>
            
    </div>
  )
}
