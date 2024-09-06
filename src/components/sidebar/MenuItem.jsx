
import React from 'react'
import { NavLink } from 'react-router-dom';




export default function MenuItem(props) {

    function clickHandler (id){
      props.OnEdit(id)
    
    }
   
   
  return (
    <>


            <NavLink  onClick={(id) => {clickHandler(props.id)}}  to={props.path} key={props.id}  className={ (link) =>link.isActive ? 'bg-active-menu' : ''} >
                    <li   className={`flex ${props.Active && 'isactive'}  py-3 font-bold  px-2 mx-3 my-2 gap-3 items-center `}>
                       {props.iconElem}
                        <p >{props.name}</p>
                    </li>
            </NavLink>
            
           
    </>
  )
}
