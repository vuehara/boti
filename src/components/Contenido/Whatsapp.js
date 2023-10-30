import React from 'react'
import {Router, Link, BrowserRouter} from 'react-router-dom'

function Whatsapp() {
  return (
    <div >
        <BrowserRouter>
       <Link to='https://wa.me/5491154525043'> Conecte con nuestro operador </Link> 
       </BrowserRouter>
    </div>
  )
}

export default Whatsapp
