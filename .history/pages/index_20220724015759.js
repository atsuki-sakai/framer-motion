import React, { useState, useEffect } from "react"
import { animate, motion } from "framer-motion"
import { useAnimation } from "framer-motion"
import { useInView } from "framer-motion"

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
    <div className="relative h-screen w-full bg-gray-300">
      <motion.div onClick={() => {setShow(!show)}} className="p-12" initial={{x:120}} animate={{ x: show ? 120: 320 }}  transition={{ duration:0.5 }}>{ show ? "OPEN" : "Close" }</motion.div>
      <motion.div initial={{width:120 }} animate={{ width: show ? 120 : 320 }} transition={{ duration:0.5 }} className="absolute top-0 left-0 w-full h-full bg-red-400">
        <div className="flex  justify-center h-full w-full">
          <motion.div animate={{ opacity: show ? 0 : 1 }} transition={{ duration:0.5 }} className="text-xl" onClick={() => { setShow(!show) }}>
            {
              items.map((item, index) => {
                return (
                  <motion.div key={index} className="py-4" initial={{ opacity:0,x:20 }} animate={{ opacity: show ? 0 : 1,x: show ? 0 : 20}} transition={{ duration:0.5, delay:index * 0.2 }}>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                  </motion.div>
                )
              })
            }
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
