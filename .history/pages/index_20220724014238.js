import React, { useState, useEffect } from "react"
import { animate, motion } from "framer-motion"
import { useAnimation } from "framer-motion"
import { useInView } from "framer-motion"

class Article {
  constructor(title){
    this.title = title;
  }
}

export default function Home() {

  const [show, setShow] = useState(false);

  return (
    <div className="relative h-screen w-full bg-gray-300">
      <motion.div initial={{x:0, y:0 }} animate={{ x: show ? 120: 0, y: show ? 50 : 0 }} transition={{ duration:0.5 }} className="absolute top-0 left-0 w-full h-full bg-red-400">
        <div className="flex items-center justify-center h-full w-full">
          <motion.div className="text-xl" onClick={() => { setShow(!show) }}>MENU</motion.div>
        </div>
      </motion.div>
    </div>
  )
}
