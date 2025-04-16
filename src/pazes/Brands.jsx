import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Brandcard from '../compoment/Brandcard'

export default function Brands() {
  const data = useLoaderData()
  
  return (
    <div>
      {
        data.map(data => <Brandcard data={data}></Brandcard>)
      }
    </div>
  )
}
