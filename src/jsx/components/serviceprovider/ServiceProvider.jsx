import React from 'react'
import PageTitle from '../../layouts/PageTitle'
import { Col, Row, Button } from 'react-bootstrap'
import { Card } from 'material-ui'
import ServiceProviderCard from './ServiceProviderCard'
const ServiceProvider = () => {
  const arr = [
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDAXbQwYONFFKJx9oRs6FtrHqzjOz0tTVLVWCELWmz3g&s"},
    {img:"https://www.metaltoad.com/sites/default/files/styles/large/public/2020-05/aws-logo-blog-header.png?itok=V7llmHtJ"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDAXbQwYONFFKJx9oRs6FtrHqzjOz0tTVLVWCELWmz3g&s"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDAXbQwYONFFKJx9oRs6FtrHqzjOz0tTVLVWCELWmz3g&s"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDAXbQwYONFFKJx9oRs6FtrHqzjOz0tTVLVWCELWmz3g&s"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDAXbQwYONFFKJx9oRs6FtrHqzjOz0tTVLVWCELWmz3g&s"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDAXbQwYONFFKJx9oRs6FtrHqzjOz0tTVLVWCELWmz3g&s"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDAXbQwYONFFKJx9oRs6FtrHqzjOz0tTVLVWCELWmz3g&s"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDAXbQwYONFFKJx9oRs6FtrHqzjOz0tTVLVWCELWmz3g&s"},
   ]
  return (
    <div>
      <PageTitle activeMenu={"Service Provider"} motherMenu={"Admin"} />
      <div className="row gy-5">
        {arr.length>0?
        arr.map((img)=>(
         <ServiceProviderCard img={img}/>
        )):null}
      </div>
    </div>
  )
}

export default ServiceProvider
