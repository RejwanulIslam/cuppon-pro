import React, { useContext, useState } from 'react'
import { authcontex } from '../contex/Authcontex'

export default function Signup() {
    const { handlerejester, updateprofile } = useContext(authcontex)
    const [error, seterror] = useState('')

    const handleFormSubmit = (e) => {
        seterror('')
        e.preventDefault()
        
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const confarmpassword = e.target.confarmpassword.value

        // if (password > 6) {
        //     return seterror('your password at list 6 character')
        // }
        if (password !== confarmpassword) {
            return seterror('your password do not match')
        }
        const photo = e.target.photo.value
        console.log({ name, email, password, confarmpassword, photo })

        handlerejester(email, password)
            .then(res => {
                updateprofile(name, photo)
            }
            )


    }
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <div>Name</div>
                    <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered input-accent w-full max-w-xs" />
                </div>
                <div>
                    <div>Email</div>
                    <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered input-accent w-full max-w-xs" />
                </div>
                <div>
                    <div>Password</div>
                    <input type="password" name="password" placeholder="Enter Your Password" className="input input-bordered input-accent w-full max-w-xs" />
                </div>
                <div>
                    <div>Confarm Password</div>
                    <input type="password" name="confarmpassword" placeholder="Enter Your Confarm Password" className="input input-bordered input-accent w-full max-w-xs" />
                </div>
                <div>
                    <div>Photo URL</div>
                    <input type="text" name="photo" placeholder="Enter Your Photo URL" className="input input-bordered input-accent w-full max-w-xs" />
                </div>
                <button className='btn btn-accent'><input type='submit'></input></button>

            </form>
            {
                error && <p className='text-red-500'>{error}</p>
            }

        </div>
    )
}
