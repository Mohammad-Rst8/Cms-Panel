import React from 'react'
import Chart from '../../components/charts/Chart';
import Box from '../../components/box/Box';
import RecentSell from '../../components/recentsell/RecentSell';
import './Dashboard.css'
import { BoxesDashboardData ,orderSale } from '../../data';

export default function Dashboard() {

  
  return (
    <>
    <div className='grid grid-cols-4 place-items-center mt-8'>
    {BoxesDashboardData.map(item => (
      <Box key={item.id} {...item} />
    ))}
     

    </div>
    <div className='bg-[#111317] w-[90%] mx-auto mt-16 shadow-sm shadow-white text-center flex items-center flex-col'>
      <h2>گزارش فروش</h2>
      <Chart />
    </div>

    <div className='w-full'>
      <h2 className="p-2.5 font-bold mt-3">تراکنش های اخیر</h2>
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
          {orderSale.slice(0,5).map(item =>(

            <RecentSell {...item} key={item.id}/>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}
