import React from 'react'

export default function CommentBox(props) {
    const date = new Date(props.created_at)
  return (
    <tr role='row' className='h-12 rounded-md border-b-[1px] border-slate-700'>
    <td>{props.id}</td>
    <td>{props.username}</td>
    <td>{props.title}</td>
    <td>{props.description}</td>
    <td>{date.toLocaleDateString("fa-IR") + " "+ date.toLocaleTimeString("fa-IR")}</td>
  
</tr>
  )
}
