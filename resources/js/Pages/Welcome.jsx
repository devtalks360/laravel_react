import React from 'react'
import Navbar from '../Shared/Navbar'
import Layout from '../Shared/Layout'

function Welcome() {
  return (
    <div>
      Welcome
      </div>
  )
}

export default Welcome
Welcome.layout = page => <Layout title="Welcome to intertia tutorial" children={page} />
