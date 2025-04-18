import React, { useContext } from 'react'
import { authcontex } from '../contex/Authcontex'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    const { logOut, user } = useContext(authcontex)


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/profile">My Profile</NavLink></li>
                        <li><NavLink to="/brands">Brand</NavLink></li>

                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Discount PRO</a>
                <h1 className='text-black font-semibold'> wellcome to {user?.displayName}</h1>
            </div>
            
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/profile">My Profile</NavLink></li>
                        <li><NavLink to="/brands">Brand</NavLink></li>
                </ul>
            </div>
           
            <div className="navbar-end">
                
            <img className='h-10 w-10 rounded-full' src={user?.photoURL}></img>
                {user ? (<button className='btn btn-warning' onClick={() => logOut()}>logOut</button>) :
                    (<Link to="/login"><button className='btn btn-primary'>Login</button> </Link>)}

            </div>
        </div>
    )
}
