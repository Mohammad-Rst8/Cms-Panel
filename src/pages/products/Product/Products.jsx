import React from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import { products } from '../../../data';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './Products.css'


export default function Products() {
  const location = useLocation()
  const {pathname} = location
 const [productsData , setproductsData] = useState(products)
 const productRemoveHandler = async(id) =>{
 await fetch(`https://uqkfskiduursccnhissi.supabase.co/rest/v1/products?id=eq.${id}`, 
    {
      method : "DELETE",
      headers:{
        "apikey" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxa2Zza2lkdXVyc2Njbmhpc3NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0NzU2MTksImV4cCI6MjAyNTA1MTYxOX0.BL4OkMrGMlJwg9hWusC6qHC5ztwsF1vzzyB802FSHUw"
      },
      
      
    },

  ).then(res => {
   
  
  
    if (res.status === 204) {
      setproductsData(productsData.filter(item => item.id !== id))
      console.log(productsData);
      
      // window.location.reload() 
}
  
  }
  )
  
  

 }

  const columns = [
    { field: 'id', headerName: 'شناسه', width: 50 },
    { field: 'name', headerName: 'نام محصول', width: 250 ,
      renderCell : (params) =>{
        
        
        return(
          <div className='flex items-center gap-2'>
            <img className='size-10 m-2 rounded-full' src={params.row.mainimage} alt="image" />
            <p>{params.row.name}</p>
          </div>
        )
      }
    },
    { field: 'description', headerName: 'توضیحات', width: 280 },
    { 
      field: 'price',
      headerName : "قیمت",
      type: 'number',
      width: 110,
      align:"center"
    },
    {
      field: 'number',
      headerName: 'تعداد موجود',
      width: 90,
      align:"center"
      
    },
    {
      field: 'maincate',
      headerName: 'دسته بندی',
      width: 110,
      align:"center"
      
    },
    {
      field: 'rate',
      headerName: '(0-5)امتیاز کاربران',
      width: 90,
      align:"center"
      
    },
    {
      field: 'status',
      headerName: 'عملیات',
      width: 110,
      align:"center",
      renderCell : (params) =>{
        
        return(
          <div className='flex items-center gap-2'>
          <button onClick={() => productRemoveHandler(params.row.id)}>
            <DeleteIcon />
          </button>

          <NavLink to={`/products/EditProduct/${params.row.id}`}>
            <EditIcon />
            </NavLink>
          </div>
        )
      }
    }
  ];
  
  return (
    <div>
      <div className='p-2 pr-3 bg-slate-200 text-black/60 flex items-center gap-3'>
      <span className="bg-slate-600 text-slate-300 transition-all rounded-lg px-3 py-1 cursor-pointer" >لیست محصولات</span>
      <NavLink className="hover:bg-slate-600 hover:text-slate-300 transition-all rounded-lg px-3 py-1" to={"NewProduct"}>ایجاد محصول جدید</NavLink>
      </div>
      <div className='text-white text-center'>
      <DataGrid 
      rows={productsData}
      columns={columns} 
      />
      </div>
   
    </div>
  )
}
