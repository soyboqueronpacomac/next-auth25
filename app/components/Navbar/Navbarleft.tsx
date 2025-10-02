import React from 'react'
import Link from 'next/link'

export function Navbarleft() {
  return (
    <>
      {/** IZQUIERDA - Logo  */}
      <div className='flex items-center space-x-6'>
        {/** LOGO */}
        <Link href="/" className='font-bold text-lg'>Logo</Link>
      </div>
    </>
  )
}