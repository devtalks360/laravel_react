import React from 'react'
import Layout from '../Shared/Layout'

function About() {
  return (
    <div>About</div>
  )
}

export default About
About.layout = page => <Layout title="About Page" children={page} />