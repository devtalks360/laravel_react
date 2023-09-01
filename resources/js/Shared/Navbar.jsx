import { Link, usePage } from '@inertiajs/react'
import React from 'react'

function Navbar() {
    const data = usePage().props;
    console.log(data);
    return (
        <>
            <div className='navbar'>
                <div>
                    <Link href={route("home")}>Home</Link>
                    <Link href={route("about-us")}>About Us</Link>
                    <Link href={route("contact-us")}>Contact Us</Link>
                </div>
                <div>
                    {data.auth ? 
                    <Link href='/profile'>Welcome, {data.auth.name}</Link> : 
                    <Link href='/login'>Login</Link>
                }
                </div>
            </div>
        </>
    )
}

export default Navbar