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
      <motion.div initial={{width:120 }} animate={{ width: show ? 120 : 320 }} transition={{ duration:0.5 }} className="absolute top-0 left-0 w-full h-full bg-white">
        <div className="flex  justify-center h-full w-full">
          <div animate={{ opacity: show ? 0 : 1 }} transition={{ duration:0.5 }} className="text-xl"></div>
          <motion.div animate={{ opacity: show ? 0 : 1 }} transition={{ duration:0.5 }} className="text-xl" onClick={() => { setShow(!show) }}>
            <h3 className="text-3xl font-bold pt-12">MENU</h3>
            {
              items.map((item, index) => {
                return (
                  <motion.div key={index} className="py-4 text-lef w-[220px] bg-gray-50 p-3 m-2 rounded-md shadow-md" initial={{ opacity:0, x:10 }} animate={{ opacity: show ? 0 : 1,x: show ? -10 : 10}} transition={{ duration:0.2, delay:index * 0.1 }}>
                    <p className="text-xl font-bold uppercase">{item.title}</p>
                    <p className="text-sm text-gray-500 ">{item.description}</p>
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
