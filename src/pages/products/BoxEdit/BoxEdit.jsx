import React from 'react'
import { products } from '../../../data'
import { useParams } from 'react-router-dom'
import { useState } from 'react'



export default function BoxEdit() {
  
  const pathID = +useParams().ProductID
  const product = products.find(item => item.id === pathID)
 const [Name , setName] = useState(product.name)
 const [Price , setPrice] = useState(product.price)
 const [Number , setNumber] = useState(product.number)
   const [Size , setSize] = useState(product.sizes)
   const [Description , setDescription] = useState(product.description)
        
    


    const submitEdit = async (event) =>{

      event.preventDefault();
      const Obj = {
          name : Name,
          price : Price,
          number : Number,
          sizes : Size,
          description : Description,
      }
   
      
      await fetch(`https://uqkfskiduursccnhissi.supabase.co/rest/v1/products?id=eq.${pathID}`,{
            method: "PATCH",
            
            headers:{
              "apikey" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxa2Zza2lkdXVyc2Njbmhpc3NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0NzU2MTksImV4cCI6MjAyNTA1MTYxOX0.BL4OkMrGMlJwg9hWusC6qHC5ztwsF1vzzyB802FSHUw",
              "Authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxa2Zza2lkdXVyc2Njbmhpc3NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0NzU2MTksImV4cCI6MjAyNTA1MTYxOX0.BL4OkMrGMlJwg9hWusC6qHC5ztwsF1vzzyB802FSHUw",
              "Content-Type": "application/json",
            },
            body : JSON.stringify(Obj)
        }).then(res => console.log(res))
       
    }
   const productNameHandler = (e) =>{
       setName(() => e.target.value)
        
   }
const productPriceHandler = (e) =>{
      setPrice(() => e.target.value)
      
}
const productNumberHandler = (e) =>{
      setNumber(() => e.target.value)
      
}
    const productSizeHandler = (e) =>{
          setSize(() => e.target.value)
          
    }
    const productDescriptionHandler = (e) =>{
      setDescription(() => e.target.value)
          
    }
    
  return (
  
      <div className="flex flex-row-reverse items-center justify-evenly h-dvh">
        <div className=''>
          <img src={product.mainimage} alt="Product-Image" className='rounded-md size-80'/>
        </div>
<form className="max-w-2xl w-80  mt-3"  onSubmit={(event) =>submitEdit(event)}>
  


  <div className="relative z-0 w-full mb-5 group">
      <input  name="floating_name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 "   value={Name} onChange={productNameHandler} />
      <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">نام محصول:</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input  name="floating_price" id="floating_price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  value={Price} onChange={productPriceHandler} />
      <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">قیمت محصول:</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input  name="number" id="floating_number" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  value={Number}  onChange={productNumberHandler}  />
      <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">تعداد موجود:</label>
  </div>

    <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  value={Size} onChange={productSizeHandler} />
        <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">سایز:</label>
    </div>
   
 

    <div className="relative z-0 w-full mb-5 group  ">
        <textarea   name="floating_phone" rows={(8)} id="floating_phone" className="block mt-3 py-2.5  px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={productDescriptionHandler} >
          {Description}
           </textarea>
        <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">توضیحات محصول:</label>
    </div>
  

  <button type="submit"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  value="Upload Image" name="submit">Submit</button>
</form>
      </div>

   
  )
}
