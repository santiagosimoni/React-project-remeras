import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div className='contenedor-menu'>
            <h1>
              <a>RemoFoot</a>
            </h1>
            <nav className='lista-menu'>
                <ul>
                    <li><a href="#"> Equipos</a></li>
                    <li><a href="#"> Galeria</a></li>
                    <li><a href="#"> Clientes</a></li>
                </ul>
            </nav >
        <CartWidget/>
    </div>
  )
}

export default NavBar