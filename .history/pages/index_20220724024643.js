import React, { useState, useEffect } from "react"
import { animate, motion } from "framer-motion"
import { useAnimation } from "framer-motion"
import { useInView } from "framer-motion"
import Header from "../components/Header"

const items = [
  {
    title: "sample1",
    description: "description"
  },
  {
    title: "sample2",
    description: "description"
  },
  {
    title: "sample2",
    description: "description"
  },
  {
    title: "sample3",
    description: "description"
  },
  {
    title: "sample4",
    description: "description"
  },
  {
    title: "sample5",
    description: "description"
  },
  {
    title: "sample6",
    description: "description"
  },
]

export default function Home() {

  const [show, setShow] = useState(false);
  return (
    <div className="relative h-screen w-screen bg-gray-300 overflow-hidden">
      <Header/>
      <div className="p-24">
        <p>
          Hello World
        </p>
        <motion.div className="bg-indigo-600 rounded-md shadow-md px-6 py-2" initial={{ borderRadius: "50%", width:120, height:40 , backgroundColor: "#FF0000", scale:0.7}} animate={{ width: show ? 80 :120, borderRadius: show ? "100%" : "0%" , height: show ? 80 : 40 , backgroundColor: show ? "#002FFF" : "#06F355", scale: show ? 1.0 : 0.7}} >
          <motion.div initial={{ rotate: show ? 0 : 0}} animate={{ rotate: 0 }} transition={{ repeat: Infinity, repeatType: "reverse" }} className="text-center font-bold text-sm" onClick={() => { setShow(!show) }}>
            TAP HERE!!
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}


