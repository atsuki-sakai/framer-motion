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

  const [rotate, setRotate] = useState(false);

  const list = {
    visible: { opacity: 1},
    hidden: { opacity: 0},
  }

  const item = {
    visible: { opacity:1, x:0, transition: { duration: 0.5 } },
    hidden: { opacity:0, x:-100 },
  }

  useEffect(() => {
    const article = new Article("hello");
    console.log(article.title)
  })

  return (
    <div className="bg-black">
       <motion.div className="h-screen w-screen bg-gray-100 flex justify-center items-center" initial={{scaleX: 0}} animate={{ scaleX:1 }} transition={{ duration:1.2 }} >
        <motion.div initial={{opacity:0, translateY:50}} animate={{ opacity:1, translateY:0 }} transition={{ delay:1.2, duration:0.3 }}>
          <motion.p transition={{duration: 0.7 ,delay:1.6}} initial={{scale:0.5}} animate={{ scale:1.0 }}>Hello World</motion.p>
          <motion.p initial={{ rotate:0 }} animate={{ rotate:30 }} transition={{ repeat:"Infinity" }}>my name is sakai atsuki. test test test test test test.</motion.p>
        </motion.div>
      </motion.div>
      <div className="h-[220px] w-[220px] bg-red-200 flex justify-center items-center">
          <motion.div whileHover={{ backgroundColor: "#590000" }} className="w-full h-screen text-white rounded-md" initial={{rotate:-90, opacity:0}} transition={{ duration: 0.5 }} animate={{ backgroundColor: rotate ? "#11FF00" : "#FF0000", x: rotate ? 220 : 0 , scale: rotate ? 0.25 : 1, opacity:1 }} onClick={() => {setRotate(!rotate)}}>
          </motion.div>
      </div>
      <div className="h-screen w-screen bg-blue-200 flex justify-center items-center">
        <motion.div className="w-[120px] h-[120px] bg-yellow-500 rounded-md" initial={{scale:0.2}} whileInView={{ scale:1, transition: {duration:0.9 } }}>
          <motion.div className="w-[20px] h-[20px] bg-green-500 rounded-md" initial={{scale:0.2}} whileInView={{ scale:1, transition: {duration:0.9, delay:0.4 } }}>
          </motion.div>
        </motion.div>
      </div>
      <div className="h-screen w-screen bg-yellow-200 flex justify-center items-center">
        <motion.ul className="h-[120px] w-[120px] bg-purple-500" initial="hidden" animate="visible" variants={list}>
          <motion.li className="h-[20px] w-[20px] bg-cyan-500" variants={item}></motion.li>
          <motion.li className="h-[20px] w-[20px] bg-cyan-500" variants={item}></motion.li>
          <motion.li className="h-[20px] w-[20px] bg-cyan-500" variants={item}></motion.li>
        </motion.ul>
      </div>
    </div>
  )
}
