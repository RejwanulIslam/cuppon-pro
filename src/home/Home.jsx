import React, { useEffect, useState } from 'react'
import Slider from '../compoment/Slider'
import { useLoaderData } from 'react-router-dom'
import CupponImg from '../compoment/CupponImg'
import SelldataCard from '../compoment/SelldataCard'
export default function Home() {
  const cupondata = useLoaderData()
  const [selldata, setselldata] = useState([])
  useEffect(() => {
    const sellonData = cupondata.filter(data => data.isSaleOn == true)
    setselldata(sellonData)
  }, [cupondata])

  console.log(selldata)
  return (

    <div>
      <div className='flex overflow-hidden'>
        {
          cupondata.map(data => <CupponImg data={data}></CupponImg>)
        }
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>

        {

          selldata.map(sdata =><SelldataCard sdata={sdata}></SelldataCard>)
        }
      </div>

    </div>
  )
}
