import React, { useContext } from 'react'
import { authcontex } from '../contex/Authcontex'

export default function Myprofile() {
    const { user,updateprofile } = useContext(authcontex)
    const ubdatemyprofile = (e)=>{
        e.preventDefault()
        
        
        const name = e.target.name.value
        const photo = e.target.photo.value
        updateprofile(name, photo)
        console.log({name, photo})
    }
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-xl font-bold text-green-500'>Well Come to {user?.displayName}</h1>
            </div>

            <div className="hero h-4/6 w-3/4 text-center  mb-3 mx-auto rounded-lg bg-base-200">

                <div className="hero-content text-center">

                    <img className='h-32 w-36 rounded-lg' src={user?.photoURL}></img>
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">{user?.displayName}</h1>
                        <p className="py-6">{user?.email}</p>
                        <div className='flex flex-col gap-3'>
                            <div className='flex flex-col gap-5 align-middle'>

                                <form onSubmit={ubdatemyprofile}>
                                    <div>
                                        <div>Name</div>
                                        <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered input-accent w-full max-w-xs" />
                                    </div>
                                    <div>
                                        <div>Photo URL</div>
                                        <input type="text" name="photo" placeholder="Enter Your Photo URL" className="input input-bordered input-accent w-full max-w-xs" />
                                    </div>
                                   <button className='btn btn-accent'> <input type='submit'></input></button>
                                </form>

                            </div>


                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
