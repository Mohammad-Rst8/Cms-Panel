import React from 'react'

export default function RecentSell(props) {
  const date = new Date(props.created_at)
  
  return (
    <tr role='row' className='h-12 rounded-md border-b-[1px] border-slate-700'>
        <td>{props.id}</td>
        <td>{props.username}</td>
        <td>{props.email}</td>
        <td>{Number(props.priceSell).toLocaleString()}</td>
        <td>{props.sellType}</td>
        <td>{date.toLocaleDateString("fa-IR") + " "+ date.toLocaleTimeString("fa-IR")}</td>
        <td className={props.userID ? "text-green-600" : "text-red-800"}>{props.userID ? "پرداخت موفق" : "پرداخت ناموفق"}</td>
    </tr>
  )
}
