import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='p-4'>
        <h2 className='font-bold text-xl'>マルイシホーム</h2>
        <div>
          <Link href="/contact" passHref>
            <a></a>
          </Link>
        </div>
    </div>
  )
}

export default Header