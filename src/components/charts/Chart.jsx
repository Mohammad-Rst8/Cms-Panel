import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import { orderSale } from '../../data';
import './Chart.css'

export default function Chart() {


  const monthOrders = orderSale
 console.log(monthOrders,[monthOrders.map(item => (item.id))]);
  return (
    <div>
        <LineChart  
    xAxis={[
      { 
       
        
        data: [monthOrders.map(item => (item.id))][0]

      }]}
    series={[
      {
        
        color: '#5149E4',
        data:[monthOrders.map(item => (item.priceSell ? item.priceSell : 0))][0] ,
      },
    ]}
    width={1000}
    height={500}
  />
  </div>
  )
}
