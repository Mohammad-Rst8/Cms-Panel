import React from 'react'

export default function Discountbox(props) {
    const date = new Date(props.created_at)
  return (
    
            <tr role='row' className='h-12 rounded-md border-b-[1px] border-slate-700'>
    <td>{props.id}</td>
    <td>{props.codetitle}</td>
    <td>{props.code}</td>
    <td>{props.percent}</td>
    <td>{props.textCopoun}</td>
    <td>{date.toLocaleDateString("fa-IR") + " "+ date.toLocaleTimeString("fa-IR")}</td>
  
</tr>
    
  )
}
