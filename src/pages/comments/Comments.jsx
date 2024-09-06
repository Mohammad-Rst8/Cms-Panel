import React from 'react'
import { commentsData } from '../../data';
import CommentBox from '../../components/commentsBox/CommentBox';

export default function  Comments() {
 
  

  
  return (
    <div className='w-full  p-2'>
    <h2 className="bg-slate-600 text-slate-300 transition-all rounded-lg px-3 py-1 cursor-pointer">کامنت های ثبت شده</h2>
    <table className='w-full text-center'>
      <thead role='rowgroup' className=''>
        <tr role='row' className=' bg-slate-900 py-2 px-1 mx-2 [&>*]:border-slate-700 [&>*]:border-l-2 h-14 rounded-md  [&>*]:px-2'>
        <th>ردیف</th>
        <th>نام کاربر  </th>
       <th>عنوان کامنت</th>
       <th>توضیحات</th>
       <th>تاریخ</th>
        
       

        </tr>
  
      </thead>
      <tbody className=''>
        {commentsData.map(item =>(

          <CommentBox {...item} key={item.id}/>
        ))}
      </tbody>
    </table>
  </div>
  )
}
