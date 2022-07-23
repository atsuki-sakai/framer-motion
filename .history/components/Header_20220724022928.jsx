import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Header = () => {

  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className='p-4 absolute top-0 left-0 right-0 flex items-center justify-between'>
        <h2 className='font-bold text-xl bg-yellow-100'>マルイシホーム</h2>
        <div>
            <button onClick={() => { setShowMenu(!showMenu) }}>
              MENU
            </button>
        </div>
        <motion.div initial={{ opacity:0, x: 0, rotate: 0 }} animate={{ opacity:1, x: showMenu ? 500 : 0, rotate: showMenu ? 90 : 0 }} transition={{ duration:0.5 }} className='absolute top-0 left-0 right-0  h-screen bg-red-500'>
          <motion.button onClick={() => {setShowMenu(!showMenu)}}>Close</motion.button>
        </motion.div>
    </div>
  )
}

export default Header