import React from 'react'
import { useState } from 'react'
import { discountData } from '../../data'
import Discountbox from '../../discountbox/Discountbox'

export default function Discounts() {
  const [titleCode , settitleCode] = useState("")
  const [priceCode , setpriceCode] = useState("")
  const [desCode , setdesCode] = useState("")
  const [Code , setCode] = useState("")

const titleCodeHandler = (e) =>{
  settitleCode(e.target.value)
}
  const priceCodeHandler = (e) =>{
    setpriceCode(e.target.value)
  }
const desCodeHandler = (e) =>{
  setdesCode(e.target.value)
}
const CodeHandler = (e) =>{
  setCode(e.target.value)
}


  const addCodeHandler = async(e) =>{
    e.preventDefault()

    const Obj ={
      code:Code,
      percent:priceCode,
      codetitle:titleCode,
      textCopoun:desCode,
    }
await fetch("https://uqkfskiduursccnhissi.supabase.co/rest/v1/copon", {
  method : "POST",
  headers : {
    
    "apikey" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxa2Zza2lkdXVyc2Njbmhpc3NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0NzU2MTksImV4cCI6MjAyNTA1MTYxOX0.BL4OkMrGMlJwg9hWusC6qHC5ztwsF1vzzyB802FSHUw",
    "Authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxa2Zza2lkdXVyc2Njbmhpc3NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0NzU2MTksImV4cCI6MjAyNTA1MTYxOX0.BL4OkMrGMlJwg9hWusC6qHC5ztwsF1vzzyB802FSHUw",
    "Content-Type": "application/json",
},
body : JSON.stringify(Obj)
}).then(res =>console.log(res)
)

  }
  return (
    <div className='flex items-center mx-4 gap-6'>
        <div>
        <table className='w-full text-center'>
              <thead role='rowgroup' className=''>
        <tr role='row' className=' bg-slate-900 py-2 px-1 mx-2 [&>*]:border-slate-700 [&>*]:border-l-2 h-14 rounded-md  [&>*]:px-2'>
            <th>ردیف</th>
          <th>عنوان کد</th>
            <th>کد تخفیف</th>
          <th>ارزش کد</th>
          <th>توضیحات</th>
          <th>تاریخ ایجاد</th>
        </tr>
  
      </thead>
      <tbody className=''>
        {discountData.map(item =>(

          <Discountbox {...item} key={item.id}/>
        ))}
      </tbody>
    </table> 



          
        </div>
        <form onSubmit={addCodeHandler} className='min-w-[30%] flex  items-center flex-col justify-center mt-10 shadow-lg shadow-slate-700 rounded-lg'>

          <div > 
            <h2>ایجاد تخفیف جدید</h2>
          </div >
            <div className='flex flex-col items-center justify-center gap-1 w-full'>
              <input className='max-w-80 w-full p-3 m-1 bg-slate-600 hover:bg-slate-400 hover:text-black hover:placeholder-black rounded-lg' onChange={titleCodeHandler} type="text" placeholder='عنوان کد'/>
              <input className='max-w-80 w-full p-3 m-1 bg-slate-600 hover:bg-slate-400 hover:text-black hover:placeholder-black rounded-lg' onChange={priceCodeHandler} type="text" placeholder='ارزش کد'/>
              <input className='max-w-80 w-full p-3 m-1 bg-slate-600 hover:bg-slate-400 hover:text-black hover:placeholder-black rounded-lg' onChange={desCodeHandler} type="text" placeholder='توضیحات'/>
              <input className='max-w-80 w-full p-3 m-1 bg-slate-600 hover:bg-slate-400 hover:text-black hover:placeholder-black rounded-lg' onChange={CodeHandler} type="text" placeholder='کد تخفیف'/>
            </div>
            <div>
              <button type='submit' className='rounded-lg hover:bg-blue-900 bg-blue-700 text-white m-2 p-2'>اضافه کردن</button>
            </div>

        </form>

    </div>
  )
}
