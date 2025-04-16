import React from 'react'
     

export default function SelldataCard({ sdata }) {
    const {brand_logo,isSaleOn, brand_name,  coupons, category}=sdata
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <div className='flex align-middle gap-2'>
                    <img src={brand_logo} className='h-10 w-10 rounded-full'></img>
                <h2 className="card-title">{brand_name}</h2>
                </div>
                <p className='text-sm font-semibold'>category:{category}</p>
                <p className='text-sm font-semibold'>Total Coupons: {coupons.length + 1}</p>
                <p className='text-sm  font-bold'>SaleOn</p>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
            </div>
        </div>
    )
}
