import React from 'react'
import Navbar from '../compoment/Navbar'
import { Outlet } from 'react-router-dom'
import Fotter from '../compoment/Fotter'

export default function MainLayout() {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet>
        </Outlet>
        <div className='mt-5'>
        <Fotter ></Fotter>
        </div>
    </div>
  )
}
