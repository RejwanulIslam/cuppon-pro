import React, { useContext } from 'react'
import { authcontex } from '../contex/Authcontex'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

export default function Privateroute({ children }) {
    const { user, loding,setloding } = useContext(authcontex)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)

    if (loding) {
        return <div className='flex justify-center '><span  className=" loading loading-spinner text-neutral"></span></div>

        
    }

    if (!user) {
        return <Navigate to="/login" state={{ form: location?.pathname }}></Navigate>
    }


    return children

}
