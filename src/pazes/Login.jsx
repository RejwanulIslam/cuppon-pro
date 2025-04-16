import React, { useContext } from 'react'
import { authcontex } from '../contex/Authcontex'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

export default function Login() {
    const {handlelogin, handlerejester, user, handlegooglelogin } = useContext(authcontex)
    console.log(user)
   const uselocation = useLocation()
   const navigate = useNavigate()
//    if(!uselocation.state.form){
//     navigate("/")
//    }
   
    const formhandlelogin =(e)=>{
        e.preventDefault()
        
        const email = e.target.email.value
        const password = e.target.password.value
        handlelogin(email,password)
        .then(res=>{
            navigate(uselocation?.state?.form) 
        })
    }

    const googlelogin = ()=>{
        handlegooglelogin()
        .then(res=>{
            navigate(uselocation?.state?.form) 
        })
    }

    return (
        <div>
            <form onSubmit={formhandlelogin}>
                <div>
                    <div>Email</div>
                    <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered input-accent w-full max-w-xs" />
                </div>
                <div>
                    <div>Password</div>
                    <input type="password" name="password" placeholder="Enter Your Password" className="input input-bordered input-accent w-full max-w-xs" />
                </div>
               <button className='btn btn-primary'><input type='submit'></input></button> 
            </form>
            <button onClick={() =>googlelogin() } className='btn btn-primary'>Google Login</button>
            <h>If Your Acoun do not Exgist Plase <NavLink to="/signup" className="text-red-400">Sign Up</NavLink></h>
        </div>
    )
}
