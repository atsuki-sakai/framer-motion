import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useAnimation } from "framer-motion"

export default function Home() {

  const control = useAnimation();
  control.set('hidden');
  const variants = {
    hidden: { x: 30, opacity:0},
    visible: { x:0, opacity:1, transition: { duration: 1, delay: 2 }},
  }
  useEffect(() => {

    control.start("visible")
  })
  return (
    <>
      <motion.div className="h-42 w-full bg-red-500" variants={variants} initial={"hidden"} animate={"visible"} >
        <p>Hello World.</p>
      </motion.div>
    </>
  )
}
