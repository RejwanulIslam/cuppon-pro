import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Brandcard({ data }) {
    const { brand_logo,_id, description, rating, isSaleOn, brand_name, coupons, category } = data
    return (
        <div className="hero h-1/2 w-3/4 text-center  mb-3 mx-auto rounded-lg bg-base-200">
            <div className="hero-content text-center">
               
                <img className='h-32 w-36 rounded-lg' src={brand_logo}></img>
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">{brand_name}</h1>
                    <p className="py-6">{description}</p>
                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-col gap-5 align-middle'>
                            <h2 className='font-bold text-lg'>Rating:{rating}
                                <div className="rating">
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />

                                </div>
                            </h2>
                        </div>

                       <NavLink to={`/detels/${_id}`}> <button className="btn btn-primary">View Coupons</button></NavLink>

                    </div>
                  
                </div>
                {
                    isSaleOn == true && <NavLink to={`/detels/${_id}`}> <button className='animate-bounce text-red-500 font-extrabold text-xl'>sale is on</button></NavLink>
                }
            </div>
        </div>
    )
}
