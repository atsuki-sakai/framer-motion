import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Home() {
  const variants = {
    hidden: { x: 30, opacity:0},
    visible: { x:0, opacity:1, transform: { duration: 1, delay: 2 }},
  }
  return (
    <>
      <motion.div className="h-42 w-full bg-red-500" variants={variants} initial={"hidden"} animate={"visible"} >
        <p>Hello World.</p>
      </motion.div>
    </>
  )
}
