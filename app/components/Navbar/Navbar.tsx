
import React from 'react'
import { Navbarleft, NavbarCenter, NavbarRight } from '@/app/components'


export  function Navbar() {
  return (
    <header className='fixed top-0 left-0  w-full h-14 bg-white dark:bg-gray-700 text-gray-800 dark:text-white shadow-md'>
        <div className='container max-auto flex items-center justify-around h-full '>
            {/** IZQUIERDA - Logo  */}
            <Navbarleft />
            {/** Centro - Menu principal  */}
            <NavbarCenter />
            <NavbarRight />
        </div>
    </header>
  )
}
