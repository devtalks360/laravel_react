import React from 'react'
import Navbar from './Navbar'
import { Head } from '@inertiajs/react'

function Layout({ title, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <div className='container'>
        <h1>Layout</h1>
        {children}
      </div>
    </div>
  )
}

export default Layout