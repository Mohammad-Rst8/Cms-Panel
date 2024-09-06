import React from 'react'
import './Sidebar.css'
import MenuItem from './MenuItem'
import CameraIcon from '@mui/icons-material/Camera';
import logo from "./1264291.png"
import { items } from '../../data';
import { useState } from 'react';
export default function Sidebar() {
  let [isActive,setIsActive] = useState([items]);
  const clickShod = (id) =>{
        let newItems = isActive
        
        newItems[0].forEach(item =>{
          if(item.id === id){
            item.Active = true
            
          }else{
            item.Active = false
          }
          
     
          
        })
       
        
      
      }
      

     
   

  
  return (
    <div className='w-full'>
        <div className='w-full bg-[#111317] h-[100dvh]  grid grid-rows-4	 border-l-2 mx-auto '>
            {/* image input */}
            <div className='size-32  cursor-pointer flex row-start-1 my-8 mx-auto items-center  justify-center overflow-hidden flex-col relative rounded-full outline-1 bg-red-400' id='profile'>
                <img src={logo} alt="admin-Image" className='size-full  '/>
                <label htmlFor="admin-image__upload" id="lablee"className='bg-slate-500/70 cursor-pointer absolute pt-1 size-32 top-24 flex  justify-center'><CameraIcon style={{ fill: '#fff' }} /></label>
                <input type="file" className='hidden' accept='image/*' id='admin-image__upload'/>
            </div>


            {/* menu */}
            <div className='place-self-center row-start-2 row-end-4 mt-16 w-full px-3'> 
                <h2 className='mt-20 text-center mb-6'>ادمین: محمد رستمی مجد</h2>

                <ul className='[&>*]:w-full [&>*]:block ' >
                  {items.map(item =>(

                   <MenuItem {...item} key={item.id} OnEdit={clickShod} />
                  ))}
                </ul>
            </div>
        </div>
    </div>
  )
}
