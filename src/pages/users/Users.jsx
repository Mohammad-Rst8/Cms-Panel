import React from 'react'
import RecentSell from '../../components/recentsell/RecentSell';
import {orderSale} from "./../../data"

export default function Users() {
  
  console.log(orderSale);
  
  return (
    <div>
         <div className='w-full'>
      <h2>تراکنش های اخیر</h2>
      <table className='w-full text-center'>
        <thead role='rowgroup' className=''>
          <tr role='row' className=' bg-slate-900 py-2 px-1 mx-2 [&>*]:border-slate-700 [&>*]:border-l-2 h-14 rounded-md  [&>*]:px-2'>
          <th>ردیف</th>
          <th>نام و نام خانوادگی</th>
          <th> ایمیل پرداخت کننده</th>
          <th> مبلغ(تومان)</th>
          <th>نوع خرید</th>
          <th>تاریخ و ساعت</th>
          <th> وضعیت</th>

          </tr>
    
        </thead>
        <tbody className=''>
          {orderSale.map(item =>(

            <RecentSell {...item} key={item.id}/>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}
