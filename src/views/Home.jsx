import React from 'react'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <h1 className='text-center mt-3'> Bienvenidos/as a <b>Happy Cakes</b></h1>
      <h4 className='text-center mt-3'> El lugar de los pasteles felices </h4>
      <p className='text-center mt-3 large-icon'>🎂</p>

      </div>
  )
}
