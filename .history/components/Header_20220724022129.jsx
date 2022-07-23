import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='p-4 absolute top-0 left-0 right-0 flex items-center justify-between'>
        <h2 className='font-bold text-xl bg-yellow-100'>マルイシホーム</h2>
        <div>
          <Link href="/contact" passHref>
            <a>
              <button>
                MENU
              </button>
            </a>
          </Link>
        </div>
    </div>
  )
}

export default Header