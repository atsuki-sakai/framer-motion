import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='p-4 absolute top-0 left-0 right-0 flex items-center justify-between'>
        <h2 className='font-bold text-xl bg-yellow-100'>マルイシホーム</h2>
        <div>
            <button>
              MENU
            </button>
        </div>
        <div className='absolute top-0 left-0 right-0  h-screen bg-red-500'>
          bg-red-500
        </div>
    </div>
  )
}

export default Header