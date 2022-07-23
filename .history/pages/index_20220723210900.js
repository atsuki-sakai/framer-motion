import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useAnimation } from "framer-motion"
import { useInView } from "framer-motion"

export default function Home() {

  const [rotate, setRotate] = useState(false);

  return (
    <div>
      <div className="h-screen w-screen bg-red-200 flex justify-center items-center">
          <motion.div whileHover={{ backgroundColor: "#590000" }} className="w-full h-screen text-white rounded-md" initial={{rotate:-90, opacity:0}} animate={{ backgroundColor: rotate ? "#11FF00" : "#FF0000", x: rotate ? 220 : 0 , scaleX: rotate ? 0.25 : 1, opacity:1, transition:{ duration:0.7 } }} onClick={() => {setRotate(!rotate)}}>
          </motion.div>
      </div>
      <div className="h-screen w-screen bg-blue-200 flex justify-center items-center">
        <motion.div className="w-[120px] h-[120px] bg-yellow-500 rounded-md">

        </motion.div>
      </div>
      <div className="h-screen w-screen bg-yellow-200">

      </div>
    </div>
  )
}
