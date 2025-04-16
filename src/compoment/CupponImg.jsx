import React from 'react'
import Marquee from 'react-fast-marquee'
import { NavLink } from 'react-router-dom'

export default function CupponImg({ data }) {
    // console.log(data)
    const { brand_logo , _id} = data
    return (
        <div >
            <NavLink to={`/detels/${_id}`}>
            <Marquee pauseOnHover={true}>
                <div className=' h-32 w-32'>

                    <img className=' h-32 w-32  border-red-500 rounded-full' src={brand_logo}></img>
                </div>
            </Marquee>
            </NavLink>
        </div>
    )
}
