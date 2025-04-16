import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLoaderData, useParams } from 'react-router-dom'
// import { CopyToClipboard } from 'react-copy-to-clipboard';



export default function Detels() {
    const [copyed, setcopyed] = useState(false)
    const [copyedCode, setcopyedCode] = useState('')
    const [singleData, setsingleData] = useState([])
    const { brand_logo, _id, description, rating, isSaleOn, brand_name, coupons, category, shop_Link } = singleData

    const data = useLoaderData()
    const params = useParams()
    useEffect(() => {
        const findData = data.find(data => data._id == params.id)
        setsingleData(findData)
    }, [data, params])


    console.log(singleData)

    return (
        <div>
            <div className="hero h-1/2 w-full  text-center  mb-3 mx-auto rounded-lg bg-base-200">
                <div className="hero-content text-center">

                    <img className='h-32 w-36 rounded-lg' src={brand_logo}></img>
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">{brand_name}</h1>

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



                        </div>

                    </div>

                </div>
            </div>

            {/* **********************card*********************** */}

            <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                {
                    coupons?.map(cupon => <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{cupon.description}</h2>
                            <p>expiry date: {cupon.expiry_date}</p>
                            <p>condition:{cupon.condition}</p>
                            <p>coupon type:{cupon.coupon_type}</p>
                            <p>coupon :{cupon.coupon_code}</p>
                            {/* <CopyToClipboard text={cupon.coupon_code}
                            onCopy={() => {setcopyed(true);
                                setcopyedCode(cupon.coupon_code)}}>
                         

                            <button className='btn btn-primary'>copy</button>
                        </CopyToClipboard> */}
                            <div className="card-actions justify-end">
                                <Link to={shop_Link} target="_blank" rel="noopener noreferrer"> <button className="btn btn-primary">Use Cuppon</button></Link>
                            </div>
                        </div>
                    </div>


                    )
                }
            </div>
        </div>
    )
}

// {
//     "coupon_code": "ECO5",
//     "description": "$5 off your next purchase.",
//     "expiry_date": "2025-05-10",
//     "condition": "Minimum order of $25",
//     "coupon_type": "Flat"
//   }