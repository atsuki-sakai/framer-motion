import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useAnimation } from "framer-motion"

export default function Home() {

  const control = useAnimation();
  const [ show, setShow ] = useState(false);
  const variants = {
    hidden: { x: 30, opacity:0},
    visible: { x:0, opacity:1, transition: { duration: 1, delay: 0.5 }},
  }
  const onTap = () => {
    control.start('visible');
    setShow(true);
  }
  useEffect(() => {
    control.set('hidden');
  })
  return (
    <>
      <motion.div className="h-42 w-full bg-red-500" variants={variants} initial={"hidden"} animate={control} >
        <p>Hello World.</p>
      </motion.div>
      <button onClick={() => onTap()}>tap</button>
        {
          show ? <motion.div initial={{y:60, opacity:0, rotateX:-90 }} animate={{y:30, opacity:1, rotateX:0, transition: { duration: 0.7, delay:1 }}} >
                  <div className="bg-red-500 rounded-full h-10 w-10"></div>
                </motion.div>
                : ""
  }
    </>
  )
}
