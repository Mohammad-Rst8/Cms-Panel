import React, { useState } from 'react'

export default function NewProduct() {
    const [productName , setproductName] = useState("")
    const [productPrice , setproductPrice] = useState(0)
    const [ProductFirstPrice , setProductFirstPrice] = useState(0)
    const [productNumber , setproductNumber] = useState("")
    const [productSizes , setproductSizes] = useState("")
    const [mainCatVal , setmainCatVal] = useState("")
    const [subCatVal , setsubCatVal] = useState("")
    const [productMainColor , setproductMainColor] = useState("")
    const [productSubColor , setproductSubColor] = useState("")
    const [firstBanner , setfirstBanner] = useState("")
    const [secondBanner , setsecondBanner] = useState("")
    const [thirdBanner , setthirdBanner] = useState("")
    const [fourBanner , setfourBanner] = useState("")
    const [Description , setDescription] = useState("")
    const [Special , setSpecial] = useState("")
const productNameHandler = (e) => {
setproductName(e.target.value)
}
const productPriceHandler = (e) => {
    setproductPrice(e.target.value)
}
const productFirstPriceHandler = (e) => {
    setProductFirstPrice(e.target.value)
}
const productNumberHandler = (e) => {
    setproductNumber(e.target.value)
}
const productSizesHandler = (e) => {
    setproductSizes(e.target.value)
}
const mainCatHandler = (e) => {
            let maincatProduct = +e.target.value
            let maincate = maincatProduct === 1 ? "women" : maincatProduct === 2 ? "men" : maincatProduct === 3 ? "digital" : maincatProduct === 4 ? "home" : maincatProduct === 5 ? "medical" : maincatProduct === 6 ? "sports" : maincatProduct === 7 ? "children" : maincatProduct === 8 ? "food" : "healthy";
            setmainCatVal(maincate)
}
const subCatHandler = e =>{
    let subcatProduct = +e.target.value
   let subcat = subcatProduct === 1 ? "Shirt" : subcatProduct === 2 ? "TShirt" :subcatProduct === 3 ? "shoes" : subcatProduct === 4 ? "pantes" : "";
    setsubCatVal(subcat)
}
const mainColorHandler = e =>{
    let mainColorProduct = +e.target.value
    let mainColor = mainColorProduct === 1 ? "green" :mainColorProduct === 2 ? "red" :mainColorProduct === 3 ? "blue" : mainColorProduct === 4 ? " dark" : "";
     setproductMainColor(mainColor)
}
const subcolorHandler = e =>{
    let subColorProduct = +e.target.value
    let subColor = subColorProduct === 1 ? "green" :subColorProduct === 2 ? "red" :subColorProduct === 3 ? "blue" : subColorProduct === 4 ? " dark" : "";
     setproductSubColor(subColor)
}
const firstLinkBannerHandler = e =>{
 setfirstBanner(e.target.value)
}
const secondLinkBannerHandler = e =>{
 setsecondBanner(e.target.value)
}
const thirdLinkBannerHandler = e =>{
 setthirdBanner(e.target.value)
}
const fourLinkBannerHandler = e =>{
 setfourBanner(e.target.value)
}
const descriptionProductHandler = e =>{
    setDescription(e.target.value)
}
const specialSaleHandler = e =>{
    let specialProduct = +e.target.value
    let specialVal = specialProduct === 1 ? "yes" :"no";
     
    setSpecial(specialVal)
}
    const submitHandler =async (e) =>{
        e.preventDefault()
        const product ={
                price : +productPrice,
                lastprice : +ProductFirstPrice,
                number : +productNumber,
                color : [productMainColor,productSubColor],
                sizes : productSizes,
                description : Description,
                mainimage : firstBanner,
                subimages : [secondBanner,thirdBanner,fourBanner],
                maincate:mainCatVal,
                subcate:subCatVal,
                name:productName,
                Remainingnumber : +productNumber,
                specialSales: Special,

        }


            await fetch("https://uqkfskiduursccnhissi.supabase.co/rest/v1/products" , {
                method : "POST",
                headers:{
                    "apikey":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxa2Zza2lkdXVyc2Njbmhpc3NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0NzU2MTksImV4cCI6MjAyNTA1MTYxOX0.BL4OkMrGMlJwg9hWusC6qHC5ztwsF1vzzyB802FSHUw",
                    "Content-Type": "application/json",
                },
                  body:JSON.stringify(product)
            }).then(res => console.log(res)
            )

        
    }
  return (
  <>
        <div>

            <div className='w-full bg-slate-600 py-2 px-3 my-2 mb-4 mx-2 rounded-md'>
                <h4 className='font-bold text-xl'>ایجاد محصول</h4>
            </div>
            <form className='mx-2' onSubmit={(event) => submitHandler(event)}>
                <div className='flex flex-col items-start   w-full '>
                    <input className='max-w-96 w-full p-3 m-1 bg-slate-600 hover:bg-slate-400 hover:text-black hover:placeholder-black rounded-lg' type="text" onChange={productNameHandler} placeholder='نام محصول...'/>
                    <div className='flex items-center justify-between w-full'>
                    <input className='max-w-96 w-full p-3 m-1  bg-slate-600 hover:bg-slate-400 hover:text-black hover:placeholder-black rounded-lg' type="text" onChange={productPriceHandler} placeholder='مبلغ فروش'/>
                    <input className='max-w-96 w-full p-3 m-1  bg-slate-600 hover:bg-slate-400 hover:text-black hover:placeholder-black rounded-lg' type="text" onChange={productFirstPriceHandler} placeholder='مبلغ اصلی(بدون تخفیف)...'/>
                    </div>
                    <div className='flex items-center justify-between w-full'>
                    <input className='max-w-96 w-full p-3 m-1  bg-slate-600 hover:bg-slate-400 hover:text-black hover:placeholder-black rounded-lg' type="text" onChange={productNumberHandler} placeholder='تعداد موجود'/>
                    <input className='max-w-96 w-full p-3 m-1  bg-slate-600 hover:bg-slate-400 hover:text-black hover:placeholder-black rounded-lg' type="text" onChange={productSizesHandler} placeholder='سایزهای محصول'/>

                    </div>
                    <div className='flex items-center justify-between w-full'>

                    <select name=""  className='max-w-96 w-full p-3 m-1  bg-slate-600 hover:bg-slate-400 hover:text-black hover:placeholder-black rounded-lg' onChange={mainCatHandler} id="maincat-product">
                        <option value="0">دسته بندی والد</option>
                        <option value="1">زنانه</option>
                        <option value="2">مردانه</option>
                        <option value="3">الکترونیکی</option>
                        <option value="4">خانه و آشپزخانه</option>
                        <option value="5">پزشکی</option>
                        <option value="6">ورزشی</option>
                        <option value="7">کودک</option>
                        <option value="8">موادغذایی</option>
                        <option value="9">سلامت و زیبایی</option>
                        
                    </select>
                    <select name=""  className='max-w-96 w-full p-3 m-1  bg-slate-600 hover:bg-slate-400 hover:text-black hover:placeholder-black rounded-lg' onChange={subCatHandler} id="subcat-product">
                        <option value="0">زیر دسته بندی</option>
                        <option value="1">پیراهن</option>
                        <option value="2">تیشرت</option>
                        <option value="3">شلوار</option>
                        <option value="4">کفش</option>
                    </select>
                    </div>
                    <div className='flex items-center justify-between w-full'>

                    <select name=""  className='max-w-96 w-full p-3 m-1  bg-slate-600 hover:bg-slate-400 hover:text-black hover:placeholder-black rounded-lg' onChange={mainColorHandler} id="colorone-product">
                        <option value="0">رنگ اول محصول</option>
                        <option value="1">سبز</option>
                        <option value="2">قرمز</option>
                        <option value="3">آبی</option>
                        <option value="4">مشکی</option>
                       
                    </select>
                    <select name=""  className='max-w-96 w-full p-3 m-1  bg-slate-600 hover:bg-slate-400 hover:text-black hover:placeholder-black rounded-lg' onChange={subcolorHandler} id="colortwo-product">
                        <option value="0">رنگ دوم محصول</option>
                        <option value="1">سبز</option>
                        <option value="2">قرمز</option>
                        <option value="3">آبی</option>
                        <option value="4">مشکی</option>
                    
                    </select>
                    </div>
                    <div className='flex items-center justify-between w-full'>

                  
                    <input type="text" className='max-w-96 w-full p-3 m-1  bg-slate-600 hover:bg-slate-400 hover:text-black hover:placeholder-black rounded-lg' onChange={firstLinkBannerHandler} placeholder='آدرس عکس بنر اول:'/>
                    <input type="text" className='max-w-96 w-full p-3 m-1  bg-slate-600 hover:bg-slate-400 hover:text-black hover:placeholder-black rounded-lg' onChange={secondLinkBannerHandler} placeholder='آدرس عکس بنر دوم:'/>
                    </div>
                    <div className='flex items-center justify-between w-full'>

                    <input type="text" className='max-w-96 w-full p-3 m-1  bg-slate-600 hover:bg-slate-400 hover:text-black hover:placeholder-black rounded-lg' onChange={thirdLinkBannerHandler} placeholder='آدرس عکس بنر سوم:'/>
                    <input type="text" className='max-w-96 w-full p-3 m-1  bg-slate-600 hover:bg-slate-400 hover:text-black hover:placeholder-black rounded-lg' onChange={fourLinkBannerHandler} placeholder='آدرس عکس بنر چهارم:'/>
                  
                    </div>
                    <div className='flex items-center justify-between w-full'>

                    <select name=""  className='max-w-96 w-full p-3 m-1  bg-slate-600 hover:bg-slate-400 hover:text-black hover:placeholder-black rounded-lg' onChange={specialSaleHandler}>
                        <option value="0">فروش ویژه</option>
                        <option value="1">هست</option>
                        <option value="2">نیست</option>
                        
                    
                    </select>
                    </div>
                  <div className='flex items-center justify-between w-full'>
                        <textarea name="" id="" className='min-h-20 w-full p-3 m-1  bg-slate-600 hover:bg-slate-400 hover:text-black hover:placeholder-black rounded-lg' placeholder='توضیحات محصول:' onChange={descriptionProductHandler}></textarea>
                  </div>
                    
                </div>
                        <div className='w-full flex items-center justify-center'>
                    <button type='submit' className='max-w-96 mx-auto w-full p-3 m-4  bg-green-600 hover:bg-green-800 text-white hover:placeholder-black rounded-lg'>ایجاد محصول</button>

                        </div>
            </form>
  
        </div>
  
  </>

  )
}
