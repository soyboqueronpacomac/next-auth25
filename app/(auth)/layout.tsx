import React from 'react'

export default function AuhtLayout({children}: {children: React.ReactNode}) {
  return (
    <div className='w-full h-screen'>
       <div className='flex h-full w-full items-center justify-center'>
        <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-r from-gray-200 to-gray-400 dark:from-gray-600 dark:to-gray-700 z-[-1] ' />
        {children}
       </div>
    </div>
  )
}