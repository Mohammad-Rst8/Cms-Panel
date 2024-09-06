import DashboardIcon from '@mui/icons-material/Dashboard';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import HailIcon from '@mui/icons-material/Hail';

import CommentIcon from '@mui/icons-material/Comment';
import DiscountIcon from '@mui/icons-material/Discount';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PeopleIcon from '@mui/icons-material/People';
import ListAltIcon from '@mui/icons-material/ListAlt';

const items =[
    {id: 1,name:"پیشخوان" , path:"/", iconElem:<DashboardIcon fontSize="large"/>, Active:true },
    {id: 2,name:"محصولات" , path:"/products", iconElem:<ProductionQuantityLimitsIcon fontSize="large"/>, Active:false },
    {id: 3,name:"خریداران" , path:"/users", iconElem:<HailIcon fontSize="large"/>, Active:false },
    {id: 4,name:"نظرات" , path:"/comments", iconElem:<CommentIcon fontSize="large"/>, Active:false },
    {id: 5,name:"تخفیف ها" , path:"/discounts", iconElem:<DiscountIcon fontSize="large"/>, Active:false },
]









   const orderSale = await fetch('https://uqkfskiduursccnhissi.supabase.co/rest/v1/orders?select=*', {
        headers : {
    
            "apikey" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxa2Zza2lkdXVyc2Njbmhpc3NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0NzU2MTksImV4cCI6MjAyNTA1MTYxOX0.BL4OkMrGMlJwg9hWusC6qHC5ztwsF1vzzyB802FSHUw",
        },
        "Authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxa2Zza2lkdXVyc2Njbmhpc3NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0NzU2MTksImV4cCI6MjAyNTA1MTYxOX0.BL4OkMrGMlJwg9hWusC6qHC5ztwsF1vzzyB802FSHUw",
        "Content-Type": "application/json",
    }).then(res => res.json())
   const discountData = await fetch('https://uqkfskiduursccnhissi.supabase.co/rest/v1/copon?select=*', {
        headers : {
    
            "apikey" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxa2Zza2lkdXVyc2Njbmhpc3NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0NzU2MTksImV4cCI6MjAyNTA1MTYxOX0.BL4OkMrGMlJwg9hWusC6qHC5ztwsF1vzzyB802FSHUw",
        },
        "Authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxa2Zza2lkdXVyc2Njbmhpc3NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0NzU2MTksImV4cCI6MjAyNTA1MTYxOX0.BL4OkMrGMlJwg9hWusC6qHC5ztwsF1vzzyB802FSHUw",
        "Content-Type": "application/json",
    }).then(res => res.json())



   const commentsData = await fetch('https://uqkfskiduursccnhissi.supabase.co/rest/v1/comments?select=*', {
        headers : {
    
            "apikey" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxa2Zza2lkdXVyc2Njbmhpc3NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0NzU2MTksImV4cCI6MjAyNTA1MTYxOX0.BL4OkMrGMlJwg9hWusC6qHC5ztwsF1vzzyB802FSHUw",
        },
        "Authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxa2Zza2lkdXVyc2Njbmhpc3NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0NzU2MTksImV4cCI6MjAyNTA1MTYxOX0.BL4OkMrGMlJwg9hWusC6qHC5ztwsF1vzzyB802FSHUw",
        "Content-Type": "application/json",
    }).then(res => res.json())

   const products = await fetch('https://uqkfskiduursccnhissi.supabase.co/rest/v1/products?select=*', {
        headers : {
    
            "apikey" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxa2Zza2lkdXVyc2Njbmhpc3NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0NzU2MTksImV4cCI6MjAyNTA1MTYxOX0.BL4OkMrGMlJwg9hWusC6qHC5ztwsF1vzzyB802FSHUw",
        },
        "Authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxa2Zza2lkdXVyc2Njbmhpc3NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0NzU2MTksImV4cCI6MjAyNTA1MTYxOX0.BL4OkMrGMlJwg9hWusC6qHC5ztwsF1vzzyB802FSHUw",
        "Content-Type": "application/json",
    }).then(res => res.json())

   const users = await fetch('https://uqkfskiduursccnhissi.supabase.co/rest/v1/users?select=*', {
        headers : {
    
            "apikey" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxa2Zza2lkdXVyc2Njbmhpc3NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0NzU2MTksImV4cCI6MjAyNTA1MTYxOX0.BL4OkMrGMlJwg9hWusC6qHC5ztwsF1vzzyB802FSHUw",
        },
        "Authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxa2Zza2lkdXVyc2Njbmhpc3NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0NzU2MTksImV4cCI6MjAyNTA1MTYxOX0.BL4OkMrGMlJwg9hWusC6qHC5ztwsF1vzzyB802FSHUw",
        "Content-Type": "application/json",
    }).then(res => res.json())
    let sumOrder =0 
   
    
    const orderObj = orderSale.map(item => {
        sumOrder += Number(item.priceSell)
    
    })

  
    
    const BoxesDashboardData = [
        {id:1 , title:"فروش کل", icon:<MonetizationOnIcon fontSize='large'/> , price : sumOrder },
        {id:1 , title:"تعداد مشتري ها", icon:<PeopleIcon fontSize='large'/> , price : users.length },
        {id:1 , title:"تعداد محصولات", icon:<ProductionQuantityLimitsIcon fontSize='large'/> , price : products.length },
        {id:1 , title:"سفارشات", icon:<ListAltIcon fontSize='large'/> , price : orderSale.length }
    ]



export {items , orderSale,BoxesDashboardData, products ,commentsData,discountData};